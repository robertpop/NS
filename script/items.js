var publish = {
	items: null,
	citems: null,
	detailsPage: false,
	itemsUrl: null,
	userPremium: false,
	userPoints: 0,
	displayItemsWithEffect: false,
	premiumPrice: {},
	snacktoolsUrl: 'http://www.snacktools.com',
	terminal: 'notifysnack',
	stapiUrl: 'http://stapi.snacktools.com',

	recheckThumbItems: new Array(),
	recheckThumbInterval: null,
	resizeUrl: null,
	S3Url: null,

	//paginator
	totalItems: 0,
	itemsPerPage: 20,
	currentPage: 1,


	m: {
		ERR_NO_ITEMS_SEARCH: 'No notification found matching your criteria!',
		ERR_NO_ITEMS: 'No notifications created yet!',
		ERR_EMPTY_ITEM_NAME: 'Notification name can\'t be empty'
	},

	init: function() {
		
		this.citems.addClass('c-items-notifysnack');
		this.writeItems();
		if (publish.items.length == 0){
			showErrorMessage(publish.m.ERR_NO_ITEMS);
		}
		
		if ($("#c-item-top-bar").length == 1){
			var tb = $("#c-item-top-bar"); 
			tb.submit(publish.onTopFormSubmit);
			tb.find("a.c-order-date").click(function(){
				publish.orderBy('date');
				return false;
			});
			tb.find("a.c-order-name").click(function(){
				publish.orderBy('name');
				return false;
			});
			tb.find("select[name='search_type']").change(function(){
				$("#c-item-top-bar").submit();
			});
			this.customSelect(tb.find("select[name='search_type']"));
		}
		
		if ($("#c-edit-main-title").length > 0){
			var e = $("#c-edit-main-title");
			e.find('h1 a').click(function(){
				var f = $(this).parent().parent();
				f.find('h1').hide();
				f.find('div').fadeIn("fast");
				return false;
			});
			e.find('.c-cancel').click(function(){
				var f = $(this).parent().parent();
				f.find('div').hide();
				f.find('h1').fadeIn("fast");
				return false;
			});
			e.find('.c-ok').click(function(){
				$(this).parent().parent().submit();
				return false;
			});
			e.submit(function(){
				
				var nelem = $(this).find("input[name='name']");
				nelem.val($.trim(nelem.val()));
				var name = nelem.val();
				if (name == ''){
					showErrorMessage(publish.m.ERR_EMPTY_ITEM_NAME, 10000);
					return false;
				}
				publish.editTitle(e.find('div'), name, publish.items[0].id);
				return false;
			});
		}
	},
	customSelect: function(select) {
		var selectBoxContainer = $('<div/>')
			.addClass('tzSelect')
			.html('<div class="selectBox ua-b ua-b-smalltext ua-b-smallerpadding ua-b-gray"></div>');
		var dropDown = $('<ul/>').addClass('dropDown');
		var selectBox = selectBoxContainer.find('.selectBox');
		// Looping though the options of the original select element
		
		select.find('option').each(function(i){
		var option = $(this);
		if(i==select.prop('selectedIndex')){
				selectBox.html('<span class="b-part-text">'+option.text()+'</span><span class="b-part-arrow"></span><span class="b-part-separator"></span>');
			}
			// As of jQuery 1.4.3 we can access HTML5
			// data attributes with the data() method.
			if(option.data('skip')){
				return true;
			}
			// Creating a dropdown item
			var li = $('<li/>').html(option.text());
			li.click(function(){
				selectBox.html('<span class="b-part-text">'+option.text()+'</span><span class="b-part-arrow"></span><span class="b-part-separator"></span>');
				dropDown.trigger('hide');
				selectBox.removeClass('ua-b-gray-active');
				// When a click occurs, we are also reflecting
				// the change on the original select element:
				if (select.val() != option.val()) {
					select.val(option.val());
					select.trigger('change');
				}
				return false;
			});
			dropDown.append(li);
		});
		selectBoxContainer.append(dropDown.hide());
		select.hide().after(selectBoxContainer);
		// Binding custom show and hide events on the dropDown:
		dropDown.bind('show',function(){
			if(dropDown.is(':animated')){
				return false;
			}
			selectBox.addClass('expanded');
			dropDown.show();
		}).bind('hide',function(){
			if(dropDown.is(':animated')){
				return false;
			}
			selectBox.removeClass('expanded');
			dropDown.hide();
		}).bind('toggle',function(){
			if(selectBox.hasClass('expanded')){
				dropDown.trigger('hide');
			}
			else dropDown.trigger('show');
		});
		selectBox.click(function(){
			if(selectBox.hasClass('expanded')){
				selectBox.removeClass('ua-b-gray-active');
			} else {
				selectBox.addClass('ua-b-gray-active');
			}
			dropDown.trigger('toggle');
			return false;
		});
		
		// If we click anywhere on the page, while the
		// dropdown is shown, it is going to be hidden:
		$(document).click(function(){
			dropDown.trigger('hide');
			selectBox.removeClass('ua-b-gray-active');
		});
	},
	getItem: function(id){
		for(i in publish.items){
			if(publish.items[i].id == id){
				return publish.items[i];
			}
		}
		return null;
	},
	writeItems: function(){
		publish.recheckThumbItems = new Array();
		for (var i in this.items){
                        this.items[i] = new Item(this.items[i]);
			this.writeItem(this.items[i]);
			if (!this.items[i].haveThumb()) {
				publish.recheckThumbItems.push(this.items[i].id);
			}
		}
		this.writePaginator();
		if (publish.recheckThumbInterval){
			clearInterval(publish.recheckThumbInterval);
		}
		//publish.recheckThumbInterval = setInterval(publish.recheckThumb, 4000);
	},
	recheckThumb: function(){
		if (!publish.recheckThumbItems.length){
			clearInterval(publish.recheckThumbInterval);
			return;
		}
		var dataToSend = {page: 'get-items-flags', items: publish.recheckThumbItems};
		$.ajax({
			data: dataToSend,
			success: function(d) {
				if (d.code == 200){
					$.each(d.data, function(i, it){
						var item = publish.getItem(it.id);						
						item.flags = it.flags;
						if (item.haveThumb()){
						    publish.writeItemThumb(item);
						    publish.recheckThumbItems.splice(publish.recheckThumbItems.indexOf(item.id), 1);
						}
					});
				}
			}
		});
	},
	writePaginator: function(){
		var pagElem = $("#c-paginator");
		if (pagElem.length == 0){
			return;
		}
		pagElem.html("");
		if (this.totalItems <= this.itemsPerPage){
			return;
		}
		
		var totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
		pagHtml = '';
		if (this.currentPage > 1){
			var prevPage = parseInt(this.currentPage) - 1;
			pagHtml += '<a href="?p=' + prevPage + '">Previous</a>';
		}
		for (i = 1; i <= totalPages; i++){
			if (this.currentPage == i){
				pagHtml += '<span>' + i + '</span>';
			} else {
				pagHtml += '<a href="?p=' + i + '">' + i + '</a>';
			}
		}
		if (this.currentPage < totalPages){
			var nextPage = parseInt(this.currentPage) + 1;
			pagHtml += '<a href="?p=' + nextPage + '">Next</a>';
		}
		pagElem.html(pagHtml);
		pagElem.find('a').click(function(){
			var pNumber = $(this).attr("href").split('=');
			pNumber = pNumber[pNumber.length-1];
			publish.loadItems({p: pNumber});
			publish.currentPage = parseInt(pNumber);
			publish.writePaginator();
			if($(window).scrollTop() > 0){
				$(window).scrollTop(0);
			}
			return false;
		});
	},
	orderBy: function(type){
		publish.loadItems({orderBy: type});
	},
	onTopFormSubmit: function(){
		var search_type = $(this).find("select[name='search_type']");
		var search_text = $(this).find("input[name='search_text']");
		var data = {search_type: search_type.val(), search_text: search_text.val()};
		publish.hideNoticeInstant();
		publish.loadItems(data);
		return false;
	},
	loadingItems: false,
	loadItems: function(data){
		
		if (publish.loadingItems){
			return;
		}
		publish.loadingItems = true;
		var defaults = {page: 'load-items'};
		var dtosend = $.extend(defaults, data);
		$.ajax({
			data: dtosend,
			beforeSend: function(){
				var ldiv = $('<div />').addClass('c-extra-load').css({display: 'block', 'padding': '100px 0'}).attr("align", "center").append(publish.getLoadingImage());
				publish.citems.html(ldiv);
			},
			complete: function(){
				publish.citems.find(".c-extra-load").remove();
				publish.loadingItems = false;
			},
			success: function(d) {
				if (d.code == 200){
					publish.time = d.data.time;
					publish.items = d.data.items;
					publish.totalItems = d.data.totalItems;
					publish.currentPage = d.data.currentPage;
					publish.displayItemsWithEffect = true;
					publish.citems.html("");
					publish.writeItems();
					var filters = d.data.filters;
					if (filters.orderBy && filters.orderBy != ''){
						var tb = $("#c-item-top-bar");
						var nf = tb.find("a.c-order-name");
						var df = tb.find("a.c-order-date");
						df.removeClass("c-up").removeClass("c-down");
						nf.removeClass("c-up").removeClass("c-down");
						fel = (filters.orderBy == 'name') ? nf : df;
						if (filters.orderType && filters.orderType == 'ASC'){
							fel.addClass("c-up");
						} else {
							fel.addClass("c-down");
						}
					}
					if (publish.items.length == 0){
						showErrorMessage(publish.m.ERR_NO_ITEMS_SEARCH);
					}
				} else {
					showErrorMessage(d.data);
				}
			}
		});
	},
	hideNoticeInstant: function() {
		$("#inlineMessages .err").hide();
	},
	writeItem: function(item){
		var itemCont = $("<div />").attr("id", "c-item-" + item.id).addClass("c-item");
		if (item.isPublished()){
			itemCont.addClass("c-item-published");
		} else {
			itemCont.addClass("c-item-editable");
		}
		if (item.isPremium()){
			itemCont.addClass("c-item-premium");
			if (item.premium_type == 'points'){
				itemCont.addClass("c-item-premium-points");				
			} else {
				itemCont.addClass("c-item-premium-subscription");
			}
		}
		itemCont.addClass("c-item-" + item.type);
		var itemHtml = '';
		itemHtml =  '<div class="c-top">';
		// Script-ul de print screen nu functioneaza corect asa ca pana cand se rezolva problema, se afiseaza o imagine in locul print screen-ului.
        //var loading = '<img src="/images/loading.gif" class="thumb-loading" />';
        var loading = '<img src="/images/notifysnack_details_icon.jpg" class="thumb-loading" style="width: 100px !important; height: 100px !important; top: 0 !important; left: 0 !important;" />';
		if (item.isPublished()){
			itemHtml += '<a class="c-img c-item-img-' + item.id + ' c-img-' + item.type + '" href="' + item.getItemDetailsUrl() + '">' + loading + '</a>';
		} else {
			itemHtml += '<a class="c-img c-item-img-' + item.id + ' c-img-' + item.type + '" href="' + item.getEditUrl() + '">' + loading + '</a>';
		}
		itemHtml += '	<div class="c-data">';
		itemHtml += '		<div class="c-title">';
		itemHtml += '			<h3></h3>';
		itemHtml += '			<a href="#">Edit name</a>';
		itemHtml += '			<br />';
		itemHtml += '		</div>';
		itemHtml += '		<form class="c-edittitle" action="">';
		itemHtml += '			<input type="hidden" value="' + item.id + '" name="item_id" />';					
		itemHtml += '			<input type="text" value="" name="name" autocomplete="off" maxlength="64" />';
		itemHtml += '			<a href="#" class="c-ok">Ok</a> <span>|</span> <a href="#" class="c-cancel">Cancel</a>';
		itemHtml += '		</form>';

		if (item.isPublished()){
			itemHtml += '<div class="c-item-stats">';
			/*if (item.type != 'poll' && parseInt(item.questions)){
				if (item.questions == 1){
					itemHtml += '1 question';
				} else {
					itemHtml += item.questions + ' questions';
				}
				itemHtml += ' <span class="c-gray">|</span> ';
			}*/
			itemHtml += '<span class="c-item-responses"></span>';
			if (parseInt(item.views) == 1){
				itemHtml += '1 view';
			} else {
				itemHtml += item.views + ' total views';
			}
			itemHtml += ' <span class="c-gray">|</span> Published at ' + item.getDatePublished() + '</div>';
		} else {
			itemHtml += '<div class="c-notpublishedtext">Not published</div>';
		}
		
		itemHtml += '<i>Created at ' + item.getDateCreated() + ' | Modified at ' + item.getDateModified() + '</i>';
		//
		if (item.isPremium() && item.isPremiumTypePoints()){
			itemHtml += '<div class="c-paid">PAID</div>';
		} else {
			itemHtml += '<div class="c-paid-space"></div>';
		}
		
		itemHtml += '		<div class="c-links">';
		if (item.isPublished()){
			if (!publish.detailsPage){
				itemHtml += '<a href="' + this.itemsUrl + '?item=' + item.hash + '">View</a> <i>|</i> <a href="' + this.itemsUrl + '?item=' + item.hash + '#stats">Stats</a> <i>|</i> '; 
			}
		}
		
		if (item.canBeEdited()){
			itemHtml += '<a href="' + item.getEditUrl() + '" class="c-edit-url">Edit</a>';
			//
			if (item.isPremium() && item.isPremiumTypePoints()){
				var etl = item.getEditTimeLeft();
				if (etl){
					itemHtml += ' <span>(' + etl + ')</span>';
				} else {
                                    
                                }
			}
			itemHtml += ' <i>|</i> '; 
		}
		
		itemHtml += '<a href="' + item.getEditUrl() + '&amp;as_new=1">Edit as new</a><b class="c-mini-tooltip-ico"></b> <i>|</i> <a href="#" class="c-delete">Delete</a><br />';
		itemHtml += '		</div>';
		itemHtml += '	</div>';
		itemHtml += '	<div class="c-optright">';
		if (item.isPublished()){
		    //
			if (item.isPremium()){
				itemHtml += '<i class="c-msg">Premium options are active</i>';
			}
			
			if (!publish.detailsPage){
				itemHtml += '	<a class="c-bxs-bseb ua-b ua-b-gray" href="#"><span>Embed code</span><em></em><br /></a>';
			}
		}
		itemHtml += '	</div><br />';

		itemHtml += '</div>';
		itemHtml += '<div class="c-bottom"></div>';
		
		
		if (publish.detailsPage && item.isPremium()){
		    itemHtml += '<br/>';
		}

		itemCont.html(itemHtml);

		var dname = item.getDisplayName();
		if(dname.length > 33) {
			dname = dname.substring(0,30) + '...';
		}
		
		itemCont.find("div.c-title h3").text(dname);
		itemCont.find("form.c-edittitle input[name='name']").val(item.name);

        if (publish.detailsPage){
           itemCont.find(".c-data").addClass("c-data-details");
           
           if(item.state == 'OFF') {
	           if ($('.on-off-' + item.id).length == 0){
	               itemCont.find(".c-top").addClass("c-top-details").find('.c-data-details').after(publish.onOffhtml(item, 'top'));
	           }
	       }
        } else {
           itemCont.find(".c-data").removeClass("c-data-details");
           itemCont.find(".c-top").removeClass("c-top-details");
        }

		limg = getLoadingImage().addClass("c-loading");
		itemCont.find("div.c-img").html(limg);
		if (this.displayItemsWithEffect){
			itemCont.hide();
		}
		publish.citems.append(itemCont);
		if (this.displayItemsWithEffect){
			itemCont.fadeIn("fast");
		}
		// Folosit doar la serverul de print screen. Momentan acesta nu functioneaza.
		/*
        if (item.haveThumb()){
            this.writeItemThumb(item);
        }
		*/
		publish.initItem(itemCont);
		
		if(item.state == 'OFF') {
        	publish.onOffSwitcher(item, 'bottom');
		}
		
        if (!item.isPublished()){
            publish.itemUnpublishLoading($(".c-item-img-" + item.id));
        }

	},
    onOffhtml: function(item, pos){
        var b = $('<div/>').addClass('onOffButton').addClass('on-off-' + item.id).addClass('onOff' + pos);
        var t = $('<div/>').text('Status').addClass('bttn-label');
        var o = $('<label/>').addClass('switch-toggle').addClass(item.isActive() ? 'on' : 'off');
        //var h = $('<b class="c-mini-tooltip-ico"></b>')
        return b.prepend(t).prepend(o).after('<b class="c-mini-tooltip-ico onOff"></b>');
    },
    onOffSwitcher: function(item, pos){
        var s = $('.on-off-' + item.id + ':not(.onOff'+ pos +')').find('.switch-toggle');

        s.on('click', function(ev){
        	
        	if(item.state == 'OFF') {
	            ev.preventDefault();
	            ev.stopPropagation();
	            var t = $(this), v = t.hasClass('on') ? 'OFF' : 'ON';
	            if (t.hasClass('on')) {
	                t.removeClass('on').addClass('off');
	            } else {
	                t.removeClass('off').addClass('on');
	            }
	            
	            $.ajax({
	                data: {
	                    page: 'enable-notification',
	                    id: item.id,
	                    state: v
	                },
	                success: function(d) {}
	            });
	            item.state = 'ON';
        	}
        });
        
    },
    itemUnpublishLoading: function(h){
           h.find('img')
                .removeClass('thumb-loading')
                .addClass('thumb-generic')
                .removeAttr('style')
                .attr({src: '/images/generic/notifysnack.png'});
    },
	writeItemThumb: function(item){
            var img = $("<img />").data("itemId", item.id);
            if (item.haveThumb()){
                    img.error(function(){
                            var item = publish.getItem($(this).data('itemId'));
                            if ($(this).prop('src') != item.getResizeUrl()){
                                    $(this).prop('src', item.getResizeUrl());
                            }
                    }).load(function(){
                            var item = publish.getItem($(this).data('itemId'));
                            $(".c-item-img-" + item.id).empty().html($(this));
                            var pH = 100;
                            var oW = $(this).width();
                            var oH = $(this).height();
                            var mT = ((pH  - oH) / 2);
                            $(this).attr({
                                width: oW, 
                                height: oH
                            }).css({
                                cssFloat: 'left',
                                width: oW + 'px',
                                height: oH + 'px',
                                marginTop: mT + 'px'
                            });
                    });
                    img.prop('src', item.getThumbUrl());
            }
	},

	initItem: function(el){
		var id = publish.getIdFromElement(el);
		var item = publish.getItem(id);
		item.buyingPremium = false;
		
		el.find(".c-links a.c-delete").click(function(){
			t = $(this).parent();
			while(!t.hasClass("c-item")){
				t = t.parent();
			}
			publish.deleteItem(publish.getIdFromElement(t));
			return false;
		});
		
		el.find(".c-links .c-mini-tooltip-ico").tooltip({content: 'The &quot;Edit as new&quot; feature creates a copy of the current item and opens it for editing.<br /> Don\'t forget to Save/Publish it after editing. The current item remains unchanged.', className: 'c-tooltip', width: '415'});
		el.find(".c-mini-tooltip-ico.onOff").tooltip({content: 'Switch off if you want to hide the widget on your website.', className: 'c-tooltip', width: '200'});
		publish.initEditTitle(el);

		// c-optright
		if (publish.detailsPage){
			publish.showItemOptions(el, false);
		} else {
			el.find(".c-optright .c-bxs-bseb").click(function(){
				var el = $(this).parent().parent().parent();
				el.parent().find(".c-item-open").each(function(){
					$(this).removeClass("c-item-open");
					$(this).find(".c-bottom").slideUp("fast", function(){
						var el = $(this).parent();
						el.find(".c-optright .c-bxs-bseb").show();
						el.find(".c-optright .c-options-top").hide();
					});
				});
				publish.showItemOptions(el);
				return false;
			});
		}
	},
	formatMysqlDate: function(date){
	    if (!date){
		    return ;
	    }
	    var regex=/^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) (?:([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/;
	    var parts=date.replace(regex,"$1 $2 $3 $4 $5 $6").split(' ');
	    return parts[1] + '/' + parts[2] + '/' + parts[0] + ' ' + parts[3] + ':' + parts[4]; 
	},
	convertMysqlDateToJs: function(date){
	    if (!date){
		    return ;
	    }
	    var regex=/^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) (?:([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/;
	    var parts=date.replace(regex,"$1 $2 $3 $4 $5 $6").split(' ');
	    return new Date(parts[0],parts[1]-1,parts[2],parts[3],parts[4],parts[5]);
	},
	showItemOptions: function(el, effect) {
		var id = publish.getIdFromElement(el);
		var item = publish.getItem(id);

		var bxsseb = el.find(".c-optright .c-bxs-bseb");
		if (el.find(".c-bottom .c-options").length == 0){
			var dl = item.getDirectLink();
			var coptions = $("<div />").addClass("c-options");
                        var coptHtml = '';
                        if (publish.detailsPage){
                            coptions.addClass("c-options-details");
                        } else {
                            coptions.removeClass("c-options-details");
                        }

			coptHtml += '<div class="c-options-right">';
			coptHtml += '	<div class="c-box">';
                        if ((item.isPremiumTypePoints() && item.isPremium()) || !item.isPremium()){
                            //coptHtml += '<div class="c-ico c-ico-free-embed" style="padding-right:0"><a href="#"></a><p>Embed</p></div>';
                        }
                        coptHtml += '<div class="c-ico c-ico-embed" style="padding-right:0"><a href="#"></a><p>Embed code</p></div>';

                        coptHtml += '<div style="width:106px;" class="c-ico c-ico-snackwebsites">';
                        coptHtml += '<a href="#" class="sw"></a>';
                        coptHtml += '<p>for <a target="_blank" href="http://www.snackwebsites.com/?UA_PHPSESSID=' + publish.uaSession + '" style="background-image:none; display:inline;">SnackWebsites</a></p>';
                        coptHtml += '<span>no watermark</span>';
                        coptHtml += '</div>';

			coptHtml += '</div><br />';
			
			coptions.html(coptHtml);
			el.find(".c-bottom").append(coptions);

            if (publish.detailsPage){
                el.find(".c-bottom").addClass("c-bottom-details");
            } else {
                el.find(".c-bottom").removeClass("c-bottom-details");
            }

			if (!item.isPremium() && item.isPublished()){
				cpremInfo = $("<div />").addClass("c-premium-info");
				cpremInfoHtml = '';
				if (!publish.userPremium){
					cpremInfoHtml += '	<div class="c-premium-info-l">You can use all NON-Premium options for FREE, with some limitations. <a href="' + publish.snacktoolsUrl + '/go-premium.html" target="_blank">Read more</a></div>';
				}
				cpremInfoHtml += '	<div class="c-premium-info-r"><a href="#" class="c-bxs c-bxs-activate-premium-options ua-b ua-b-smalltext ua-b-gray">Activate Premium options</a>';
				if (!publish.userPremium){
					if (publish.userPoints < item.getPrice()){
						cpremInfoHtml += '<span class="c-tworows"><i>' + item.getPrice() + ' points</i><a href="#st-buy-points-popin&amp;mode=action&amp;points=' + item.getPrice() + '">Buy now</a></span>';
					} else {
						cpremInfoHtml += '<span>' + item.getPrice() + ' points</span>';
					}
					cpremInfoHtml += '<div class="c-tooltip-ico"></div>';
				}
				cpremInfoHtml += '<br/></div><br/>';
				cpremInfo = $("<div />").addClass("c-premium-info").html(cpremInfoHtml);

				el.find(".c-bottom").append(cpremInfo);

                if(publish.detailsPage){
                    el.find(".c-bottom").append('<br/>');
                }
			}

			if (!publish.detailsPage){
				var copttop = $("<div/>").addClass("c-options-top");
				var copttopHtml = '<span>Embed code</span><em></em><br />';
				copttop.html(copttopHtml);
				bxsseb.after(copttop);
				copttop.show();
			}
			publish.initItemOptions(el);
		} else {
			coptions = el.find(".c-bottom .c-options");
			if (!publish.detailsPage){
				copttop = el.find(".c-optright .c-options-top");
			}
		}

		bxsseb.hide();
		if (!publish.detailsPage){
			copttop.show();
			
			if(item.state == 'OFF') {
	            if (!el.find(".c-bottom .c-options-right .onOffButton").length){
	                el.find(".c-bottom .c-options-right").prepend(publish.onOffhtml(item, 'bottom'));
	                el.find(".c-options .c-mini-tooltip-ico.onOff").tooltip({content: 'Switch off if you want to hide the widget on your website.', className: 'c-tooltip', width: '200'});
	            }
	            publish.onOffSwitcher(item, 'top');
	        }
		}
		var cbot = el.find(".c-bottom").hide();
		el.addClass("c-item-open");
		if (typeof effect == 'undefined' || effect){
			cbot.slideDown("fast", function(){
				t = $(this).parent();
				while(!t.hasClass("c-item")){
					t = t.parent();
				}
				publish.initCopyDirectLink(publish.getIdFromElement(t));
			});
		} else {
			cbot.show();
			publish.initCopyDirectLink(id);
		}
		return false;
	},
	initItemOptions: function(el) {
		coptions = el.find(".c-bottom .c-options");
		var id = publish.getIdFromElement(el);
		var item = publish.getItem(id);
		coptions.find(".c-dl-a-disabled").click(function(){
			t = $(this).parent();
			while(!t.hasClass("c-item")){
				t = t.parent();
			}
			publish.postOnShareSnack(t);
			return false;
		});
		coptions.find(".c-direct-link .c-mini-tooltip-ico").tooltip({content: 'Clicking the link will post the notification on ShareSnack', className: 'c-tooltip', width: '245'});
		coptions.find(".c-share-fb").click(function(){
			t = $(this).parent();
			while(!t.hasClass("c-item")){
				t = t.parent();
			}
			var id = publish.getIdFromElement(t);
			var item = publish.getItem(id);
			publish.facebookShare(item.getDirectLink());
			return false;
		});
		coptions.find(".c-share-mail").click(function(){
			t = $(this).parent();
			while(!t.hasClass("c-item")){
				t = t.parent();
			}
			publish.openEmailDialog(publish.getIdFromElement(t));
			return false;
		});
		coptions.find(".c-ico-free-embed a").click(function(){
			t = $(this).parent();
			while(!t.hasClass("c-item")){
				t = t.parent();
			}
			publish.openEmbedDialog(publish.getIdFromElement(t), false);
			return false;
		});
		coptions.find(".c-ico-embed a").click(function(){
			t = $(this).parent();
			while(!t.hasClass("c-item")){
				t = t.parent();
			}
			var itemId = publish.getIdFromElement(t);
			if (publish.getItem(itemId).isPremium()){
				publish.openEmbedDialog(itemId, true);
			} else {
				publish.activatePremium(itemId, 'embed');
			}
			return false;
		});
		coptions.find(".c-ico-snackwebsites .sw").click(function(){
			t = $(this).parent();
			while(!t.hasClass("c-item")){
				t = t.parent();
			}
			var itemId = publish.getIdFromElement(t);
			publish.openEmbedDialog(itemId, true, false, true);

			return false;
		});
		coptions.find(".c-ico-reporting a").click(function(){
			t = $(this).parent();
			while(!t.hasClass("c-item")){
				t = t.parent();
			}
			var itemId = publish.getIdFromElement(t);
			if (!publish.getItem(itemId).isPremium()){
				publish.activatePremium(itemId);
				return false;
			}
		});
		if (!item.isPremium() && item.isPublished()){
                        //------------------------------------------------------------------------------------
			el.find(".c-bottom .c-bxs-activate-premium-options").click(function(){
				t = $(this).parent();
				while(!t.hasClass("c-item")){
					t = t.parent();
				}
				publish.activatePremium(publish.getIdFromElement(t));
				return false;
			});
			if (!publish.userPremium){
				el.find("div.c-tooltip-ico").tooltip({content: 'You get access to all premium options<br />available for this notification.', className: 'c-tooltip'});
			}
		}
		if (publish.detailsPage && publish.userPremium && !item.isPremium()){
			publish.doActivatePremium(id);
		}
	},
	initCopyDirectLink: function(itemId) {
		if (!$('#c-copy-directLink-' + itemId).length){
			return;
		}
		var clip = new UAClipboard.Client();
		clip.setHandCursor(true);
		clip.setText(publish.getItem(itemId).getDirectLink());
		clip.glue('c-copy-directLink-' + itemId);
		$('#c-copy-directLink-' + itemId).click(function(){
			return false;
		});
		clip.addEventListener('mouseOver', function(client){
			$(client.domElement).addClass("c-b-dl-hover");
		});
		clip.addEventListener('mouseOut', function(client){
			$(client.domElement).removeClass("c-b-dl-hover");
			$(client.domElement).removeClass("c-b-dl-active");
		});
		clip.addEventListener('mouseDown', function(client){
			$(client.domElement).addClass("c-b-dl-active");
			var lpos = $(client.domElement).position().left + 19;
			var obj = $("<i />").html("Copied").css("left", lpos + 'px').hide();
			$(client.domElement).parent().find("i").remove();
			$(client.domElement).parent().prepend(obj);
			obj.fadeIn("fast");
			setTimeout(function(){publish.hideCopiedMessage(obj);}, 5000);
		});
		clip.addEventListener('mouseUp', function(client){
			$(client.domElement).removeClass("c-b-dl-active");
		});
	},
	postOnShareSnack: function(el){
		var itemId = publish.getIdFromElement(el);
		$.ajax({
			context: el,
			beforeSend: function(){
				$(this).find('.c-direct-link .c-mini-tooltip-ico').hide();
				$(this).find('.c-direct-link .c-mini-tooltip-ico').after(publish.getLoadingImage());
				var a = $(this).find('.c-direct-link .c-dl-a-disabled');
				a.unbind('click').click(function(){return false;});
			},
			data: {page: 'post-on-sharesnack', item: itemId},
			complete: function(){
				$(this).find('.c-direct-link .c-mini-tooltip-ico').show();
				$(this).find('.c-direct-link .c-loading').remove();
			},
			error: function() {
				showErrorMessage('Internal server error');
			},
			success: function(d){
				var a = $(this).find('.c-direct-link .c-dl-a-disabled');
				a.unbind('click');
				if (d.code == 200){
					a.removeClass("c-dl-a-disabled");
					var itemId = publish.getIdFromElement($(this));
					var copyA = '<a href="#" class="c-bs c-bs-copy ua-b ua-b-small ua-b-gray" id="c-copy-directLink-' + itemId + '">Copy</a>';
					var ti = $(this).find('.c-direct-link .c-mini-tooltip-ico');
					ti.after(copyA).remove();
					publish.initCopyDirectLink(itemId);
					var item = publish.getItem(itemId);
					item.flags = parseInt(d.data);
				} else {
					a.click(function(){
						t = $(this).parent();
						while(!t.hasClass("c-item")){
							t = t.parent();
						}
						publish.postOnShareSnack(t);
						return false;
					});
					showErrorMessage(d.data);
				}
			}
		});
	},
	hideCopiedMessage: function(el){
		el.fadeOut("fast", function(){$(this).remove();});
	},
	facebookShare: function(href) {
		window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(href)+'&t='+encodeURIComponent('Check out this notification'),'sharer','toolbar=0,status=0,width=626,height=436');
		return false;
	},
	getTwitterShareUrl: function(href){
		return 'http://twitter.com/home?status=' + encodeURIComponent('Check out this notification! ' + href); 
	},
	deleteItem: function(itemId){
		if ($.userApi.cookie('c-d-remove-item')){
			publish.doDeleteItem(itemId);
			return false;
		}
		publish.dialog.itemToOpen = itemId;
		if (publish.dialog.deleteItem == null){
			publish.dialog.deleteItem = $("#c-dialog-delete-item");
			publish.dialog.deleteItem.dialog({
				modal: true,
				autoOpen: true,
				width: 508,
				open: function() {
					$parent = $(this).parent();
					$checkBox = $(this).find('div.c-not-show-again');
					if ($checkBox.length > 0){
						$parent.find(".ui-dialog-buttonpane").width(463).prepend($checkBox);
					}
                                        $('.ui-dialog-titlebar-close').hide();                                        
				},
				buttons: {
					Yes: function(){
						publish.doDeleteItem(publish.dialog.itemToOpen);
						$(this).dialog('close');
					},
					Close: function() {
						$(this).dialog('close');
					}
				}
			});
			publish.addDialogButtonClass(publish.dialog.deleteItem.parent(), 'Yes', 'yes');
			publish.addDialogButtonClass(publish.dialog.deleteItem.parent(), 'Close', 'close');
			$("#c-checkbox-dialog-remove-item").change(function(){
				if (this.checked) {
					$.userApi.cookie('c-d-remove-item', true, { expires: 10*365, path: '/' });
				} else {
					$.userApi.cookie('c-d-remove-item', null, {expires: -1, path: '/'});
				}
			});
		} else {
			publish.dialog.deleteItem.dialog("open");
		}
	},
	doDeleteItem: function(itemId){
		var el = $("#c-item-" + itemId);
		if (el.length == 0){
			showErrorMessage('Invalid item');
			return false;
		}
		
		$.ajax({
			context: el,
			beforeSend: function(){
				var hdiv = $("<div />").addClass("c-item-hover").append(publish.getLoadingImage());
				el.prepend(hdiv).addClass("c-item-fade");
			},
			data: {page: 'remove-item', item: itemId},
			error: function() {
				this.removeClass('c-item-fade');
				this.find(".c-item-hover").remove();
				showErrorMessage('Internal server error');
			},
			success: function(d){
				if (d.code == 200){
					publish.totalItems--;
					publish.writePaginator();
					this.slideUp("fast", function(){
						var itemId = publish.getIdFromElement($(this));
						$(this).remove();
						if (publish.detailsPage){
							location.href = publish.itemsUrl + '?deleted=' +  itemId;
						} else {
							var leftItems = publish.citems.find(".c-item").length;
							if (!leftItems){
								if (publish.totalItems > 0){
									var totalPages = Math.ceil(publish.totalItems / publish.itemsPerPage);
									var loadPage = publish.currentPage > totalPages ? totalPages : publish.currentPage;
									publish.loadItems({p: loadPage});
								} else {
									showErrorMessage(publish.m.ERR_NO_ITEMS_SEARCH);
								}
							}
						}
					});
					
				} else {
					this.removeClass('c-item-fade');
					this.find(".c-item-hover").remove();
					showErrorMessage(d.data);
				}
			}
		});
	},
	canBuyPremium: function(item){
	    return (publish.userPremium || publish.userPoints >= item.getPrice());		
	},	
	activatePremium: function(itemId, action){
		publish.dialog.itemToOpen = itemId;
		
		if(action == null){
		    action = 'premium';
		}

		publish.dialog.action = action;
		
		if(publish.userPremium){
			publish.doActivatePremium(itemId);
			return;
		}
		
		var el = $("#c-item-" + itemId);
		if (el.hasClass("c-activating-premium")){
			return;
		}
		
		if (publish.dialog.activate == null){
			publish.dialog.activate = $("<div />");
			publish.dialog.activate.attr("title", "Activate premium options?").css("display", "none");
			publish.dialog.activate.dialog({
				modal: true,
				autoOpen: true,
				width: 440,
				open: function() {
				    var item = publish.getItem(publish.dialog.itemToOpen);
				    $(this).parent().find(".ui-dialog-titlebar-close").addClass("ui-dialog-titlebar-close-v").show();

				    publish.addDialogButtonClass($(this).parent(), 'Free', 'free', 'Use free (with watermark)','bfree');
				    publish.addDialogButtonClass($(this).parent(), 'Next', 'yes', 'Next','bnext');
				    publish.dialogButtonText($(this).parent(), 'bfree', 'Use free <i style="color:#999">(with watermark)</i>');

				    publish.dialogButtonVisibile($(this).parent(),'bfree');

				    if((publish.dialog.action == 'report')||(publish.dialog.action == 'premium')){
					publish.dialogButtonVisibile($(this).parent(),'bfree',false);
				    }

				    /*if (publish.userPremium){
					    $(this).html('');
				    } else{
					    $(this).html('You will be able to use all premium options available for this quiz. This will cost you <b>' + item.getPrice() + '</b> points.<br /><br />');
					    $(this).append('<span class="c-note">Note: You can modify this quiz for 24 hours after the activation.</span>');
				    }*/
                                    $(this).html('You will be able to use all premium options available for this notification. This will cost you <b>' + item.getPrice() + '</b> points.<br /><br />');
                                    $(this).append('<span class="c-note">Note: You can modify this notification for 24 hours after the activation.</span>');
				},
				buttons: {
				    'Next': function(){

					$(this).dialog('close');
					
					var action = publish.dialog.action;
					var itemId = publish.dialog.itemToOpen;
					var item = publish.getItem(itemId);
					
					if (!publish.canBuyPremium(item)){
						$.userApi.buyPoints(item.getPrice());
						return;
					}

					publish.doActivatePremium(itemId, function(d){
					    if(action == 'embed'){
						publish.openEmbedDialog(itemId, true);
					    }
					
					});
				    },
				    'Free': function(){
					var action = publish.dialog.action;
					var itemId = publish.dialog.itemToOpen;

					if(action == 'embed'){
					    publish.openEmbedDialog(itemId, false);
					} else if (action == 'report'){
					    //publish.openExportGifDialog(itemId);
					}
					$(this).dialog('close');
				    }
				},
				closeText : "Close X"
			});
		} else {
			publish.dialog.activate.dialog('open');
		}
		
	},
	doActivatePremium: function(itemId,callback){
		itemId = parseInt(itemId);
		var el = $("#c-item-" + itemId);
		if (el.length == 0){
			showErrorMessage('Invalid item');
			return false;
		}
		
		if (el.hasClass("c-activating-premium")){
			return false;
		}
		el.addClass("c-activating-premium");
		el.find(".c-premium-info").slideUp("fast", function(){$(this).hide()});

		$.ajax({
			context: el,
			data: {page: 'activate-premium', item: itemId},
			beforeSend: function() {
				el.find(".c-optright").find(".c-activate-msg").remove();
				el.find(".c-optright").find(".c-msg").remove();
				el.find(".c-optright").prepend('<i class="c-activate-msg" style="padding-top:14px"><span>Please do not close this page</span><br />Generating premium options</i>');
				publish.showLoadingIco(el.find(".c-ico-embed"));
				publish.showLoadingIco(el.find(".c-ico-reporting"));
			},
			error: function(d) {
				showErrorMessage('Internal server error');
				publish.onPremiumRequestEnd(this, 0);
			},
			complete: function(d){
			    if(typeof callback == 'function'){
				callback.call(this, d);
			    }  	  
			},
			success: function(d) {
				if (d.code == 200){
					$.userApi.reloadPoints();
					
					var item = publish.getItem(d.data.id);
					item.flags = parseInt(d.data.flags);
					item.premium_type = d.data.premium_type;
					item.date_premium = d.data.date_premium;
					
					this.addClass("c-item-premium");
					if (item.isPremiumTypePoints()){
						this.addClass("c-item-premium-points");
					} else {
						this.addClass("c-item-premium-subscription");
					}
					
					if (item.isPremiumTypePoints()){
						this.find(".c-data .c-paid-space").removeClass('c-paid-space').addClass('c-paid').html('PAID');
						this.find(".c-data .c-links a.c-edit-url").after(' <span>(' + item.getEditTimeLeft() + ')</span>');
					}
					publish.onPremiumRequestEnd(this, d.code);
                                        //this.find(".c-ico-embed a").trigger("click");
				} else {
					showErrorMessage(d.data);
					publish.onPremiumRequestEnd(this, d.code);
				}
			}
		});
	},
	onPremiumRequestEnd: function(el, code){
		var or = el.find(".c-optright");
		or.find(".c-activate-msg").remove();
		if (code == 200){
			or.prepend('<i class="c-msg">Premium options are active</i>');
		} else {
			el.find(".c-premium-info").slideDown("fast");
		}
		publish.removeLoadingIco(el.find(".c-ico-embed"));
		publish.removeLoadingIco(el.find(".c-ico-reporting"));
		el.removeClass("c-activating-premium");
	},
	getLoadingIco: function() {
		return $("<img />").attr("src", publish.stapiUrl + '/images/c/loader-ico.gif').addClass("c-loading-ico");
	},
	getLoadingImage: function() {
		return $("<img />").attr("src", publish.stapiUrl + '/images/c/loader.gif').addClass("c-loading");
	},
	preloadImage: function(img){
		if (!publish.preloadedImages[img]){
			publish.preloadedImages[img] = new Image();
			publish.preloadedImages[img].src = publish.stapiUrl + '/images/c/' + img;
		}
	},
	preloadedImages: {},
	showLoadingIco: function(ico) {
		this.removeLoadingIco(ico);
		ico.append(this.getLoadingIco());
	},
	removeLoadingIco: function(ico) {
		if (!(ico instanceof jQuery)){
			return false;
		}
		ico.find("img.c-loading-ico").remove();
	},
	loadObjectEmbed: function (){
		var objectCont = publish.dialog.embed.find(".c-embed-object");
		$.ajax({
			context: objectCont,
			data: {page: 'get-embed', item: publish.dialog.itemToOpen, premium: publish.dialog.itemPremium},
			beforeSend: function() {
				var loadImage = getLoadingImage();
				loadImage.css({width: '32px', height: '32px', display: 'block', 'margin': 'auto', 'padding-top': '134px', 'padding-bottom': '135px'}).addClass("c-limg");
				objectCont.html(loadImage);
			},
			complete: function() {
				objectCont.find("img.c-limg").remove();
			},
			error: function(d) {
				showErrorMessage('Internal server error');
				publish.dialog.embed.dialog('close');
			},
			success: function(d) {
				if (d.code == 200){
					objectCont.html('<div id="Wildfire-embed"></div>');
					var itemId = publish.dialog.itemToOpen;
					var item = publish.getItem(itemId);
					
					var pconf={
						facebookPreviewURL3: publish.fbshareurl + item.type + '.jpg',
						defaultPreviewURL: publish.fbshareurl + item.type + '.jpg',
						widgetDescription: publish.WildfireUIDescription,
						useFacebookMystuff: false,
						defaultContent: d.data,
						widgetTitle: item.name,
						emailSubject: item.name,
						bookmarkURL: item.getDirectLink(),
						UIConfig: publish.WildfireUIConfigEmbed
			    	};
					Wildfire.LinkedLoading=false;
					Wildfire.initPost(publish.WildfireID, 'Wildfire-embed', 380, 300, pconf);
				
				} else {
					publish.dialog.embed.dialog('close');
					showErrorMessage(d.data);
				}
			}
		});
	},

	openEmbedDialog: function(itemToOpen, premium, isDirectLink, isSnackWebsiteEmbed){
		isDirectLink = !!isDirectLink;
		publish.dialog.snackWebsitesEmbed = !!isSnackWebsiteEmbed;
		publish.dialog.itemToOpen = itemToOpen;
		publish.dialog.itemPremium = premium;

        if (publish.dialog.embed == null){
			publish.dialog.embed = $("#c-dialog-embed");
			var pde = publish.dialog.embed; 
			pde.find(".c-embed-select").hide();	
			pde.find(".c-embed-iframe textarea").focus(function (){
				$(this).select();
			});

			pde.dialog({
				modal: true,
				autoOpen: true,
				width: 440,
				resizable: false,
				open: function(event, ui) {
				    
                    $(this).parent().find('.ui-dialog-titlebar-close').hide();
					$('.c-embed-select').hide();
					$(this).find(".c-embed-iframe").show();
					writeIframeEmbed();
					$(this).find(".c-embed-iframe textarea").focus();
				},
				buttons: {
					Close: function(){
						$(this).dialog('close');
					}
				}
			});
			publish.addDialogButtonClass(publish.dialog.embed.parent(), 'Close', 'close');
		} else {		    
			publish.dialog.embed.dialog('open');			
		}
		
		var item = publish.getItem(itemToOpen);
		if (typeof premium == 'undefined'){
			premium = item.premium;
		}
		var etitle = 'Embed code';
		if (!(premium && item.isPremium()) && !isDirectLink  && !publish.dialog.snackWebsitesEmbed){
			etitle += ' (with watermark)';
		}
		publish.dialog.embed.dialog( "option", "title", etitle);

		function initCopyButton(dataContent)
		{
			$("#embed-copy-button div").remove();
			$("#embed-copy-button").parent().find(".embed-copymessage").hide();
			var clip = new UAClipboard.Client();
			clip.setHandCursor(true);
			clip.glue('embed-copy-button');
			//var el = publish.dialog.embed.find(".c-embed-iframe");
			clip.setText(dataContent);
			$('#embed-copy-button').click(function(){
				return false;
			});
			clip.addEventListener('mouseOver', function(client){
				$(client.domElement).addClass("c-b-dl-hover");
			});
			clip.addEventListener('mouseOut', function(client){
				$(client.domElement).removeClass("c-b-dl-hover");
				$(client.domElement).removeClass("c-b-dl-active");
			});
			clip.addEventListener('mouseDown', function(client){
				$(client.domElement).addClass("c-b-dl-active");
				var textarea = $(client.domElement).parent().find("textarea");
				setTimeout(function(){textarea.select();}, 100);
				var obj = $(client.domElement).parent().find(".embed-copymessage");
				obj.fadeIn("fast");
				if (publish.dialog.clipTimeout){
					clearTimeout(publish.dialog.clipTimeout);
				}
				publish.dialog.clipTimeout = setTimeout(function(){obj.fadeOut("fast");}, 5000);
			});
			clip.addEventListener('mouseUp', function(client){
				$(client.domElement).removeClass("c-b-dl-active");
			});
			publish.dialog.clip = clip;
		}

		function writeIframeEmbed()
		{
			var el = publish.dialog.embed.find(".c-embed-iframe");
			var item = publish.getItem(publish.dialog.itemToOpen);
			var isSnackWebsitesEmbed = publish.dialog.snackWebsitesEmbed;
                        
                        /*
			var ifrSrc = publish.iframeEmbedPath + '?hash=' + $.userApi.urlencode(item.hash) + '&width=' + item.width + '&height=' + item.height + '&';
			if (item.isWmodeTransparent()){
				ifrSrc += 'wmode=transparent&';
			} else if (item.customize_bgcolor) {
				ifrSrc += 'wmode=window&bgcolor=' + $.userApi.urlencode(item.customize_bgcolor.toUpperCase()) + '&';
			} else {
				ifrSrc += 'wmode=window&';
			}
                        */
				if(isSnackWebsitesEmbed){
				    //ifrSrc += 'useOnSW=true&';
				    if(el.find('.note').length == 0){
					el.append('<div class="note"><i>Note: This embed code will work only in a Snack website.</i></div>')
				    }
				} else {
				    if(el.find('.note').length != 0){
					el.find('.note').remove();
				    }
				}
                                $.ajax({
                                        data: {page: 'get-embed', item: itemToOpen, snackws: (isSnackWebsitesEmbed ? 'snackws' : null)},
                                        success: function(d) {
                                           el.find("textarea").val(d.data);
                                           initCopyButton(d.data);
                                        }
                                });
		}
		
	},

	openEmailDialog: function (itemToOpen){
		publish.dialog.itemToOpen = itemToOpen;
		if (publish.dialog.email == null){
			publish.dialog.email = $("<div />");
			publish.dialog.email.attr("title", "Send email").css("display", "none").html('<div id="Wildfire-share-email"></div>');
			publish.dialog.email.dialog({
				modal: true,
				autoOpen: true,
				width: 440,
				height: 445,
				open: function() {
					var itemId = publish.dialog.itemToOpen;
					var item = publish.getItem(itemId);
					var mb = publish.WildfireUIemailBody.replace(/{link}/g, item.getDirectLink());
					var pconf_email = {
						widgetTitle: item.name,
						emailSubject: item.name,
						emailBody: mb,
						bookmarkURL: item.getDirectLink(),
						UIConfig: publish.WildfireUIConfigEmail
					};
					Wildfire.LinkedLoading=false;
					Wildfire.initPost(publish.WildfireID, 'Wildfire-share-email', 380, 300, pconf_email);
				},
				buttons: {
					Close: function(){
						$(this).dialog('close');
					}
				}
			});
			publish.addDialogButtonClass(publish.dialog.email.parent(), 'Close', 'close');
		} else {
			publish.dialog.email.dialog('open');
		}
	},
	addDialogButtonClass: function(elem, name, bclass, newText, bId){
		b = elem.find(".ui-dialog-buttonpane button:contains('" + name + "')");		
		if (b){
			var bclassSuffix  = (bclass==='yes') ? 'blue' : 'gray';
			b.addClass('c-b-' + bclass + ' ua-b ua-b-' + bclassSuffix).addClass('c-b').attr('value', name);
			if(bId != null){
			    b.addClass(bId);
			}
			if (newText){
			    b.text(newText);
			}
		    return b;
		}
		return false;
	},	
	dialogButtonVisibile: function(elem, bId, state){
	    b = elem.find("."+bId);	    
	    if(state == null){state=true}
		if (b){
		    if(!state){		    
			b.hide();	
		    } else{
			b.show();
		    }	
		}
		return false;
	},
	dialogButtonText: function(elem, bId, newText){
	    b = elem.find("."+bId);	    
	    if(newText == null){newText=''}
		if (b){
		    b.html(newText);
		}
		return false;
	},
	initEditTitle: function(el) {
		el.find(".c-title a").click(function(){
			var f = $(this).parent().parent().find("form.c-edittitle");
			$(this).parent().hide();
			f.fadeIn("fast");
			return false;
		});
		el.find("form.c-edittitle a.c-ok").click(function(){
			$(this).parent().submit();
			return false;
		});
		el.find("form.c-edittitle a.c-cancel").click(function(){
			var t = $(this).parent().parent().find(".c-title");
			$(this).parent().hide();
			t.fadeIn("fast");
			return false;
		});
		el.find("form.c-edittitle").submit(function(){
			var nelem = $(this).find("input[name='name']");
			var albumId = $(this).find("input[name='item_id']").val();
			nelem.val($.trim(nelem.val()));
			var name = nelem.val();
			if (name == ''){
				showErrorMessage(publish.m.ERR_EMPTY_ITEM_NAME, 10000);
				return false;
			}
			publish.editTitle($(this), name, albumId);
			return false;
		});
	},
	editTitle: function(context, name, itemId){
		$.ajax({
			context: context,
			data: {page: 'update-item-name', name: name, item: itemId},
			beforeSend: function() {
				var loadImage = getLoadingImage();
				loadImage.addClass("c-limg");
				this.hide();
				this.after(loadImage);
			},
			complete: function() {
				this.parent().find("img.c-limg").remove();
			},
			error: function(d) {
				this.show();
				showErrorMessage('Internal server error');
			},
			success: function(d) {
				if (d.code == 200){
					var el = $("#c-item-" + d.data.id);
					var t = el.find(".c-title");
					
					var item = publish.getItem(d.data.id);
					item.name = d.data.name;
					var dname = item.getDisplayName();
					
					if(dname.length > 33) {
						dname = dname.substring(0,30) + '...';
					}
					
					t.find("h3").text(dname);
					el.find(".c-edittitle input[name='name']").val(item.name);
					el.find('.c-edittitle').hide();
					t.fadeIn("fast");
					
					if ($("#c-edit-main-title").length > 0 && publish.detailsPage){
						var e = $("#c-edit-main-title");
						e.find("input[name='name']").val(item.name);
						e.find("div").hide();
						e.find("h1").fadeIn("fast");
						e.find("h1 span").text(dname);
					}
				} else {
					this.show();
					showErrorMessage(d.data);
				}
			}
		});
	},
	getIdFromElement: function (el){
		var id = el.attr("id").split('-');
		return id[id.length-1];
	},
	getScript: function(url, callback, cache){
		$.ajax({
			type: "GET",
			url: url,
			success: callback,
			dataType: "script",
			cache: cache
		});
	},
        dialog: {email: null, free_embed: null, embed: null, activate: null, deleteItem: null, itemToOpen: null, itemPremium: false, action:null, generateDownload: null, snackWebsitesEmbed:null},
	WildfireUIConfigEmbed: '<config><display showEmail="false" useTransitions="true" showBookmark="false" codeBoxHeight="100" networksToShow="myspace, friendster, facebook, orkut, bebo, tagged, blogger, hi5, livespaces, piczo, freewebs, livejournal, blackplanet, myyearbook, wordpress, typepad, xanga, multiply, igoogle, netvibes, pageflakes, migente, yahoo, ameba, liverdoor, eons, *, vox"></display><body><background frame-color="#FFFFFF" background-color="#FFFFFF"></background><controls color="#3f3f3f" corner-roundness="0;0;0;0" gradient-color-begin="#F4F4F4" gradient-color-end="#F4F4F4" frame-color="#3f3f3f" bold="false"><snbuttons iconsOnly="true" type="textUnder" frame-color="#D5D5D5" over-frame-color="#FFFFFF" color="#808080" size="10" over-gradient-color-begin="#FFFFFF" over-gradient-color-end="#FFFFFF" over-color="#006CC7" down-color="#006CC7" down-underline="true"><more frame-color="#A4DBFF" over-frame-color="#A4DBFF" gradient-color-begin="#F4F4F4" gradient-color-end="#BBE4FF" over-gradient-color-begin="#A4DBFF"></more><previous frame-color="#BBE4FF" over-frame-color="#A4DBFF" gradient-color-end="#A4DBFF" over-gradient-color-begin="#A4DBFF"></previous></snbuttons><textboxes frame-color="#CACACA" color="#757575" gradient-color-begin="#ffffff"><codeboxes color="#757575" frame-color="#DFDFDF" background-color="#FFFFFF" gradient-color-end="#FFFFFF" size="10"></codeboxes><inputs gradient-color-begin="#F4F4F4" gradient-color-end="#ffffff"></inputs><dropdowns list-item-over-color="#006cc7" handle-gradient-color-begin="#eaeaea" handle-gradient-color-end="#eaeaea" handle-over-gradient-color-end="#eaeaea" handle-down-gradient-color-begin="#eaeaea" handle-down-gradient-color-end="#eaeaea"></dropdowns></textboxes><buttons frame-color="#FF9C01" gradient-color-begin="#ff9c01" gradient-color-end="#ff9c01" color="#FFFFFF" bold="true" over-frame-color="#FFBF60" down-frame-color="#FFBF60" over-gradient-color-begin="#FFBF60" down-gradient-color-begin="#FFBF60" over-gradient-color-end="#FFBF60" down-gradient-color-end="#FFBF60" over-underline="false"></buttons><listboxes frame-color="#CACACA" gradient-color-end="#FFFFFF"></listboxes><checkboxes checkmark-color="#3b3b3b" frame-color="#D5D5D5" gradient-color-end="#FFFFFF" over-frame-color="#afafaf" down-frame-color="#afafaf"></checkboxes><servicemarker gradient-color-begin="#ffffff" gradient-color-end="#EAEAEA"></servicemarker><tooltips background-color="#fdf9d2" gradient-color-begin="#fdf9d2" gradient-color-end="#fdf9d2" frame-color="#fdf9d2"></tooltips></controls><texts color="#3f3f3f"><messages color="#c80a00" background-color="#ffffce" corner-roundness="0;0;0;0"></messages><links color="#006cc7" underline="false" over-color="#006cc7" down-color="#006cc7" down-bold="false"></links></texts></body></config>',
	WildfireUIConfigEmail: '<config><display showPost="false" showEmail="true" useTransitions="false" showBookmark="false" codeBoxHeight="100" networksToShow="myspace, friendster, facebook, orkut, bebo, tagged, blogger, hi5, livespaces, piczo, freewebs, livejournal, blackplanet, myyearbook, wordpress, typepad, xanga, multiply, igoogle, netvibes, pageflakes, migente, yahoo, ameba, liverdoor, eons, *, vox"></display><body><background frame-color="#FFFFFF" background-color="#FFFFFF"></background><controls color="#3f3f3f" corner-roundness="0;0;0;0" gradient-color-begin="#F4F4F4" gradient-color-end="#F4F4F4" frame-color="#3f3f3f" bold="false"><snbuttons iconsOnly="true" type="textUnder" frame-color="#D5D5D5" over-frame-color="#FFFFFF" color="#808080" size="10" over-gradient-color-begin="#FFFFFF" over-gradient-color-end="#FFFFFF" over-color="#006CC7" down-color="#006CC7" down-underline="true"><more frame-color="#A4DBFF" over-frame-color="#A4DBFF" gradient-color-begin="#F4F4F4" gradient-color-end="#BBE4FF" over-gradient-color-begin="#A4DBFF"></more><previous frame-color="#BBE4FF" over-frame-color="#A4DBFF" gradient-color-end="#A4DBFF" over-gradient-color-begin="#A4DBFF"></previous></snbuttons><textboxes frame-color="#CACACA" color="#757575" gradient-color-begin="#ffffff"><codeboxes color="#757575" frame-color="#DFDFDF" background-color="#FFFFFF" gradient-color-end="#FFFFFF" size="10"></codeboxes><inputs gradient-color-begin="#F4F4F4" gradient-color-end="#ffffff"></inputs><dropdowns list-item-over-color="#006cc7" handle-gradient-color-begin="#eaeaea" handle-gradient-color-end="#eaeaea" handle-over-gradient-color-end="#eaeaea" handle-down-gradient-color-begin="#eaeaea" handle-down-gradient-color-end="#eaeaea"></dropdowns></textboxes><buttons frame-color="#FF9C01" gradient-color-begin="#ff9c01" gradient-color-end="#ff9c01" color="#FFFFFF" bold="true" over-frame-color="#FFBF60" down-frame-color="#FFBF60" over-gradient-color-begin="#FFBF60" down-gradient-color-begin="#FFBF60" over-gradient-color-end="#FFBF60" down-gradient-color-end="#FFBF60" over-underline="false"></buttons><listboxes frame-color="#CACACA" gradient-color-end="#FFFFFF"></listboxes><checkboxes checkmark-color="#3b3b3b" frame-color="#D5D5D5" gradient-color-end="#FFFFFF" over-frame-color="#afafaf" down-frame-color="#afafaf"></checkboxes><servicemarker gradient-color-begin="#ffffff" gradient-color-end="#EAEAEA"></servicemarker><tooltips background-color="#fdf9d2" gradient-color-begin="#fdf9d2" gradient-color-end="#fdf9d2" frame-color="#fdf9d2"></tooltips></controls><texts color="#3f3f3f"><messages color="#c80a00" background-color="#ffffce" corner-roundness="0;0;0;0"></messages><links color="#2CA18E" underline="false" over-color="#2CA18E" down-color="#2CA18E" down-bold="false"></links></texts></body></config>',
	WildfireUIemailBody: 'Hello!<br><br>I\'ve created this quiz using QuizSnack and I thought you would like to take it. Just click the link below:<br><br><a href="{link}">{link}</a><br><br>Thank you,<br>$sender$',
	WildfireID: null,
	WildfireUIDescription: 'Hey, would you like to take this quiz I\'ve just created? By the way, with QuizSnack you can easily create your own polls, surveys and personality quizzes!'
};

function UA_onChangePoints(isPremium, newPoints)
{
	publish.userPremium = isPremium;
	publish.userPoints = newPoints;
}

function Item(data){
	for (i in data){
		this[i] = data[i];
	}
	this.id = parseInt(this.id);
	this.flags = parseInt(this.flags);
};
Item.prototype.haveThumb = function(){
	return (this.flags & this.flag.THUMB_SAVED);
};
Item.prototype.showGenericThumb = function(){
	return (this.flags & this.flag.GENERIC_THUMB);
};
Item.prototype.isPremium = function(){
	return (this.flags & this.flag.PREMIUM);
};
Item.prototype.isPostedOnShareSnack = function(){
	return (this.flags & this.flag.POSTED_ON_SHARESNACK);
};

Item.prototype.isPremiumTypePoints = function(){
	return (this.premium_type == 'points');
};
Item.prototype.isPublished = function(){
	return (this.status == 'PUBLISHED');
};
Item.prototype.isActive = function(){
	return (this.state == 'ON');
};

Item.prototype.getDatePublished = function(){
	return publish.formatMysqlDate(this.date_published);
};
Item.prototype.getDateCreated = function(){
	return publish.formatMysqlDate(this.date_created);
};
Item.prototype.getDateModified = function(){
	return publish.formatMysqlDate(this.date_last_updated);
};
Item.prototype.getDirectLink = function(){
	var rHash = this.hash.length == 32 ? 'q' + this.hash : this.hash;
	return publish.short_url + '/' + rHash;
};
Item.prototype.getReportingUrl = function(){
	return publish.reportsUrl + '?notification=' + this.hash;
};
Item.prototype.canBeEdited = function(){
	if (this.isPremium() && this.isPremiumTypePoints()){
		return this.getEditTimeLeft();
	}
	return true;
};
Item.prototype.getEditTimeLeft = function(){
	var pdate = publish.convertMysqlDateToJs(this.date_premium);
	var pnow = publish.convertMysqlDateToJs(publish.time);
	
	var diff = parseInt((pnow - pdate) * 0.001);
	if (diff > 3600 * 24){
		return false;
	}
	var leftSecs = 3600 * 24 - diff;
	var leftH = Math.floor(leftSecs / 3600);
	if (leftH > 0){
		if (leftH == 1){
			return '1 hour left';
		} else {
			return leftH + ' hours left';
		}
	} else {
		leftM = Math.ceil(leftSecs / 60);
		if (leftM == 1){
			return '1 min left';
		} else {
			return leftM + ' mins left';
		}
	}
};
Item.prototype.getEditUrl = function(){
	return publish.editUrl + '?notification=' + this.hash;
};
Item.prototype.getItemDetailsUrl = function(){
	return publish.itemsUrl + '?item=' + this.hash;
};
Item.prototype.getDisplayName = function(){
	var len = 40;
	var dname = this.name.replace(/\s+/g, ' ');
	if (dname.length <= len){
		return dname;
	}
	var mname = dname.split(' ');
	dname = '';
	for (i in mname){
		if (dname.length + mname[i].length > len){
			if(i == 0){
				dname = mname[i].substr(0, len);
			} else if (dname.length <= len/2){
				dname += ' ' + mname[i].substr(0, len - dname.length - 3);
			}
			return dname + '...';
		}
		if (i > 0){
			dname += ' ';
		}
		dname += mname[i];
	}
};

Item.prototype.getPrice = function(){
    return parseInt(publish.premiumPrice.others);
};

Item.prototype.getThumbUrl = function(){
	var date = publish.convertMysqlDateToJs(this.date_last_updated);
	return publish.S3Url + '/notify/thumbs/' + this.hash + '/scaleCrop-100x100?t=' + $.userApi.urlencode(parseInt(date.getTime()/1000));
        //return publish.S3Url + '/notify/thumbs/' + this.hash + '/original?t=' + $.userApi.urlencode(parseInt(date.getTime()/1000));
};
Item.prototype.getGenericThumbUrl = function(){
	return 'images/generic/' + publish.terminal + '.png';
};
Item.prototype.getResizeUrl = function(){
	var date = publish.convertMysqlDateToJs(this.date_last_updated);
	return publish.resizeUrl + '/scaleCrop/100x100/' + this.hash + '?t=' + $.userApi.urlencode(parseInt(date.getTime()/1000));
};

Item.prototype.getLastUpdateTime = function(){
	var ludate = publish.convertMysqlDateToJs(this.date_last_updated);
	var retDate = 0;
	if (ludate){
		retDate = ludate.getTime();
	} else {
		retDate = new Date().getTime();
	}
	return Math.round(retDate / 1000);
};
Item.prototype.flag = {
	HAS_BEEN_RENAMED	: 1,
	WATERMARK		: 2,
	XML_SAVED 		: 4,
	LANG_AUTO 		: 8,
	THUMB_SAVED 		: 16,
	GENERIC_THUMB 		: 32,
	QUIZ_DATA_SAVED 	: 64,
	TEMPLATE_CHOSE 		: 128,
	PREMIUM 		: 256,
	POSTED_ON_SHARESNACK 	: 512
};