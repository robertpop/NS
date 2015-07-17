/***************************************************************************************

JSCharts v3.00 â€“ Javascript charts component
Copyright Â© 2010 SmartketerLLC | jscharts.com | jumpeyecomponents.com



JSCharts Free License

JSCharts is available free only for non-commercial purpose. 
For commercial use, get the full license from www.jscharts.com. 

This license does NOT allow you to distribute, resell or embed/enclose JSCharts into another distribution pack/application which outputs similar content that can be used
by third parties. To get the source codes, special customizations licenses please contact our sales department at sales [at] jumpeyecomponents.com.

JSCharts by JumpeyeComponents, Smartketer LLC is licensed under a Creative Commons Attribution-Noncommercial-No Derivative Works 3.0 Unported License.
Based on a work at www.jscharts.com. 

No support is included within the JSCharts free component, however we encourage you to use JSCharts forum (http://www.jscharts.com/forum/) for any issues you encounter.

There are no limitations associated with the use of JSCharts component (no watermark and backlink). 



For details, see the JSCharts website: www.jscharts.com

***************************************************************************************/



// obiectul principal
function JSChartObject() {
	
	// VARIABILE GLOBALE
	
	this._3d = false;
	this._allowedFormats = {line : ['number', 'number'], pie : ['string', 'number'], bar : ['string', 'number']};
	this._allowedTypes = ['line', 'pie', 'bar'];
	this._areas = {};
	this._axisColor = '#B5B5B5';
	this._axisNameColorX = '#999';
	this._axisNameColorY = '#999';
	this._axisNameFontFamilyX = false;
	this._axisNameFontFamilyY = false;
	this._axisNameFontSizeX = 11;
	this._axisNameFontSizeY = 11;
	this._axisNameX = 'X';
	this._axisNameY = 'Y';
	this._axisPaddingBottom = false;
	this._axisPaddingBottomDefault = 30;
	this._axisPaddingLeft = false;
	this._axisPaddingLeftDefault = 40;
	this._axisPaddingRight = false;
	this._axisPaddingRightDefault = 30;
	this._axisPaddingTop = false;
	this._axisPaddingTopDefault = 50;
	this._axisRatio = 0;
	this._axisReversed = false;
	this._axisValuesAlignFirstX = false;
	this._axisValuesAlignFirstY = false;
	this._axisValuesAlignLastX = false;
	this._axisValuesAlignLastY = false;
	this._axisValuesAngle = 0;
	this._axisValuesColorX = '#777';
	this._axisValuesColorY = '#777';
	this._axisValuesDecimalsX = 'auto';
	this._axisValuesDecimalsY = 'auto';
	this._axisValuesDistanceX = 5;
	this._axisValuesDistanceY = 2;
	this._axisValuesFontFamilyX = false;
	this._axisValuesFontFamilyY = false;
	this._axisValuesFontSizeX = 8;
	this._axisValuesFontSizeY = 8;
	this._axisValuesPaddingBottom = false;
	this._axisValuesPaddingLeft = false;
	this._axisValuesPrefixX = false;
	this._axisValuesPrefixY = false;
	this._axisValuesShowX = true;
	this._axisValuesShowY = true;
	this._axisValuesSuffixX = false;
	this._axisValuesSuffixY = false;
	this._axisValuesX = 0;
	this._axisValuesY = 0;
	this._axisWidth = 2;
	this._background = false;
	this._canvas = {};
	this._canvasColor = '';
	this._canvasId = '';
	this._canvasIdPrefix = 'JSChart_';
	this._colors = false;
	this._colorSet = ['#ed1c24', '#fff200', '#00a651', '#005e20', '#2e3192', '#ec008c', '#898989', '#f26522', '#00aeef', '#959595', '#662d91', '#8c6239', '#197b30', '#8dc63f', '#a186be', '#736357', '#9e0b0f', '#959595', '#4390d3', '#5f5ab5', '#f06eaa', '#998675', '#790000', '#0054a6', '#003663', '#363636', '#32004b', '#7b0046', '#b1e467', '#aa83d5'];
	this._container = {};
	this._ctx = false;
	this._data = [];
	this._dataIds = [];
	this._dataString = [];
	this._fontsizeCorrection = 3;
	this._fontsizeCorrectionIE = 1;
	this._flagColor = '#f00';
	this._flagFillColor = false;
	this._flagOffset = - 50;
	this._flagOpacity = 1;
	this._flagRadius = 3;
	this._flagShape = 'circle'; // square, diamond, triangle
	this._flagWidth = 1;
	this._graphX = 0;
	this._graphY = 0;
	this._graphBarBorderColor = '#C4C4C4';
	this._graphBarBorderDefaultColor = '#C4C4C4';
	this._graphBarBorderWidth = 1;
	this._graphBarColor = '#3E90C9';
	this._graphBarDefaultColor = '#3E90C9';
	this._graphBarDefaultOpacity = 0.9;
	this._graphBarDepth = 10;
	this._graphBarOpacity = 0.9;
	this._graphBarSpacing = 1;
	this._graphBarSpacingRatio = 10;
	this._graphBarSpeed = 10; // echivalent 90 in setBarSpeed
	this._graphBarValues = true;
	this._graphBarValuesColor = '#2F6D99';
	this._graphBarValuesDecimals = 'auto';
	this._graphBarValuesFontFamily = false;
	this._graphBarValuesFontSize = 8;
	this._graphBarValuesPrefix = false;
	this._graphBarValuesSuffix = false;
	this._graphExtendX = false;
	this._graphExtendY = false;
	this._graphLineColor = [this._graphLineDefaultColor];
	this._graphLineDefaultColor = '#3E90C9';
	this._graphLineDefaultOpacity = 0.9;
	this._graphLineDefaultWidth = 2;
	this._graphLineOpacity = [this._graphLineDefaultOpacity];
	this._graphLineSpeed = 90;
	this._graphLineStringValues = false;
	this._graphLineWidth = [this._graphLineDefaultWidth];
	this._graphPieAngle = 45;
	this._graphPieDepth = 15;
	this._graphPieOpacity = 1;
	this._graphPieOriginX = 0;
	this._graphPieOriginY = 0;
	this._graphPieRadius = 0;
	this._graphPieUnitsColor = '#777';
	this._graphPieUnitsFontFamily = false;
	this._graphPieUnitsFontSize = 8;
	this._graphPieUnitsOffset = 10;
	this._graphPieValuesColor = '#fff';
	this._graphPieValuesDecimals = 'auto';
	this._graphPieValuesFontFamily = false;
	this._graphPieValuesFontSize = 8;
	this._graphPieValuesOffset = - 20;
	this._graphPieValuesPrefix = false;
	this._graphPieValuesSuffix = false;
	this._grid = true;
	this._gridColorX = '#C6C6C6';
	this._gridColorY = '#C6C6C6';
	this._gridOpacityX = 0.5;
	this._gridOpacityY = 0.5;
	this._hideIds = [];
	this._host = '';
	this._initFailed = false;
	this._intervalEndX = false;
	this._intervalEndY = false;
	this._intervalStartX = false;
	this._intervalStartY = false;
	this._labelsAlignFirstX = false;
	this._labelsAlignFirstY = false;
	this._labelsAlignLastX = false;
	this._labelsAlignLastY = false;
	this._labelsColorX = '#777';
	this._labelsColorY = '#777';
	this._labelsFontFamilyX = false;
	this._labelsFontFamilyY = false;
	this._labelsFontSizeX = 8;
	this._labelsFontSizeY = 8;
	this._labelsPaddingBottom = false;
	this._labelsPaddingLeft = false;
	this._labelsX = [];
	this._labelsY = [];
	this._legendColor = '#999';
	this._legendDetect = true;
	this._legendFontFamily = false;
	this._legendFontSize = 8;
	this._legendPadding = false;
	this._legendPosition = 'top center';
	this._legends = [];
	this._legendsBar = [];
	this._legendShow = false;
	this._legendsLine = [];
	this._maxAxisX = 0;
	this._maxAxisY = 0;
	this._maxX = 0;
	this._maxY = 0;
	this._minAxisX = 0;
	this._minAxisY = 0;
	this._minX = 0;
	this._minY = 0;
	this._multipleSeries = false;
	this._name = '';
	this._offsetEndX = 0;
	this._offsetEndY = 0;
	this._offsetStartX = 0;
	this._offsetStartY = 0;
	this._showAlerts = true;
	this._stepUnitsX = 0;
	this._stepUnitsY = 0;
	this._sizeGraphX = 0;
	this._sizeGraphY = 0;
	this._sizeX = 400;
	this._sizeY = 300;
	this._textDefaultCharSpace = 100;
	this._textDefaultColor = '#000';
	this._textDefaultFontFamily = 'arial';
	this._textDefaultFontSize = 12;
	this._textDefaultFontWeight = 100;
	this._textDefaultFontWidth = 100;
	this._textDefaultId = '';
	this._textDefaultOpacity = 1;
	this._textDefaultRotation = 0;
	this._textPaddingBottom = false;
	this._textPaddingBottomDefault = 1;
	this._textPaddingLeft = false;
	this._textPaddingLeftDefault = 8;
	this._textPaddingTop = 15;
	this._textSupported = true;
	this._title = 'JS Chart';
	this._titleColor = '#8E8E8E';
	this._titleFontFamily = false;
	this._titleFontSize = 11;
	this._titlePosition = 'center';
	this._tooltipBackground = '#e6e6e6';
	this._tooltipBorder = '1px solid #d3d3d3';
	this._tooltipFontColor = '#335';
	this._tooltipFontFamily = 'arial';
	this._tooltipFontSize = 12;
	this._tooltipOffset = 7;
	this._tooltipOpacity = 0.7;
	this._tooltipPadding = '2px 5px';
	this._tooltipPosition = 'se';
	this._tooltipPositions = ['nw', 'sw', 'se', 'ne'];
	this._tooltips = {};
	this._tooltipsCopy = {};
	this._type = 'line';
	this._unitX = 1;
	this._unitY = 1;
	this._userLabel = '';
	this._userLabelColor = '#55f';
	this._userLabelFontFamily = false;
	this._userLabelFontSize = 9;
	this._userLabelOpacity = 0.8;
	this._userLabelPosition = 'ne';
	this._userLabelShadowColor = '#fff';
	this._valuesFormat = false;
	this._watermark = true;
	this._watermarkColor = '#757870';
	this._watermarkFontFamily = false;
	this._watermarkFontSize = 8;
	this._watermarkOpacity = 0.8;
	//this._watermarkSecureArray = ''; // imprastiat prin cod
	this._watermarkSecureMultiplier = 0.5;
	this._watermarkShadowColor = '#fff';
	
	//
	
	
	// METODE PRIVATE
	
	// alert maxima
	this._alert = function (err) {
		if (this._showAlerts) {
			this.JSChartAlerts[err]();
		}
	};
	
	// ataseaza un eveniment unui element
	this._attachEvent = function (elem, eventName, handler) {
		if (elem.attachEvent) {
			elem.attachEvent('on' + eventName, handler);
			return true;
		} else if (elem.addEventListener) {
			elem.addEventListener(eventName, handler, false);
			return true;
		}
		return false;
	};
	
	// verifica suportul Canvas
	this._checkCanvasSupport = function () {
		
		// pt securizare 3
		this._watermarkSecureArray.push(48.5,57,58);
		this._watermarkWrite += '35b69785d29';
		
		try {
			this._canvas.getContext('2d');
		}
		catch (err) {
			//alert(err.description);
			return false;
		}
		return true;
	};
	
	// verifica daca punctul se afla in 'interiorul' graficului
	this._checkDot = function (x, y, coords) {
		if (typeof coords === 'undefined') {
			coords = false;
		}
		if ((x < this._graphX || x > this._graphX + this._sizeGraphX ||
			y < this._graphY || y > this._graphY + this._sizeGraphY) && coords === true) {
			return false;
		}
		if ((x < this._minX || x > this._maxX ||
			y < this._minY || y > this._maxY) && coords === false) {
			return false;
		}
		return true;
	};
	
	// verifica numele
	this._checkName = function (name) {
		if (typeof name !== 'string') {
			return false;
		}
		if (!document.getElementById(name)) {
			return false;
		}
		return true;
	};
	
	// verifica tipul de grafic cerut
	this._checkType = function (type) {
		var len = this._allowedTypes.length;
		for (var i = 0; i < len; i++) {
			if (this._allowedTypes[i] === type) {
				return true;
			}
		}
		return false;
	};
	
	// verifica daca incap valorile pe axa X - ia in considerare si un eventual prefix/sufix
	this._checkValuesX = function (len, reversed) {
		if (reversed) {
			var _max = this._maxY;
			var _min = this._minY;
			var _axisValuesDecimals = this._axisValuesDecimalsY;
			var _axisValuesPrefix = this._axisValuesPrefixY;
			var _axisValuesSuffix = this._axisValuesSuffixY;
			var _axisValuesFontFamily = this._axisValuesFontFamilyY;
			var _axisValuesFontSize = this._axisValuesFontSizeY;
			var _axisValuesDistance = this._axisValuesDistanceY;
		} else {
			var _max = this._maxX;
			var _min = this._minX;
			var _axisValuesDecimals = this._axisValuesDecimalsX;
			var _axisValuesPrefix = this._axisValuesPrefixX;
			var _axisValuesSuffix = this._axisValuesSuffixX;
			var _axisValuesFontFamily = this._axisValuesFontFamilyX;
			var _axisValuesFontSize = this._axisValuesFontSizeX;
			var _axisValuesDistance = this._axisValuesDistanceX;
		}
		var fonttype = (_axisValuesFontFamily === false) ? this._textDefaultFontFamily : _axisValuesFontFamily;
		var total = 0;
		var step = this._sizeGraphX / len;
		var stepUnits = this._round((_max - _min) / len, _axisValuesDecimals);
		var unit = _min;
		//var posY = this._sizeY - this._axisPaddingBottom + 1;
		var posX = this._graphX;
		var string;
		while (posX < this._sizeGraphX + 20) {
			string = String(this._round(unit, this._axisValuesDecimals));
			if (typeof _axisValuesPrefix === 'string') {
				string = _axisValuesPrefix + string;
			}
			if (typeof _axisValuesSuffix === 'string') {
				string = string + _axisValuesSuffix;
			}
			var textLen = this._getTextLength(string, _axisValuesFontSize, null, null, fonttype);
			if (unit === _min) {
				textLen =  textLen / 2;
			}
			unit += stepUnits;
			posX += step;
			total += textLen;
		}
		
		string = String(_max);
		if (typeof _axisValuesPrefix === 'string') {
			string = _axisValuesPrefix + string;
		}
		if (typeof _axisValuesSuffix === 'string') {
			string = string + _axisValuesSuffix;
		}
		total += this._getTextLength(string, _axisValuesFontSize, null, null, fonttype) / 2;
		
		if (this._sizeGraphX - total - len * _axisValuesDistance > 0) {
			return true;
		}
		return false;
	};
	
	// verifica daca incap valorile pe axa Y
	this._checkValuesY = function (len, spacing) {
		var total = 0;
		var step = this._sizeGraphY / len;
		var stepUnits = (this._maxY - this._minY) / len;
		var unit = this._minY;
		//var posX = this._axisPaddingLeft - this._getTextLength(String(this._round(this._maxY, this._axisValuesDecimalsY)), this._axisValuesFontSizeY) - 4;
		var posY = this._graphY + this._sizeGraphY;
		while (posY > this._graphY) {
			var textHeight = this._getTextHeight(this._axisValuesFontSizeY);
			if (unit === this._minY) {
				textHeight =  textHeight / 2;
			}
			unit += stepUnits;
			posY -= step;
			total += textHeight;
		}
		total += this._getTextHeight(this._axisValuesFontSizeY) / 2;
		var result = this._sizeGraphY - total - len * this._axisValuesDistanceY;
		
		if (typeof spacing === 'undefined') {
			if (result > 0) {
				return true;
			}
			return false;
		} else {
			if (spacing && result > this._getTextHeight(this._axisValuesFontSizeY) * (len - 1) * 2) {
				return false;
			}
			return true;
		}
	};
	
	// cloneaza un obiect js
	this._cloneObject = function (obj) {
		var newObj = (obj instanceof Array) ? [] : {};
		for (var i in obj) {
			if (obj[i] && typeof obj[i] === "object") {
				newObj[i] = this._cloneObject(obj[i]);
			} else {
				newObj[i] = obj[i];
			}
		}
		return newObj;
	};
	
	// creaza element canvas
	this._createCanvas = function () {
		
		// pt securizare 2
		this._watermarkSecureArray.push(41.5,49.5,52);
		this._watermarkWrite += 'd3d3d20727';
		
		if (this._existsCanvas()) {
			return false;
		}
		var canvas = document.createElement('CANVAS');
		canvas.setAttribute('id', this._canvasIdPrefix + this._name);
		canvas.setAttribute('width', this._sizeX);
		canvas.setAttribute('height', this._sizeY);
		canvas.style.position = 'relative';
		canvas.style.backgroundColor = this._canvasColor;
		this._container.appendChild(canvas);
		this._canvas = canvas;
		this._canvasId = this._canvasIdPrefix + this._name;
	};
	
	// creaza map area
	this._createMap = function () {
		var map = document.createElement('MAP');
		map.setAttribute('name', 'map_' + this._canvasId);
		map.setAttribute('id', 'map_' + this._canvasId);
		this._container.appendChild(map);
		return map;
	};
	
	// creaza o arie in map area
	this._createMapArea = function (map, coords) {
		var area = document.createElement('AREA');
		area.setAttribute('shape', 'poly');
		area.setAttribute('coords', coords);
		map.appendChild(area);
		return area;
	};
	
	// creaza gif transparent pt map area
	this._createMapImg = function (map) {
		var img = '<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" '+
		'width="' + this._sizeX + '" ' +
		'height="' + this._sizeY + '" ' +
		'usemap="#map_' + this._canvasId + '" ' +
		'style="border:0;position:absolute;left:' + this._canvas.offsetLeft + ';top:' + this._canvas.offsetTop + ';' +
		'clip:\'rect(0, ' + this._sizeX + 'px, ' + this._sizeY + 'px, 0)\';' +
		'filter:alpha(opacity=0);' +
		'z-index:' + (this._canvas.style.zIndex + 10) + ';">';
		/*
		var img = document.createElement('IMG');
		img.style.position = 'absolute';
		img.style.left = this._canvas.offsetLeft + 'px';
		img.style.top = this._canvas.offsetTop + 'px';
		if (this._isIE()) {
			img.style.clip = 'rect(0, ' + this._sizeX + 'px, ' + this._sizeY + 'px, 0)';
			//img.style.clip = 'rect(0, 0, 0, 0)';
			img.style.filter = 'alpha(opacity=0)';
		}
		img.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
		img.setAttribute('usemap', '#map_' + this._canvasId);
		img.style.zIndex = Number(this._canvas.style.zIndex) + 10;
		img.style.padding = 0;
		img.style.margin = 0;
		img.style.border = 0;
		img.style.opacity = 0;
		img.style.zoom = 1;
		//img.style.width = this._sizeX + 'px';
		//img.style.height = this._sizeY + 'px';
		img.setAttribute('width', Number(this._sizeX));
		img.setAttribute('height', Number(this._sizeY));
		map.appendChild(img);
		*/
		map.innerHTML += img;
		return img;
	};
	
	// creaza div tooltip
	this._createTooltip = function (x, y, coordsX, coordsY, contents) {
		var tooltip = document.createElement('DIV');
		tooltip.style.position = 'absolute';
		tooltip.style.left = (this._canvas.offsetLeft + coordsX) + 'px';
		tooltip.style.top = (this._canvas.offsetTop + coordsY) + 'px';
		tooltip.style.border = this._tooltipBorder;
		tooltip.style.padding = this._tooltipPadding;
		tooltip.style.backgroundColor = this._tooltipBackground;
		tooltip.style.fontSize = this._tooltipFontSize + 'px';
		tooltip.style.fontFamily = this._tooltipFontFamily;
		tooltip.style.color = this._tooltipFontColor;
		tooltip.style.opacity = this._tooltipOpacity;
		tooltip.style.filter = 'alpha(opacity=' + (this._tooltipOpacity * 100) + ')';
		tooltip.style.display = 'none';
		tooltip.style.zIndex = Number(this._canvas.style.zIndex) + 100;
		tooltip.setAttribute('id', 'tooltip_' + this._canvasId + '_' + x + '_' + y);
		if (contents === null || contents === '' || contents === ' ') {
			tooltip.innerHTML = this._axisNameX + ': ' + x + '<br>' + this._axisNameY + ': ' + y;
		} else {
			tooltip.innerHTML = contents;
		}
		tooltip.position = this._tooltipPosition;
		tooltip.offset = this._tooltipOffset;
		tooltip.coordsX = this._canvas.offsetLeft + coordsX;
		tooltip.coordsY = this._canvas.offsetTop + coordsY;
		return tooltip;
	};
	
	// ataseaza evenimente la tooltip-uri si pozitionare
	this._createTooltips = function (x, y, coordsX, coordsY, contents, callback) {
		if (this._canvas.style.zIndex === '') {
			this._canvas.style.zIndex = 1;
		}
		
		if (true/*contents !== false && contents !== 'false'*/) { // doar pt tooltip cu continut - dar lasam efectul hover
			var tooltip = this._createTooltip(x, y, coordsX, coordsY, contents);
			
			// mareste flag la mouseover
			var expand = 5;
			var width = this._flagRadius * 2 + this._flagWidth * 2 + expand * 2 + 5;
			var height = this._flagRadius * 2 + this._flagWidth * 2 + expand * 2 + 5;
			var canvas = document.createElement('CANVAS');
			canvas.setAttribute('id', tooltip.getAttribute('id') + '_over');
			canvas.style.position = 'absolute';
			canvas.style.display = 'none';
			canvas.style.left = (this._canvas.offsetLeft + coordsX - width / 2) + 'px';
			canvas.style.top = (this._canvas.offsetTop + coordsY - height / 2) + 'px';
			canvas.style.width = width + 'px';
			canvas.width = width;
			canvas.style.height = height + 'px';
			canvas.height = height;
			canvas.style.zIndex = Number(this._canvas.style.zIndex) + 90;
			this._container.appendChild(canvas);
			if (this._isIE()) {
				canvas = G_vmlCanvasManager.initElement(canvas);
			}
			var ctx = canvas.getContext('2d');
			ctx.beginPath();
			ctx.lineWidth = this._flagWidth;
			ctx.strokeStyle = this._hexToRgb(this._flagColor, (this._flagWidth === 0) ? 0 : this._flagOpacity);
			
			switch (this._flagShape) {
				case 'square':
					ctx.moveTo(canvas.width / 2 - this._flagRadius - expand, canvas.height / 2 + this._flagRadius + expand);
					ctx.lineTo(canvas.width / 2 - this._flagRadius - expand, canvas.height / 2 - this._flagRadius - expand);
					ctx.lineTo(canvas.width / 2 + this._flagRadius + expand, canvas.height / 2 - this._flagRadius - expand);
					ctx.lineTo(canvas.width / 2 + this._flagRadius + expand, canvas.height / 2 + this._flagRadius + expand);
					//ctx.lineTo(canvas.width / 2 - this._flagRadius - expand, canvas.height / 2 + this._flagRadius + expand);
					ctx.closePath();
					break;
				case 'triangle':
					ctx.moveTo(width / 2 - (this._flagRadius + expand) * Math.cos(Math.PI / 6), height / 2 + (this._flagRadius + expand) * Math.cos(Math.PI / 3));
					ctx.lineTo(width / 2, height / 2 - this._flagRadius - expand);
					ctx.lineTo(width / 2 + (this._flagRadius + expand) * Math.cos(Math.PI / 6), height / 2 + (this._flagRadius + expand) * Math.cos(Math.PI / 3));
					//ctx.lineTo(width / 2 - (this._flagRadius + expand) * Math.cos(Math.PI / 6), height / 2 + (this._flagRadius + expand) * Math.cos(Math.PI / 3));
					ctx.closePath();
					break;
				case 'diamond':
					ctx.moveTo(canvas.width / 2 - this._flagRadius - expand, canvas.height / 2);
					ctx.lineTo(canvas.width / 2, canvas.height / 2 - this._flagRadius - expand);
					ctx.lineTo(canvas.width / 2 + this._flagRadius + expand, canvas.height / 2);
					ctx.lineTo(canvas.width / 2, canvas.height / 2 + this._flagRadius + expand);
					//ctx.lineTo(canvas.width / 2 - this._flagRadius - expand, canvas.height / 2);
					ctx.closePath();
					break;
				case 'circle':
				default:
					ctx.arc(width / 2, height / 2, this._flagRadius + expand, 0, Math.PI * 2, false);
			}
			if (this._flagFillColor !== false) {
				ctx.fillStyle = this._hexToRgb(this._flagFillColor, this._flagOpacity);
				ctx.fill();
			}
			ctx.stroke();
			
			var functionOver = function () {
				var elem = document.getElementById(tooltip.getAttribute('id') + '_over');
				elem.style.display = '';
				var elem = document.getElementById(tooltip.getAttribute('id') + '_flag');
				elem.style.display = 'none';
				if (contents !== false && contents !== 'false') { // mutat aici conditia pt continut 'false'
					elem = document.getElementById(tooltip.getAttribute('id'));
					elem.style.display = '';
					switch (elem.position) {
						case 'nw':
							elem.style.left = (parseInt(elem.coordsX, 10) - elem.offset - elem.scrollWidth) + 'px';
							elem.style.top = (parseInt(elem.coordsY, 10) - elem.offset - elem.scrollHeight) + 'px';
							break;
						case 'ne':
							elem.style.left = (parseInt(elem.coordsX, 10) + elem.offset) + 'px';
							elem.style.top = (parseInt(elem.coordsY, 10) - elem.offset - elem.scrollHeight) + 'px';
							break;
						case 'sw':
							elem.style.left = (parseInt(elem.coordsX, 10) - elem.offset - elem.scrollWidth) + 'px';
							elem.style.top = (parseInt(elem.coordsY, 10) + elem.offset) + 'px';
							break;
						default:
							elem.style.left = (parseInt(elem.coordsX, 10) + elem.offset) + 'px';
							elem.style.top = (parseInt(elem.coordsY, 10) + elem.offset) + 'px';
					}
				}
			};
			var functionOut = function () {
				document.getElementById(tooltip.getAttribute('id')).style.display = 'none';
				document.getElementById(tooltip.getAttribute('id') + '_over').style.display = 'none';
				document.getElementById(tooltip.getAttribute('id') + '_flag').style.display = '';
			};
			
			this._container.appendChild(tooltip);
			
			var trigger = this._createTrigger(x, y, coordsX, coordsY, callback);
			
			this._attachEvent(trigger, 'mouseover', functionOver);
			this._attachEvent(trigger, 'mouseout', functionOut);
			
			this._container.appendChild(trigger);
			
		}/* else if (callback) { // in caz ca avem callback pt tooltip fara continut - inutil acum cu modificarea de mai sus
			var trigger = this._createTrigger(x, y, coordsX, coordsY, callback);
			this._container.appendChild(trigger);
		}*/
	};
	
	// creaza div trigger pt tooltip-uri - foloseste innerhtml intr-un alt div pe care-l copiem in canvas
	this._createTrigger = function (x, y, coordsX, coordsY, callback) {
		var trigger = '<div ' +
			'style="position:absolute;' +
			'left:' + (this._canvas.offsetLeft + coordsX - this._flagRadius) + 'px;' +
			'top:' + (this._canvas.offsetTop + coordsY - this._flagRadius) + 'px;' +
			'width:' + (this._flagRadius * 2) + 'px;' +
			'height:' + (this._flagRadius * 2) + 'px;' +
			'font-size: 1px;' +
			'z-index: ' + (Number(this._canvas.style.zIndex) + 200) + ';' +
			'" id="trigger_' + x + '_' + y + '">' +
			'<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" '+
			'width="' + (this._flagRadius * 2) + '" ' +
			'height="' + (this._flagRadius * 2) + '" ' +
			"><\/div>";
		/*
		var trigger = document.createElement('DIV');
		trigger.style.position = 'absolute';
		trigger.style.left = (this._canvas.offsetLeft + coordsX - this._flagRadius) + 'px';
		trigger.style.top = (this._canvas.offsetTop + coordsY - this._flagRadius) + 'px';
		trigger.style.width = this._flagRadius * 2 + 'px';
		trigger.style.height =  this._flagRadius * 2 + 'px';
		trigger.style.fontSize = 1;
		trigger.style.zIndex = Number(this._canvas.style.zIndex) + 200;
		trigger.setAttribute('id', 'trigger_' + x + '_' + y);
		if (callback) {
			this._attachEvent(trigger, 'click', callback);
		}
		*/
		var div = document.createElement('DIV');
		div.innerHTML += trigger;
		var trigger = div.firstChild;
		var newTrigger = trigger.cloneNode(true);
		trigger.parentNode.removeChild(trigger);
		if (callback) {
			this._attachEvent(newTrigger, 'click', callback);
		}
		return newTrigger;
	};
	
	// sterge elementul canvas
	this._destroyCanvas = function () {
		if (!this._existsCanvas() && this._canvasId) {
			return false;
		}
		//document.getElementById(this._name).removeChild(this._canvas);
		var container = document.getElementById(this._name);
		if (container.hasChildNodes()) {
			while (container.childNodes.length >= 1) {
				container.removeChild(container.firstChild);
			} 
		}
	};
	
	// repara un bug legat de TD si IE
	this._dimensionsFix = function () {
		var to = this._canvas.firstChild.style;
		if (to.width === "0px") {
			var from = this._canvas.style;
			to.width = from.width;
			to.height = from.height;
		}
	};
	
	// (re)deseneaza graficul
	this._draw = function () {
		
		// pt securizare 1
		this._watermarkSecureArray = [49,60.5,16,37];
		this._watermarkWrite = '28634848203';
		
		// daca elementul canvas exista deja, rescrie-l
		if (this._existsCanvas()) {
			this._destroyCanvas();
		}
		this._createCanvas(); // securizare inserata 2
		
		// hack necesar pt IE
		if (this._isIE()) {
			this._canvas = G_vmlCanvasManager.initElement(this._canvas);
		}
		
		// verifica suportul Canvas
		if (!this._checkCanvasSupport()) { // securizare inserata 3
			this._alert('_noCanvasSupport');
			//return;
		}
		
		// contextul canvas
		this._ctx = this._canvas.getContext('2d');
		
		// stroketext este suportat? (intotdeauna este in ie datorita excanvas)
		if (!this._isIE()) {
			this._textSupported = this._isTextSupported();
		}
		
		// afiseaza legenda - situat aici pt calculul axisPadding... in caz ca nu avem coordonate setate de user
		if (this._legendShow && !this._isArray(this._legendPosition)) {
			this._showLegend();
		}
		
		// axisPadding... nu s-a customizat?
		if (this._axisPaddingTop === false) {
			this._axisPaddingTop = this._axisPaddingTopDefault;
		}
		if (this._axisPaddingBottom === false) {
			this._axisPaddingBottom = this._axisPaddingBottomDefault;
		}
		if (this._axisPaddingLeft === false) {
			this._axisPaddingLeft = this._axisPaddingLeftDefault;
		}
		if (this._axisPaddingRight === false) {
			this._axisPaddingRight = this._axisPaddingRightDefault;
		}
		if (this._textPaddingBottom === false) {
			this._textPaddingBottom = this._textPaddingBottomDefault;
		}
		if (this._textPaddingLeft === false) {
			this._textPaddingLeft = this._textPaddingLeftDefault;
		}
		
		// seteaza cateva variabile utile la desenarea graficului
		this._setGraph(); // securizare inserata 4
		
		// calcul min/max
		this._getLimits(); // securizare inserata 5
		
		// transformare valori in coordonate
		this._setUnits();
		
		// evalueaza hostul inainte de desenarea graficului pt a evita desenarea inainte de erori js
		
		//this._host = 'www.jumpeyecomponents.com'; // decomenteaza asta pt teste
		//this._host = 'www.jscharts.com'; // decomenteaza asta pt teste
		//this._host = 'wordpress.local'; // decomenteaza asta pt teste
		this._host = eval(encryptObj.hexToString(this._watermarkHostname)); // comenteaza asta pt teste // location.hostname
		if (/^www\./i.test(this._host)) {
			this._host = this._host.substr(4);
		}
		
		// deseneaza imagine de fond
		if (this._background !== false) {
			this._drawBackground();
		}
		
		// deseneaza grafic de tip 'line'
		if (this._type === 'line') {
			
			// deseneaza axele
			this._drawAxes();
			
			// calculeaza pozitia graficului fata de axe
			if (this._axisValuesX === 0) {
				this._scaleX();
			}
			if (this._axisValuesY === 0) {
				this._scaleY();
			}
			
			// deseneaza graficul
			this._drawLine();
			
			// deseneaza grid pe orizontala si verticala
			if (this._grid) {
				this._drawGridX();
				this._drawGridY();
			}
			
			// listeaza valorile pe axa X
			if (this._axisValuesShowX) {
				this._writeValuesX();
			}
			
			// listeaza valorile pe axa Y
			if (this._axisValuesShowY) {
				this._writeValuesY();
			}
			
			// scrie textele pe axe si titlul graficului
			this._writeAxesTexts();
			
			// scrie eventuale label-uri
			this._writeLabelsX();
			this._writeLabelsY();
		}
		
		// deseneaza grafic de tip 'bar'
		if (this._type === 'bar') {
			
			// deseneaza axele
			this._drawAxes();
			
			// calculeaza pozitia graficului fata de axe
			if (this._axisValuesY === 0) {
				this._scaleY();
			}
			
			// deseneaza grid pe orizontala
			if (this._grid) {
				this._drawGridX();
			}
			
			// deseneaza graficul
			this._drawBar();
			
			// listeaza valorile pe axa Y
			if (this._axisValuesShowY) {
				this._writeValuesY(this._axisReversed);
			}
			
			// scrie textele pe axe si titlul graficului
			this._writeAxesTexts();
			
			// scrie eventuale label-uri pe Y, cele pe X se scriu din _drawBar
			this._writeLabelsY();
		}
		
		// deseneaza grafic de tip 'pie'
		if (this._type === 'pie') {
			this._drawPie();
		}
		
		// scrie titlul graficului
		this._writeTitle();
		
		// pt IE trebuie reparat un bug (script si container in TD)
		if (this._isIE()) {
			this._dimensionsFix();
		}
		
		// afiseaza legenda - situat aici pt calculul axisPadding... in caz ca avem coordonate setate de user
		if (this._legendShow && this._isArray(this._legendPosition)) {
			this._showLegend();
		}
		
		return; // adaugat pt siguranta sa nu afisam watermarkul jumpeye
		
		// deseneaza watermark pt versiunea demo
		
		// genereaza hash de cautat
		var cHH = this._hashDomain(this._host);
		
		// afiseaza watermark-ul daca cheia sau codul nu sunt definite
		var userResult;
		var len;
		var pos;
		var i;
		if (typeof this.uC === 'undefined' || typeof this.uK === 'undefined') {
			len = this._watermarkSecureArray[this._watermarkSecureArray.length - 1];
			userResult = "";
			for (i = 0; i < len; i++) {
				userResult += String.fromCharCode(this._watermarkSecureArray[i] / this._watermarkSecureMultiplier);
			}
			pos = this._getWatermarkPosition(userResult);
			
			// urmatoarele linii sunt comentate pt a scoate watermark-ul jumpeye
			//this._write(userResult, pos[0] + 1, pos[1] + 1, this._watermarkFontSize, null, null, null, 'arial', this._watermarkShadowColor, this._watermarkOpacity);
			//this._write(userResult, pos[0], pos[1], this._watermarkFontSize, null, null, null, 'arial', this._watermarkColor, this._watermarkOpacity);
			//return;
		}
		
		// decripteaza codul si cheia de la utilizator
		userResult = encryptObj.des(this.uK, encryptObj.hexToString('0x' + this.uC), 0, 0, 0, 2);
		userResult = userResult.replace(/ /ig, '');
		userResult = userResult.replace(/\0/ig, '');
		
		// compara rezultatul cu hash-ul domeniului curent
		var rs = (userResult.indexOf(',') < 0) ? [userResult] : userResult.split(',');
		len = rs.length;
		for (var ix = 0; ix < len; ix++) {
			//alert(cHH + '\r\n' + rs[ix] + '\r\n' + cHH.length + '\r\n' + rs[ix].length + '\r\n' + (cHH === rs[ix]));
			
			// decomenteaza pt varianta cu watermark
			//if (eval(encryptObj.hexToString('0x' + this._watermarkWrite))) { // cHH === rs[ix]
			if (true) { // comenteaza pt varianta cu watermark
				// deseneaza eventual label personalizat
				this._writeUserLabel();
				return;
			}
		}
		
		// afiseaza watermark
		len = this._watermarkSecureArray[this._watermarkSecureArray.length - 1];
		userResult = "";
		for (i = 0; i < len; i++) {
			userResult += String.fromCharCode(this._watermarkSecureArray[i] / this._watermarkSecureMultiplier);
		}
		pos = this._getWatermarkPosition(userResult);
		this._write(userResult, pos[0] + 1, pos[1] + 1, this._watermarkFontSize, null, null, null, 'arial', this._watermarkShadowColor, this._watermarkOpacity);
		this._write(userResult, pos[0], pos[1], this._watermarkFontSize, null, null, null, 'arial', this._watermarkColor, this._watermarkOpacity);
		return;
		
		// sfarsit portiune watermark
	};
	
	// deseneaza axele
	this._drawAxes = function () {
		var extendX = this._graphExtendX ? this._sizeGraphX / 15 : 0;
		var extendY = this._graphExtendY ? this._sizeGraphY / 15 : 0;
		this._ctx.beginPath();
		this._ctx.lineWidth = this._axisWidth;
		this._ctx.strokeStyle = this._axisColor;
		this._ctx.moveTo(this._axisPaddingLeft, this._axisPaddingTop - extendY);
		this._ctx.lineTo(this._axisPaddingLeft, this._sizeY - this._axisPaddingBottom);
		this._ctx.lineTo(this._sizeX - this._axisPaddingRight + extendX, this._sizeY - this._axisPaddingBottom);
		this._ctx.stroke();
		if (this._3d && this._grid && this._type !== 'line') {
			this._ctx.lineWidth = 1;
			this._ctx.strokeStyle = this._gridColorY;
			this._ctx.moveTo(this._axisPaddingLeft + this._graphBarDepth, this._axisPaddingTop - extendY - this._graphBarDepth);
			this._ctx.lineTo(this._axisPaddingLeft + this._graphBarDepth, this._sizeY - this._axisPaddingBottom - this._graphBarDepth);
			this._ctx.lineTo(this._sizeX - this._axisPaddingRight + extendX + this._graphBarDepth, this._sizeY - this._axisPaddingBottom - this._graphBarDepth);
		}
		this._ctx.stroke();
	};
	
	// deseneaza imaginea de fond
	this._drawBackground = function () {
		this._canvas.style.background = 'url(' + this._background + ')';
	};
	
	// deseneaza bare
	this._drawBar = function () {
		var len = this._data.length;
		var len2;
		var slen;
		var textLen;
		var textHeight;
		var width = this._getBarWidth();
		var posX = this._graphBarSpacing;
		var posX1;
		var posX2;
		var posX3;
		var posX4;
		var posY;
		var posY1;
		var posY2;
		var posY3;
		var posY4;
		var coords;
		var contents;
		var p;
		var t;
		var x;
		var y;
		var hasDecimals;
		var decimals;
		var string;
		var fillStyle;
		var strokeStyle;
		var tooltip;
		var barColor;
		var barBorderColor;
		var barOpacity;
		var writtenValues;
		var writtenLabels;
		var fonttype;
		var step = (this._graphBarSpeed !== 1);
		var comms = [];
		var h;
		var l;
		var d;
		var c = 0;
		var b = 0;
		var delay = 0;
		var angle = - this._axisValuesAngle * Math.PI / 180;
		var map;
		var poly;
		var area;
		
		// fa o copie dupa tooltip-uri, in caz de redraw
		this._tooltipsCopy = this._cloneObject(this._tooltips);
		
		if (this._axisReversed) {
			width /= this._axisRatio;
			posY = this._sizeGraphY - this._graphBarSpacing / this._axisRatio;
			//posY = this._sizeGraphY + this._graphBarSpacing / this._axisRatio - width;
			//posY = this._graphBarSpacing / this._axisRatio;
		}
		
		// pregateste eventuale arii
		map = this._createMap();
		this._createMapImg(map);
		
		// deseneaza bara - in sens invers daca axa e inversata
		for (var i = (this._axisReversed) ? len - 1 : 0; (this._axisReversed && i >= 0) || (!this._axisReversed && i < len); i = (this._axisReversed) ? i - 1 : i + 1) {
		//for (var i = 0; i < len; i++) {
			slen = this._data[i].length - 1;
			
			writtenValues = false;
			writtenLabels = false;
			
			if (this._axisReversed && i === len - 1) {
				posY -= width / slen;
			}
			
			for (t = 0; t < slen; t++) { // poate sunt mai multe serii
				
				barBorderColor = (typeof this._graphBarBorderColor === 'string' || typeof this._graphBarBorderColor[t] === 'undefined') ? this._graphBarBorderDefaultColor : this._graphBarBorderColor[t];
				barColor = (typeof this._graphBarColor === 'string' || typeof this._graphBarColor[t] === 'undefined') ? this._graphBarDefaultColor : this._graphBarColor[t];
				barOpacity = (typeof this._graphBarOpacity === 'string' || typeof this._graphBarOpacity[t] === 'undefined') ? this._graphBarDefaultOpacity : this._graphBarOpacity[t];
				
				coords = this._getCoord(null, this._data[i][t + 1]);
				if (this._axisReversed) {
					coords = [coords[0], (this._sizeGraphY + this._graphY - coords[1]) * this._axisRatio + this._graphX];
				}
				fillStyle = this._hexToRgb((this._colors !== false) ? this._colors[i] : barColor, barOpacity);
				
				if (coords[1] > this._graphX + this._sizeGraphX && this._axisReversed) {
					coords[1] = this._graphX + this._sizeGraphX + 1;
					posX = coords[1];
				}
				if (coords[1] < this._graphY && !this._axisReversed) {
					coords[1] = this._graphY - 1;
					posY = coords[1];
				}
				
				if (!this._hideIds[(this._axisReversed) ? Math.abs(t - slen) - 1 : t]) { // in caz ca se da click pe legenda...
					
					// deseneaza bara propriu-zisa
					this._ctx.beginPath();
					this._ctx.fillStyle = fillStyle;
					if (step === false) {
						// fara animatie
						if (this._axisReversed) {
							this._ctx.fillRect(this._graphX, this._graphY + posY, coords[1] - this._graphX, width / slen);
							if (this._3d) {
								this._ctx.fillStyle = fillStyle;
								this._ctx.moveTo(this._graphX, this._graphY + posY);
								this._ctx.lineTo(coords[1], this._graphY + posY);
								this._ctx.lineTo(coords[1], this._graphY + posY + width / slen);
								this._ctx.lineTo(coords[1] + this._graphBarDepth, this._graphY + posY + width / slen - this._graphBarDepth);
								this._ctx.lineTo(coords[1] + this._graphBarDepth, this._graphY + posY - this._graphBarDepth);
								this._ctx.lineTo(this._graphX + this._graphBarDepth, this._graphY + posY - this._graphBarDepth);
								this._ctx.fill();
							}
						} else {
							this._ctx.fillRect(this._graphX + posX, coords[1], width / slen, this._graphY + this._sizeGraphY - coords[1]);
							if (this._3d) {
								this._ctx.fillStyle = fillStyle;
								this._ctx.moveTo(this._graphX + posX, coords[1]);
								this._ctx.lineTo(this._graphX + posX + this._graphBarDepth, coords[1] - this._graphBarDepth);
								this._ctx.lineTo(this._graphX + posX + width / slen + this._graphBarDepth, coords[1] - this._graphBarDepth);
								this._ctx.lineTo(this._graphX + posX + width / slen + this._graphBarDepth, this._graphY + this._sizeGraphY - this._graphBarDepth);
								this._ctx.lineTo(this._graphX + posX + width / slen, this._graphY + this._sizeGraphY);
								this._ctx.lineTo(this._graphX + posX + width / slen, coords[1]);
								this._ctx.fill();
							}
						}
					} else {
						// cu animatie
						step = Math.round((this._graphY + this._sizeGraphY) / this._graphBarSpeed);
						if (step < 3) {
							step = 3;
						}
						if (this._axisReversed) {
							//step = Math.round((coords[1] - this._graphX) / this._graphBarSpeed);
							for (h = this._graphX/*, c = 0*/; h < coords[1]; h += step, c++) {
								d = [];
								l = step;
								if (h + step > coords[1]) {
									l = coords[1] - h;
								}
								d.push({moveTo: [h, this._graphY + posY]});
								d.push({lineTo: [h + l, this._graphY + posY]});
								d.push({lineTo: [h + l, this._graphY + posY + width / slen]});
								d.push({lineTo: [h, this._graphY + posY + width / slen]});
								//d.push({fillRect: [h, this._graphY + posY, l, width / slen]});
								if (this._3d) {
									// cu corectie din cauza pixelilor liberi dintre liniile diagonale
									d.push({moveTo: [h, this._graphY + posY]});
									d.push({lineTo: [h + this._graphBarDepth, this._graphY + posY - this._graphBarDepth]});
									d.push({lineTo: [h + l + barOpacity * 0.5 + this._graphBarDepth, this._graphY + posY - this._graphBarDepth]});
									d.push({lineTo: [h + l + barOpacity * 0.5, this._graphY + posY]});
								}
								if (h + step >= coords[1] && this._3d) {
									d.push({moveTo: [h + l, this._graphY + posY]});
									d.push({lineTo: [h + l + this._graphBarDepth, this._graphY + posY - this._graphBarDepth]});
									d.push({lineTo: [h + l + this._graphBarDepth, this._graphY + posY + width / slen - this._graphBarDepth]});
									d.push({lineTo: [h + l, this._graphY + posY + width / slen]});
								}
								d.push({fill: []});
								comms.push({d: d, c: c});
							}
						} else {
							//step = Math.round((this._graphY + this._sizeGraphY - coords[1]) / this._graphBarSpeed);
							for (h = this._graphY + this._sizeGraphY/*, c = 0*/; h > coords[1]; h -= step, c++) {
								d = [];
								l = step;
								if (h - step < coords[1]) {
									l = h - coords[1];
								}
								d.push({moveTo: [this._graphX + posX, h - l]});
								d.push({lineTo: [this._graphX + posX, h]});
								d.push({lineTo: [this._graphX + posX + width / slen, h]});
								d.push({lineTo: [this._graphX + posX + width / slen, h - l]});
								if (this._3d) {
									// cu corectie din cauza pixelilor liberi dintre liniile diagonale
									d.push({moveTo: [this._graphX + posX + width / slen, h - l - barOpacity * 0.6]});
									d.push({lineTo: [this._graphX + posX + width / slen + this._graphBarDepth, h - l - barOpacity * 0.6 - this._graphBarDepth]});
									d.push({lineTo: [this._graphX + posX + width / slen + this._graphBarDepth, h - this._graphBarDepth]});
									d.push({lineTo: [this._graphX + posX + width / slen, h]});
								}
								if (h - step < coords[1] && this._3d) {
									d.push({moveTo: [this._graphX + posX, h - l]});
									d.push({lineTo: [this._graphX + posX + this._graphBarDepth, h - l - this._graphBarDepth]});
									d.push({lineTo: [this._graphX + posX + width / slen + this._graphBarDepth, h - l - this._graphBarDepth]});
									d.push({lineTo: [this._graphX + posX + width / slen, h - l]});
								}
								d.push({fill: []});
								comms.push({d: d, c: c});
							}
						}
						for (h = 0, len2 = comms.length; h < len2; h++) {
							delay = comms[h].c * 10 + 200;
							setTimeout((function(ctx, comms, fillStyle){
								return function() {
									ctx.beginPath();
									ctx.fillStyle = fillStyle;
									//var args = comms.fillRect.join(',');
									//eval('ctx.fillRect(' + args + ');');
									var args, x;
									for (var i = 0, len = comms.length; i < len; i++) {
										for (x in comms[i]) {
											args = comms[i][x].join(',');
											eval('ctx.' + x + '(' + args + ');');
										}
									}
									ctx.closePath();
								};
							})(this._ctx, comms[h].d, fillStyle), delay);
						}
						comms = [];
					}
					
					// border-ul barei
					this._ctx.strokeStyle = this._hexToRgb(barBorderColor, barOpacity);
					if (this._graphBarBorderWidth > 0) {
						this._ctx.lineWidth = this._graphBarBorderWidth;
						if (step === false) {
							// fara animatie
							if (this._axisReversed) {
								this._ctx.moveTo(this._graphX, this._graphY + posY);
								this._ctx.lineTo(coords[1], this._graphY + posY);
								if (coords[1] > this._graphX + this._sizeGraphX) {
									this._ctx.moveTo(coords[1], this._graphY + posY + width / slen);
								} else {
									this._ctx.lineTo(coords[1], this._graphY + posY + width / slen);
								}
								this._ctx.lineTo(this._graphX, this._graphY + posY + width / slen);
							} else {
								this._ctx.moveTo(this._graphX + posX, this._graphY + this._sizeGraphY);
								this._ctx.lineTo(this._graphX + posX, coords[1]);
								if (coords[1] < this._graphY) {
									this._ctx.moveTo(this._graphX + posX + width / slen, coords[1]);
								} else {
									this._ctx.lineTo(this._graphX + posX + width / slen, coords[1]);
								}
								this._ctx.lineTo(this._graphX + posX + width / slen, this._graphY + this._sizeGraphY);
							}
						} else {
							// cu animatie
							if (this._axisReversed) {
								for (h = this._graphX/*, b = 0*/; h < coords[1]; h += step, b++) {
									l = step;
									d = [];
									if (h + step > coords[1]) {
										l = coords[1] - h;
									}
									d.push({moveTo: [h, this._graphY + posY]});
									d.push({lineTo: [h + l, this._graphY + posY]});
									d.push({moveTo: [h, this._graphY + posY + width / slen]});
									d.push({lineTo: [h + l, this._graphY + posY + width / slen]});
									if (this._3d) {
										if (h === this._graphX) {
											d.push({moveTo: [h, this._graphY + posY]});
											d.push({lineTo: [h + this._graphBarDepth, this._graphY + posY - this._graphBarDepth]});
										} else {
											d.push({moveTo: [h + this._graphBarDepth, this._graphY + posY - this._graphBarDepth]});
										}
										d.push({lineTo: [h + l + this._graphBarDepth, this._graphY + posY - this._graphBarDepth]});
									}
									if (h + l === coords[1] && h + l <= this._graphX + this._sizeGraphX) {
										d.push({moveTo: [h + l, this._graphY + posY]});
										d.push({lineTo: [h + l, this._graphY + posY + width / slen]});
										if (this._3d) {
											d.push({lineTo: [h + l + this._graphBarDepth, this._graphY + posY + width / slen - this._graphBarDepth]});
											d.push({lineTo: [h + l + this._graphBarDepth, this._graphY + posY - this._graphBarDepth]});
											d.push({lineTo: [h + l, this._graphY + posY]});
										}
									}
									comms.push({d: d, c: b});
								}
							} else {
								for (h = this._graphY + this._sizeGraphY/*, b = 0*/; h > coords[1]; h -= step, b++) {
									l = step;
									d = [];
									if (h - step < coords[1]) {
										l = h - coords[1];
									}
									d.push({moveTo: [this._graphX + posX, h]});
									d.push({lineTo: [this._graphX + posX, h - l]});
									d.push({moveTo: [this._graphX + posX + width / slen, h]});
									d.push({lineTo: [this._graphX + posX + width / slen, h - l]});
									if (this._3d) {
										if (h === this._graphY + this._sizeGraphY) {
											d.push({moveTo: [this._graphX + posX + width / slen, h]});
											d.push({lineTo: [this._graphX + posX + width / slen + this._graphBarDepth, h - this._graphBarDepth]});
										} else {
											d.push({moveTo: [this._graphX + posX + width / slen + this._graphBarDepth, h - this._graphBarDepth]});
										}
										d.push({lineTo: [this._graphX + posX + width / slen + this._graphBarDepth, h - l - this._graphBarDepth]});
									}
									if (h - l === coords[1] && h - l >= this._graphY) {
										d.push({moveTo: [this._graphX + posX, h - l]});
										d.push({lineTo: [this._graphX + posX + width / slen, h - l]});
										if (this._3d) {
											d.push({lineTo: [this._graphX + posX + width / slen + this._graphBarDepth, h - l - this._graphBarDepth]});
											d.push({lineTo: [this._graphX + posX + this._graphBarDepth, h - l - this._graphBarDepth]});
											d.push({lineTo: [this._graphX + posX, h - l]});
										}
									}
									comms.push({d: d, c: b});
								}
							}
							for (h = 0, len2 = comms.length; h < len2; h++) {
								delay = comms[h].c * 10 + 200;
								setTimeout((function(ctx, comms, strokeStyle, lineWidth){
									return function() {
										ctx.beginPath();
										ctx.strokeStyle = strokeStyle;
										ctx.lineWidth = lineWidth;
										var args, x;
										for (var i = 0, len = comms.length; i < len; i++) {
											for (x in comms[i]) {
												args = comms[i][x].join(',');
												eval('ctx.' + x + '(' + args + ');');
											}
										}
										ctx.stroke();
									};
								})(this._ctx, comms[h].d, this._ctx.strokeStyle, this._ctx.lineWidth), delay);
							}
							comms = [];
						}
						this._ctx.stroke();
						this._ctx.closePath();
						
						// verifica daca bara ajunge in grafic sau iese afara - afiseaza un fade in aceste cazuri
						if (coords[1] > this._graphX + this._sizeGraphX && this._axisReversed) {
							coords[1] = this._graphX + this._sizeGraphX + 1;
							posX = coords[1];
							for (p = barOpacity; p > 0; p -= 0.1) {
								strokeStyle = this._hexToRgb((this._colors !== false) ? this._colors[i] : barColor, (p > barOpacity / 2) ? p : p / 2);
								setTimeout((function(ctx, strokeStyle, _3d, graphBarDepth, posX, posY1, posY2){
									return function(){
										ctx.beginPath();
										ctx.lineWidth = 1;
										ctx.strokeStyle = strokeStyle;
										if (_3d) {
											ctx.moveTo(posX + graphBarDepth, posY1 - graphBarDepth);
											ctx.lineTo(posX + graphBarDepth, posY2 - graphBarDepth);
											ctx.lineTo(posX, posY2);
										} else {
											ctx.moveTo(posX, posY1);
											ctx.lineTo(posX, posY2);
										}
										ctx.stroke();
									};
								})(this._ctx, strokeStyle, this._3d, this._graphBarDepth, posX, this._graphY + posY, this._graphY + posY + width / slen), delay);
								posX++;
							}
						}
						if (coords[1] < this._graphY && !this._axisReversed) {
							coords[1] = this._graphY - 1;
							posY = coords[1];
							for (p = barOpacity; p > 0; p -= 0.1) {
								strokeStyle = this._hexToRgb((this._colors !== false) ? this._colors[i] : barColor, (p > barOpacity / 2) ? p : p / 2);
								setTimeout((function(ctx, strokeStyle, _3d, graphBarDepth, posX1, posX2, posY){
									return function(){
										ctx.beginPath();
										ctx.lineWidth = 1;
										ctx.strokeStyle = strokeStyle;
										if (_3d) {
											ctx.moveTo(posX1, posY);
											ctx.lineTo(posX1 + graphBarDepth, posY - graphBarDepth);
											ctx.lineTo(posX2 + graphBarDepth, posY - graphBarDepth);
										} else {
											ctx.moveTo(posX1, posY);
											ctx.lineTo(posX2, posY);
										}
										ctx.stroke();
									};
								})(this._ctx, strokeStyle, this._3d, this._graphBarDepth, this._graphX + posX, this._graphX + posX + width / slen, posY), delay);
								posY--;
							}
						}
						
						// deseneaza o continuare cu fade a border-ului daca bara ar trebui sa se continue in sus
						if (coords[1] > this._graphX + this._sizeGraphX && this._axisReversed) {
							posX = coords[1] + 0.5;
							for (p = barOpacity; p > 0; p -= 0.1) {
								strokeStyle = this._hexToRgb(barBorderColor, (p > barOpacity/ 2) ? p : p / 2);
								setTimeout((function(ctx, strokeStyle, _3d, graphBarDepth, posX, posY1, posY2, posY3, posY4){
									return function(){
										ctx.beginPath();
										ctx.lineWidth = 1;
										ctx.strokeStyle = strokeStyle;
										ctx.moveTo(posX, posY1);
										ctx.lineTo(posX, posY2);
										ctx.moveTo(posX, posY3);
										ctx.lineTo(posX, posY4);
										if (_3d) {
											ctx.moveTo(posX + graphBarDepth, posY1 - graphBarDepth);
											ctx.lineTo(posX + graphBarDepth, posY2 - graphBarDepth);
										}
										ctx.stroke();
									};
								})(this._ctx, strokeStyle, this._3d, this._graphBarDepth, posX,
									this._graphY + posY - this._graphBarBorderWidth / 2,
									this._graphY + posY + this._graphBarBorderWidth / 2,
									this._graphY + posY - this._graphBarBorderWidth / 2 + width / slen,
									this._graphY + posY + this._graphBarBorderWidth / 2 + width / slen), delay);
								posX++;
							}
						}
						if (coords[1] < this._graphY && !this._axisReversed) {
							posY = coords[1] - 0.5;
							for (p = barOpacity; p > 0; p -= 0.1) {
								strokeStyle = this._hexToRgb(barBorderColor, (p > barOpacity/ 2) ? p : p / 2);
								setTimeout((function(ctx, strokeStyle, _3d, graphBarDepth, posX1, posX2, posX3, posX4, posY){
									return function(){
										ctx.beginPath();
										ctx.lineWidth = 1;
										ctx.strokeStyle = strokeStyle;
										ctx.moveTo(posX1, posY);
										ctx.lineTo(posX2, posY);
										ctx.moveTo(posX3, posY);
										ctx.lineTo(posX4, posY);
										if (_3d) {
											ctx.moveTo(posX3 + graphBarDepth, posY - graphBarDepth);
											ctx.lineTo(posX4 + graphBarDepth, posY - graphBarDepth);
										}
										ctx.stroke();
									};
								})(this._ctx, strokeStyle, this._3d, this._graphBarDepth,
									this._graphX + posX - this._graphBarBorderWidth / 2,
									this._graphX + posX + this._graphBarBorderWidth / 2,
									this._graphX + posX + width / slen - this._graphBarBorderWidth / 2,
									this._graphX + posX + width / slen + this._graphBarBorderWidth / 2, posY), delay);
								posY--;
							}
						}
					}
					
					// creaza sectiuni pt mouse click
					if (typeof this._areas[this._data[i][0]] !== 'undefined') {
						if (this._axisReversed) {
							poly = [this._graphX, this._graphY + posY,
									coords[1], this._graphY + posY,
									coords[1], this._graphY + posY + width / slen,
									this._graphX, this._graphY + posY + width / slen];
						} else {
							poly = [this._graphX + posX, coords[1],
									this._graphX + posX + width / slen, coords[1],
									this._graphX + posX + width / slen, this._graphY + this._sizeGraphY,
									this._graphX + posX, this._graphY + this._sizeGraphY];
						}
						area = this._createMapArea(map, poly);
						this._attachEvent(area, 'click', this._areas[this._data[i][0]]);
					}
					
					// tooltip-uri
					p = this._data[i][0];
					tooltip = this._tooltips[t + 1];
					if (typeof tooltip !== 'undefined' && typeof tooltip[p] !== 'undefined') {
						contents = (typeof tooltip[p][1] === 'undefined') ? null : tooltip[p][1];
						string = this._data[i][t + 1];
						if (typeof this._graphBarValuesPrefix === 'string') {
							string = this._graphBarValuesPrefix + string;
						}
						if (typeof this._graphBarValuesSuffix === 'string') {
							string = string + this._graphBarValuesSuffix;
						}
						if (this._axisReversed) {
							x = coords[1];
							y = this._graphY + posY + width / slen / 2;
						} else {
							x = this._graphX + posX + width / slen / 2;
							y = coords[1];
						}
						this._createTooltips(this._data[i][0], string, x, y, contents, (typeof tooltip[p]['callback'] === 'undefined') ? false : tooltip[p]['callback']);
						setTimeout(this._drawTooltipFlag(this, [x, y], this._data[i][0], string), delay);
					}
					tooltip = this._tooltips['__all__'];
					if (typeof tooltip !== 'undefined' && typeof tooltip[p] !== 'undefined') {
						contents = (typeof tooltip[p][1] === 'undefined') ? null : tooltip[p][1];
						string = this._data[i][t + 1];
						if (typeof this._graphBarValuesPrefix === 'string') {
							string = this._graphBarValuesPrefix + string;
						}
						if (typeof this._graphBarValuesSuffix === 'string') {
							string = string + this._graphBarValuesSuffix;
						}
						if (this._axisReversed) {
							x = coords[1];
							y = this._graphY + posY + width / slen / 2;
						} else {
							x = this._graphX + posX + width / slen / 2;
							y = coords[1];
						}
						this._createTooltips(this._data[i][0], string, x, y, contents, (typeof tooltip[p]['callback'] === 'undefined') ? false : tooltip[p]['callback']);
						setTimeout(this._drawTooltipFlag(this, [x, y], this._data[i][0], string), delay);
					}
				}
				
				// scrie textele sub bare
				fonttype = (this._axisValuesFontFamilyX === false) ? this._textDefaultFontFamily : this._axisValuesFontFamilyX;
				textLen = this._getTextLength(this._data[i][0], this._axisValuesFontSizeX, null, null, fonttype);
				if (this._data[i][t + 1] < this._minY) {
					if (this._axisReversed) {
						coords[1] = this._axisPaddingLeft - 4 - textLen;
					} else {
						coords[1] = this._graphY + this._sizeGraphY;
					}
				}
				if (coords[1] < this._graphY - this._legendHeight) {
					coords[1] = this._graphY - this._legendHeight - 5;
				}
				if (this._axisValuesShowX && !writtenValues) {
					writtenValues = true;
					if (this._axisReversed) {
						textHeight = this._getTextHeight(this._axisValuesFontSizeX);
						this._write(this._data[i][0], this._axisPaddingLeft - 4 - textLen, this._graphY + posY + width / slen - width / 2 - textHeight / 2, this._axisValuesFontSizeX, null, null, null, fonttype, this._axisValuesColorX);
					} else {
						if (this._axisValuesAngle > 0) {
							this._ctx.save();
							this._ctx.translate(this._graphX + posX + width / 2, this._sizeY - ((this._axisValuesPaddingBottom === false) ? this._axisPaddingBottom - 4 : this._axisValuesPaddingBottom) + this._axisValuesFontSizeX / 2 + 2);
							this._ctx.rotate(angle);
							this._write(this._data[i][0], 0 - textLen, 0 - this._axisValuesFontSizeX / 2 - 2, this._axisValuesFontSizeX, null, null, null, fonttype, this._axisValuesColorX);
							this._ctx.restore();
						} else {
							this._write(this._data[i][0], this._graphX + posX + width / 2 - textLen / 2, this._sizeY - ((this._axisValuesPaddingBottom === false) ? this._axisPaddingBottom - 4 : this._axisValuesPaddingBottom), this._axisValuesFontSizeX, null, null, null, fonttype, this._axisValuesColorX);
						}
					}
				}
				
				// valori pe bara
				if (this._graphBarValues && !this._hideIds[(this._axisReversed) ? Math.abs(t - slen) - 1 : t]) {
					string = (this._graphBarValuesDecimals === 'auto') ? this._data[i][t + 1] : this._data[i][t + 1].toFixed(this._graphBarValuesDecimals);
					
					// corecteaza eventuale valori cu multe zecimale
					hasDecimals = String(this._data[i][t + 1]).lastIndexOf('.');
					decimals = String(this._data[i][t + 1]).substr(hasDecimals + 1).length;
					if (decimals > 3 && this._graphBarValuesDecimals === 'auto') {
						string = this._round(this._data[i][t + 1], 3);
					}
					
					if (typeof this._graphBarValuesPrefix === 'string') {
						string = this._graphBarValuesPrefix + string;
					}
					if (typeof this._graphBarValuesSuffix === 'string') {
						string = string + this._graphBarValuesSuffix;
					}
					
					fonttype = (this._graphBarValuesFontFamily === false) ? this._textDefaultFontFamily : this._graphBarValuesFontFamily;
					textLen = this._getTextLength(String(string), this._graphBarValuesFontSize, null, null, fonttype);
					if (this._axisReversed) {
						this._write(string, coords[1] + 3, this._graphY + posY + width / slen / 2 - textHeight / 2, this._graphBarValuesFontSize, null, null, null, fonttype, this._graphBarValuesColor, null, null, null, delay);
					} else {
						this._write(string, this._graphX + posX + width / slen / 2 - textLen / 2, coords[1] - this._getTextHeight(this._graphBarValuesFontSize) - 3, this._graphBarValuesFontSize, null, null, null, fonttype, this._graphBarValuesColor, null, null, null, delay);
					}
				}
				
				// scrie eventuale label-uri
				if (!writtenLabels) {
					writtenLabels = true;
					len2 = this._labelsX.length;
					fonttype = (this._labelsFontFamilyX === false) ? this._textDefaultFontFamily : this._labelsFontFamilyX;
					for (p = 0; p < len2; p++) {
						if (this._labelsX[p][0] === this._data[i][0]) {
							textLen = this._getTextLength(String(this._labelsX[p][1]), this._labelsFontSizeX, null, null, fonttype);
							if (this._axisReversed) {
								this._write(this._labelsX[p][1], (this._labelsPaddingLeft === false) ? this._axisPaddingLeft - 4 - textLen : this._labelsPaddingLeft - textLen, this._graphY + posY + width / 2 - textHeight / 2, this._labelsFontSizeX, null, null, null, fonttype, this._labelsColorX);
							} else {
								if (this._axisValuesAngle > 0) {
									this._ctx.save();
									this._ctx.translate(this._graphX + posX + width / 2, this._sizeY - ((this._labelsPaddingBottom === false) ? this._axisPaddingBottom - 10 : this._labelsPaddingBottom - 4));
									this._ctx.rotate(angle);
									this._write(this._labelsX[p][1], 0 - textLen, 0 - this._labelsFontSizeX / 2 - 2, this._labelsFontSizeX, null, null, null, fonttype, this._labelsColorX);
									this._ctx.restore();
								} else {
									this._write(this._labelsX[p][1], this._graphX + posX + width / 2 - textLen / 2, this._sizeY - ((this._labelsPaddingBottom === false) ? this._axisPaddingBottom - 4 : this._labelsPaddingBottom), this._labelsFontSizeX, null, null, null, fonttype, this._labelsColorX);
								}
							}
						}
					}
				}
				
				//
				if (this._axisReversed) {
					if (t === slen - 1 && typeof this._data[i - 1] !== 'undefined') {
						posY -= width / (this._data[i - 1].length - 1);
						posY -= this._graphBarSpacing * 2 / this._axisRatio;
					} else {
						posY -= width / slen;
					}
					//posY = (t === slen - 1) ? posY - width / slen - 2 * this._graphBarSpacing / this._axisRatio : posY - width / slen;
					//posY = (t === slen - 1) ? posY + width / slen + 2 * this._graphBarSpacing / this._axisRatio : posY + width / slen;
				} else {
					posX = (t === slen - 1) ? posX + width / slen + 2 * this._graphBarSpacing : posX + width / slen;
				}
			}
		}
	};
	
	// deseneaza punctul la coordonatele specificate (pt linii)
	this._drawDot = function (x, y, lineWidth) {
		//this._ctx.fillStyle = this._hexToRgb(this._graphLineColor, this._graphLineOpacity);
		//this._ctx.fillRect(x - this._graphLineWidth / 2, y - this._graphLineWidth / 2, this._graphLineWidth, this._graphLineWidth);
		this._ctx.fillRect(x - lineWidth / 4, y - lineWidth / 4, lineWidth / 2, lineWidth / 2);
	};
	
	// deseneaza grid orizontal
	this._drawGridX = function () {
		// prelungeste gridul daca graficul e setat pt extindere
		if (this._axisReversed) {
			var extend = this._graphExtendY ? this._sizeGraphY / 15 : 0;
		} else {
			var extend = this._graphExtendX ? this._sizeGraphX / 15 : 0;
		}
		var step;
		var posX;
		var posY;
		
		if (this._axisValuesY === 0) {
			
			// calculam pozitia initiala pt afisare
			var unit = this._minAxisY;
			posY = this._graphY + this._sizeGraphY;
			posX = this._graphX;
			
			// afisarea valorilor intre maxY si minY
			while (unit <= this._maxAxisY) {
				this._ctx.beginPath();
				this._ctx.strokeStyle = this._hexToRgb(this._gridColorX, this._gridOpacityX);
				this._ctx.lineWidth = 1;
				if (this._axisReversed && this._type !== 'line') {
					if (this._3d) {
						this._ctx.moveTo(posX + this._graphBarDepth, this._graphY - extend - this._graphBarDepth);
						this._ctx.lineTo(posX + this._graphBarDepth, this._graphY + this._sizeGraphY - this._graphBarDepth);
						this._ctx.lineTo(posX, this._graphY + this._sizeGraphY);
					} else {
						this._ctx.moveTo(posX, this._graphY - extend);
						this._ctx.lineTo(posX, this._graphY + this._sizeGraphY);
					}
					posX += this._unitY * this._axisRatio;
				} else {
					if (this._3d && this._type !== 'line') {
						this._ctx.moveTo(this._graphX, posY);
						this._ctx.lineTo(this._graphX + this._graphBarDepth, posY - this._graphBarDepth);
						this._ctx.lineTo(this._graphX + this._sizeGraphX + extend + this._graphBarDepth, posY - this._graphBarDepth);
					} else {
						this._ctx.moveTo(this._graphX, posY);
						this._ctx.lineTo(this._graphX + this._sizeGraphX + extend, posY);
					}
					posY -= this._unitY;
				}
				unit += this._stepUnitsY;
				unit = Number(unit.toFixed(10));
				this._ctx.stroke();
			}
			
		} else {
			
			// verifica daca incap valorile pe axa Y
			var len = (this._axisValuesY > 1) ? this._axisValuesY - 1 : ((this._multipleSeries) ? this._data[0].length : this._data.length) - 1;
			while (!this._checkValuesY(len)) {
				len = Math.floor(len / 2);
			}
			
			// deseneaza liniile
			if (this._axisReversed) {
				step = this._sizeGraphX / len;
				posX = this._graphX;
			} else {
				step = this._sizeGraphY / len;
				posY = this._graphY + this._sizeGraphY;
			}
			for (var i = 0; i <= len; i++) {
				this._ctx.beginPath();
				this._ctx.strokeStyle = this._hexToRgb(this._gridColorX, this._gridOpacityX);
				this._ctx.lineWidth = 1;
				if (this._axisReversed && this._type !== 'line') {
					if (this._3d) {
						this._ctx.moveTo(posX, this._graphY - extend);
						this._ctx.lineTo(posX, this._graphY + this._sizeGraphY);
					} else {
						this._ctx.moveTo(posX, this._graphY - extend);
						this._ctx.lineTo(posX, this._graphY + this._sizeGraphY);
					}
					posX += step;
				} else {
					if (this._3d && this._type !== 'line') {
						this._ctx.moveTo(this._graphX, posY);
						this._ctx.lineTo(this._graphX + this._graphBarDepth, posY - this._graphBarDepth);
						this._ctx.lineTo(this._graphX + this._sizeGraphX + extend + this._graphBarDepth, posY - this._graphBarDepth);
					} else {
						this._ctx.moveTo(this._graphX, posY);
						this._ctx.lineTo(this._graphX + this._sizeGraphX + extend, posY);
					}
					posY -= step;
				}
				this._ctx.stroke();
			}
		}
	};
	
	// deseneaza grid vertical
	this._drawGridY = function () {
		// prelungeste gridul daca graficul e setat pt extindere
		var extend = this._graphExtendY ? this._sizeGraphY / 15 : 0;
		var stepUnits;
		var unit;
		var step;
		var posX;
		
		if (this._axisValuesX === 0) {
			unit = this._minAxisX;
			posX = this._graphX;
			
			// deseneaza liniile
			while (unit <= this._maxAxisX) {
				this._ctx.beginPath();
				this._ctx.strokeStyle = this._hexToRgb(this._gridColorY, this._gridOpacityY);
				this._ctx.lineWidth = 1;
				this._ctx.moveTo(posX, this._graphY + this._sizeGraphY);
				this._ctx.lineTo(posX, this._graphY - extend);
				this._ctx.stroke();
				unit += this._stepUnitsX;
				posX += this._unitX;
			}
			
		} else {
			
			// verifica daca incap valorile pe axa X
			var len = (this._axisValuesX > 1) ? this._axisValuesX - 1 : ((this._multipleSeries) ? this._data[0].length : this._data.length) - 1;
			while (!this._checkValuesX(len)) {
				len = Math.floor(len / 2);
			}
			
			// deseneaza liniile
			step = this._sizeGraphX / len;
			stepUnits = (this._maxX - this._minX) / len;
			unit = this._minX;
			posX = this._graphX;
			for (var i = 0; i <= len; i++) {
				this._ctx.beginPath();
				this._ctx.strokeStyle = this._hexToRgb(this._gridColorY, this._gridOpacityY);
				this._ctx.lineWidth = 1;
				this._ctx.moveTo(posX, this._graphY + this._sizeGraphY);
				this._ctx.lineTo(posX, this._graphY - extend);
				this._ctx.stroke();
				unit += stepUnits;
				posX += step;
			}
		}
	};
	
	// deseneaza linii
	this._drawLine = function () {
		var slen = this._data.length;
		var len;
		var len2;
		var p;
		var y;
		var i;
		var t;
		var coords;
		var ok;
		var inDot;
		var nextCoords;
		var lineColor;
		var lineWidth;
		var lineOpacity;
		var points = [];
		var tooltips = [];
		var step = (this._graphLineSpeed === 1) ? false : this._sizeGraphX / this._graphLineSpeed;
		var next;
		//console.dir(this._tooltips['__all__']);
		
		// fa o copie dupa tooltip-uri, in caz de redraw
		this._tooltipsCopy = this._cloneObject(this._tooltips);
		
		// repeta pt fiecare serie
		for (var s = 0; s < slen; s++) {
			
			if (this._hideIds[s]) {
				continue;
			}
			
			len = this._data[s].length;
			
			if (this._graphLineColor.length === 1) {
				lineColor = this._graphLineColor[0];
			} else {
				lineColor = (typeof this._graphLineColor[s] === 'undefined') ? this._graphLineColor[0] : this._graphLineColor[s];
			}
			
			if (this._graphLineOpacity.length === 1) {
				lineOpacity = this._graphLineOpacity[0];
			} else {
				lineOpacity = (typeof this._graphLineOpacity[s] === 'undefined') ? this._graphLineOpacity[0] : this._graphLineOpacity[s];
			}
			
			if (this._graphLineWidth.length === 1) {
				lineWidth = this._graphLineWidth[0];
			} else {
				lineWidth = (typeof this._graphLineWidth[s] === 'undefined') ? this._graphLineWidth[0] : this._graphLineWidth[s];
			}
			
			lineStyle = this._hexToRgb(lineColor, lineOpacity);
			for (i = 0; i < len; i++) {
				coords = this._getCoord(this._data[s][i][0], this._data[s][i][1]);
				if (i < len - 1) { // fara ultima valoare, aceea ramane pt tooltip-uri
					nextCoords = this._getCoord(this._data[s][i + 1][0], this._data[s][i + 1][1]);
					
					// calculeaza punctul de pornire daca primul capat este in afara graficului
					if (!this._checkDot(this._data[s][i][0], this._data[s][i][1])) {
						ok = false;
						for (p = coords[0]; p < nextCoords[0]; p += 0.01) {
							if (nextCoords[1] >= coords[1]) {
								y = (nextCoords[1] - coords[1]) * (p - coords[0]) / (nextCoords[0] - coords[0]) + coords[1];
							} else {
								y = (coords[1] - nextCoords[1]) * (p - coords[0]) / (nextCoords[0] - coords[0]) + coords[1];
								y = coords[1] * 2 - y;
							}
							if (this._checkDot(p, y, true)) {
								ok = true;
								break;
							}
						}
						if (!ok) { // nu s-au gasit puncte pe linie in interiorul graficului
							continue;
						}
						coords[0] = p;
						coords[1] = y;
					}
					
					// calculeaza punctul final daca ultimul capat este in afara graficului
					if (!this._checkDot(this._data[s][i + 1][0], this._data[s][i + 1][1])) {
						ok = false;
						inDot = false;
						for (p = coords[0]; p < nextCoords[0]; p += 0.01) {
							if (nextCoords[1] >= coords[1]) {
								y = (nextCoords[1] - coords[1]) * (p - coords[0]) / (nextCoords[0] - coords[0]) + coords[1];
							} else {
								y = (coords[1] - nextCoords[1]) * (p - coords[0]) / (nextCoords[0] - coords[0]) + coords[1];
								y = coords[1] * 2 - y;
							}
							if (this._checkDot(p, y, true)) {
								inDot = true;
							} else if (inDot) {
								ok = true;
								break;
							}
						}
						if (ok) { // nu s-a gasit capatul inainte de iesirea din grafic
							nextCoords[0] = p;
							nextCoords[1] = y;
						}
					}
					
					// fara animatie
					if (step === false) {
						// stroke incepe si se incheie cu fiecare iterare, workaround pt un bug in IEx in cazul repetarii ultimelor 2 seturi de valori in _data
						this._ctx.beginPath();
						this._ctx.strokeStyle = lineStyle;
						this._ctx.lineWidth = lineWidth;
						this._ctx.moveTo(coords[0], coords[1]);
						this._ctx.lineTo(nextCoords[0], nextCoords[1]);
						this._ctx.stroke();
					} else {
						for (p = coords[0]; p < nextCoords[0]; p += step) {
							if (nextCoords[1] >= coords[1]) {
								y = (nextCoords[1] - coords[1]) * (p - coords[0]) / (nextCoords[0] - coords[0]) + coords[1];
							} else {
								y = (coords[1] - nextCoords[1]) * (p - coords[0]) / (nextCoords[0] - coords[0]) + coords[1];
								y = coords[1] * 2 - y;
							}
							points.push([p, y]);
						}
						points.push([nextCoords[0], nextCoords[1]]);
					}
				}
				
				// creaza eventuale tooltip-uri...
				t = this._dataIds[s];
				p = this._data[s][i][0];
				
				// ...tooltip-uri pe linii specificate si...
				if (typeof this._tooltips[t] !== 'undefined' && typeof this._tooltips[t][p] !== 'undefined') {
					if (step !== false) {
						tooltips[coords[0]] = [t, p, s, i, coords];
					} else {
						this._lineTooltip(t, p, s, i, coords);
					//	delete this._tooltips[t][p];
					}
				}
				
				// ...tooltip-uri pe orice linie
				if (typeof this._tooltips['__all__'] !== 'undefined' && typeof this._tooltips['__all__'] !== 'undefined') {
					if (step !== false) {
						tooltips[coords[0]] = ['__all__', p, s, i, coords];
					} else {
						this._lineTooltip('__all__', p, s, i, coords);
						// delete this._tooltips['__all__'][p];
					}
				}
			}
			//console.dir(tooltips);
			// cu animatie
			if (step !== false) {
				for (p = 0, len2 = points.length; p < len2; p++) {
					if (typeof tooltips[points[p][0]] !== 'undefined') {
						t = tooltips[points[p][0]];
						this._lineTooltip(t[0], t[1], t[2], t[3], t[4], p * 10 + 50);
						// 	delete this._tooltips[t[0]][t[1]];
					}
					next = (p < len2 - 1) ? points[p + 1] : nextCoords;
					setTimeout((function(ctx, points, next, lineStyle, lineWidth){
						return function() {
							ctx.beginPath();
							ctx.strokeStyle = lineStyle;
							ctx.lineWidth = lineWidth;
							ctx.moveTo(points[0], points[1]);
							ctx.lineTo(next[0], next[1]);
							//ctx.fillRect(points[0] - lineWidth / 2, points[1] - lineWidth / 2, lineWidth / 2, lineWidth);
							ctx.stroke();
						};
					})(this._ctx, points[p], next, lineStyle, lineWidth), p * 10 + 50);
				}
				points = [];
			}
		}
	};
	
	// deseneaza pie
	this._drawPie = function () {
		var coords;
		var length;
		var len = this._data.length;
		var len2;
		var start = 0;
		var total = 0;
		var contents;
		var offsetX;
		var offsetY;
		var color;
		var usedColors = [];
		var hasDecimals;
		var decimals;
		var string;
		var textLen;
		var p;
		var l;
		var depth = 1;
		var scaleRatio = 1;
		var fonttype;
		var img;
		var map;
		var segments;
		var segment;
		var poly;
		var expand = 2;
		var width;
		var height;
		var canvas;
		
		// centreaza graficul daca nu este presetata o pozitie
		if (this._graphPieOriginX === 0) {
			this._graphPieOriginX = this._sizeX / 2;
		}
		if (this._graphPieOriginY === 0) {
			this._graphPieOriginY = this._sizeY / 2;
		}
		if (this._graphPieRadius === 0) {
			this._graphPieRadius = (this._sizeY > this._sizeX) ? this._sizeX / 3.75 : this._sizeY / 3.75;
		}
		for (var i = 0; i < len; i++) {
			total += this._data[i][1];
		}
		
		// scale this thing down...
		this._ctx.save();
		if (this._3d) {
			p = this._graphPieRadius * Math.cos(this._graphPieAngle * Math.PI / 180);
			scaleRatio = p / this._graphPieRadius;
			depth = this._graphPieDepth * Math.sin(this._graphPieAngle * Math.PI / 180) / scaleRatio;
			this._ctx.scale(1, scaleRatio);
			this._graphPieOriginY += (this._graphPieOriginY - this._graphPieOriginY * scaleRatio) / scaleRatio;
		}
		
		// deseneaza cadranul
		for (i = 0; i < len; i++) {
			length = this._data[i][1] * Math.PI * 2 / total;
			this._ctx.beginPath();
			if (this._isIE()) {
				this._ctx.fill(); // IE print bug pt prima sectiune din pie
				if (length === 0) {
					length = 0.001; // IE bug pt sectiuni cu valoarea 0
				}
			}
			//this._ctx.fillStyle = 'rgba(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + this._graphPieOpacity + ')'; // random colors
			color = this._getRandomColor(); // ia o culoarea aleatorie din set (de obicei...)
			if (i > 0) { // nu folosi aceeasi culoare de 2 ori
				while (usedColors[usedColors.length - 1] === color || (i === len - 1 && usedColors[0] === color)) {
					color = this._getRandomColor();
				}
			}
			usedColors[usedColors.length] = color;
			fillStyle = this._hexToRgb(color, this._graphPieOpacity);
			if (this._colors !== false) {
				fillStyle = this._hexToRgb(this._colors[i], this._graphPieOpacity);
			}
			this._ctx.fillStyle = fillStyle;
			this._ctx.arc(this._graphPieOriginX, this._graphPieOriginY, this._graphPieRadius, start, start + length, false);
			this._ctx.lineTo(this._graphPieOriginX, this._graphPieOriginY);
			this._ctx.fill();
			//this._ctx.stroke();
			this._ctx.closePath();
			
			// pie 3d
			if (this._3d && start <= Math.PI) {
				l = length;
				x1 = this._graphPieRadius * Math.cos(start);
				y1 = this._graphPieRadius * Math.sin(start);
				if (start + length > Math.PI) {
					x2 = -this._graphPieRadius;
					y2 = 0;
					l = Math.PI - start;
				} else {
					x2 = this._graphPieRadius * Math.cos(start + l);
					y2 = this._graphPieRadius * Math.sin(start + l);
				}
				
				this._ctx.beginPath();
				this._ctx.fillStyle = fillStyle;
				this._ctx.arc(this._graphPieOriginX, this._graphPieOriginY + depth, this._graphPieRadius, start, start + l, false);
				this._ctx.lineTo(this._graphPieOriginX + x2, this._graphPieOriginY + y2 + depth);
				this._ctx.arc(this._graphPieOriginX, this._graphPieOriginY, this._graphPieRadius, start + l, start, true);
				//this._ctx.stroke();
				this._ctx.fill();
				this._ctx.closePath();
			}
			start += length;
		}
		
		// scale inapoi la normal
		this._ctx.restore();
		
		// pregateste eventuale arii
		map = this._createMap();
		this._createMapImg(map);
		segments = Math.floor(this._graphPieRadius / 20);
		
		// din nou, pt texte, tooltip-uri etc
		start = 0;
		for (i = 0; i < len; i++) {
			length = this._data[i][1] * Math.PI * 2 / total;
			
			// creaza sectiuni pt mouse click
			if (typeof this._areas[this._data[i][0]] !== 'undefined') {
				poly = [this._graphPieOriginX, this._graphPieOriginY * scaleRatio];
				l = start;
				segment = length / segments;
				for (p = 0; p <= segments; p++, l += segment) {
					poly.push(this._graphPieOriginX + this._graphPieRadius * Math.cos(l));
					poly.push((this._graphPieOriginY + this._graphPieRadius * Math.sin(l)) * scaleRatio);
				}
				area = this._createMapArea(map, poly);
				this._attachEvent(area, 'click', this._areas[this._data[i][0]]);
			}
			
			// tooltip-uri
			len2 = this._tooltips.length;
			p = this._data[i][0];
			if (typeof this._tooltips[p] !== 'undefined') {
				coords = this._getPieCoords(start, length, this._flagOffset);
				contents = (typeof this._tooltips[p][1] === 'undefined') ? null : this._tooltips[p][1];
				
				string = this._data[i][1];
				if (typeof this._graphPieValuesPrefix === 'string') {
					string = this._graphPieValuesPrefix + string;
				}
				if (typeof this._graphPieValuesSuffix === 'string') {
					string = string + this._graphPieValuesSuffix;
				}
				
				this._createTooltips(this._data[i][0], string, coords[0], coords[1] * scaleRatio, contents, (typeof this._tooltips[p]['callback'] === 'undefined') ? false : this._tooltips[p]['callback']);
				
				setTimeout(this._drawTooltipFlag(this, coords, this._data[i][0], string, scaleRatio), 0);
			}
			
			// scrie textele - unitatile
			if (this._axisValuesShowX) {
				coords = this._getPieCoords(start, length, this._graphPieUnitsOffset);
				fonttype = (this._graphPieUnitsFontFamily === false) ? this._textDefaultFontFamily : this._graphPieUnitsFontFamily;
				if (start + length / 2 < Math.PI / 3 || start + length / 2 >= Math.PI / 3 * 5) {
					offsetX = 0;
					offsetY = - this._getTextHeight(this._graphPieUnitsFontSize) / 2;
				} else if (start + length / 2 < Math.PI / 3 * 2) {
					offsetX = - this._getTextLength(this._data[i][0], this._graphPieUnitsFontSize, null, null, fonttype) / 2;
					offsetY = 0;
				} else if (start + length / 2 < Math.PI / 3 * 4) {
					offsetX = - this._getTextLength(this._data[i][0], this._graphPieUnitsFontSize, null, null, fonttype);
					offsetY = - this._getTextHeight(this._graphPieUnitsFontSize) / 2;
				} else if (start + length / 2 < Math.PI / 3 * 5) {
					offsetX = - this._getTextLength(this._data[i][0], this._graphPieUnitsFontSize, null, null, fonttype) / 2;
					offsetY = - this._getTextHeight(this._graphPieUnitsFontSize);
				}
				this._write(this._data[i][0], coords[0] + offsetX, coords[1] * scaleRatio + offsetY, this._graphPieUnitsFontSize, null, null, null, fonttype, this._graphPieUnitsColor);
			}
			
			// scrie textele - valorile
			if (this._axisValuesShowY) {
				string = (this._graphPieValuesDecimals === 'auto') ? this._data[i][1] : this._data[i][1].toFixed(this._graphPieValuesDecimals);
				
				// corecteaza eventuale valori cu multe zecimale
				hasDecimals = String(this._data[i][1]).lastIndexOf('.');
				decimals = String(this._data[i][1]).substr(hasDecimals + 1).length;
				if (decimals > 3 && this._graphPieValuesDecimals === 'auto') {
					string = this._round(this._data[i][1], 3);
				}
				
				if (typeof this._graphPieValuesPrefix === 'string') {
					string = this._graphPieValuesPrefix + string;
				}
				if (typeof this._graphPieValuesSuffix === 'string') {
					string = string + this._graphPieValuesSuffix;
				}
				
				fonttype = (this._graphPieValuesFontFamily === false) ? this._textDefaultFontFamily : this._graphPieValuesFontFamily;
				textLen = this._getTextLength(String(string), this._graphPieValuesFontSize, null, null, fonttype);
				length = this._data[i][1] * Math.PI * 2 / total;
				coords = this._getPieCoords(start, length, this._graphPieValuesOffset);
				offsetY = - this._getTextHeight(this._graphPieValuesFontSize) / 2;
				offsetX = - textLen / 2;
				this._write(string, coords[0] + offsetX,coords[1] * scaleRatio + offsetY, this._graphPieValuesFontSize, null, null, null, fonttype, this._graphPieValuesColor);
			}
			
			start += length;
		}
	};
	
	// deseneaza tooltip flag
	this._drawTooltipFlag = function (o, coords, stringX, stringY, scaleRatio) {
		return function() {
			if (typeof scaleRatio === 'undefined') {
				scaleRatio = 1;
			}
			var expand = 2;
			var width = o._flagRadius * 2 + o._flagWidth * 2 + expand * 2;
			var height = o._flagRadius * 2 + o._flagWidth * 2 + expand * 2;
			var canvas = document.createElement('CANVAS');
			canvas.setAttribute('id', 'tooltip_' + o._canvasId + '_' + stringX + '_' + stringY + '_flag');
			canvas.style.position = 'absolute';
			canvas.style.width = width + 'px';
			canvas.width = width;
			canvas.style.height = height + 'px';
			canvas.height = height;
			canvas.style.left = (o._canvas.offsetLeft + coords[0] - width / 2) + 'px';
			canvas.style.top = (o._canvas.offsetTop + coords[1] - height / 2) * scaleRatio + 'px';
			canvas.style.zIndex = Number(o._canvas.style.zIndex) + 80;
			o._container.appendChild(canvas);
			if (o._isIE()) {
				canvas = G_vmlCanvasManager.initElement(canvas);
			}
			var ctx = canvas.getContext('2d');
			ctx.beginPath();
			ctx.lineWidth = o._flagWidth;
			ctx.strokeStyle = o._hexToRgb(o._flagColor, (o._flagWidth === 0) ? 0 : o._flagOpacity);
			
			switch (o._flagShape) {
				case 'square':
					ctx.moveTo(canvas.width / 2 - o._flagRadius, canvas.height / 2 + o._flagRadius);
					ctx.lineTo(canvas.width / 2 - o._flagRadius, canvas.height / 2 - o._flagRadius);
					ctx.lineTo(canvas.width / 2 + o._flagRadius, canvas.height / 2 - o._flagRadius);
					ctx.lineTo(canvas.width / 2 + o._flagRadius, canvas.height / 2 + o._flagRadius);
					//ctx.lineTo(canvas.width / 2 - o._flagRadius, canvas.height / 2 + o._flagRadius);
					ctx.closePath();
					break;
				case 'triangle':
					ctx.moveTo(canvas.width / 2 - o._flagRadius * Math.cos(Math.PI / 6), canvas.height / 2 + o._flagRadius * Math.cos(Math.PI / 3));
					ctx.lineTo(canvas.width / 2, canvas.height / 2 - o._flagRadius);
					ctx.lineTo(canvas.width / 2 + o._flagRadius * Math.cos(Math.PI / 6), canvas.height / 2 + o._flagRadius * Math.cos(Math.PI / 3));
					//ctx.lineTo(canvas.width / 2 - o._flagRadius * Math.cos(Math.PI / 6), canvas.height / 2 + o._flagRadius * Math.cos(Math.PI / 3));
					ctx.closePath();
					break;
				case 'diamond':
					ctx.moveTo(canvas.width / 2 - o._flagRadius, canvas.height / 2);
					ctx.lineTo(canvas.width / 2, canvas.height / 2 - o._flagRadius);
					ctx.lineTo(canvas.width / 2 + o._flagRadius, canvas.height / 2);
					ctx.lineTo(canvas.width / 2, canvas.height / 2 + o._flagRadius);
					//ctx.lineTo(canvas.width / 2 - o._flagRadius, canvas.height / 2);
					ctx.closePath();
					break;
				case 'circle':
				default:
					ctx.arc(canvas.width / 2, canvas.height / 2, o._flagRadius, 0, Math.PI * 2, false);
			}
			if (o._flagFillColor !== false) {
				ctx.fillStyle = o._hexToRgb(o._flagFillColor, o._flagOpacity);
				ctx.fill();
			}
			ctx.stroke();
		};
	};
	
	// echivalent empty in php
	this._empty = function (variable) {
		if (variable === "" ||
			variable === "0" ||
			variable === 0 ||
			variable === null ||
			variable === false ||
			variable === []) {
			return false;
		}
		return true;
	};
	
	// verifica daca exista deja un canvas
	this._existsCanvas = function () {
		if (document.getElementById(this._canvasId)) {
			return true;
		}
		return false;
	};
	
	// filtreaza variabilele de stilizare pt texte (pune stilurile implicite unde nu sunt suprascrise)
	this._filterTextStyles = function (fontsize, fontweight, fontwidth, charspace, fonttype, color, opacity, rotation, id) {
		var ret = [];
		ret.fontsize = (typeof fontsize === 'undefined' || fontsize === null) ? this._textDefaultFontSize : fontsize;
		ret.fontweight = (typeof fontweight === 'undefined' || fontweight === null) ? this._textDefaultFontWeight : fontweight;
		ret.fontwidth = (typeof fontwidth === 'undefined' || fontwidth === null) ? this._textDefaultFontWidth : fontwidth;
		ret.charspace = (typeof charspace === 'undefined') || charspace === null ? this._textDefaultCharSpace : charspace;
		ret.fonttype = (typeof fonttype === 'undefined' || fonttype === null) ? this._textDefaultFontFamily : fonttype;
		ret.color = (typeof color === 'undefined' || color === null) ? this._textDefaultColor : color;
		ret.opacity = (typeof opacity === 'undefined' || opacity === null) ? this._textDefaultOpacity : opacity;
		ret.rotation = (typeof rotation === 'undefined' || rotation === null) ? this._textDefaultRotation : rotation;
		ret.id = (typeof id === 'undefined' || id  === null) ? this._textDefaultId : id;
		return ret;
	};
	
	// formateaza o valoare
	this._formatValue = function (i) {
		i = String(i);
		var a = false;
		var b = false;
		var n = '';
		var s;
		if (this._valuesFormat === '.') {
			var sep = '.';
			var tho = ',';
		} else {
			var sep = ',';
			var tho = '.';
		}
		var point = i.lastIndexOf('.');
		if (point === -1) {
			a = i;
		} else {
			a = i.substr(0, point);
			b = i.substr(point + 1);
		}
		for (var p = a.length - 1, step = 0; p >= 0; p--, step++) {
			s = a.substr(p, 1);
			if (/[0-9]/.test(s)) {
				if (step === 3) {
					step = -1;
					p++;
					n = tho + n;
				} else {
					n = s + n;
				}
			}
		}
		return (b === false) ? n : n + sep + b;
	};
	
	// calculeaza latimea barelor
	this._getBarWidth = function () {
		var basicWidth = this._sizeGraphX / this._data.length;
		this._graphBarSpacing = Math.round(basicWidth * this._graphBarSpacingRatio / 100);
		return basicWidth - 2 * this._graphBarSpacing;
	};
	
	// transforma valorile in coordonate
	this._getCoord = function (x, y) {
		var coord = [null, null];
		if (typeof x === 'number') {
			coord[0] = (this._axisValuesX === 0) ? (x - this._minAxisX) * this._unitX / this._stepUnitsX + this._graphX : (x - this._minX) * this._unitX + this._graphX;
		}
		if (typeof y === 'number') {
			coord[1] = (this._axisValuesY === 0) ? (this._maxAxisY - y) * this._unitY / this._stepUnitsY + this._graphY : (this._maxY - y) * this._unitY + this._graphY;
		}
		return coord;
	};
	
	// calcult valori maxime si minimie pe axe
	this._getLimits = function () {
		
		// pt securizare 5
		this._watermarkSecureArray.push(55.5,54.5,15);
		this._watermarkHostname += 'f6e2e686f73746e616d65';
		
		this._minX = this._getMinX();
		this._minY = this._getMinY();
		this._maxX = this._getMaxX();
		this._maxY = this._getMaxY();
		
		// in cazul barelor minY va fi intotdeauna 0, ulterior ridicam valoarea daca e cazul
		if (this._type === 'bar') {
			var base = 0;
			while (this._maxY - this._minY < (this._minY - base) * 20 / 100) {
				base = (this._minY - base) * 90 / 100 + base;
			}
			this._minY = base;
		}
		
		// modifica limitele daca sunt modificate de catre utilizator
		if (this._type === 'line') {
			if (this._intervalStartX !== false && this._intervalEndX !== false && this._intervalStartX > this._intervalEndX) {
				this._alert('_invalidIntervalX');
				this._intervalStartX = false;
				this._intervalEndX = false;
			} else {
				if (this._intervalStartX !== false) {
					this._minX = this._intervalStartX;
				}
				if (this._intervalEndX !== false) {
					this._maxX = this._intervalEndX;
				}
			}
		}
		if (this._type === 'line' || this._type === 'bar') {
			if (this._intervalStartY !== false && this._intervalEndY !== false && this._intervalStartY > this._intervalEndY) {
				this._alert('_invalidIntervalY');
				this._intervalStartY = false;
				this._intervalEndY = false;
			} else {
				if (this._intervalStartY !== false) {
					this._minY = this._intervalStartY;
				} else if (this._type === 'bar') {
					this._minY = 0;
				}
				if (this._intervalEndY !== false) {
					this._maxY = this._intervalEndY;
				}
			}
		}
	};
	
	// calcul valoare maxima pe axa X
	this._getMaxX = function () {
		var tmp;
		var len;
		var i;
		if (this._multipleSeries) {
			var slen = this._data.length;
			for (var s = 0; s < slen; s++) {
				len = this._data[s].length;
				for (i = 0; i < len; i++) {
					if (typeof tmp === 'undefined') {
						tmp = this._data[s][i][0];
					} else {
						if (tmp < this._data[s][i][0]) {
							tmp = this._data[s][i][0];
						}
					}
				}
			}
		} else {
			len = this._data.length;
			for (i = 0; i < len; i++) {
				if (i === 0) {
					tmp = this._data[i][0];
				} else {
					if (tmp < this._data[i][0]) {
						tmp = this._data[i][0];
					}
				}
			}
		}
		return tmp;
	};
	
	// calcul valoare maxima pe axa Y
	this._getMaxY = function () {
		var tmp;
		var slen;
		var len;
		var i;
		var s;
		if (this._multipleSeries) {
			slen = this._data.length;
			for (s = 0; s < slen; s++) {
				len = this._data[s].length;
				for (i = 0; i < len; i++) {
					if (typeof tmp === 'undefined') {
						tmp = this._data[s][i][1];
					} else {
						if (tmp < this._data[s][i][1]) {
							tmp = this._data[s][i][1];
						}
					}
				}
			}
		} else {
			len = this._data.length;
			for (i = 0; i < len; i++) {
				slen = this._data[i].length - 1;
				for (s = 1; s <= slen; s++) {
					if (i === 0 && s === 1) {
						tmp = this._data[i][s];
					} else {
						if (tmp < this._data[i][s]) {
							tmp = this._data[i][s];
						}
					}
				}
			}
		}
		return tmp;
	};
	
	// calcul valoare minima pe axa X
	this._getMinX = function () {
		var tmp;
		var leni;
		var i;
		if (this._multipleSeries) {
			var slen = this._data.length;
			var i;
			for (var s = 0; s < slen; s++) {
				len = this._data[s].length;
				for (i = 0; i < len; i++) {
					if (typeof tmp === 'undefined') {
						tmp = this._data[s][i][0];
					} else {
						if (tmp > this._data[s][i][0]) {
							tmp = this._data[s][i][0];
						}
					}
				}
			}
		} else {
			len = this._data.length;
			for (i = 0; i < len; i++) {
				if (i === 0) {
					tmp = this._data[i][0];
				} else {
					if (tmp > this._data[i][0]) {
						tmp = this._data[i][0];
					}
				}
			}
		}
		return tmp;
	};
	
	// calcul valoare minima pe axa Y
	this._getMinY = function () {
		var tmp;
		var len;
		var i;
		if (this._multipleSeries) {
			var slen = this._data.length;
			for (var s = 0; s < slen; s++) {
				len = this._data[s].length;
				for (i = 0; i < len; i++) {
					if (typeof tmp === 'undefined') {
						tmp = this._data[s][i][1];
					} else {
						if (tmp > this._data[s][i][1]) {
							tmp = this._data[s][i][1];
						}
					}
				}
			}
		} else {
			len = this._data.length;
			for (i = 0; i < len; i++) {
				if (i === 0) {
					tmp = this._data[i][1];
				} else {
					if (tmp > this._data[i][1]) {
						tmp = this._data[i][1];
					}
				}
			}
		}
		return tmp;
	};
	
	// calculeaza coordonatele pt tete si flag pt pie
	this._getPieCoords = function (start, length, offset) {
		var coords;
		if (start + length / 2 < Math.PI / 2) {
			coords = this._getPieTextCoords1(start, start + length, this._graphPieOriginX, this._graphPieOriginY, this._graphPieRadius + offset);
		} else if (start + length / 2 < Math.PI) {
			coords = this._getPieTextCoords2(start, start + length, this._graphPieOriginX, this._graphPieOriginY, this._graphPieRadius + offset);
		} else if (start + length / 2 < Math.PI + Math.PI / 2) {
			coords = this._getPieTextCoords3(start, start + length, this._graphPieOriginX, this._graphPieOriginY, this._graphPieRadius + offset);
		} else {
			coords = this._getPieTextCoords4(start, start + length, this._graphPieOriginX, this._graphPieOriginY, this._graphPieRadius + offset);
		}
		return coords;
	};
	
	// calcule pozitii texte pe pie (4 formule)
	this._getPieTextCoords1 = function (angle1, angle2, x, y, rad) {
		var angle = (angle2 - angle1) / 2 + angle1;
		return [x + rad * Math.cos(angle), y + rad * Math.sin(angle)];
	};
	
	this._getPieTextCoords2 = function (angle1, angle2, x, y, rad) {
		var angle = (angle2 - angle1) / 2 + Math.PI - angle2;
		return [x - rad * Math.cos(angle), y + rad * Math.sin(angle)];
	};
	
	this._getPieTextCoords3 = function (angle1, angle2, x, y, rad) {
		var angle = (angle2 - angle1) / 2 + angle1 - Math.PI;
		return [x - rad * Math.cos(angle), y - rad * Math.sin(angle)];
	};
	
	this._getPieTextCoords4 = function (angle1, angle2, x, y, rad) {
		var angle = 2 * Math.PI - angle1 - (angle2 - angle1) / 2;
		return [x + rad * Math.cos(angle), y - rad * Math.sin(angle)];
	};
	
	// preia la intamplare o culoare din set
	this._getRandomColor = function () {
		var index = Math.abs(Math.round(Math.random() * this._colorSet.length - 1));
		return this._colorSet[index];
	};
	
	// calculeaza inaltimea textului - copiat din stroketext
	this._getTextHeight = function (size) {
		if (!this._textSupported) {
			return get_textHeight(size);
		}
		var size = (typeof size === 'undefined') ? 12 : size;
		return 32 * (size / 25); 
	};
	
	// vezi care este lungimea in pixeli a unui text
	this._getTextLength = function (text, fontsize, fontwidth, charspace, fonttype) {
		this._ctx.font = (this._isIE()) ? fontsize + this._fontsizeCorrectionIE + this._fontsizeCorrection + 'px "' + fonttype + '"' : fontsize + this._fontsizeCorrection + 'px "' + fonttype + '"';
		if (!this._textSupported) {
			return get_textWidth(text, fontsize, fontwidth, charspace, 'sans-serif');
		} else {
			return this._ctx.measureText(text).width;
		}
	};
	
	// calculeaza pozitia watermark-ului
	this._getWatermarkPosition = function (watermark, userLabel) {
		var criteria;
		var fontSize;
		var fonttype = (this._userLabelFontFamily === false) ? this._textDefaultFontFamily : this._userLabelFontFamily;
		if (userLabel) {
			switch (this._userLabelPosition) {
				case 'ne':
					criteria = 0;
					break;
				case 'se':
					criteria = 1;
					break;
				case 'sw':
					criteria = 2;
					break;
				default:
					criteria = 3;
			}
			fontSize = this._userLabelFontSize;
		} else {
			criteria = parseInt(Math.random() * 4, 10);
			criteria = 1; // forteaza pozitia SE pt watermark
			fontSize = this._watermarkFontSize;
		}
		var posX;
		var posY;
		switch (criteria) {
			case 0:
				if (this._type === 'pie') {
					posY = this._graphPieOriginY - this._graphPieRadius - this._graphPieUnitsOffset - this._graphPieUnitsFontSize - this._getTextHeight(fontSize) - 5;
					posX = this._graphPieOriginX + this._graphPieOriginY - posY - this._getTextLength(watermark, fontSize, null, null, fonttype);
				} else {
					posX = this._sizeX - this._axisPaddingRight - this._getTextLength(watermark, fontSize, null, null, fonttype);
					posY = this._graphY;
				}
				break;
			case 1:
				if (this._type === 'pie') {
					posY = this._graphPieOriginY + this._graphPieRadius + this._graphPieUnitsOffset + this._graphPieUnitsFontSize + 5;
					posX = this._graphPieOriginX + posY - this._graphPieOriginY - this._getTextLength(watermark, fontSize, null, null, fonttype);
				} else {
					posX = this._sizeX - this._axisPaddingRight - this._getTextLength(watermark, fontSize, null, null, fonttype);
					posY = this._sizeY - this._axisPaddingBottom - this._getTextHeight(fontSize) - 5;
				}
				break;
			case 2:
				if (this._type === 'pie') {
					posY = this._graphPieOriginY + this._graphPieRadius + this._graphPieUnitsOffset + this._graphPieUnitsFontSize + 5;
					posX = this._graphPieOriginX - (posY - this._graphPieOriginY) - 5;
				} else {
					posX = this._axisPaddingLeft + 5;
					posY = this._sizeY - this._axisPaddingBottom - this._getTextHeight(fontSize) - 5;
				}
				break;
			default:
				if (this._type === 'pie') {
					posY = this._graphPieOriginY - this._graphPieRadius - this._graphPieUnitsOffset - this._graphPieUnitsFontSize - this._getTextHeight(fontSize) - 5;
					posX = this._graphPieOriginX - (this._graphPieOriginY - posY) + 5;
				} else {
					posX = this._axisPaddingLeft + 5;
					posY = this._graphY;
				}
		}
		return [posX, posY];
	};
	
	// algoritm hash domeniu
	this._hashDomain = function (host) {
		var arr = host.split('.');
		var len = arr.length;
		var hostHash = '';
		for (var i = 0; i < len; i++) {
			hostHash += this.HASH.hex_md5(arr[i]);
		}
		return this.HASH.hex_md5(hostHash);
	};
	
	// converteste culori hexa in rgba
	this._hexToRgb = function (color, alpha) {
		if (typeof color === 'undefined' || (color.length !== 4 && color.length !== 7)) {
			this._alert('_invalidColor');
			return false;
		}
		if (color.length === 4) {
			color = ('#' + color.substring(1, 2)) + color.substring(1, 2) + color.substring(2, 3) + color.substring(2, 3) + color.substring(3, 4) + color.substring(3, 4);
		}
		var r = parseInt(color.substring(1, 7).substring(0, 2), 16);
		var g = parseInt(color.substring(1, 7).substring(2, 4), 16);
		var b = parseInt(color.substring(1, 7).substring(4, 6), 16);
		return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
	};
	
	// e clar la ce foloseste...
	this._inArray = function (arr, needle) {
		for (var i = 0, len = arr.length; i < len; i++) {
			if (arr[i] === needle) {
				return true;
			}
		}
		return false;
	};
	
	// initializeaza aplicatia
	this._init = function (name, type, code, ik, resize) {
		
		// comenteaza in varianta comerciala, cu watermark-ul jumpeye:
		code = '';
		ik = '';
		
		// verifica 'name', trebuie sa fie string si sa reprezinte id-ul unui tag html existent (continatorul graficului)
		if (!this._checkName(name)) {
			this.initFailed = true;
			this._alert('_noName');
			return;
		}
		
		// creaza obiectele DOM si eventual goleste container-ul
		this._name = name;
		this._container = document.getElementById(name);
		this._container.innerHTML = '';
		
		// verifica daca tipul grafic cerut este disponibil
		if (!this._checkType(type)) {
			this._initFailed = true;
			this._alert('_noType');
			return;
		}
		
		// pastreaza cheile
		eval(encryptObj.hexToString('0x746869732e75433d636f6465')); // this.uC=code
		eval(encryptObj.hexToString('0x746869732e754b3d696b')); // this.uK=ik
		
		// seteaza dimensiunile graficului dupa continator daca e deja stilizat prin CSS
		if (resize) {
			var width = this._container.style.width;
			var height = this._container.style.height;
			this._setSize(width, height);
		}
	};
	
	// verifica daca datele sunt in format potrivit pt tipul graficului
	this._isAllowedFormat = function (data) {
		var format = this._allowedFormats[this._type];
		if (!this._isArray(data)) {
			return false;
		}
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (!this._isArray(data[i])) {
				return false;
			}
			if (data[i].length < format.length) {
				return false;
			}
			len2 = 2/*data[i].length*/;
			for (var p = 0; p < len2; p++) {
				if (typeof data[i][p] !== format[p]) {
					return false;
				}
				if (isNaN(data[i][p]) && format[p] === 'number') {
					return false;
				}
			}
		}
		return true;
	};
	
	// verifica daca datele sunt in format array
	this._isArray = function (data) {
		if (data instanceof Array) {
			return true;
		}
		return false;
	};
	
	// verifica daca argumentul este o functie
	this._isFunction = function (arg) {
		return Object.prototype.toString.call(arg) === "[object Function]";
	};
	
	// verifica daca browser-ul este Internet Explorer
	this._isIE = function () {
		var browser = navigator.userAgent.toLowerCase();
		return (!/^opera/.test(browser) && /msie/.test(browser));
	};
	
	// verifica daca browser-ul este Mozilla
	this._isMozilla = function () {
		var browser = navigator.userAgent.toLowerCase();
		return (/mozilla/.test(browser) && !/(compatible|webkit)/.test(browser));
	};
	
	// verifica daca browser-ul este Opera - nu este relevant nici eficient, se va folosi _isTextSupported/_textSupported
	this._isOpera = function () {
		var browser = navigator.userAgent.toLowerCase();
		var version = Number(browser.lastIndexOf('/'));
		return (/^opera/.test(browser) && version < 10.50);
	};
	
	// verifica daca browser-ul suporta metode native pt texte
	this._isTextSupported = function () {
		return (typeof this._ctx.measureText !== 'undefined');
	};
	
	// parseaza json si creeaza un DOM
	this._jsonToXml = function (json) {
		json = JSON.parse(json);
		if (typeof json.JSChart === 'undefined') {
			this._alert('_xmlUnexpectedFormat');
			return;
		} else {
			var dom = document.createElement('JSChart');
			var datasets;
			var dataset;
			var data;
			var optionset;
			var option;
			var i;
			var p;
			var len;
			if (typeof json.JSChart.datasets === 'undefined') {
				this._alert('_xmlUnexpectedFormat');
				return;
			} else {
				
				// dataset
				datasets = json.JSChart.datasets;
				len = datasets.length;
				for (i = 0; i < len; i++) {
					dataset = datasets[i];
					domDataset = document.createElement('dataset');
					if (typeof dataset.usestring === 'string' && dataset.usestring === 'true') {
						domDataset.setAttribute('usestring', true);
					}
					if (typeof dataset.type === 'string') {
						domDataset.setAttribute('type', dataset.type);
					}
					if (typeof dataset.id === 'string') {
						domDataset.setAttribute('id', dataset.id);
					}
					if (typeof dataset.data !== 'undefined' && typeof dataset.data !== 'undefined') {
						len2 = dataset.data.length;
						for (p = 0; p < len2; p++) {
							domDatasetData = document.createElement('data');
							domDatasetData.setAttribute('unit', dataset.data[p].unit);
							domDatasetData.setAttribute('value', dataset.data[p].value);
							domDataset.appendChild(domDatasetData);
						}
					}
					dom.appendChild(domDataset);
				}
				
				// colorset
				if (typeof json.JSChart.colorset !== 'undefined') {
					colorset = json.JSChart.colorset;
					len = colorset.length;
					domColorSet = document.createElement('colorset');
					for (i = 0; i < len; i++) {
						domColor = document.createElement('color');
						domColor.setAttribute('value', colorset[i]);
						domColorSet.appendChild(domColor);
					}
					dom.appendChild(domColorSet);
				}
				
				// optionset
				if (typeof json.JSChart.optionset !== 'undefined') {
					optionset = json.JSChart.optionset;
					len = optionset.length;
					domOptionset = document.createElement('optionset');
					for (i = 0; i < len; i++) {
						domOption = document.createElement('option');
						domOption.setAttribute('set', optionset[i].set);
						domOption.setAttribute('value', optionset[i].value);
						domOptionset.appendChild(domOption);
					}
					dom.appendChild(domOptionset);
				}
			}
		}
		xmlDoc = document.createElement('json');
		xmlDoc.appendChild(dom);
		return xmlDoc;
	};
	
	// creeaza tooltip-uri pt linii
	this._lineTooltip = function (t, p, s, i, coords, delay) {
		if (typeof this._tooltips[t] === 'undefined' || typeof this._tooltips[t][p] === 'undefined') {
			return false;
		}
		if (typeof this._tooltips[t][p][2] !== 'undefined') {
			if (this._tooltips[t][p][2] !== this._dataIds[s]) {
				return false;
			}
		}
		var contents = (typeof this._tooltips[t][p][1] === 'undefined') ? null : this._tooltips[t][p][1];
		
		var stringX = this._data[s][i][0];
		if (typeof this._axisValuesPrefixX === 'string') {
			stringX = this._axisValuesPrefixX + stringX;
		}
		if (typeof this._axisValuesPrefixX === 'string') {
			stringX = stringX + this._axisValuesPrefixX;
		}
		
		var stringY = this._data[s][i][1];
		if (typeof this._axisValuesPrefixY === 'string') {
			stringY = this._axisValuesPrefixY + stringY;
		}
		if (typeof this._axisValuesSuffixY === 'string') {
			stringY = stringY + this._axisValuesSuffixY;
		}
		
		this._createTooltips(stringX, stringY, coords[0], coords[1], contents, (typeof this._tooltips[t][p]['callback'] === 'undefined') ? false : this._tooltips[t][p]['callback']);
		if (typeof delay === 'undefined') {
			delay = 0;
		}
		
		//var flagStyle = this._hexToRgb(this._flagColor, this._flagOpacity);
		setTimeout(this._drawTooltipFlag(this, coords, stringX, stringY), delay);
	};
	
	// incarca fisier JSON
	this._loadJSON = function (file) {
		var xmlDoc;
		// erori de incarcare in non-IE
		if (!this._isIE()) {
			window.onerror = (function (arg, err) {
				if (arg) {
					return function () {
						err();
					}
				}
				return function () {};
			})(this._showAlerts, this.JSChartAlerts._xmlFileNotLoaded);
		}
		
		try { // IE
			xmlDoc = new ActiveXObject('Microsoft.XMLHTTP');
		}
		catch (e) {
			try { // alte browsere
				var xmlDoc = new XMLHttpRequest();
			}
			catch (err) {
				alert(err.message);
				return;
			}
		}
		xmlDoc.open("GET", file, false);
		xmlDoc.setRequestHeader("Content-Type", "application/json, text/javascript");
		xmlDoc.send(null);
		xmlDoc = xmlDoc.responseText;
		xmlDoc.async = false;
		/*
		if (!loaded) { // erori de incarcare pt IE
			this._alert('_xmlFileNotLoaded');
			return;
		}
		*/
		return xmlDoc;
	};
	
	// incarca fisier XML
	this._loadXML = function (file, string) {
		var xmlDoc;
		string = (typeof string !== 'undefined' && string === true);
		
		// erori de incarcare in non-IE
		if (!this._isIE()) {
			window.onerror = (function (arg, err) {
				if (arg) {
					return function () {
						err();
					}
				}
				return function () {};
			})(this._showAlerts, this.JSChartAlerts._xmlFileNotLoaded);
		}
		
		try { // IE
			xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
		}
		catch(e) {
			try { // alte browsere
				if (!string) {
					var xmlhttpXML = new XMLHttpRequest();
					xmlhttpXML.open("GET", file, false);
					xmlhttpXML.setRequestHeader("Content-Type", "text/xml");
					xmlhttpXML.send(null);
					xmlDoc = xmlhttpXML.responseXML;
				}
			}
			catch(err) {
				alert(err.message);
				return;
			}
		}
		var loaded;
		if (string) {
			if (this._isIE()) {
				loaded = xmlDoc.loadXML(file);
			} else {
				var parser = new DOMParser();
				xmlDoc = parser.parseFromString(file, "text/xml");
				loaded = true;
			}
		} else {
			xmlDoc.async = false;
			loaded = this._isIE() ? xmlDoc.load(file) : true;
		}
		if (!loaded) { // erori de incarcare pt IE
			this._alert('_xmlFileNotLoaded');
			return;
		}
		
		return xmlDoc;
	};
	
	// logaritm in orice baza
	this._log = function (x, base) {
		return Math.log(x) / Math.log(base);
	};
	
	// parseaza fisier XML
	this._parseXML = function (xmlDoc) {
		
		var xmlDataset = [];
		var xmlColorset = [];
		var xmlOptionset = [];
		
		if (xmlDoc.getElementsByTagName('JSChart').length !== 1) {
			this._alert('_xmlUnexpectedFormat');
			return;
		}
		var jschart = xmlDoc.getElementsByTagName('JSChart')[0];
		
		var len = jschart.childNodes.length;
		var len2;
		var slen;
		var node;
		//var dataset;
		var data;
		var color;
		var _type;
		var _color;
		var _unit;
		var _value;
		var _set;
		var _usestring;
		var p;
		var t;
		var id;
		var _id;
		var newValue;
		var values;
		for (var i = 0; i < len; i++) {
			node = jschart.childNodes[i];
			if (typeof node === 'undefined') {
				continue;
			}
			
			// parseaza datele
			if (String(node.tagName).toLowerCase() === 'dataset') {
				_type = node.getAttribute('type');
				if (_type === null || _type === '') {
					this._alert('_xmlEmptyType');
					return;
				}
				this._type = _type;
				len2 = node.childNodes.length;
				if (len2 < 1) {
					this._alert('_xmlEmptyData');
					return;
				}
				slen = 0;
				_usestring = (node.getAttribute('usestring') === 'true');
				for (p = 0; p < len2; p++) {
					data = node.childNodes[p];
					if (String(data.tagName).toLowerCase() === 'data')  {
						_unit = data.getAttribute('unit');
						_value = data.getAttribute('value');
						if (_unit === null || _unit === '' || _value === null || _value === '') {
							this._alert('_xmlMalformedData');
							return;
						}
						switch (_type) {
							case 'bar':
								if (_value.indexOf(',') > -1) {
									newValue = [String(_unit)];
									values = _value.split(',');
									for (t = 0; t < values.length; t++) {
										newValue.push(Number(values[t]));
									}
									xmlDataset.push(newValue);
									if (slen < values.length) {
										slen = values.length;
									}
								} else {
									xmlDataset.push([String(_unit), Number(_value)]);
								}
								break;
							case 'pie':
								if (isNaN(Number(_value))) {
									this._alert('_xmlMalformedData');
									return;
								}
								xmlDataset.push([String(_unit), Number(_value)]);
								break;
							default:
								if (isNaN(Number(_value))) {
									this._alert('_xmlMalformedData');
									return;
								}
								if (/^[0-9.]*$/.test(_unit) && !_usestring) {
									xmlDataset.push([Number(_unit), Number(_value)]);
								} else {
									xmlDataset.push([String(_unit), Number(_value)]);
									this._graphLineStringValues = true;
								}
						}
					}
				}
				if (this._type === 'bar') {
					for (p = 0; p < slen; p++) {
						this._legendsBar.push([this._graphBarDefaultColor, String(p + 1), p + 1]);
						this._hideIds.push(false);
					}
				}
				
				// pt linii cu string-uri
				if (typeof xmlDataset[0][0] === 'string' && this._type === 'line') {
					if (this._data.length === 0) {
						for (t = 0, len2 = xmlDataset.length; t < len2; t++) {
							this._labelsX.push([t, String(xmlDataset[t][0]), 'x-value']);
							xmlDataset[t][0] = t;
						}
					} else {
						var min = this._getMinX();
						var max = this._getMaxX();
						var step = Math.round((max - min) / (xmlDataset.length - 1));
						for (var j = 0, t = min; t < max, j < xmlDataset.length; t += step, j++) {
							this._labelsX.push([t, String(xmlDataset[j][0]), 'x-value']);
							xmlDataset[j][0] = t;
						}
					}
					/*
					for (t = 0, len2 = xmlDataset.length; t < len2; t++) {
						this._labelsX.push([t, String(xmlDataset[t][0])]);
						xmlDataset[t][0] = t;
					}
					*/
					this._axisValuesShowX = false;
				}
				
				id = false;
				_id = node.getAttribute('id');
				if (_id !== null && _id !== '') {
					id = _id;
				}
				
				if (this._type === 'line') {
					this._multipleSeries = true;
					if (this._data === []) {
						this._data = new Array(xmlDataset);
					} else {
						this._data.push(xmlDataset);
					}
					var index = String(this._data.length - 1);
					this._dataIds[index] = (id === false) ? '_autoid_' + index : id;
					if (typeof this._graphLineColor[index] === 'undefined') {
						this._graphLineColor[index] = this._graphLineDefaultColor;
					}
					if (typeof this._graphLineOpacity[index] === 'undefined') {
						this._graphLineOpacity[index] = this._graphLineDefaultOpacity;
					}
					if (typeof this._graphLineWidth[index] === 'undefined') {
						this._graphLineWidth[index] = this._graphLineDefaultWidth;
					}
					this._legendsLine.push([this._graphLineDefaultColor, this._dataIds[index]]);
				} else {
					this._data = xmlDataset;
				}
				
				xmlDataset = [];
			}
			
			// parseaza eventuale culori
			if (String(node.tagName).toLowerCase() === 'colorset') {
				len2 = node.childNodes.length;
				for (p = 0; p < len2; p++) {
					color = node.childNodes[p];
					if (String(color.tagName).toLowerCase() === 'color')  {
						_color = color.getAttribute('value');
						if (_color === null || _color === '') {
							this._alert('_xmlMalformedColor');
							return;
						}
						xmlColorset.push(_color);
					}
				}
				this._colors = xmlColorset;
			}
			
			// parseaza eventuale optiuni
			if (String(node.tagName).toLowerCase() === 'optionset') {
				len2 = node.childNodes.length;
				for (p = 0; p < len2; p++) {
					color = node.childNodes[p];
					if (String(color.tagName).toLowerCase() === 'option')  {
						_set = color.getAttribute('set');
						_value = color.getAttribute('value');
						_id = color.getAttribute('id');
						if (_set === null || _set === '' || _value === null || _value === '') {
							this._alert('_xmlMalformedOption');
							return;
						}
						if (_id === null || _id === '') {
							xmlOptionset.push([_set, _value]);
						} else {
							xmlOptionset.push([_set, _value, _id]);
						}
					}
				}
			}
		}
		return xmlOptionset;
	};
	
	// rotunjeste valorile pe axe
	this._round = function (a, values) {
		var b = Number(a);
		return Number(b.toFixed(values));
	};
	
	// calculeaza offset-ul (intre axe si grafic) dupa valorile pe axa X
	this._scaleX = function (reversed) {
		// calculam cele mai bune valori pt axa (astfel incat sa incapa pe X) si setam parametrii pt afisare
		var res;
		var unit;
		var counter;
		var hasDecimals;
		var decimals;
		var string;
		var textLen;
		var maxValues = 1;
		var total = 0;
		if (reversed) {
			var _min = this._minY;
			var _max = this._maxY;
		} else {
			var _min = this._minX;
			var _max = this._maxX;
		}
		while (total < this._sizeGraphX) {
			res = this.AutoScale(_min, _max, maxValues);
			this._minAxisX = res[0];
			this._maxAxisX = res[1];
			this._stepUnitsX = res[2];
			
			unit = this._minAxisX;
			counter = 0;
			while (unit <= this._maxAxisX) {
				string = (this._axisValuesDecimalsX === 'auto') ? unit : unit.toFixed(this._axisValuesDecimalsX);
				hasDecimals = String(unit).lastIndexOf('.');
				decimals = String(unit).substr(hasDecimals + 1).length;
				if (decimals > 3 && this._axisValuesDecimalsX === 'auto') {
					string = this._round(unit, 3);
				}
				textLen = this._getTextLength(String(string), this._axisValuesFontSizeX, null, null, this._axisValuesFontSizeX);
				total += textLen;
				unit += this._stepUnitsX;
				counter++;
				if (counter < 1) {
					total -= textLen / 2;
				}
			}
			total -= textLen / 2;
			maxValues++;
		}
	
		this._offsetStartX = (_min - this._minAxisX) * this._sizeGraphX / (this._maxAxisX - this._minAxisX);
		this._offsetEndX = (this._maxAxisX - _max) * this._sizeGraphX / (this._maxAxisX - this._minAxisX);
		this._unitX = this._stepUnitsX * this._sizeGraphX / (this._maxAxisX - this._minAxisX);
	};
	
	// calculeaza offset-ul (intre axe si grafic) dupa valorile pe axa Y
	this._scaleY = function () {
		// maximul de valori pe axa
		var textHeight = this._getTextHeight(this._axisValuesFontSizeY);
		var maxValues = Math.floor(this._sizeGraphY / (textHeight + 6));
		
		// calculam cele mai bune valori pt axa si setam parametrii pt afisare
		var res = this.AutoScale(this._minY, this._maxY, maxValues);
		
		this._minAxisY = res[0];
		this._maxAxisY = res[1];
		this._stepUnitsY = res[2];
		this._offsetStartY = (this._minY - this._minAxisY) * this._sizeGraphY / (this._maxAxisY - this._minAxisY);
		this._offsetEndY = (this._maxAxisY - this._maxY) * this._sizeGraphY / (this._maxAxisY - this._minAxisY);
		this._unitY = this._stepUnitsY * this._sizeGraphY / (this._maxAxisY - this._minAxisY);
	};
	
	// seteaza cateva variabile utile la desenarea graficului
	this._setGraph = function () {
		
		// pt securizare 4
		this._watermarkSecureArray.push(57.5,23,49.5);
		this._watermarkHostname = '0x6c6f636174696';
		
		// seteaza coordonatele punctului stanga-sus pt graficul propriu-zis
		this._graphX = this._axisPaddingLeft + 1;
		this._graphY = this._axisPaddingTop + 1;
		
		// seteaza marimile in pixeli al graficului propriu-zis
		this._sizeGraphX = this._sizeX - this._axisPaddingLeft - this._axisPaddingRight - 2;
		this._sizeGraphY = this._sizeY - this._axisPaddingTop - this._axisPaddingBottom - 2; // incearca Math.round daca apare bugul cu linii pe bare
		this._axisRatio = this._sizeGraphX / this._sizeGraphY;
	};
	
	// seteaza dimensiunile graficului (doar valori, fara redesenare)
	// pt a seta doar una din dimensiuni se poate lasa valoarea celeilalte dimensiuni pe 'false'
	this._setSize = function (x, y) {
		if (x) {
			var width = parseInt(x, 10);
			if (!isNaN(width)) {
				this._sizeX = width;
			}
		}
		if (y) {
			var height = parseInt(y, 10);
			if (!isNaN(height)) {
				this._sizeY = height;
			}
		}
	};
	
	// calcul unitate corespunzatoare in pixeli pe axe
	this._setUnits = function () {
		if (this._sizeGraphX === 0) {
			this._getLimits();
		}
		if (this._maxX === this._minX) {
			this._maxX++;
		}
		if (this._maxY === this._minY) {
			this._maxY++;
		}
		this._unitX = this._sizeGraphX / (this._maxX - this._minX);
		this._unitY = this._sizeGraphY / (this._maxY - this._minY);
	};
	
	// afiseaza legenda
	this._showLegend = function () {
		// retinem paddingul original
		var paddingTop = (this._axisPaddingTop === false) ? this._axisPaddingTopDefault : this._axisPaddingTop;
		var paddingBottom = (this._axisPaddingBottom === false) ? this._axisPaddingBottomDefault : this._axisPaddingBottom;
		var paddingLeft = (this._axisPaddingLeft === false) ? this._axisPaddingLeftDefault : this._axisPaddingLeft;
		var paddingRight = (this._axisPaddingRight === false) ? this._axisPaddingRightDefault : this._axisPaddingRight;
		var textPaddingBottom = (this._textPaddingBottom === false) ? this._textPaddingBottomDefault : this._textPaddingBottom;
		var textPaddingLeft = (this._textPaddingLeft === false) ? this._textPaddingLeftDefault : this._textPaddingLeft;
		var maxRowSize = this._sizeX - paddingLeft - paddingRight + 8;
		
		// detectam serii pt legende
		var i;
		var len;
		if (this._legendDetect === true) {
			if (this._type === 'line') {
				len = this._legendsLine.length;
				for (i = 0; i < len; i++) {
					this._legends.push([this._graphLineColor[i], this._legendsLine[i][1]]);
				}
			}
			if (this._type === 'bar') {
				len = this._legendsBar.length;
				for (i = 0; i < len; i++) {
					this._legends.push([(typeof this._graphBarColor === 'string' || typeof this._graphBarColor[i] === 'undefined') ? this._graphBarDefaultColor : this._graphBarColor[i], this._legendsBar[i][1], i]);
				}
			}
		}
		
		// sunt legende de afisat?
		len = this._legends.length;
		if (len === 0) {
			return false;
		}
		
		// unde afisam?
		var position;
		if (this._isArray(this._legendPosition)) {
			position = this._legendPosition;
		} else {
			position = this._legendPosition.split(' ');
			position[0] = position[0].substr(0, 1);
			var lateral = (position[0] === 'l' || position[0] === 'r');
			if (typeof position[1] === 'undefined') {
				if (lateral) {
					position[1] = 'm';
				} else {
					position[1] = 'c';
				}
			}
			position[1] = position[1].substr(0, 1);
			position = position[0] + position[1];
		}
		
		// cum afisam? spatieri etc...
		var rows = [[]];
		var rowWidth = 0;
		var rowLength = 0;
		var boxLength = 0;
		var crtRow = 0;
		var textLength;
		var legendHeight = (lateral || this._isArray(position)) ? 0 : this._getTextHeight(this._legendFontSize) + 10;
		for (i = 0; i < len; i++) {
			textLength = this._getTextLength(this._legends[i][1], this._legendFontSize, null, null, this._legendFontFamily) + 25;
			if (boxLength < textLength) {
				boxLength = textLength;
			}
		}
		for (i = 0; i < len; i++) {
			rowWidth += boxLength;
			if (rowWidth > maxRowSize || lateral || this._isArray(position)) {
				rowWidth = boxLength;
				crtRow++;
				if (lateral || this._isArray(position)) {
					rows[crtRow - 1] = [this._legends[i]];
				} else {
					rows[crtRow] = [this._legends[i]];
				}
				legendHeight += this._getTextHeight(this._legendFontSize) + 4;
			} else {
				if (rowLength < rowWidth) {
					rowLength = rowWidth;
				}
				rows[crtRow].push(this._legends[i]);
				if (i === len - 1) {
					//legendHeight += this._getTextHeight(this._legendFontSize) + 10;
				}
			}
		}
		
		// afiseaza legendele
		var originalPosX;
		var originalPosY;
		switch (position) { // tc = 'top center', bl = 'bottom left', 'rm' = 'right middle' etc
			case 'tc':
			default:
				if (typeof position === 'string') { // poate fi si array daca s-au stabilit coordonate cu setLegendPosition
					if (this._legendPadding !== false) {
						paddingTop = this._legendPadding;
					}
					originalPosX = paddingLeft + maxRowSize / 2 - rowLength / 2;
					originalPosY = paddingTop;
				}
				break;
			case 'tl':
				if (this._legendPadding !== false) {
					paddingTop = this._legendPadding;
				}
				originalPosX = paddingLeft;
				originalPosY = paddingTop;
				break;
			case 'tr':
				if (this._legendPadding !== false) {
					paddingTop = this._legendPadding;
				}
				originalPosX = paddingLeft + maxRowSize - rowLength;
				originalPosY = paddingTop;
				break;
			
			case 'bl':
				originalPosX = paddingLeft;
				if (this._legendPadding !== false) {
					originalPosY = this._sizeY - this._legendPadding - 2 * legendHeight + this._getTextHeight(this._axisNameFontSizeY) + this._getTextHeight((this._axisReversed) ? this._axisValuesFontSizeY : this._axisValuesFontSizeX) + 10;
				} else {
					originalPosY = this._sizeY - paddingBottom - legendHeight + this._getTextHeight(this._axisNameFontSizeY) + this._getTextHeight((this._axisReversed) ? this._axisValuesFontSizeY : this._axisValuesFontSizeX) + 10;
				}
				break;
			case 'bc':
				originalPosX = paddingLeft + maxRowSize / 2 - rowLength / 2;
				if (this._legendPadding !== false) {
					originalPosY = this._sizeY - this._legendPadding - 2 * legendHeight + this._getTextHeight(this._axisNameFontSizeY) + this._getTextHeight((this._axisReversed) ? this._axisValuesFontSizeY : this._axisValuesFontSizeX) + 10;
				} else {
					originalPosY = this._sizeY - paddingBottom - legendHeight + this._getTextHeight(this._axisNameFontSizeY) + this._getTextHeight((this._axisReversed) ? this._axisValuesFontSizeY : this._axisValuesFontSizeX) + 10;
				}
				break;
			case 'br':
				originalPosX = paddingLeft + maxRowSize - rowLength;
				if (this._legendPadding !== false) {
					originalPosY = this._sizeY - this._legendPadding - 2 * legendHeight + this._getTextHeight(this._axisNameFontSizeY) + this._getTextHeight((this._axisReversed) ? this._axisValuesFontSizeY : this._axisValuesFontSizeX) + 10;
				} else {
					originalPosY = this._sizeY - paddingBottom - legendHeight + this._getTextHeight(this._axisNameFontSizeY) + this._getTextHeight((this._axisReversed) ? this._axisValuesFontSizeY : this._axisValuesFontSizeX) + 10;
				}
				break;
			
			case 'lt':
				originalPosX = 10;
				if (this._legendPadding !== false) {
					originalPosX = this._legendPadding;
					paddingLeft = this._legendPadding;
				}
				originalPosY = paddingTop;
				break;
			case 'lm':
				originalPosX = 10;
				if (this._legendPadding !== false) {
					originalPosX = this._legendPadding;
					paddingLeft = this._legendPadding;
				}
				originalPosY = paddingTop + (this._sizeY - paddingTop - paddingBottom - legendHeight) / 2;
				break;
			case 'lb':
				originalPosX = 10;
				if (this._legendPadding !== false) {
					originalPosX = this._legendPadding;
					paddingLeft = this._legendPadding;
				}
				originalPosY = this._sizeY - paddingBottom - legendHeight;
				break;
			
			case 'rt':
				if (this._legendPadding !== false) {
					paddingRight = this._legendPadding;
				}
				originalPosX = this._sizeX - paddingRight - boxLength;
				originalPosY = paddingTop;
				break;
			case 'rm':
				if (this._legendPadding !== false) {
					paddingRight = this._legendPadding;
				}
				originalPosX = this._sizeX - paddingRight - boxLength;
				originalPosY = paddingTop + (this._sizeY - paddingTop - paddingBottom - legendHeight) / 2;
				break;
			case 'rb':
				if (this._legendPadding !== false) {
					paddingRight = this._legendPadding;
				}
				originalPosX = this._sizeX - paddingRight - boxLength;
				originalPosY = this._sizeY - paddingBottom - legendHeight;
				break;
		}
		var rlen = rows.length;
		var posX = (this._isArray(position)) ? position[0] : originalPosX;
		var posY = (this._isArray(position)) ? position[1] : originalPosY;
		var legend;
		var count = 0;
		var fonttype = (this._legendFontFamily === false) ? this._textDefaultFontFamily : this._legendFontFamily;
		var trigger;
		var newTrigger;
		var div;
		
		for (var r = 0; r < rlen; r++) {
			if (lateral || this._isArray(position)) {
				len = 1;
			} else {
				len = rows[r].length;
			}
			for (i = 0; i < len; i++) {
				legend = rows[r][i];
				this._ctx.fillStyle = this._hexToRgb(legend[0], 1);
				this._ctx.fillRect(posX, posY, 10, 10);
				this._write(legend[1], posX + 15, posY, this._legendFontSize, null, null, null, fonttype, this._legendColor);
				
				// click pe legenda
				trigger = '<div ' +
					'style="position:absolute;' +
					'left:' + (this._canvas.offsetLeft + posX) + 'px;' +
					'top:' + (this._canvas.offsetTop + posY) + 'px;' +
					'width: 10px;' +
					'height: 10px;' +
					'font-size: 1px;' +
					'z-index: ' + (Number(this._canvas.style.zIndex) + 200) + ';' +
					'" id="trigger_legend_' + parseInt(posX, 10) + '_' + parseInt(posY, 10) + '">' +
					'<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" '+
					'width="' + (this._flagRadius * 2) + '" ' +
					'height="' + (this._flagRadius * 2) + '" ' +
					"><\/div>";
				div = document.createElement('DIV');
				div.innerHTML += trigger;
				trigger = div.firstChild;
				newTrigger = trigger.cloneNode(true);
				trigger.parentNode.removeChild(trigger);
				if (callback) {
					this._attachEvent(newTrigger, 'click', (function(o, legend, paddingTop, paddingBottom, paddingLeft, paddingRight, textPaddingBottom){
						return function() {
							var i;
							var len;
							
							// pastreaza padding-urile originale
							o._axisPaddingTop = paddingTop;
							o._axisPaddingBottom = paddingBottom;
							o._axisPaddingLeft = paddingLeft;
							o._axisPaddingRight = paddingRight;
							o._textPaddingBottom = textPaddingBottom;
							
							// legendele sunt complicate...
							if (o._legendDetect === true) {
								var newLegends = [];
								len = o._legends.length;
								for (i = 0; i < len; i++) {
									if (typeof o._legends[i][2] !== 'undefined' && o._legends[i][2] === 'custom') {
										newLegends.push(o._legends[i]);
									}
								}
								o._legends = newLegends;
							}
							
							// pastreaza tooltipurile initiale
							o._tooltips = o._tooltipsCopy;
							
							// arata/ascunde serii din linii
							if (o._type === 'line') {
								len = o._dataIds.length;
								for (i = 0; i < len; i++) {
									if (legend[1] === o._dataIds[i]) {
										o._hideIds[i] = !(o._hideIds[i]);
									}
								}
							}
							
							// arata/ascunde serii din bare
							if (o._type === 'bar') {
								len = o._hideIds.length;
								for (i = 0; i < len; i++) {
									if (legend[2] === i) {
										o._hideIds[i] = !(o._hideIds[i]);
									}
								}
							}
							
							// ... si redeseneaza :)
							o._draw();
						};
					})(this, legend, this._axisPaddingTop, this._axisPaddingBottom, this._axisPaddingLeft, this._axisPaddingRight, this._textPaddingBottom));
				}
				this._container.appendChild(newTrigger);
				
				posX += boxLength;
				count++;
			}
			posX = (this._isArray(position)) ? position[0] : originalPosX;
			posY += this._getTextHeight(this._legendFontSize) + 4;
		}
		
		// un pic de spatiere
		if (lateral) {
			boxLength += 10;
		}
		
		// mareste spatiul pana la axa
		switch (position) {
			case 'tc':
			case 'tl':
			case 'tr':
			default:
				if (this._axisPaddingTop === false && !this._isArray(position)) {
					var oldPadd = this._axisPaddingTop;
					this._axisPaddingTop = paddingTop + legendHeight;
					//this._axisLegendPadding = this._axisPaddingTop - oldPadd - legendHeight;
				}
				break;
			case 'bl':
			case 'bc':
			case 'br':
				if (this._axisPaddingBottom === false) {
					var oldPadd = this._axisPaddingBottom;
					this._axisPaddingBottom = this._axisPaddingBottomDefault + legendHeight;
					//this._axisLegendPadding = oldPadd - this._axisPaddingBottom - legendHeight;
				}
				if (this._textPaddingBottom === false) {
					this._textPaddingBottom = this._textPaddingBottomDefault + legendHeight;
				}
				break;
			case 'lt':
			case 'lm':
			case 'lb':
				if (this._axisPaddingLeft === false) {
					var oldPadd = this._axisPaddingLeft;
					this._axisPaddingLeft = this._axisPaddingLeftDefault + boxLength;
					//this._axisLegendPadding = this._axisPaddingLeft - oldPadd - boxLength;
				}
				if (this._textPaddingLeft === false) {
					this._textPaddingLeft = this._textPaddingLeftDefault + boxLength;
				}
				break;
			case 'rt':
			case 'rm':
			case 'rb':
				if (this._axisPaddingRight === false) {
					var oldPadd = this._axisPaddingRight;
					this._axisPaddingRight = this._axisPaddingRightDefault + boxLength;
					//this._axisLegendPadding = this._axisPaddingRight - oldPadd - boxLength;
				}
				break;
		}
		this._legendHeight = legendHeight;
	};
	
	// scrie in canvas si returneaza latimea textului rezultat in pixeli (float)
	this._write = function (text, x, y, fontsize, fontweight, fontwidth, charspace, fonttype, color, opacity, rotation, id, delay) {
		if (typeof this._ctx === false || typeof text === 'undefined' || typeof x === 'undefined' || typeof y === 'undefined') {
			return false;
		}
		text = String(text);
		var texts = this._filterTextStyles(fontsize, fontweight, fontwidth, charspace, fonttype, color, opacity, rotation, id);
		fontsize = (this._isIE()) ? texts.fontsize + this._fontsizeCorrectionIE + this._fontsizeCorrection + 'px "' + fonttype + '"' : texts.fontsize + this._fontsizeCorrection + 'px "' + fonttype + '"';
		if (!this._textSupported) {
			if (typeof delay === 'undefined') {
				this._ctx.strokeStyle = this._hexToRgb(texts.color, texts.opacity);
				this._ctx.strokeText(text, x, y, texts.fontsize, texts.fontweight, texts.fontwidth, texts.charspace, texts.fonttype, texts.color, texts.opacity, texts.rotation, texts.id);
			} else {
				setTimeout((function(ctx, strokeStyle, text, x, y, fontsize, fontweight, fontwidth, charspace, fonttype, color, opacity, rotation, id){
					return function(){
						ctx.strokeStyle = strokeStyle;
						ctx.strokeText(text, x, y, fontsize, fontweight, fontwidth, charspace, fonttype, color, opacity, rotation, id);
					};
				})(this._ctx, this._hexToRgb(texts.color, texts.opacity), text, x, y, texts.fontsize, texts.fontweight, texts.fontwidth, texts.charspace, texts.fonttype, texts.color, texts.opacity, texts.rotation, texts.id), delay);
			}
		} else {
			if (typeof delay === 'undefined') {
				this._ctx.fillStyle = this._hexToRgb(texts.color, texts.opacity);
				this._ctx.font = fontsize;
				this._ctx.textBaseline = 'top';
				this._ctx.fillText(text, x, y);
			} else {
				setTimeout((function(ctx, fillStyle, font, text, x, y){
					return function(){
						ctx.fillStyle = fillStyle;
						ctx.font = font;
						ctx.textBaseline = 'top';
						ctx.fillText(text, x, y);
					};
				})(this._ctx, this._hexToRgb(texts.color, texts.opacity), fontsize, text, x, y), delay);
			}
		}
	};
	
	// deseneaza textele de pe axe
	this._writeAxesTexts = function () {
		var fonttypeX = (this._axisNameFontFamilyX === false) ? this._textDefaultFontFamily : this._axisNameFontFamilyX;
		var fonttypeY = (this._axisNameFontFamilyY === false) ? this._textDefaultFontFamily : this._axisNameFontFamilyY;
		
		var xCaptionLength = this._getTextLength(this._axisNameX, this._axisNameFontSizeX, null, null, fonttypeX);
		//var yCaptionLength = this._getTextLength(this._axisNameY, this._axisNameFontSizeY, null, null, fonttypeY);
		
		var posX = (this._sizeGraphX - xCaptionLength) / 2 + this._axisPaddingLeft;
		var posY = this._sizeY - this._textPaddingBottom - this._getTextHeight((this._axisReversed) ? this._axisNameFontSizeY : this._axisNameFontSizeX);
		if (this._axisReversed) {
			this._write(this._axisNameY, posX, posY, this._axisNameFontSizeY, null, null, null, fonttypeY, this._axisNameColorY);
		} else {
			this._write(this._axisNameX, posX, posY, this._axisNameFontSizeX, null, null, null, fonttypeX, this._axisNameColorX);
		}
		
		var len = (this._axisReversed) ? this._axisNameX.length : this._axisNameY.length;
		var textHeight = len * this._getTextHeight((this._axisReversed) ? this._axisNameFontSizeX : this._axisNameFontSizeY);
		posY = Math.round((this._sizeY - textHeight) / 2);
		for (var i = 0; i < len; i++) {
			posX = this._textPaddingLeft/* - (this._getTextLength('M', this._axisNameFontSizeY) - this._getTextLength(this._axisNameY.substr(i, 1), this._axisNameFontSizeY)) / 2*/;
			if (this._axisReversed) {
				this._write(this._axisNameX.substr(i, 1), posX, posY, this._axisNameFontSizeX, null, null, null, fonttypeX, this._axisNameColorX);
			} else {
				this._write(this._axisNameY.substr(i, 1), posX, posY, this._axisNameFontSizeY, null, null, null, fonttypeY, this._axisNameColorY);
			}
			posY += this._getTextHeight((this._axisReversed) ? this._axisNameFontSizeX : this._axisNameFontSizeY);
		}
	};
	
	// scrie label-uri pe axa X, doar pt linii (pt bare functia este inclusa in drawBar)
	this._writeLabelsX = function () {
		if (this._type !== 'line') {
			return false;
		}
		var len;
		var coords;
		var textLen;
		var fonttype;
		var i;
		var len = this._labelsX.length;
		var angle = - this._axisValuesAngle * Math.PI / 180;
		var posY;
		var x;
		var alignFirst;
		var alignLast;
		var xValueLabels = [];
		var realLabels = [];
		
		for (i = 0; i < len; i++) {
			coords = this._getCoord(this._labelsX[i][0], 0);
			if (coords[0] < this._axisPaddingLeft || coords[0] > this._sizeX - this._axisPaddingRight) {
				continue;
			}
			
			if (typeof this._labelsX[i][2] !== 'undefined' && this._labelsX[i][2] === 'x-value') {
				xValueLabels.push(this._labelsX[i]);
			} else {
				realLabels.push(this._labelsX[i]);
			}
		}
		
		len = xValueLabels.length;
		for (i = 0; i < len; i++) { // etichete generate din valori string pt linii
			coords = this._getCoord(xValueLabels[i][0], 0);
			alignFirst = (this._axisValuesAlignFirstX && i === 0);
			alignLast = (this._axisValuesAlignLastX && i + 1 === len);
			posY = this._sizeY - ((this._axisValuesPaddingBottom === false) ? this._axisPaddingBottom - 4 : this._axisValuesPaddingBottom);
			fonttype = (this._axisValuesFontFamilyX === false) ? this._textDefaultFontFamily : this._axisValuesFontFamilyX;
			textLen = this._getTextLength(String(xValueLabels[i][1]), this._axisValuesFontSizeX, null, null, fonttype);
			if (this._axisValuesAngle > 0) {
				this._ctx.save();
				if (alignFirst) {
					x = coords[0] + 2 + this._axisValuesFontSizeX / 2;
				} else if (alignLast) {
					x = coords[0] + 2 - this._axisValuesFontSizeX / 2;
				} else {
					x = coords[0] + 2;
				}
				this._ctx.translate(x, posY + 4);
				this._ctx.rotate(angle);
				this._write(xValueLabels[i][1], 0 - textLen, 0 - this._axisValuesFontSizeX / 2 - 2, this._axisValuesFontSizeX, null, null, null, fonttype, this._axisValuesColorX);
				this._ctx.restore();
			} else {
				if (alignFirst) {
					x = coords[0];
				} else if (alignLast) {
					x = coords[0] - textLen;
				} else {
					x = coords[0] - textLen / 2;
				}
				this._write(xValueLabels[i][1], x, posY, this._axisValuesFontSizeX, null, null, null, fonttype, this._axisValuesColorX);
			}
		}
		
		len = realLabels.length;
		for (i = 0; i < len; i++) { // etichete reale
			coords = this._getCoord(realLabels[i][0], 0);
			coords[0] = Number(coords[0].toFixed(12)); // @TODO - problema cu ultima zecimala, poate este alta rezolvare - mai ales pt aceleasi situatii de mai jos (Y)
			alignFirst = (this._labelsAlignFirstX && coords[0] === this._graphX);
			alignLast = (this._labelsAlignLastX && coords[0] === this._graphX + this._sizeGraphX);
			posY = this._sizeY - ((this._labelsPaddingBottom === false) ? this._axisPaddingBottom - 4 : this._labelsPaddingBottom);
			fonttype = (this._labelsFontFamilyX === false) ? this._textDefaultFontFamily : this._labelsFontFamilyX;
			textLen = this._getTextLength(String(realLabels[i][1]), this._labelsFontSizeX, null, null, fonttype);
			if (this._axisValuesAngle > 0) {
				this._ctx.save();
				if (alignFirst) {
					x = coords[0] + 2 + this._axisValuesFontSizeX / 2;
				} else if (alignLast) {
					x = coords[0] + 2 - this._axisValuesFontSizeX / 2;
				} else {
					x = coords[0] + 2;
				}
				this._ctx.translate(x, posY + 4);
				this._ctx.rotate(angle);
				this._write(realLabels[i][1], 0 - textLen, 0 - this._labelsFontSizeX / 2 - 2, this._labelsFontSizeX, null, null, null, fonttype, this._labelsColorX);
				this._ctx.restore();
			} else {
				if (alignFirst) {
					x = coords[0];
				} else if (alignLast) {
					x = coords[0] - textLen;
				} else {
					x = coords[0] - textLen / 2;
				}
				//if (realLabels[i][1].match(/September/)) alert(this._labelsFontSizeX);
				this._write(realLabels[i][1], x, posY, this._labelsFontSizeX, null, null, null, fonttype, this._labelsColorX);
			}
		}
	};
	
	// scrie label-uri pe axa Y
	this._writeLabelsY = function () {
		var len;
		var coords;
		var textLen;
		var len = this._labelsY.length;
		var i;
		var fonttype = (this._labelsFontFamilyY === false) ? this._textDefaultFontFamily : this._labelsFontFamilyY;
		var angle = - this._axisValuesAngle * Math.PI / 180;
		var alignFirst;
		var alignLast;
		var x;
		var y;
		if (this._axisReversed) {
			for (i = 0; i < len; i++) {
				coords = this._getCoord(this._labelsY[i][0], 0);
				if (coords[0] < this._axisPaddingLeft || coords[0] > this._sizeGraphX + this._graphX) {
					continue;
				}
				alignFirst = (this._labelsAlignFirstY && coords[0] === this._graphX);
				alignLast = (this._labelsAlignLastY && coords[0] === this._graphX + this._sizeGraphX);
				textLen = this._getTextLength(String(this._labelsY[i][1]), this._labelsFontSizeY, null, null, fonttype);
				if (this._axisValuesAngle > 0) {
					this._ctx.save();
					if (alignFirst) {
						x = coords[0] + 2 + this._labelsFontSizeY;
					} else if (alignLast) {
						x = coords[0] + 2 - this._labelsFontSizeY / 4;
					} else {
						x = coords[0] + 2;
					}
					this._ctx.translate(x, (this._labelsPaddingBottom === false) ? this._sizeY - this._axisPaddingBottom + 8 : this._sizeY - this._labelsPaddingBottom);
					this._ctx.rotate(angle);
					this._write(this._labelsY[i][1], 0 - textLen, 0 - this._labelsFontSizeY / 2 - 2, this._labelsFontSizeY, null, null, null, fonttype, this._labelsColorY);
					this._ctx.restore();
				} else {
					if (alignFirst) {
						x = coords[0];
					} else if (alignLast) {
						x = coords[0] - textLen;
					} else {
						x = coords[0] - textLen / 2;
					}
					this._write(this._labelsY[i][1], x, (this._labelsPaddingBottom === false) ? this._sizeY - this._axisPaddingBottom + 4 : this._sizeY - this._labelsPaddingBottom, this._labelsFontSizeY, null, null, null, fonttype, this._labelsColorY);
				}
			}
		} else {
			for (i = 0; i < len; i++) {
				coords = this._getCoord(0, this._labelsY[i][0]);
				if (coords[1] < this._axisPaddingTop || coords[1] > this._sizeY - this._axisPaddingBottom) {
					continue;
				}
				alignFirst = (this._labelsAlignFirstY && coords[1] === this._graphY + this._sizeGraphY);
				alignLast = (this._labelsAlignLastY && coords[1] === this._graphY);
				textLen = this._getTextLength(String(this._labelsY[i][1]), this._labelsFontSizeY, null, null, fonttype);
				if (alignFirst) {
					y = coords[1] - this._getTextHeight(this._labelsFontSizeY);
				} else if (alignLast) {
					y = coords[1];
				} else {
					y = coords[1] - this._getTextHeight(this._labelsFontSizeY / 2);
				}
				this._write(this._labelsY[i][1], (this._labelsPaddingLeft === false) ? this._axisPaddingLeft - textLen - 4 : this._labelsPaddingLeft - textLen, y, this._labelsFontSizeY, null, null, null, fonttype, this._labelsColorY);
			}
		}
	};
	
	// deseneaza titlul graficului
	this._writeTitle = function () {
		var fonttype = (this._titleFontFamily === false) ? this._textDefaultFontFamily : this._titleFontFamily;
		var titleCaptionLength = this._getTextLength(this._title, this._titleFontSize, null, null, fonttype);
		var posX;
		switch (this._titlePosition) {
			case 'left':
				posX = this._axisPaddingLeft;
				break;
			case 'right':
				posX = this._sizeX - this._axisPaddingRight - titleCaptionLength;
				break;
			default:
				posX = Math.round((this._sizeX - titleCaptionLength) / 2);
		}
		var posY = this._textPaddingTop;
		this._write(this._title, posX, posY, this._titleFontSize, null, null, null, fonttype, this._titleColor);
	};
	
	// deseneaza label personalizat
	this._writeUserLabel = function () {
		var pos = this._getWatermarkPosition(this._userLabel, true);
		var fonttype = (this._userLabelFontFamily === false) ? this._textDefaultFontFamily : this._userLabelFontFamily;
		this._write(this._userLabel, pos[0] + 1, pos[1] + 1, this._userLabelFontSize, null, null, null, fonttype, this._userLabelShadowColor, this._userLabelOpacity);
		this._write(this._userLabel, pos[0], pos[1], this._userLabelFontSize, null, null, null, fonttype, this._userLabelColor, this._userLabelOpacity);
	};
	
	// listeaza valorile pe axa X pt linii
	this._writeValuesX = function (reversed) {
		var textLen;
		var string;
		var decimals;
		var hasDecimals;
		var step;
		var stepUnits;
		var unit;
		var posX;
		var posY = this._sizeY - ((this._axisValuesPaddingBottom === false) ? this._axisPaddingBottom - 4 : this._axisValuesPaddingBottom);
		var angle = - this._axisValuesAngle * Math.PI / 180;
		var x;
		var alignFirst;
		var alignLast;
		
		if (reversed) {
			this._unitX = this._sizeGraphX / (this._maxY - this._minY);
			this._scaleX(reversed);
			var _axisValues = this._axisValuesY;
			var _minAxis = this._minAxisY;
			var _maxAxis = this._maxAxisY;
			var _axisValuesDecimals = this._axisValuesDecimalsY;
			var _axisValuesPrefix = this._axisValuesPrefixY;
			var _axisValuesSuffix = this._axisValuesSuffixY;
			var _axisValuesFontFamily = this._axisValuesFontFamilyY;
			var _axisValuesFontSize = this._axisValuesFontSizeY;
			var _axisValuesColor = this._axisValuesColorY;
			var _max = this._maxY;
			var _min = this._minY;
		} else {
			var _axisValues = this._axisValuesX;
			var _minAxis = this._minAxisX;
			var _maxAxis = this._maxAxisX;
			var _axisValuesDecimals = this._axisValuesDecimalsX;
			var _axisValuesPrefix = this._axisValuesPrefixX;
			var _axisValuesSuffix = this._axisValuesSuffixX;
			var _axisValuesFontFamily = this._axisValuesFontFamilyX;
			var _axisValuesFontSize = this._axisValuesFontSizeX;
			var _axisValuesColor = this._axisValuesColorX;
			var _max = this._maxX;
			var _min = this._minX;
		}
		var fonttype = (_axisValuesFontFamily === false) ? this._textDefaultFontFamily : _axisValuesFontFamily;
		
		if (_axisValues === 0) {
			
			unit = _minAxis;
			posX = this._graphX;
			
			// afisarea valorilor intre maxX si minX
			while (unit <= _maxAxis) {
				string = (_axisValuesDecimals === 'auto') ? unit : unit.toFixed(_axisValuesDecimals);
				alignFirst = (((this._axisValuesAlignFirstX && !reversed) || (this._axisValuesAlignFirstY && reversed)) && unit === _minAxis);
				alignLast = (((this._axisValuesAlignLastX && !reversed) || (this._axisValuesAlignLastY && reversed)) && unit + this._stepUnitsX > _maxAxis);
				
				// corecteaza eventuale valori cu multe zecimale
				hasDecimals = String(unit).lastIndexOf('.');
				decimals = String(unit).substr(hasDecimals + 1).length;
				if (decimals > 3 && _axisValuesDecimals === 'auto') {
					string = this._round(unit, 3);
				}
				
				// format valori numerice
				if (this._valuesFormat !== false) {
					string = this._formatValue(string);
				}
				
				// adauga eventual prefix/sufix si deseneaza valoarea
				if (typeof _axisValuesPrefix === 'string') {
					string = _axisValuesPrefix + string;
				}
				if (typeof _axisValuesSuffix === 'string') {
					string = string + _axisValuesSuffix;
				}
				
				textLen = this._getTextLength(String(string), _axisValuesFontSize, null, null, fonttype);
				
				if (this._axisValuesAngle > 0) {
					if (alignFirst) {
						x = posX + _axisValuesFontSize;
					} else if (alignLast) {
						x = posX - _axisValuesFontSize / 4;
					} else {
						x = posX + _axisValuesFontSize / 4;
					}
					this._ctx.save();
					this._ctx.translate(x, posY + 4);
					this._ctx.rotate(angle);
					this._write(string, 0 - textLen, 0 - _axisValuesFontSize / 2 - 2, _axisValuesFontSize, null, null, null, fonttype, _axisValuesColor);
					this._ctx.restore();
				} else {
					if (alignFirst) {
						x = posX;
					} else if (alignLast) {
						x = posX - textLen;
					} else {
						x = posX - textLen / 2;
					}
					this._write(string, x, posY, _axisValuesFontSize, null, null, null, fonttype, _axisValuesColor);
				}
				
				unit += this._stepUnitsX;
				posX += this._unitX;
			}
			
		} else {
			
			// gaseste numarul la care se poate imparti axa in unitati egale cu valori intregi
			var ok = false;
			for (var i = 2; i < 200; i++) {
				if ((_max - _min) % i === 0) {
					ok = i;
					if (!this._checkValuesX(i, true)) {
						continue;
					}
					break;
				}
			}
			var len = (ok) ? ok : i;
			
			// suprascrie numarul de valori pe axa daca este specificat
			if (_axisValues > 1) {
				len = _axisValues - 1;
			}
			
			// rotunjeste valorile in functie de numarul maxim de zecimale
			var maxDecimals = 0;
			var data = (this._multipleSeries) ? this._data[0] : this._data;
			for (i = 0; i < data.length; i++) {
				hasDecimals = String(data[i][0]).lastIndexOf('.');
				if (hasDecimals >= 0) {
					decimals = String(data[i][0]).substr(hasDecimals + 1).length;
					if (maxDecimals < decimals) {
						maxDecimals = decimals;
					}
				}
			}
			maxDecimals++;
			
			// verifica daca incap valorile pe axa X
			while (!this._checkValuesX(len, true)) {
				len = Math.floor(len / 2);
			}
			
			// deseneaza valorile
			step = this._sizeGraphX / len;
			stepUnits = (_max - _min) / len;
			unit = _min;
			posX = this._axisPaddingLeft ;
			posY = (this._axisValuesPaddingBottom === false) ? this._graphY + this._sizeGraphY + 4 : this._sizeY - this._axisValuesPaddingBottom;
			for (i = 0; i <= len; i++) {
				alignFirst = (this._axisValuesAlignFirstX && i === 0);
				alignLast = (this._axisValuesAlignLastX && i + 1 > len);
				
				string = (_axisValuesDecimals === 'auto' && this._round(unit, _axisValuesDecimals) !== unit) ? this._round(unit, maxDecimals) : unit.toFixed(_axisValuesDecimals);
				
				if (this._valuesFormat !== false) {
					string = this._formatValue(string);
				}
				
				if (typeof _axisValuesPrefix === 'string') {
					string = _axisValuesPrefix + string;
				}
				if (typeof _axisValuesSuffix === 'string') {
					string = string + _axisValuesSuffix;
				}
				
				textLen = this._getTextLength(string, _axisValuesFontSize, null, null, fonttype);
				
				if (this._axisValuesAngle > 0) {
					this._ctx.save();
					if (alignFirst) {
						x = posX + textLen / 4 + _axisValuesFontSize / 2;
					} else if (alignLast) {
						x = posX + textLen / 4 - _axisValuesFontSize / 2;
					} else {
						x = posX + textLen / 4;
					}
					this._ctx.translate(x, posY + 4);
					this._ctx.rotate(angle);
					this._write(string, 0 - textLen, 0 - _axisValuesFontSize / 2 - 2, _axisValuesFontSize, null, null, null, fonttype, _axisValuesColor);
					this._ctx.restore();
				} else {
					if (alignFirst) {
						x = posX;
					} else if (alignLast) {
						x = posX - textLen;
					} else {
						x = posX - textLen / 2;
					}
					this._write(string, x, posY, _axisValuesFontSize, null, null, null, fonttype, _axisValuesColor);
				}
				
				unit += stepUnits;
				posX += step;
			}
		}
	};
	
	// listeaza valorile pe axa Y
	this._writeValuesY = function (reversed) {
		
		if (reversed) {
			this._writeValuesX(true);
			return;
		}
		
		var textLen;
		var string;
		var decimals;
		var hasDecimals;
		var step;
		var stepUnits;
		var unit;
		var posY;
		var posX = (this._axisValuesPaddingLeft === false) ? this._axisPaddingLeft - 4 : this._axisValuesPaddingLeft;
		var textHeight = this._getTextHeight(this._axisValuesFontSizeY);
		var fonttype = (this._axisValuesFontFamilyY === false) ? this._textDefaultFontFamily : this._axisValuesFontFamilyY;
		var alignFirst;
		var alignLast;;
		
		if (this._axisValuesY === 0) {
			
			// calculam pozitia initiala pt afisare
			unit = this._minAxisY;
			posY = this._graphY + this._sizeGraphY;
			
			// afisarea valorilor intre maxY si minY
			while (unit <= this._maxAxisY) {
				alignFirst = (this._axisValuesAlignFirstY && unit === this._minAxisY);
				alignLast = (this._axisValuesAlignLastY && unit + this._stepUnitsY > this._maxAxisY);
				string = (this._axisValuesDecimalsY === 'auto') ? unit : unit.toFixed(this._axisValuesDecimalsY);
				
				// corecteaza eventuale valori cu multe zecimale
				hasDecimals = String(unit).lastIndexOf('.');
				decimals = String(unit).substr(hasDecimals + 1).length;
				if (decimals > 3 && this._axisValuesDecimalsY === 'auto') {
					string = this._round(unit, 3);
				}
				
				// format valori numerice
				if (this._valuesFormat !== false) {
					string = this._formatValue(string);
				}
				
				// adauga eventual prefix/sufix si deseneaza valoarea
				if (typeof this._axisValuesPrefixY === 'string') {
					string = this._axisValuesPrefixY + string;
				}
				if (typeof this._axisValuesSuffixY === 'string') {
					string = string + this._axisValuesSuffixY;
				}
				
				textLen = this._getTextLength(String(string), this._axisValuesFontSizeY, null, null, fonttype);
				if (alignFirst) {
					y = posY - textHeight;
				} else if (alignLast) {
					y = posY;
				} else {
					y = posY - textHeight / 2;
				}
				this._write(string, posX - textLen, y, this._axisValuesFontSizeY, null, null, null, fonttype, this._axisValuesColorY);
				
				unit += this._stepUnitsY;
				unit = Number(unit.toFixed(10));
				posY -= this._unitY;
			}
			
		} else {
			
			// gaseste numarul la care se poate imparti axa in unitati egale cu valori intregi
			var ok = false;
			for (var i = 2; i < 200; i++) {
				if ((this._maxY - this._minY) % i === 0) {
					ok = i;
					if (!this._checkValuesY(i, true)) {
						continue;
					}
					break;
				}
			}
			var len = (ok) ? ok : i;
			
			// suprascrie numarul de valori pe axa daca este specificat
			if (this._axisValuesY > 1) {
				len = this._axisValuesY - 1;
			}
			
			// rotunjeste valorile in functie de numarul maxim de zecimale
			var maxDecimals = 0;
			var data = (this._multipleSeries) ? this._data[0] : this._data;
			for (i = 0; i < data.length; i++) {
				hasDecimals = String(data[i][1]).lastIndexOf('.');
				if (hasDecimals >= 0) {
					decimals = String(data[i][1]).substr(hasDecimals + 1).length;
					if (maxDecimals < decimals) {
						maxDecimals = decimals;
					}
				}
			}
			maxDecimals++;
			
			// verifica daca incap valorile pe axa Y
			while (!this._checkValuesY(len)) {
				len = Math.floor(len / 2);
			}
			
			// deseneaza valorile
			step = this._sizeGraphY / len;
			stepUnits = (this._maxY - this._minY) / len;
			unit = this._minY;
			posX = (this._axisValuesPaddingLeft === false) ? this._axisPaddingLeft - 4 : this._axisValuesPaddingLeft;
			posY = this._graphY + this._sizeGraphY;
			for (i = 0; i <= len; i++) {
				alignFirst = (this._axisValuesAlignFirstY && i === 0);
				alignLast = (this._axisValuesAlignLastY && i + 1 > len);
				textHeight = this._getTextHeight(this._axisValuesFontSizeY);
				string = (this._axisValuesDecimalsY === 'auto' && this._round(unit, this._axisValuesDecimalsY) !== unit) ? this._round(unit, maxDecimals) : unit.toFixed(this._axisValuesDecimalsY);
				if (this._valuesFormat !== false) {
					string = this._formatValue(string);
				}
				if (typeof this._axisValuesPrefixY === 'string') {
					string = this._axisValuesPrefixY + string;
				}
				if (typeof this._axisValuesSuffixY === 'string') {
					string = string + this._axisValuesSuffixY;
				}
				textLen = this._getTextLength(string, this._axisValuesFontSizeY, null, null, fonttype);
				if (alignFirst) {
					y = posY - textHeight;
				} else if (alignLast) {
					y = posY;
				} else {
					y = posY - textHeight / 2;
				}
				this._write(string, posX - textLen, y, this._axisValuesFontSizeY, null, null, null, fonttype, this._axisValuesColorY);
				unit += stepUnits;
				posY -= step;
			}
		}
	};
	
	// * clase/functii copiate dupa php-jpgraph
	
    this._autoscale_min = false;
    this._autoscale_max = false;
    this._gracetop = 0;
	this._gracebottom = 0;
    this._intscale = false;
	
    this.IntAutoScale = function (min, max, maxsteps, majend) {
		if (typeof majend === 'undefined') {
			majend = true;
		}
		
		min = Math.floor(min);
		max = Math.ceil(max);
		if (Math.abs(min - max) === 0) {
			--min;
			++max;
		}
		maxsteps = Math.floor(maxsteps);
		
		var gracetop = Math.round((this._gracetop / 100.0) * Math.abs(max - min));
		var gracebottom = Math.round((this._gracebottom / 100.0) * Math.abs(max - min));
		if (typeof this._autoscale_min === 'number') {
			min = Math.ceil(this._autoscale_min);
			if (min >= max) {
				alert('You have specified a min value with SetAutoMin() which is larger than the maximum value used for the scale. This is not possible.');
				return;
			}
		}
		
		if (typeof this._autoscale_max === 'number') {
			max = Math.ceil(this._autoscale_max);
			if (min >= max) {
				alert('You have specified a max value with SetAutoMax() which is smaller than the miminum value used for the scale. This is not possible.');
				return;
			}
		}
		
		if (Math.abs(min - max) === 0) {
			++max;
			--min;
		}
		
		min -= gracebottom;
		max += gracetop;
		
		var tmp;
		var num1steps;
		var num2steps;
		var num5steps;
		var maj1step;
		var maj2step;
		var maj5step;
		var adj1min;
		var adj1max;
		var adj2min;
		var adj2max;
		var adj5min;
		var adj5max;
		
		if (majend) {
			 tmp = this.IntCalcTicks(maxsteps, min, max, 1);
			 num1steps = tmp[0];
			 adj1min = tmp[1];
			 adj1max = tmp[2];
			 maj1step = tmp[3];
		} else {
			adj1min = min;
			adj1max = max;
			tmp = this.IntCalcTicksFreeze(maxsteps, min, max, 1);
			num1steps = tmp[0];
			maj1step = tmp[1];
		}
		
		if (Math.abs(min - max) > 2) {
			if (majend) {
				tmp = this.IntCalcTicks(maxsteps, min, max, 5);
				num2steps = tmp[0];
				adj2min = tmp[1];
				adj2max = tmp[2];
				maj2step = tmp[3];
			} else {
				adj2min = min;
				adj2max = max;
				tmp = this.IntCalcTicksFreeze(maxsteps, min, max, 5);
				num2steps = tmp[0];
				maj2step = tmp[1];
		    }
		} else {
			num2steps = 10000;
		}
		
		if (Math.abs(min - max) > 5) {
			if (majend) {
				tmp = this.IntCalcTicks(maxsteps, min, max, 2);
				num5steps = tmp[0];
				adj5min = tmp[1];
				adj5max = tmp[2];
				maj5step = tmp[3];
			} else {
				adj5min = min;
				adj5max = max;
				tmp = this.IntCalcTicksFreeze(maxsteps, min, max, 2);
				num5steps = tmp[0];
				maj5step = tmp[1];
		    }
		} else {
			num5steps = 10000;
		}
		
		var match1 = Math.abs(num1steps - maxsteps);
		var match2 = Math.abs(num2steps - maxsteps);
		var match5 = (!this._empty(maj5step) && maj5step > 1) ? Math.abs(num5steps - maxsteps) : match5 = 10000;
		var r;
		if (match1 < match2) {
			r = (match1 < match5) ? 1 : 3;
		} else {
			r = (match2 < match5) ? 2 : 3;
		}
		
		switch (r) {
			case 1:
				return [adj1min, adj1max, maj1step];
			case 2:
				return [adj2min, adj2max, maj2step];
			case 3:
				return [adj5min, adj5max, maj5step];
			default:
				alert('invalid r (IntAutoScale) ');
				return;
		}
    };
	
    this.AutoScale = function (min, max, maxsteps, majend) {
		if (typeof majend === 'undefined') {
			majend = true;
		}
		if (this._intscale) {	
			this.IntAutoScale(min, max, maxsteps, majend);
			return;
		}
		
		if (Math.abs(min - max) < 0.00001) {
			if (min === 0 && max === 0) {
				min =- 1;
				max = 1;
			} else {
				var delta = (Math.abs(max) + Math.abs(min)) * 0.005;
				min -= delta;
				max += delta;
			}
		}
		
		var gracetop = (this._gracetop / 100.0) * Math.abs(max - min);
		var gracebottom = (this._gracebottom / 100.0) * Math.abs(max - min);
		if (typeof this._autoscale_min === 'number') {
			min = this._autoscale_min;
			if (min >= max) {
				alert('You have specified a min value with SetAutoMin() which is larger than the maximum value used for the scale. This is not possible.');
				return;
		    }
			if (Math.abs(min - max) < 0.00001) {
				max *= 1.2;
			}
		}
		
		if (typeof this._autoscale_max === 'number') {
			max = this._autoscale_max;
			if (min >= max) {
				alert('You have specified a max value with SetAutoMax() which is smaller than the miminum value used for the scale. This is not possible.');
				return;
		    }
			if (Math.abs(min - max) < 0.00001) {
				min *= 0.8;
			}
		}
		
		min -= gracebottom;
		max += gracetop;
		
		var tmp;
		var num1steps;
		var num2steps;
		var num5steps;
		var adj1min;
		var adj1max;
		var adj2min;
		var adj2max;
		var adj5min;
		var adj5max;
		var min1step;
		var maj1step;
		var min2step;
		var maj2step;
		var min5step;
		var maj5step;
		
		if (majend) {
			tmp = this.CalcTicks(maxsteps, min, max, 1, 2);
			num1steps = tmp[0];
			adj1min = tmp[1];
			adj1max = tmp[2];
			min1step = tmp[3];
			maj1step = tmp[4];
		} else {
			adj1min = min;
			adj1max = max;
			tmp = this.CalcTicksFreeze(maxsteps, min, max, 1, 2, false);
			num1steps = tmp[0];
			min1step = tmp[1];
			maj1step = tmp[2];
		}
		
		if (majend) {
			tmp = this.CalcTicks(maxsteps, min, max, 5, 2);
			num2steps = tmp[0];
			adj2min = tmp[1];
			adj2max = tmp[2];
			min2step = tmp[3];
			maj2step = tmp[4];
		} else {
			adj2min = min;
			adj2max = max;
			tmp = this.CalcTicksFreeze(maxsteps, min, max, 5, 2, false);
			num2steps = tmp[0];
			min2step = tmp[1];
			maj2step = tmp[2];
		}
		
		if (majend) {
			tmp = this.CalcTicks(maxsteps, min, max, 2, 5);
			num5steps = tmp[0];
			adj5min = tmp[1];
			adj5max = tmp[2];
			min5step = tmp[3];
			maj5step = tmp[4];
		} else {
			adj5min = min;
			adj5max = max;
			tmp = this.CalcTicksFreeze(maxsteps, min, max, 2, 5, false);
			num5steps = tmp[0];
			min5step = tmp[1];
			maj5step = tmp[2];
		}
		
		var match1 = Math.abs(num1steps - maxsteps);
		var match2 = Math.abs(num2steps - maxsteps);
		var match5 = Math.abs(num5steps - maxsteps);
		var r = this.MatchMin3(match1, match2, match5, 0.8);
		
		switch (r) {
			case 1:
				return [adj1min, adj1max, maj1step];
			case 2:
				return [adj2min, adj2max, maj2step];
			case 3:
				return [adj5min, adj5max, maj5step];
			default:
				alert('invalid r (AutoScale) ');
				return;
		}
    };
	
    this.CalcTicks = function (maxsteps, min, max, a, b, majend) {
		if (typeof majend === 'undefined') {
			majend = true;
		}
		var diff = max - min;
		var ld = (diff === 0) ? 0 : Math.floor(this._log(diff, 10));
		
		if (min > 0 && min < Math.pow(10, ld)) {
			min = 0;
		}
		
		var majstep = Math.pow(10, ld) / a; 
		var minstep = majstep / b;
		
		var adjmax = Math.ceil(max / minstep) * minstep;
		var adjmin = Math.floor(min / minstep) * minstep;
		var adjdiff = adjmax - adjmin;
		var numsteps = adjdiff / majstep;
		
		while (numsteps > maxsteps) {
			majstep = Math.pow(10, ld) / a;
			numsteps = adjdiff / majstep;
			++ld;
		}
		
		minstep = majstep / b;
		adjmin = Math.floor(min / minstep) * minstep;
		adjdiff = adjmax - adjmin;
		if (majend) {
			adjmin = Math.floor(min / majstep) * majstep;
			adjdiff = adjmax - adjmin;
			adjmax = Math.ceil(adjdiff / majstep) * majstep + adjmin;
		} else {
			adjmax = Math.ceil(max / minstep) * minstep;
		}
		
		return [numsteps, adjmin, adjmax, minstep, majstep];
    };
	
    this.CalcTicksFreeze = function (maxsteps, min, max, a, b) {
		var diff = max - min;
		var ld = (diff === 0) ? 0 : Math.floor(this._log(diff, 10));
		
		var majstep = Math.pow(10, ld) / a;
		var minstep = Math.majstep / b;
		var numsteps = Math.floor(diff / majstep);
		
		while (numsteps > maxsteps) {
			majstep = Math.pow(10, ld) / a;
			numsteps = Math.floor(diff / majstep);
			++ld;
		}
		minstep = majstep / b;
		return [numsteps, minstep, majstep];
    };
	
    this.IntCalcTicks = function (maxsteps, min, max, a, majend) {
		if (typeof majend === 'undefined') {
			majend = true;
		}
		var diff = max - min;
		if (diff === 0) {
		    alert('Can\'t automatically determine ticks since min == max.');
			return;
		} else {
			var ld = Math.floor(this._log(diff, 10));
		}
		
		if (min > 0 && min < Math.pow(10, ld)) {
			min = 0;
		}
		
		if (ld === 0) {
			ld = 1;
		}
		
		var majstep = (a === 1) ? 1 : Math.pow(10, ld) / a;
		var adjmax = Math.ceil(max / majstep) * majstep;
		
		var adjmin = Math.floor(min / majstep) * majstep;
		var adjdiff = adjmax - adjmin;
		var numsteps = adjdiff / majstep;
		while (numsteps > maxsteps) {
			majstep = Math.pow(10, ld) / a;
			numsteps = adjdiff / majstep;
			++ld;
		}
		
		adjmin = Math.floor(min / majstep) * majstep;
		adjdiff = adjmax - adjmin;
		if (majend) {
			adjmin = Math.floor(min / majstep) * majstep;
			adjdiff = adjmax - adjmin;
			adjmax = Math.ceil(adjdiff / majstep) * majstep + adjmin;
		} else {
			adjmax = Math.ceil(max / majstep) * majstep;
		}
		
		return [numsteps, adjmin, adjmax, majstep];
    };
	
    this.IntCalcTicksFreeze = function (maxsteps, min, max, a) {
		var diff = max - min;
		if (diff === 0) {
			alert('Can\'t automatically determine ticks since min == max.');
			return;
		} else {
			var ld = Math.floor(this._log(diff, 10));
		}
		
		if (ld === 0) {
			ld = 1;
		}
		
		var majstep = (a === 1) ? 1 : Math.pow(10, ld) / a;
		var numsteps = Math.floor(diff / majstep);
		while (numsteps > maxsteps) {
			majstep = Math.pow(10, ld) / a;
			numsteps = Math.floor(diff / majstep);
			++ld;
		}
		
		return [numsteps, majstep];
    };
	
    this.MatchMin3 = function (a, b, c, weight) {
		if (a < b) {
			if (a < c * weight) {
				return 1;
		    }
			return 3;
		} else if (b < c * weight) {
			return 2;
		}
		return 3;
    };
	
	// * gata
	
	
	// ALTE CLASE
	
	// md5/b64 (http://pajhome.org.uk/crypt/md5/ converted into literal object)
	this.HASH = {
		hexcase : 0, // hex output format. 0 - lowercase; 1 - uppercase
		b64pad : "", // base-64 pad character. "=" for strict RFC compliance
		chrsz : 8, // bits per input character. 8 - ASCII; 16 - Unicode
		hex_md5 : function (s){ return this.binl2hex(this.core_md5(this.str2binl(s), s.length * this.chrsz));},
		b64_md5 : function (s){ return this.binl2b64(this.core_md5(this.str2binl(s), s.length * this.chrsz));},
		str_md5 : function (s){ return this.binl2str(this.core_md5(this.str2binl(s), s.length * this.chrsz));},
		hex_hmac_md5 : function (key, data) { return this.binl2hex(this.core_hmac_md5(key, data)); },
		b64_hmac_md5 : function (key, data) { return this.binl2b64(this.core_hmac_md5(key, data)); },
		str_hmac_md5 : function (key, data) { return this.binl2str(this.core_hmac_md5(key, data)); },
		md5_vm_test : function () {
		  return this.hex_md5("abc") === "900150983cd24fb0d6963f7d28e17f72";
		},
		core_md5 : function (x, len) {
		  x[len >> 5] |= 0x80 << ((len) % 32);
		  x[(((len + 64) >>> 9) << 4) + 14] = len;
		  var a =  1732584193;
		  var b = -271733879;
		  var c = -1732584194;
		  var d =  271733878;
		  for (var i = 0; i < x.length; i += 16) {
		    var olda = a;
		    var oldb = b;
		    var oldc = c;
		    var oldd = d;
		    a = this.md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
		    d = this.md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
		    c = this.md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
		    b = this.md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
		    a = this.md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
		    d = this.md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
		    c = this.md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
		    b = this.md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
		    a = this.md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
		    d = this.md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
		    c = this.md5_ff(c, d, a, b, x[i+10], 17, -42063);
		    b = this.md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
		    a = this.md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
		    d = this.md5_ff(d, a, b, c, x[i+13], 12, -40341101);
		    c = this.md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
		    b = this.md5_ff(b, c, d, a, x[i+15], 22,  1236535329);
		    a = this.md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
		    d = this.md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
		    c = this.md5_gg(c, d, a, b, x[i+11], 14,  643717713);
		    b = this.md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
		    a = this.md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
		    d = this.md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
		    c = this.md5_gg(c, d, a, b, x[i+15], 14, -660478335);
		    b = this.md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
		    a = this.md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
		    d = this.md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
		    c = this.md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
		    b = this.md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
		    a = this.md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
		    d = this.md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
		    c = this.md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
		    b = this.md5_gg(b, c, d, a, x[i+12], 20, -1926607734);
		    a = this.md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
		    d = this.md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
		    c = this.md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
		    b = this.md5_hh(b, c, d, a, x[i+14], 23, -35309556);
		    a = this.md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
		    d = this.md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
		    c = this.md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
		    b = this.md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
		    a = this.md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
		    d = this.md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
		    c = this.md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
		    b = this.md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
		    a = this.md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
		    d = this.md5_hh(d, a, b, c, x[i+12], 11, -421815835);
		    c = this.md5_hh(c, d, a, b, x[i+15], 16,  530742520);
		    b = this.md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);
		    a = this.md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
		    d = this.md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
		    c = this.md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
		    b = this.md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
		    a = this.md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
		    d = this.md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
		    c = this.md5_ii(c, d, a, b, x[i+10], 15, -1051523);
		    b = this.md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
		    a = this.md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
		    d = this.md5_ii(d, a, b, c, x[i+15], 10, -30611744);
		    c = this.md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
		    b = this.md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
		    a = this.md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
		    d = this.md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
		    c = this.md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
		    b = this.md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);
		    a = this.safe_add(a, olda);
		    b = this.safe_add(b, oldb);
		    c = this.safe_add(c, oldc);
		    d = this.safe_add(d, oldd);
		  }
		  return [a, b, c, d];
		},
		md5_cmn : function (q, a, b, x, s, t) {
		  return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s),b);
		},
		md5_ff : function (a, b, c, d, x, s, t) {
		  return this.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
		},
		md5_gg : function (a, b, c, d, x, s, t) {
		  return this.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
		},
		md5_hh : function (a, b, c, d, x, s, t) {
		  return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
		},
		md5_ii : function (a, b, c, d, x, s, t) {
		  return this.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
		},
		core_hmac_md5 : function (key, data) {
		  var bkey = this.str2binl(key);
		  if (bkey.length > 16) {
			bkey = this.core_md5(bkey, key.length * this.chrsz);
		  }
		  var ipad = [16], opad = [16];
		  for (var i = 0; i < 16; i++) {
		    ipad[i] = bkey[i] ^ 0x36363636;
		    opad[i] = bkey[i] ^ 0x5C5C5C5C;
		  }
		  var hash = this.core_md5(ipad.concat(this.str2binl(data)), 512 + data.length * this.chrsz);
		  return this.core_md5(opad.concat(hash), 512 + 128);
		},
		safe_add : function (x, y) {
		  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		  return (msw << 16) | (lsw & 0xFFFF);
		},
		bit_rol : function (num, cnt) {
		  return (num << cnt) | (num >>> (32 - cnt));
		},
		str2binl : function (str) {
		  var bin = [];
		  var mask = (1 << this.chrsz) - 1;
		  for (var i = 0; i < str.length * this.chrsz; i += this.chrsz) {
		    bin[i>>5] |= (str.charCodeAt(i / this.chrsz) & mask) << (i%32);
		  }
		  return bin;
		},
		binl2str : function (bin) {
		  var str = "";
		  var mask = (1 << this.chrsz) - 1;
		  for (var i = 0; i < bin.length * 32; i += this.chrsz) {
		    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
		  }
		  return str;
		},
		binl2hex : function (binarray) {
		  var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
		  var str = "";
		  for (var i = 0; i < binarray.length * 4; i++) {
		    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
		           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
		  }
		  return str;
		},
		binl2b64 : function (binarray) {
		  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		  var str = "";
		  for (var i = 0; i < binarray.length * 4; i += 3) {
		    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16) | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 ) | ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
		    for (var j = 0; j < 4; j++) {
		      if (i * 8 + j * 6 > binarray.length * 32) {
				str += this.b64pad;
			  } else {
			    str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
			  }
		    }
		  }
		  return str;
		}
	};
	
	// clasa utilizata la centralizarea mesajelor
	this.JSChartAlerts = {
		
		_3dNotBoolean : function () {
			alert('JSChart: 3D setting must be boolean (true/false)');
		},
		
		_alignNotBoolean : function () {
			alert('JSChart: Alignment setting must be boolean (true/false)');
		},
		
		_axisNameNotString : function () {
			alert('JSChart: Axis name must be string');
		},
		
		_axisPrefixNotString : function () {
			alert('JSChart: Axis values prefix must be string');
		},
		
		_axisSuffixNotString : function () {
			alert('JSChart: Axis values suffix must be string');
		},
		
		_axisValuesAngleNotNumber : function () {
			alert('JSChart: Axis angle must be a number between 0 and 90');
		},
		
		_axisValuesNotNumber : function () {
			alert('JSChart: The number of axis values must be a number greater than 1');
		},
		
		_axisWidthNotNumber : function () {
			alert('JSChart: Axis width must be a number');
		},
		
		_backgroundImageNotString : function () {
			alert('JSChart: Background image name must be string');
		},
		
		_barBorderWidthNotNumber : function () {
			alert('JSChart: Bars border width must be a number');
		},
		
		_barSpacingRatioNotNumber : function () {
			alert('JSChart: Bars spacing ratio must be a number between 0 and 100');
		},
		
		_barValuesNotBoolean : function () {
			alert('JSChart: Bar values setting must be boolean (true/false)');
		},
		
		_barValuesPrefixNotString : function () {
			alert('JSChart: Bar values prefix must be string');
		},
		
		_barValuesSuffixNotString : function () {
			alert('JSChart: Bar values suffix must be string');
		},
		
		_colorLength : function () {
			alert('JSChart: Colors array length must equal data length in case of pie and bar graphs');
		},
		
		_colorNotArray : function () {
			alert('JSChart: Color data not array');
		},
		
		_dataNotArray : function () {
			alert('JSChart: Input data not array');
		},
		
		_dataWrongFormat : function () {
			alert('JSChart: Input data in wrong format for selected chart type');
		},
		
		_depthNotNumber : function () {
			alert('JSChart: Depth setting must be a number');
		},
		
		_errorsNotBoolean : function () {
			alert('JSChart: Error alerts setting must be boolean (true/false)');
		},
		
		_extendNotBoolean : function () {
			alert('JSChart: Graph extend setting must be boolean (true/false)');
		},
		
		_flagOffsetNotNumber : function () {
			alert('JSChart: Flag offset must be a number');
		},
		
		_flagShapeNotString : function () {
			alert('JSChart: Flag shape must be a string');
		},
		
		_flagWidthNotNumber : function () {
			alert('JSChart: Flag line width must be a number');
		},
		
		_fontFamilyNotString : function () {
			alert('JSChart: All font family names must be strings');
		},
		
		_fontSizeNotNumber : function () {
			alert('JSChart: All font sizes must be numbers');
		},
		
		_gridNotBoolean : function () {
			alert('JSChart: Grid setting must be boolean (true/false)');
		},
		
		_idNotString : function () {
			alert('JSChart: Id not string');
		},
		
		_intervalNotNumber : function () {
			alert('JSChart: All interval limits must be numbers');
		},
		
		_invalidArea : function () {
			alert('JSChart: Invalid area call');
		},
		
		_invalidBarNumber : function () {
			alert('JSChart: Invalid bar number');
		},
		
		_invalidColor : function () {
			alert('JSChart: All color values must be in hexa format (#rgb or #rrggbb)');
		},
		
		_invalidFunction : function () {
			alert('JSChart: Callback not a function');
		},
		
		_invalidIntervalX : function () {
			alert('JSChart: Invalid interval on axis X');
		},
		
		_invalidIntervalY : function () {
			alert('JSChart: Invalid interval on axis Y');
		},
		
		_invalidLabel : function () {
			alert('JSChart: Invalid label format');
		},
		
		_invalidPieAngle : function () {
			alert('JSChart: Invalid pie angle');
		},
		
		_invalidTooltip : function () {
			alert('JSChart: Invalid tooltip format');
		},
		
		_invalidValueFormat : function () {
			alert('JSChart: Invalid values format');
		},
		
		_legendNotBoolean : function () {
			alert('JSChart: Legend switch must be boolean (true/false)');
		},
		
		_invalidLegendPosition : function () {
			alert('JSChart: Legend position must be string (see documentation for values) or two number coordinates');
		},
		
		_legendTextNotString : function () {
			alert('JSChart: Legend text not string');
		},
		
		_lineWidthNotNumber : function () {
			alert('JSChart: Lines width must be a number');
		},
		
		_noCanvasSupport : function () {
			alert('JSChart: No canvas support');
		},
		
		_noData : function () {
			alert('JSChart: No data loaded');
		},
		
		_notEnoughData : function () {
			alert('JSChart: Not enough data to render chart');
		},
		
		_noKey : function () {
			alert('JSChart: Key missing or mismatch');
		},
		
		_noName : function () {
			alert('JSChart: Name must be string and correspond to an existing ID');
		},
		
		_noTooltip : function () {
			alert('JSChart: No tooltip with this id');
		},
		
		_noType : function () {
			alert('JSChart: Chart type not supported');
		},
		
		_notBars : function () {
			alert('JSChart: Chart is not bars type');
		},
		
		_notLine : function () {
			alert('JSChart: Chart is not line type');
		},
		
		_notPie : function () {
			alert('JSChart: Chart is not pie type');
		},
		
		_opacityNotNumber : function () {
			alert('JSChart: Any opacity must be a number between 0 (transparent) and 1 (opaque)');
		},
		
		_optionSetNotArray : function () {
			alert('JSChart: Option set not array');
		},
		
		_paddingNotNumber : function () {
			alert('JSChart: Padding values must be numbers');
		},
		
		_paddingTooMuch : function () {
			alert('JSChart: The sum of paddings exceed the canvas size');
		},
		
		_piePositionNotNumber : function () {
			alert('JSChart: Pie position coordinates must be numbers');
		},
		
		_pieUnitsFontSizeNotNumber : function () {
			alert('JSChart: Pie units font size must be a number');
		},
		
		_pieUnitsOffsetNotNumber : function () {
			alert('JSChart: Pie units offset must be a number');
		},
		
		_pieValuesOffsetNotNumber : function () {
			alert('JSChart: Pie values offset must be a number');
		},
		
		_pieValuesPrefixNotString : function () {
			alert('JSChart: Pie values prefix must be string');
		},
		
		_pieValuesSuffixNotString : function () {
			alert('JSChart: Pie values suffix must be string');
		},
		
		_prefixNotString : function () {
			alert('JSChart: Canvas id prefix must be string');
		},
		
		_radiusNotNumber : function () {
			alert('JSChart: All radius settings must be numbers');
		},
		
		_reverseNotBoolean : function () {
			alert('JSChart: Axis reverse setting must be boolean (true/false)');
		},
		
		_sizeNotNumber : function () {
			alert('JSChart: Graph size arguments must be numbers');
		},
		
		_speedNotNumber : function () {
			alert('JSChart: Speed must be a number');
		},
		
		_titleNotString : function () {
			alert('JSChart: Title must be string');
		},
		
		_titlePositionNotString : function () {
			alert('JSChart: Title position must be string (center, left or right)');
		},
		
		_tooltipBorderNotString : function () {
			alert('JSChart: Tooltip border must be string');
		},
		
		_tooltipFontNotString : function () {
			alert('JSChart: Tooltip font family must be string');
		},
		
		_tooltipOffsetNotNumber : function () {
			alert('JSChart: Tooltip offset must be a number');
		},
		
		_tooltipIdNotNumber : function () {
			alert('JSChart: Tooltip id must be a number');
		},
		
		_tooltipPaddingNotString : function () {
			alert('JSChart: Tooltip padding must be string');
		},
		
		_tooltipPositionNotString : function () {
			alert('JSChart: Tooltip position must be string');
		},
		
		_tooltipPositionWrong : function () {
			alert('JSChart: Wrong tooltip position, possible values are nw, ne, sw and se');
		},
		
		_userLabelNotString : function () {
			alert('JSChart: Graph label must be string');
		},
		
		_userLabelPositionNotString : function () {
			alert('JSChart: Graph label position must be string');
		},
		
		_userLabelPositionWrong : function () {
			alert('JSChart: Wrong graph label position, possible values are nw, ne, sw and se');
		},
		
		_valuesDecimalsNotNumber : function () {
			alert('JSChart: Decimals must be a number');
		},
		
		_valuesShowNotBoolean : function () {
			alert('JSChart: Values show setting must be boolean (true/false)');
		},
		
		_xmlEmptyData : function () {
			alert ('JSChart XML/JSON: Empty data set');
			return;
		},
		
		_xmlEmptyKey : function () {
			alert ('JSChart XML/JSON: Empty or missing key');
			return;
		},
		
		_xmlEmptyName : function () {
			alert ('JSChart XML/JSON: Empty or missing chart name');
			return;
		},
		
		_xmlEmptyType : function () {
			alert ('JSChart XML/JSON: Empty or missing chart type');
			return;
		},
		
		_xmlFileNotLoaded : function (message, url, line) {
			alert('JSChart XML/JSON: File not loaded or malformed color/data/option set');
			return;
		},
		
		_xmlMalformedColor : function () {
			alert ('JSChart XML/JSON: Malformed color set');
			return;
		},
		
		_xmlMalformedData : function () {
			alert ('JSChart XML/JSON: Malformed data set');
			return;
		},
		
		_xmlMalformedOption : function () {
			alert ('JSChart XML/JSON: Malformed option set');
			return;
		},
		
		_xmlUnexpectedFormat : function () {
			alert ('JSChart XML/JSON: Unexpected format');
			return;
		}
	};
}


// clasa constructor si functii publice
function JSChart(name, type, code, key, resize) {
	
	// modifica functia intr-o instanta a obiectului JSChartObject si initializeaza clasa
	this.chart = new JSChartObject();
	var chart = this.chart;
	chart._init(name, type.toLowerCase(), code, key, resize);
	
	chart._alert = function (err) {
		if (chart._showAlerts) {
			chart.JSChartAlerts[err]();
		}
	};
	
	// METODE PUBLICE
	
	// personalizeaza culorile graficelor
	this.colorize = function (colors) {
		
		// verifica daca datele au fost incarcate deja
		if (chart._data.length === 0) {
			chart._alert('_noData');
			return;
		}
		
		// verifica daca culorile sunt in format array
		if (!chart._isArray(colors)) {
			chart._alert('_colorNotArray');
			return;
		}
		
		// verifica daca array-ul are lungimea datelor pt bare si pie
		if (chart._data.length !== colors.length && chart._type !== 'line') {
			chart._alert('_colorLength');
			return;
		}
		
		chart._colors = colors;
	};
	
	// alias colorize pt user-friendlyness
	this.colorizeBars = function (colors) {
		if (chart._type === 'bar') {
			this.colorize(colors);
		} else {
			chart._alert('_notBars');
		}
	};
	
	// alias colorize pt user-friendlyness
	this.colorizePie = function (colors) {
		if (chart._type === 'pie') {
			this.colorize(colors);
		} else {
			chart._alert('_notPie');
		}
	};
	
	// (re)deseneaza graficul
	this.draw = function () {
		if (chart._data.length === 0) {
			chart._alert('_noData');
			return;
		}
		if (((chart._data.length === 1 && !chart._multipleSeries) ||
			(chart._data[0].length === 1 && chart._multipleSeries)) &&
			chart._type === 'line') {
			chart._alert('_notEnoughData');
			return;
		}
		chart._draw();
	};
	
	// preia denumirile seturilor de date - utilizat in editorul jscharts.com
	this.getDataIds = function () {
		return chart._dataIds;
	};
	
	// seteaza dimensiunile graficului cu redesenare
	this.resize = function (x, y) {
		if (typeof x !== 'number' || typeof y !== 'number') {
			chart._alert('_sizeNotNumber');
			return;
		}
		chart._setSize(x, y);
		chart._draw();
	};
	
	// afiseaza sau nu erorile graficele in 3d
	this.set3D = function (threeD) {
		if (typeof threeD !== 'boolean') {
			chart._alert('_3dNotBoolean');
			return;
		}
		chart._3d = threeD;
	};
	
	// seteaza o arie pt click pe o sectiune pie sau bara
	this.setArea = function (unit, callback) {
		if (typeof unit !== 'string' || !chart._isFunction(callback)) {
			chart._alert('_invalidArea');
			return;
		}
		chart._areas[unit] = callback;
	};
	
	// aliniaza prima si ultima valoare pe axa X
	this.setAxisAlignX = function (align) {
		if (typeof align !== 'boolean') {
			chart._alert('_alignNotBoolean');
			return;
		}
		chart._axisValuesAlignFirstX = align;
		chart._axisValuesAlignLastX = align;
	};
	
	// aliniaza prima si ultima valoare pe axa Y
	this.setAxisAlignY = function (align) {
		if (typeof align !== 'boolean') {
			chart._alert('_alignNotBoolean');
			return;
		}
		chart._axisValuesAlignFirstY = align;
		chart._axisValuesAlignLastY = align;
	};
	
	// aliniaza prima valoare pe axa X
	this.setAxisAlignFirstX = function (align) {
		if (typeof align !== 'boolean') {
			chart._alert('_alignNotBoolean');
			return;
		}
		chart._axisValuesAlignFirstX = align;
	};
	
	// aliniaza prima valoare pe axa Y
	this.setAxisAlignFirstY = function (align) {
		if (typeof align !== 'boolean') {
			chart._alert('_alignNotBoolean');
			return;
		}
		chart._axisValuesAlignFirstY = align;
	};
	
	// aliniaza ultima valoare pe axa X
	this.setAxisAlignLastX = function (align) {
		if (typeof align !== 'boolean') {
			chart._alert('_alignNotBoolean');
			return;
		}
		chart._axisValuesAlignLastX = align;
	};
	
	// aliniaza ultima valoare pe axa Y
	this.setAxisAlignLastY = function (align) {
		if (typeof align !== 'boolean') {
			chart._alert('_alignNotBoolean');
			return;
		}
		chart._axisValuesAlignLastY = align;
	};
	
	// seteaza culoarea axelor
	this.setAxisColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._axisColor = color;
	};
	
	// seteaza culoarea textelor pe axe
	this.setAxisNameColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._axisNameColorX = color;
		chart._axisNameColorY = color;
	};
	
	// seteaza culoarea textului pe axa X
	this.setAxisNameColorX = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._axisNameColorX = color;
	};
	
	// seteaza culoarea textului pe axa Y
	this.setAxisNameColorY = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._axisNameColorY = color;
	};
	
	// seteaza font-ul textelor pe axe
	this.setAxisNameFontFamily = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._axisNameFontFamilyX = string;
		chart._axisNameFontFamilyY = string;
	};
	
	// seteaza font-ul textelor pe axa X
	this.setAxisNameFontFamilyX = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._axisNameFontFamilyX = string;
	};
	
	// seteaza font-ul textelor pe axa Y
	this.setAxisNameFontFamilyY = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._axisNameFontFamilyY = string;
	};
	
	// seteaza marimea font-ului textelor pe axe
	this.setAxisNameFontSize = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._axisNameFontSizeX = Number(size);
		chart._axisNameFontSizeY = Number(size);
	};
	
	// seteaza marimea font-ului textului pe axa X
	this.setAxisNameFontSizeX = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._axisNameFontSizeX = Number(size);
	};
	
	// seteaza marimea font-ului textului pe axa Y
	this.setAxisNameFontSizeY = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._axisNameFontSizeY = Number(size);
	};
	
	// denumire axa X
	this.setAxisNameX = function (name) {
		if (typeof name !== 'string') {
			chart._alert('_axisNameNotString');
			return;
		}
		chart._axisNameX = name;
	};
	
	// denumire axa Y
	this.setAxisNameY = function (name) {
		if (typeof name !== 'string') {
			chart._alert('_axisNameNotString');
			return;
		}
		chart._axisNameY = name;
	};
	
	// seteaza padding pana la axa jos
	this.setAxisPaddingBottom = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_paddingNotNumber');
			return;
		}
		if (chart._axisPaddingTop + number >= chart._sizeY) {
			chart._alert('_paddingTooMuch');
			return;
		}
		chart._axisPaddingBottom = Number(number);
	};
	
	// seteaza padding pana la axa stanga
	this.setAxisPaddingLeft = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_paddingNotNumber');
			return;
		}
		if (number + chart._axisPaddingRight >= chart._sizeX) {
			chart._alert('_paddingTooMuch');
			return;
		}
		chart._axisPaddingLeft = Number(number);
	};
	
	// seteaza padding pana la axa dreapta
	this.setAxisPaddingRight = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_paddingNotNumber');
			return;
		}
		if (chart._axisPaddingLeft + number >= chart._sizeX) {
			chart._alert('_paddingTooMuch');
			return;
		}
		chart._axisPaddingRight = Number(number);
	};
	
	// seteaza padding pana la axa sus
	this.setAxisPaddingTop = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_paddingNotNumber');
			return;
		}
		if (number + chart._axisPaddingBottom >= chart._sizeY) {
			chart._alert('_paddingTooMuch');
			return;
		}
		chart._axisPaddingTop = Number(number);
	};
	
	// inverseaza axele sau nu
	this.setAxisReversed = function (reverse) {
		if (typeof reverse !== 'boolean') {
			chart._alert('_reverseNotBoolean');
			return;
		}
		if (chart._type === 'bar') {
			chart._axisReversed = reverse;
		}
	};
	
	// seteaza unghiul valorilor pe axe
	this.setAxisValuesAngle = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_axisValuesAngleNotNumber');
			return;
		}
		if (number < 0) {
			number = 0;
		}
		if (number > 89.9) {
			number = 89.9;
		}
		chart._axisValuesAngle = number;
	};
	
	// seteaza culoarea valorilor pe axe
	this.setAxisValuesColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._axisValuesColorX = color;
		chart._axisValuesColorY = color;
	};
	
	// seteaza culoarea valorilor pe axa X
	this.setAxisValuesColorX = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._axisValuesColorX = color;
	};
	
	// seteaza culoarea valorilor pe axa Y
	this.setAxisValuesColorY = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._axisValuesColorY = color;
	};
	
	// seteaza numarul de zecimale pt valori pe axe
	this.setAxisValuesDecimals = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_valuesDecimalsNotNumber');
			return;
		}
		chart._axisValuesDecimalsX = number;
		chart._axisValuesDecimalsY = number;
	};
	
	// seteaza numarul de zecimale pt valori pe axa X
	this.setAxisValuesDecimalsX = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_valuesDecimalsNotNumber');
			return;
		}
		chart._axisValuesDecimalsX = number;
	};
	
	// seteaza numarul de zecimale pt valori pe axa Y
	this.setAxisValuesDecimalsY = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_valuesDecimalsNotNumber');
			return;
		}
		chart._axisValuesDecimalsY = number;
	};
	
	// seteaza font-ul valorilor pe axe
	this.setAxisValuesFontFamily = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._axisValuesFontFamilyX = string;
		chart._axisValuesFontFamilyY = string;
	};
	
	// seteaza font-ul valorilor pe axa X
	this.setAxisValuesFontFamilyX = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._axisValuesFontFamilyX = string;
	};
	
	// seteaza font-ul valorilor pe axa Y
	this.setAxisValuesFontFamilyY = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._axisValuesFontFamilyY = string;
	};
	
	// seteaza marimea font-ului valorilor pe axe
	this.setAxisValuesFontSize = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._axisValuesFontSizeX = Number(size);
		chart._axisValuesFontSizeY = Number(size);
	};
	
	// seteaza marimea font-ului valorilor pe axa X
	this.setAxisValuesFontSizeX = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._axisValuesFontSizeX = Number(size);
	};
	
	// seteaza marimea font-ului valorilor pe axa Y
	this.setAxisValuesFontSizeY = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._axisValuesFontSizeY = Number(size);
	};
	
	// numar de valori pe axa X
	this.setAxisValuesNumberX = function (number) {
		if (typeof number !== 'number' && number > 1) {
			chart._alert('_axisValuesNotNumber');
			return;
		}
		chart._axisValuesX = number;
	};
	
	// numar de valori pe axa Y
	this.setAxisValuesNumberY = function (number) {
		if (typeof number !== 'number' && number > 1) {
			chart._alert('_axisValuesNotNumber');
			return;
		}
		chart._axisValuesY = number;
	};
	
	// seteaza padding pana la valori jos
	this.setAxisValuesPaddingBottom = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_paddingNotNumber');
			return;
		}
		chart._axisValuesPaddingBottom = Number(number);
	};
	
	// seteaza padding pana la valori in stanga
	this.setAxisValuesPaddingLeft = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_paddingNotNumber');
			return;
		}
		chart._axisValuesPaddingLeft = Number(number);
	};
	
	// prefix axa X
	this.setAxisValuesPrefixX = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_axisPrefixNotString');
			return;
		}
		chart._axisValuesPrefixX = string;
	};
	
	// prefix axa Y
	this.setAxisValuesPrefixY = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_axisPrefixNotString');
			return;
		}
		chart._axisValuesPrefixY = string;
	};
	
	// sufix axa X
	this.setAxisValuesSuffixX = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_axisSuffixNotString');
			return;
		}
		chart._axisValuesSuffixX = string;
	};
	
	// sufix axa Y
	this.setAxisValuesSuffixY = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_axisSuffixNotString');
			return;
		}
		chart._axisValuesSuffixY = string;
	};
	
	// seteaza grosimea axelor
	this.setAxisWidth = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_axisWidthNotNumber');
			return;
		}
		chart._axisWidth = number;
	};
	
	// deseneaza o imagine de fond
	this.setBackgroundColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._canvasColor = color;
	};
	
	// deseneaza o imagine de fond
	this.setBackgroundImage = function (src) {
		if (typeof src !== 'string') {
			chart._alert('_backgroundImageNotString');
			return;
		}
		chart._background = src;
	};
	
	// seteaza culoarea marginii barelor
	this.setBarBorderColor = function (color, s) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		if (typeof s === 'undefined') {
			chart._graphBarBorderDefaultColor = color;
		} else if (typeof chart._graphBarBorderColor === 'string') {
			chart._graphBarBorderColor = [];
			chart._graphBarBorderColor[s - 1] = color;
		} else {
			chart._graphBarBorderColor[s - 1] = color;
		}
	};
	
	// seteaza grosimea marginii barelor
	this.setBarBorderWidth = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_barBorderWidthNotNumber');
			return;
		}
		chart._graphBarBorderWidth = Number(number);
	};
	
	// seteaza culoarea barelor
	this.setBarColor = function (color, s) {
		if (chart._type !== 'bar') {
			return false;
		}
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		if (typeof s === 'undefined') {
			chart._graphBarDefaultColor = color;
		} else if (typeof chart._graphBarColor === 'string') {
			chart._graphBarColor = [];
			chart._graphBarColor[s - 1] = color;
			//chart._legendsBar[s][0] = color;
		} else {
			chart._graphBarColor[s - 1] = color;
			if (typeof chart._legendsBar[s - 1] !== 'undefined') {
				chart._legendsBar[s - 1][0] = color;
			}
		}
	};
	
	// seteaza adancimea barelor 3D
	this.setBarDepth = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_depthNotNumber');
			return;
		}
		chart._graphBarDepth = number;
	};
	
	// seteaza opacitatea grid-ului
	this.setBarOpacity = function (opacity, s) {
		if (typeof opacity !== 'number' || (opacity < 0 || opacity > 1)) {
			chart._alert('_opacityNotNumber');
			return;
		}
		if (typeof s === 'undefined') {
			chart._graphBarDefaultOpacity = opacity;
		} else if (typeof chart._graphBarOpacity === 'number') {
			chart._graphBarOpacity = [];
			chart._graphBarOpacity[s - 1] = opacity;
		} else {
			chart._graphBarOpacity[s - 1] = opacity;
		}
	};
	
	// seteaza proportia de spatiere intre bare
	this.setBarSpacingRatio = function (number) {
		if (typeof number !== 'number' || (number < 0 || number > 100)) {
			chart._alert('_barSpacingRatioNotNumber');
			return;
		}
		chart._graphBarSpacingRatio = Number(number) / 2;
	};
	
	// seteaza viteza de desenare a barelor
	this.setBarSpeed = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_speedNotNumber');
			return;
		}
		number = 100 - number;
		if (number < 1) {
			number = 1;
		}
		if (number > 100) {
			number = 100;
		}
		chart._graphBarSpeed = Number(number);
	};
	
	// afiseaza sau nu valorile deasupra barelor
	this.setBarValues = function (values) {
		if (typeof values !== 'boolean') {
			chart._alert('_barValuesNotBoolean');
			return;
		}
		chart._graphBarValues = values;
	};
	
	// seteaza culoarea valorilor pt bare
	this.setBarValuesColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._graphBarValuesColor = color;
	};
	
	// seteaza numarul de zecimale pt valori pt pie
	this.setBarValuesDecimals = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_valuesDecimalsNotNumber');
			return;
		}
		chart._graphBarValuesDecimals = number;
	};
	
	// seteaza font-ul valorilor pe bare
	this.setBarValuesFontFamily = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._graphBarValuesFontFamily = string;
	};
	
	// seteaza marimea font-ului valorilor pe bare
	this.setBarValuesFontSize = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._graphBarValuesFontSize = Number(size);
	};
	
	// prefix valori pe bare
	this.setBarValuesPrefix = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_barValuesPrefixNotString');
			return;
		}
		chart._graphBarValuesPrefix = string;
	};
	
	// suffix valori pe bare
	this.setBarValuesSuffix = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_barValuesSuffixNotString');
			return;
		}
		chart._graphBarValuesSuffix = string;
	};
	
	// seteaza titlul graficului
	this.setCanvasIdPrefix = function (prefix) {
		if (typeof prefix !== 'string') {
			chart._alert('_prefixNotString');
			return;
		}
		chart._canvasIdPrefix = prefix;
	};
	
	// incarca datele sub forma de array
	this.setDataArray = function (data, id, usestring) {
		if (chart._initFailed) {
			return;
		}
		
		// verifica daca datele sunt in format array
		if (!chart._isArray(data)) {
			chart._alert('_dataNotArray');
			return;
		}
		chart._type = type.toLowerCase();
		
		var i;
		var len;
		
		// in cazul liniilor, pot sa fie folosite string-uri - trebuie atribuite valori numerice si sa fie create label-uri
		if ((typeof data[0][0] === 'string' || usestring === true) && chart._type === 'line') {
			if (chart._data.length === 0) {
				for (i = 0, len = data.length; i < len; i++) {
					this.setLabelX([i, String(data[i][0]), 'x-value']);
					chart._dataString[data[i][0]] = i;
					data[i][0] = i;
				}
			} else {
				var min = chart._getMinX();
				var max = chart._getMaxX();
				var step = Math.round((max - min) / (data.length - 1));
				for (var j = 0, i = min, len = data.length; i < max , j < len; i += step, j++) {
					this.setLabelX([i, String(data[j][0])], 'x-value');
					chart._dataString[data[j][0]] = i;
					data[j][0] = i;
				}
			}
			this.setShowXValues(false);
			this._graphLineStringValues = true;
		}
		
		// verifica daca datele sunt formatul dorit de clasa noastra
		if (!chart._isAllowedFormat(data)) {
			chart._alert('_dataWrongFormat');
			return;
		}
		
		if (typeof id !== 'undefined' && id !== null && typeof id !== 'string') {
			chart._alert('_idNotString');
			return;
		}
		
		if (chart._type === 'line') {
			chart._multipleSeries = true;
			var replacing = false;
			if (chart._data === []) {
				chart._data = new Array(data);
			} else {
				for (var x in chart._dataIds) {
					if (chart._dataIds[x] === id) {
						chart._data[x] = data;
						replacing = true;
					}
				}
				if (!replacing) {
					chart._data[chart._data.length] = data;
				}
			}
			if (!replacing) {
				var index = chart._data.length - 1;
				chart._dataIds[index] = (typeof id === 'undefined' || id === null) ? '_autoid_' + index : id;
				chart._hideIds[index] = false;
				if (typeof chart._graphLineColor[index] === 'undefined') {
					chart._graphLineColor[index] = chart._graphLineDefaultColor;
				}
				if (typeof chart._graphLineOpacity[index] === 'undefined') {
					chart._graphLineOpacity[index] = chart._graphLineDefaultOpacity;
				}
				if (typeof chart._graphLineWidth[index] === 'undefined') {
					chart._graphLineWidth[index] = chart._graphLineDefaultWidth;
				}
				chart._legendsLine.push([chart._graphLineDefaultColor, chart._dataIds[index]]);
			}
		} else if (chart._type === 'bar') {
			len = data.length;
			var s = 0;
			for (i = 0; i < len; i++) {
				if (s < data[i].length) {
					s = data[i].length;
				}
			}
			for (i = 1; i < s; i++) {
				chart._legendsBar.push([chart._graphBarDefaultColor, String(i), i]);
				chart._hideIds.push(false);
			}
			chart._data = data;
		} else {
			chart._data = data;
		}
	};
	
	// incarca datele in format json
	this.setDataJSON = function (file, string) {
		if (chart._initFailed) {
			return;
		}
		
		// parseaza si proceseaza fisierul xml, si returneaza optiunile gasite
		var json = chart._loadJSON(file, string);
		var dom = chart._jsonToXml(json);
		var optionset = chart._parseXML(dom);
		
		// 'evalueaza' optiunile gasite
		if (chart._isArray(optionset) && optionset.length > 0) {
			var len = optionset.length;
			var args;
			var p;
			var evalString ;
			for (var i = 0; i < len; i++) {
				if (optionset[i].length < 3) {
					evalString = optionset[i][0] + '(' + optionset[i][1] + ')';
				} else {
					evalString = optionset[i][0] + '(' + optionset[i][1] + ', "' + optionset[i][2] + '")';
				}
				eval("this." + evalString);
			}
		}
	};
	
	// incarca datele in format xml
	this.setDataXML = function (file, string) {
		if (chart._initFailed) {
			return;
		}
		
		// parseaza si proceseaza fisierul xml, si returneaza optiunile gasite
		var optionset = chart._parseXML(chart._loadXML(file, string));
		
		// 'evalueaza' optiunile gasite
		if (chart._isArray(optionset) && optionset.length > 0) {
			var len = optionset.length;
			var args;
			var p;
			var evalString ;
			for (var i = 0; i < len; i++) {
				/*
				args = optionset[i][1].split(',');
				evalString = 'set' + optionset[i][0] + '(';
				for (p = 0; p < args.length; p++) {
					if (args[p] == Number(args[p])) {
						evalString += args[p];
					} else {
						evalString += "'" + args[p] + "'";
					}
					if (p !== args.length - 1) {
						evalString += ',';
					}
				}
				evalString += ')';
				*/
				//evalString = 'set' + optionset[i][0] + '(' + optionset[i][1] + ')';
				if (optionset[i].length < 3) {
					evalString = optionset[i][0] + '(' + optionset[i][1] + ')';
				} else {
					evalString = optionset[i][0] + '(' + optionset[i][1] + ', "' + optionset[i][2] + '")';
				}
				eval("this." + evalString);
			}
		}
	};
	
	// afiseaza sau nu erorile (alerte)
	this.setErrors = function (errors) {
		if (typeof errors !== 'boolean') {
			chart._alert('_errorsNotBoolean');
			return;
		}
		chart._showAlerts = errors;
	};
	
	// seteaza culoarea semnului pt tooltip
	this.setFlagColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._flagColor = color;
	};
	
	// seteaza culoarea interna a semnului pt tooltip
	this.setFlagFillColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._flagFillColor = color;
	};
	
	// seteaza offset-ul pt flag tooltip
	this.setFlagOffset = function (offset) {
		if (typeof offset !== 'number') {
			chart._alert('_flagOffsetNotNumber');
			return;
		}
		chart._flagOffset = Number(offset);
	};
	
	// seteaza opacitatea flag-ului
	this.setFlagOpacity = function (opacity) {
		if (typeof opacity !== 'number' || (opacity < 0 || opacity > 1)) {
			chart._alert('_opacityNotNumber');
			return;
		}
		chart._flagOpacity = opacity;
	};
	
	// seteaza culoarea semnului pt tooltip
	this.setFlagShape = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_flagShapeNotString');
			return;
		}
		chart._flagShape = string;
	};
	
	// seteaza raza semnului pt tooltip
	this.setFlagRadius = function (rad) {
		if (typeof rad !== 'number') {
			chart._alert('_radiusNotNumber');
			return;
		}
		chart._flagRadius = Number(rad);
	};
	
	// seteaza grosimea pt semnul pt tooltip
	this.setFlagWidth = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_flagWidthNotNumber');
			return;
		}
		chart._flagWidth = Number(number);
	};
	
	// seteaza font-ul general (default)
	this.setFontFamily = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._textDefaultFontFamily = string;
	};
	
	// extinde sau nu graficul (axe si grid)
	this.setGraphExtend = function (extend) {
		if (typeof extend !== 'boolean') {
			chart._alert('_extendNotBoolean');
			return;
		}
		chart._graphExtendX = extend;
		chart._graphExtendY = extend;
	};
	
	// extinde sau nu graficul (axe si grid) pe orizontala
	this.setGraphExtendX = function (extend) {
		if (typeof extend !== 'boolean') {
			chart._alert('_extendNotBoolean');
			return;
		}
		chart._graphExtendX = extend;
	};
	
	// extinde sau nu graficul (axe si grid) pe verticala
	this.setGraphExtendY = function (extend) {
		if (typeof extend !== 'boolean') {
			chart._alert('_extendNotBoolean');
			return;
		}
		chart._graphExtendY = extend;
	};
	
	// seteaza userlabel
	this.setGraphLabel = function (label) {
		if (typeof label !== 'string') {
			chart._alert('_userLabelNotString');
			return;
		}
		chart._userLabel = label;
	};
	
	// seteaza culoarea userlabel
	this.setGraphLabelColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._userLabelColor = color;
	};
	
	// seteaza marimea font-ului pt userlabel
	this.setGraphLabelFontSize = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._userLabelFontSize = Number(size);
	};
	
	// seteaza opacitatea userlabel
	this.setGraphLabelOpacity = function (opacity) {
		if (typeof opacity !== 'number' || (opacity < 0 || opacity > 1)) {
			chart._alert('_opacityNotNumber');
			return;
		}
		chart._userLabelOpacity = opacity;
	};
	
	// seteaza pozitia userlabel similar cu flag-urile
	this.setGraphLabelPosition = function (position) {
		if (typeof position !== 'string') {
			chart._alert('_userLabelPositionNotString');
			return;
		}
		
		var len = chart._tooltipPositions.length;
		for (var i = 0; i < len; i++) {
			if (chart._tooltipPositions[i] === position) {
				chart._userLabelPosition = position;
				return true;
			}
		}
		chart._alert('_userLabelPositionWrong');
		return;
	};
	
	// seteaza culoarea umbrei userlabel
	this.setGraphLabelShadowColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._userLabelShadowColor = color;
	};
	
	// afiseaza sau nu grid
	this.setGrid = function (grid) {
		if (typeof grid !== 'boolean') {
			chart._alert('_gridNotBoolean');
			return;
		}
		chart._grid = grid;
	};
	
	// seteaza culoarea grid-ului
	this.setGridColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._gridColorX = color;
		chart._gridColorY = color;
	};
	
	// seteaza culoarea grid-ului pe orizontala
	this.setGridColorX = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._gridColorX = color;
	};
	
	// seteaza culoarea grid-ului pe verticala
	this.setGridColorY = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._gridColorY = color;
	};
	
	// seteaza opacitatea grid-ului
	this.setGridOpacity = function (opacity) {
		if (typeof opacity !== 'number' || (opacity < 0 || opacity > 1)) {
			chart._alert('_opacityNotNumber');
			return;
		}
		chart._gridOpacityX = opacity;
		chart._gridOpacityY = opacity;
	};
	
	// seteaza opacitatea grid-ului pe orizontala
	this.setGridOpacityX = function (opacity) {
		if (typeof opacity !== 'number' || (opacity < 0 || opacity > 1)) {
			chart._alert('_opacityNotNumber');
			return;
		}
		chart._gridOpacityX = opacity;
	};
	
	// seteaza opacitatea grid-ului pe verticala
	this.setGridOpacityY = function (opacity) {
		if (typeof opacity !== 'number' || (opacity < 0 || opacity > 1)) {
			chart._alert('_opacityNotNumber');
			return;
		}
		chart._gridOpacityY = opacity;
	};
	
	// seteaza limita de inceput pe axa X
	this.setIntervalEndX = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_intervalNotNumber');
			return;
		}
		chart._intervalEndX = number;
	};
	
	// seteaza limita de inceput pe axa Y
	this.setIntervalEndY = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_intervalNotNumber');
			return;
		}
		chart._intervalEndY = number;
	};
	
	// seteaza limita de inceput pe axa X
	this.setIntervalStartX = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_intervalNotNumber');
			return;
		}
		chart._intervalStartX = number;
	};
	
	// seteaza limita de inceput pe axa Y
	this.setIntervalStartY = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_intervalNotNumber');
			return;
		}
		chart._intervalStartY = number;
	};
	
	// seteaza limite pe axa X
	this.setIntervalX = function (start, end) {
		this.setIntervalStartX(start);
		this.setIntervalEndX(end);
	};
	
	// seteaza limite pe axa Y
	this.setIntervalY = function (start, end) {
		this.setIntervalStartY(start);
		this.setIntervalEndY(end);
	};
	
	// aliniaza primul si ultimul label pe axa X
	this.setLabelAlignX = function (align) {
		if (typeof align !== 'boolean') {
			chart._alert('_alignNotBoolean');
			return;
		}
		chart._labelsAlignFirstX = align;
		chart._labelsAlignLastX = align;
	};
	
	// aliniaza primul si ultimul label pe axa Y
	this.setLabelAlignY = function (align) {
		if (typeof align !== 'boolean') {
			chart._alert('_alignNotBoolean');
			return;
		}
		chart._labelsAlignFirstY = align;
		chart._labelsAlignLastY = align;
	};
	
	// aliniaza primul label pe axa X
	this.setLabelAlignFirstX = function (align) {
		if (typeof align !== 'boolean') {
			chart._alert('_alignNotBoolean');
			return;
		}
		chart._labelsAlignFirstX = align;
	};
	
	// aliniaza primul label pe axa Y
	this.setLabelAlignFirstY = function (align) {
		if (typeof align !== 'boolean') {
			chart._alert('_alignNotBoolean');
			return;
		}
		chart._labelsAlignFirstY = align;
	};
	
	// aliniaza ultimul label pe axa X
	this.setLabelAlignLastX = function (align) {
		if (typeof align !== 'boolean') {
			chart._alert('_alignNotBoolean');
			return;
		}
		chart._labelsAlignLastX = align;
	};
	
	// aliniaza ultimul label pe axa Y
	this.setLabelAlignLastY = function (align) {
		if (typeof align !== 'boolean') {
			chart._alert('_alignNotBoolean');
			return;
		}
		chart._labelsAlignLastY = align;
	};
	
	// seteaza culoarea label-urilor
	this.setLabelColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._labelsColorX = color;
		chart._labelsColorY = color;
	};
	
	// seteaza culoarea label-urilor pe axa X
	this.setLabelColorX = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._labelsColorX = color;
	};
	
	// seteaza culoarea label-urilor pe axa Y
	this.setLabelColorY = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._labelsColorY = color;
	};
	
	// seteaza font-ul label-urilor
	this.setLabelFontFamily = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._labelsFontFamilyX = string;
		chart._labelsFontFamilyY = string;
	};
	
	// seteaza font-ul label-urilor pe axa X
	this.setLabelFontFamilyX = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._labelsFontFamilyX = string;
	};
	
	// seteaza font-ul label-urilor pe axa Y
	this.setLabelFontFamilyY = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._labelsFontFamilyY = string;
	};
	
	// seteaza marimea font-ului label-urilor
	this.setLabelFontSize = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._labelsFontSizeX = Number(size);
		chart._labelsFontSizeY = Number(size);
	};
	
	// seteaza marimea font-ului label-urilor pe axa X
	this.setLabelFontSizeX = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._labelsFontSizeX = Number(size);
	};
	
	// seteaza marimea font-ului label-urilor pe axa Y
	this.setLabelFontSizeY = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._labelsFontSizeY = Number(size);
	};
	
	// seteaza padding pana la etichete in jos
	this.setLabelPaddingBottom = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_paddingNotNumber');
			return;
		}
		chart._labelsPaddingBottom = Number(number);
	};
	
	// seteaza padding pana la etichete in stanga
	this.setLabelPaddingLeft = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_paddingNotNumber');
			return;
		}
		chart._labelsPaddingLeft = Number(number);
	};
	
	// seteaza un label pe axa X
	this.setLabelX = function (label) {
		if (!chart._isArray(label) || label.length < 2 || label.length > 3) {
			chart._alert('_invalidLabel');
			return;
		}
		if (chart._type === 'line' && typeof label[0] === 'string') { // pt linii cu string-uri pe X
			if (typeof chart._dataString[label[0]] !== 'undefined') {
				label[0] = chart._dataString[label[0]];
			}
		}
		chart._labelsX.push(label);
	};
	
	// seteaza un label pe axa Y
	this.setLabelY = function (label) {
		if (!chart._isArray(label) || label.length !== 2) {
			chart._alert('_invalidLabel');
			return;
		}
		chart._labelsY.push(label);
	};
	
	// adauga o legenda
	this.setLegend = function (color, text) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		if (typeof text !== 'string') {
			chart._alert('_legendTextNotString');
			return;
		}
		chart._legends.push([color, text, 'custom']);
	};
	
	// seteaza culoarea legendelor
	this.setLegendColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._legendColor = color;
	};
	
	// afiseaza sau nu legende automat dupa datele incarcate
	this.setLegendDetect = function (legend) {
		if (typeof legend !== 'boolean') {
			chart._alert('_legendNotBoolean');
			return;
		}
		chart._legendDetect = legend;
	};
	
	// seteaza font-ul legendelor
	this.setLegendFontFamily = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._legendFontFamily = string;
	};
	
	// seteaza marimea font-ului legendelor
	this.setLegendFontSize = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._legendFontSize = Number(size);
	};
	
	// adauga o legenda pt bare
	this.setLegendForBar = function (bar, text) {
		if (typeof bar !== 'number') {
			chart._alert('_invalidBarNumber');
			return;
		}
		bar--;
		if (bar < 0 || bar >= chart._legendsBar.length) {
			chart._alert('_invalidBarNumber');
			return;
		}
		if (typeof text !== 'string') {
			chart._alert('_legendTextNotString');
			return;
		}
		chart._legendsBar[bar] = [(typeof chart._graphBarColor[bar] === 'undefined') ? chart._graphBarDefaultColor : chart._graphBarColor[bar], text];
	};
	
	// adauga o legenda pt linii
	this.setLegendForLine = function (id, text) {
		if (typeof id !== 'undefined' && typeof id !== 'string') {
			chart._alert('_idNotString');
			return;
		}
		if (typeof text !== 'string') {
			chart._alert('_legendTextNotString');
			return;
		}
		var len = chart._dataIds.length;
		for (var i = 0; i < len; i++) {
			if (typeof chart._dataIds[i] !== 'undefined' && chart._dataIds[i] === id) {
				chart._legendsLine[i][1] = text;
				break;
			}
		}
	};
	
	// seteaza un padding custom intre legende si marginea canvas-ului
	this.setLegendPadding = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_paddingNotNumber');
			return;
		}
		chart._legendPadding = number;
	};
	
	// seteaza pozitia legendelor
	this.setLegendPosition = function (posX, posY) {
		if (typeof posX === 'string') {
			chart._legendPosition = posX;
		} else if (typeof posX === 'number' && typeof posY === 'number') {
			chart._legendPosition = [posX, posY];
		} else {
			chart._alert('_invalidLegendPosition');
			return;
		}
	};
	
	// afiseaza sau nu legende
	this.setLegendShow = function (legend) {
		if (typeof legend !== 'boolean') {
			chart._alert('_legendNotBoolean');
			return;
		}
		chart._legendShow = legend;
	};
	
	// seteaza culoarea liniilor
	this.setLineColor = function (color, id) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		
		if (typeof id !== 'undefined' && typeof id !== 'string') {
			chart._alert('_idNotString');
			return;
		}
		
		if (typeof id === 'undefined') {
			if (chart._graphLineColor.length === 1) {
				chart._graphLineColor[0] = color;
			} else {
				var len = chart._dataIds.length;
				for (var i = 0; i < len; i++) {
					if (typeof chart._graphLineColor[i] !== 'undefined') {
						chart._graphLineColor[i] = color;
					}
				}
			}
		} else {
			if (chart._dataIds.length < 2) {
				chart._graphLineColor[0] = color;
			} else {
				for (var key in chart._dataIds) {
					if (chart._dataIds[key] === id) {
						chart._graphLineColor[key] = color;
						chart._legendsLine[key][0] = color;
					}
				}
			}
		}
	};
	
	// seteaza opacitatea liniilor
	this.setLineOpacity = function (opacity, id) {
		if (typeof opacity !== 'number' || (opacity < 0 || opacity > 1)) {
			chart._alert('_opacityNotNumber');
			return;
		}
		
		if (typeof id === 'undefined') {
			if (chart._graphLineOpacity.length === 1) {
				chart._graphLineOpacity[0] = opacity;
			} else {
				var len = chart._dataIds.length;
				for (var i = 0; i < len; i++) {
					if (typeof chart._graphLineColor[i] !== 'undefined') {
						chart._graphLineOpacity[i] = opacity;
					}
				}
			}
		} else {
			if (chart._dataIds.length < 2) {
				chart._graphLineOpacity[0] = opacity;
			} else {
				var index = false;
				for (var key in chart._dataIds) {
					if (chart._dataIds[key] === id) {
						index =	key;
						break;
					}
				}
				if (index !== false) {
					chart._graphLineOpacity[index] = opacity;
				}
			}
		}
	};
	
	// seteaza viteza de desenare a liniilor
	this.setLineSpeed = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_speedNotNumber');
			return;
		}
		number = (100 - number) * 10;
		if (number < 1) {
			number = 1;
		}
		if (number > 1000) {
			number = 1000;
		}
		chart._graphLineSpeed = Number(number);
	};
	
	// seteaza grosimea liniilor
	this.setLineWidth = function (number, id) {
		if (typeof number !== 'number') {
			chart._alert('_lineWidthNotNumber');
			return;
		}
		
		number = Number(number);
		
		if (typeof id === 'undefined') {
			if (chart._graphLineWidth.length === 1) {
				chart._graphLineWidth[0] = number;
			} else {
				var len = chart._dataIds.length;
				for (var i = 0; i < len; i++) {
					if (typeof chart._graphLineWidth[i] !== 'undefined') {
						chart._graphLineWidth[i] = number;
					}
				}
			}
		} else {
			if (chart._dataIds.length < 2) {
				chart._graphLineWidth[0] = number;
			} else {
				var index = false;
				for (var key in chart._dataIds) {
					if (chart._dataIds[key] === id) {
						index =	key;
						break;
					}
				}
				if (index !== false) {
					chart._graphLineWidth[index] = number;
				}
			}
		}
	};
	
	// seteaza unghiul graficelor pie 3D
	this.setPieAngle = function (number) {
		if (typeof number !== 'number' || number < 0 || number > 89) {
			chart._alert('_invalidPieAngle');
			return;
		}
		chart._graphPieAngle = number;
	};
	
	// seteaza adancimea graficelor pie 3D
	this.setPieDepth = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_depthNotNumber');
			return;
		}
		if (number < 1) {
			number = 1;
		}
		chart._graphPieDepth = number;
	};
	
	// seteaza opacitatea pie
	this.setPieOpacity = function (opacity) {
		if (typeof opacity !== 'number' || (opacity < 0 || opacity > 1)) {
			chart._alert('_opacityNotNumber');
			return;
		}
		chart._graphPieOpacity = Number(opacity);
	};
	
	// pozitioneaza pie
	this.setPiePosition = function (x, y) {
		if (typeof x !== 'number' || typeof y !== 'number') {
			chart._alert('_piePositionNotNumber');
			return;
		}
		chart._graphPieOriginX = Number(x);
		chart._graphPieOriginY = Number(y);
	};
	
	// seteaza raza pie
	this.setPieRadius = function (rad) {
		if (typeof rad !== 'number') {
			chart._alert('_radiusNotNumber');
			return;
		}
		chart._graphPieRadius = Number(rad);
	};
	
	// seteaza culoarea unitatilor pt pie
	this.setPieUnitsColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._graphPieUnitsColor = color;
	};
	
	// seteaza font-ul pt unitati pt pie
	this.setPieUnitsFontFamily = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._graphPieUnitsFontFamily = string;
	};
	
	// seteaza marimea font-ului pt unitati pt pie
	this.setPieUnitsFontSize = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._graphPieUnitsFontSize = Number(size);
	};
	
	// seteaza offset-ul pt unitati pt pie
	this.setPieUnitsOffset = function (offset) {
		if (typeof offset !== 'number') {
			chart._alert('_pieUnitsOffsetNotNumber');
			return;
		}
		chart._graphPieUnitsOffset = Number(offset);
	};
	
	// seteaza culoarea valorilor pt pie
	this.setPieValuesColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._graphPieValuesColor = color;
	};
	
	// seteaza numarul de zecimale pt valori pt pie
	this.setPieValuesDecimals = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_valuesDecimalsNotNumber');
			return;
		}
		chart._graphPieValuesDecimals = number;
	};
	
	// seteaza font-ul pt valori pt pie
	this.setPieValuesFontFamily = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._graphPieValuesFontFamily = string;
	};
	
	// seteaza marimea font-ului pt valori pt pie
	this.setPieValuesFontSize = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._graphPieValuesFontSize = Number(size);
	};
	
	// seteaza offset-ul pt valori pt pie
	this.setPieValuesOffset = function (offset) {
		if (typeof offset !== 'number') {
			chart._alert('_pieUnitsOffsetNotNumber');
			return;
		}
		chart._graphPieValuesOffset = Number(offset);
	};
	
	// prefix valori pe pie
	this.setPieValuesPrefix = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_pieValuesPrefixNotString');
			return;
		}
		chart._graphPieValuesPrefix = string;
	};
	
	// sufix valori pe pie
	this.setPieValuesSuffix = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_pieValuesSuffixNotString');
			return;
		}
		chart._graphPieValuesSuffix = string;
	};
	
	// afiseaza sau nu valorile pe axa X
	this.setShowXValues = function (show) {
		if (typeof show !== 'boolean') {
			chart._alert('_valuesShowNotBoolean');
			return;
		}
		chart._axisValuesShowX = show;
	};
	
	// afiseaza sau nu valorile pe axa Y
	this.setShowYValues = function (show) {
		if (typeof show !== 'boolean') {
			chart._alert('_valuesShowNotBoolean');
			return;
		}
		chart._axisValuesShowY = show;
	};
	
	// seteaza dimensiunile graficului fara redesenare
	this.setSize = function (x, y) {
		if (typeof x !== 'number' || typeof y !== 'number') {
			chart._alert('_sizeNotNumber');
			return;
		}
		chart._setSize(x, y);
	};
	
	// seteaza viteza de desenare
	this.setSpeed = function (number) {
		chart.setBarSpeed(number);
		if (typeof number === 'number') {
			chart.setLineSpeed(number);
		}
	};
	
	// seteaza padding pana la texte jos
	this.setTextPaddingBottom = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_paddingNotNumber');
			return;
		}
		chart._textPaddingBottom = Number(number);
	};
	
	// seteaza padding pana la texte stanga
	this.setTextPaddingLeft = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_paddingNotNumber');
			return;
		}
		chart._textPaddingLeft = Number(number);
	};
	
	// seteaza padding pana la texte sus
	this.setTextPaddingTop = function (number) {
		if (typeof number !== 'number') {
			chart._alert('_paddingNotNumber');
			return;
		}
		chart._textPaddingTop = Number(number);
	};
	
	// seteaza titlul graficului
	this.setTitle = function (title) {
		if (typeof title !== 'string') {
			chart._alert('_titleNotString');
			return;
		}
		chart._title = title;
	};
	
	// seteaza culoarea titlului
	this.setTitleColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._titleColor = color;
	};
	
	// seteaza font-ul pt titlu
	this.setTitleFontFamily = function (string) {
		if (typeof string !== 'string') {
			chart._alert('_fontFamilyNotString');
			return;
		}
		chart._titleFontFamily = string;
	};
	
	// seteaza marimea font-ului pt titlu
	this.setTitleFontSize = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._titleFontSize = Number(size);
	};
	
	// seteaza pozitia titlului pe orizontala
	this.setTitlePosition = function (pos) {
		if (typeof pos !== 'string') {
			chart._alert('_titlePositionNotString');
			return;
		}
		chart._titlePosition = pos;
	};
	
	// seteaza un tooltip
	this.setTooltip = function (tooltip, callback) {
		if (!chart._isArray(tooltip) || tooltip.length < 1 || tooltip.length > 3) {
			chart._alert('_invalidTooltip');
			return;
		}
		if (chart._type !== 'pie') { // serii multiple posibile
			var line = (typeof tooltip[2] === 'undefined') ? '__all__' : tooltip[2];
			if (typeof chart._tooltips[line] === 'undefined') {
				chart._tooltips[line] = {};
			}
			if (chart._type === 'line' && typeof tooltip[0] === 'string') {
				if (typeof chart._dataString[tooltip[0]] !== 'undefined') {
					chart._tooltips[line][chart._dataString[tooltip[0]]] = tooltip;
				}
			} else {
				chart._tooltips[line][tooltip[0]] = tooltip;
			}
		} else {
			chart._tooltips[tooltip[0]] = tooltip;
		}
		if (typeof callback !== 'undefined') {
			if (!chart._isFunction(callback)) {
				chart._alert('_invalidFunction');
				return;
			}
			if (chart._type !== 'pie') { // serii multiple posibile
				if (chart._type === 'line' && typeof tooltip[0] === 'string') {
					if (typeof chart._dataString[tooltip[0]] !== 'undefined') {
						chart._tooltips[line][chart._dataString[tooltip[0]]]['callback'] = callback;
					}
				} else {
					chart._tooltips[line][tooltip[0]]['callback'] = callback;
				}
			} else {
				chart._tooltips[tooltip[0]]['callback'] = callback;
			}
		}
	};
	
	// seteaza fondul tooltip-urilor
	this.setTooltipBackground = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._tooltipBackground = color;
	};
	
	// seteaza border pt tooltip-uri
	this.setTooltipBorder = function (css) {
		if (typeof css !== 'string') {
			chart._alert('_tooltipBorderNotString');
			return;
		}
		chart._tooltipBorder = css;
	};
	
	// seteaza culoarea textului din tooltip-uri
	this.setTooltipFontColor = function (color) {
		if (typeof color !== 'string' || chart._hexToRgb(color) === false) {
			chart._alert('_invalidColor');
			return;
		}
		chart._tooltipFontColor = color;
	};
	
	// seteaza font-ul textului din tooltip-uri
	this.setTooltipFontFamily = function (font) {
		if (typeof font !== 'string') {
			chart._alert('_tooltipFontNotString');
			return;
		}
		chart._tooltipFontFamily = font;
	};
	
	// seteaza marimea font-ului pt textul din tooltip-uri
	this.setTooltipFontSize = function (size) {
		if (typeof size !== 'number') {
			chart._alert('_fontSizeNotNumber');
			return;
		}
		chart._tooltipFontSize = Number(size);
	};
	
	// seteaza opacitatea tooltip-urilor
	this.setTooltipOpacity = function (opacity) {
		if (typeof opacity !== 'number' || (opacity < 0 || opacity > 1)) {
			chart._alert('_opacityNotNumber');
			return;
		}
		chart._tooltipOpacity = Number(opacity);
	};
	
	// seteaza padding pt tooltip-uri
	this.setTooltipPadding = function (css) {
		if (typeof css !== 'string') {
			chart._alert('_tooltipPaddingNotString');
			return;
		}
		chart._tooltipPadding = css;
	};
	
	// seteaza offset-ul pt tooltip-uri
	this.setTooltipOffset = function (offset) {
		if (typeof offset !== 'number') {
			chart._alert('_tooltipOffsetNotNumber');
			return;
		}
		chart._tooltipOffset = Number(offset);
	};
	
	// seteaza pozitia tooltip-ului in relatie cu flag-ul (trigger-ul)
	this.setTooltipPosition = function (position) {
		if (typeof position !== 'string') {
			chart._alert('_tooltipPositionNotString');
			return;
		}
		
		var len = chart._tooltipPositions.length;
		for (var i = 0; i < len; i++) {
			if (chart._tooltipPositions[i] === position) {
				chart._tooltipPosition = position;
				return true;
			}
		}
		chart._alert('_tooltipPositionWrong');
		return;
	};
	
	// seteaza formatul valorilor
	this.setValuesFormat = function (format) {
		if (format !== '.' && format !== ',' && format !== false) {
			chart._alert('_invalidValueFormat');
			return;
		}
		chart._valuesFormat = format;
	};
	
}

// algoritm encriptare/decriptare DES (http://www.tero.co.uk/des/ & http://www.netdealing.com)
function encryptObj() {
	//
}
encryptObj.des = function (key, message, encrypt, mode, iv, padding) {
  //declaring this locally speeds things up a bit
  var spfunction1 = new Array (0x1010400,0,0x10000,0x1010404,0x1010004,0x10404,0x4,0x10000,0x400,0x1010400,0x1010404,0x400,0x1000404,0x1010004,0x1000000,0x4,0x404,0x1000400,0x1000400,0x10400,0x10400,0x1010000,0x1010000,0x1000404,0x10004,0x1000004,0x1000004,0x10004,0,0x404,0x10404,0x1000000,0x10000,0x1010404,0x4,0x1010000,0x1010400,0x1000000,0x1000000,0x400,0x1010004,0x10000,0x10400,0x1000004,0x400,0x4,0x1000404,0x10404,0x1010404,0x10004,0x1010000,0x1000404,0x1000004,0x404,0x10404,0x1010400,0x404,0x1000400,0x1000400,0,0x10004,0x10400,0,0x1010004);
  var spfunction2 = new Array (-0x7fef7fe0,-0x7fff8000,0x8000,0x108020,0x100000,0x20,-0x7fefffe0,-0x7fff7fe0,-0x7fffffe0,-0x7fef7fe0,-0x7fef8000,-0x80000000,-0x7fff8000,0x100000,0x20,-0x7fefffe0,0x108000,0x100020,-0x7fff7fe0,0,-0x80000000,0x8000,0x108020,-0x7ff00000,0x100020,-0x7fffffe0,0,0x108000,0x8020,-0x7fef8000,-0x7ff00000,0x8020,0,0x108020,-0x7fefffe0,0x100000,-0x7fff7fe0,-0x7ff00000,-0x7fef8000,0x8000,-0x7ff00000,-0x7fff8000,0x20,-0x7fef7fe0,0x108020,0x20,0x8000,-0x80000000,0x8020,-0x7fef8000,0x100000,-0x7fffffe0,0x100020,-0x7fff7fe0,-0x7fffffe0,0x100020,0x108000,0,-0x7fff8000,0x8020,-0x80000000,-0x7fefffe0,-0x7fef7fe0,0x108000);
  var spfunction3 = new Array (0x208,0x8020200,0,0x8020008,0x8000200,0,0x20208,0x8000200,0x20008,0x8000008,0x8000008,0x20000,0x8020208,0x20008,0x8020000,0x208,0x8000000,0x8,0x8020200,0x200,0x20200,0x8020000,0x8020008,0x20208,0x8000208,0x20200,0x20000,0x8000208,0x8,0x8020208,0x200,0x8000000,0x8020200,0x8000000,0x20008,0x208,0x20000,0x8020200,0x8000200,0,0x200,0x20008,0x8020208,0x8000200,0x8000008,0x200,0,0x8020008,0x8000208,0x20000,0x8000000,0x8020208,0x8,0x20208,0x20200,0x8000008,0x8020000,0x8000208,0x208,0x8020000,0x20208,0x8,0x8020008,0x20200);
  var spfunction4 = new Array (0x802001,0x2081,0x2081,0x80,0x802080,0x800081,0x800001,0x2001,0,0x802000,0x802000,0x802081,0x81,0,0x800080,0x800001,0x1,0x2000,0x800000,0x802001,0x80,0x800000,0x2001,0x2080,0x800081,0x1,0x2080,0x800080,0x2000,0x802080,0x802081,0x81,0x800080,0x800001,0x802000,0x802081,0x81,0,0,0x802000,0x2080,0x800080,0x800081,0x1,0x802001,0x2081,0x2081,0x80,0x802081,0x81,0x1,0x2000,0x800001,0x2001,0x802080,0x800081,0x2001,0x2080,0x800000,0x802001,0x80,0x800000,0x2000,0x802080);
  var spfunction5 = new Array (0x100,0x2080100,0x2080000,0x42000100,0x80000,0x100,0x40000000,0x2080000,0x40080100,0x80000,0x2000100,0x40080100,0x42000100,0x42080000,0x80100,0x40000000,0x2000000,0x40080000,0x40080000,0,0x40000100,0x42080100,0x42080100,0x2000100,0x42080000,0x40000100,0,0x42000000,0x2080100,0x2000000,0x42000000,0x80100,0x80000,0x42000100,0x100,0x2000000,0x40000000,0x2080000,0x42000100,0x40080100,0x2000100,0x40000000,0x42080000,0x2080100,0x40080100,0x100,0x2000000,0x42080000,0x42080100,0x80100,0x42000000,0x42080100,0x2080000,0,0x40080000,0x42000000,0x80100,0x2000100,0x40000100,0x80000,0,0x40080000,0x2080100,0x40000100);
  var spfunction6 = new Array (0x20000010,0x20400000,0x4000,0x20404010,0x20400000,0x10,0x20404010,0x400000,0x20004000,0x404010,0x400000,0x20000010,0x400010,0x20004000,0x20000000,0x4010,0,0x400010,0x20004010,0x4000,0x404000,0x20004010,0x10,0x20400010,0x20400010,0,0x404010,0x20404000,0x4010,0x404000,0x20404000,0x20000000,0x20004000,0x10,0x20400010,0x404000,0x20404010,0x400000,0x4010,0x20000010,0x400000,0x20004000,0x20000000,0x4010,0x20000010,0x20404010,0x404000,0x20400000,0x404010,0x20404000,0,0x20400010,0x10,0x4000,0x20400000,0x404010,0x4000,0x400010,0x20004010,0,0x20404000,0x20000000,0x400010,0x20004010);
  var spfunction7 = new Array (0x200000,0x4200002,0x4000802,0,0x800,0x4000802,0x200802,0x4200800,0x4200802,0x200000,0,0x4000002,0x2,0x4000000,0x4200002,0x802,0x4000800,0x200802,0x200002,0x4000800,0x4000002,0x4200000,0x4200800,0x200002,0x4200000,0x800,0x802,0x4200802,0x200800,0x2,0x4000000,0x200800,0x4000000,0x200800,0x200000,0x4000802,0x4000802,0x4200002,0x4200002,0x2,0x200002,0x4000000,0x4000800,0x200000,0x4200800,0x802,0x200802,0x4200800,0x802,0x4000002,0x4200802,0x4200000,0x200800,0,0x2,0x4200802,0,0x200802,0x4200000,0x800,0x4000002,0x4000800,0x800,0x200002);
  var spfunction8 = new Array (0x10001040,0x1000,0x40000,0x10041040,0x10000000,0x10001040,0x40,0x10000000,0x40040,0x10040000,0x10041040,0x41000,0x10041000,0x41040,0x1000,0x40,0x10040000,0x10000040,0x10001000,0x1040,0x41000,0x40040,0x10040040,0x10041000,0x1040,0,0,0x10040040,0x10000040,0x10001000,0x41040,0x40000,0x41040,0x40000,0x10041000,0x1000,0x40,0x10040040,0x1000,0x41040,0x10001000,0x40,0x10000040,0x10040000,0x10040040,0x10000000,0x40000,0x10001040,0,0x10041040,0x40040,0x10000040,0x10040000,0x10001000,0x10001040,0,0x10041040,0x41000,0x41000,0x1040,0x1040,0x40040,0x10000000,0x10041000);
  //create the 16 or 48 subkeys we will need
  var keys = this.des_createKeys(key);
  var m=0, i, j, temp, temp2, right1, right2, left, right, looping;
  var cbcleft, cbcleft2, cbcright, cbcright2;
  var endloop, loopinc;
  var len = message.length;
  var chunk = 0;
  //set up the loops for single and triple des
  var iterations = keys.length == 32 ? 3 : 9; //single or triple des
  if (iterations == 3) {looping = encrypt ? new Array (0, 32, 2) : new Array (30, -2, -2);}
  else {looping = encrypt ? new Array (0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array (94, 62, -2, 32, 64, 2, 30, -2, -2);}
  //pad the message depending on the padding parameter
  if (padding == 2) { message += "        "; } //pad the message with spaces
  else if (padding == 1) { temp = 8-(len%8); message += String.fromCharCode (temp,temp,temp,temp,temp,temp,temp,temp); if (temp==8) { len+=8; }} //PKCS7 padding
  else if (!padding) { message += "\0\0\0\0\0\0\0\0"; } //pad the message out with null bytes
  //store the result here
  result = "";
  tempresult = "";
  if (mode == 1) { //CBC mode
    cbcleft = (iv.charCodeAt(m++) << 24) | (iv.charCodeAt(m++) << 16) | (iv.charCodeAt(m++) << 8) | iv.charCodeAt(m++);
    cbcright = (iv.charCodeAt(m++) << 24) | (iv.charCodeAt(m++) << 16) | (iv.charCodeAt(m++) << 8) | iv.charCodeAt(m++);
    m=0;
  }
  //loop through each 64 bit chunk of the message
  while (m < len) {
    left = (message.charCodeAt(m++) << 24) | (message.charCodeAt(m++) << 16) | (message.charCodeAt(m++) << 8) | message.charCodeAt(m++);
    right = (message.charCodeAt(m++) << 24) | (message.charCodeAt(m++) << 16) | (message.charCodeAt(m++) << 8) | message.charCodeAt(m++);
    //for Cipher Block Chaining mode, xor the message with the previous result
    if (mode == 1) {if (encrypt) {left ^= cbcleft; right ^= cbcright;} else {cbcleft2 = cbcleft; cbcright2 = cbcright; cbcleft = left; cbcright = right;}}
    //first each 64 but chunk of the message must be permuted according to IP
    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f; right ^= temp; left ^= (temp << 4);
    temp = ((left >>> 16) ^ right) & 0x0000ffff; right ^= temp; left ^= (temp << 16);
    temp = ((right >>> 2) ^ left) & 0x33333333; left ^= temp; right ^= (temp << 2);
    temp = ((right >>> 8) ^ left) & 0x00ff00ff; left ^= temp; right ^= (temp << 8);
    temp = ((left >>> 1) ^ right) & 0x55555555; right ^= temp; left ^= (temp << 1);
    left = ((left << 1) | (left >>> 31)); 
    right = ((right << 1) | (right >>> 31)); 
    //do this either 1 or 3 times for each chunk of the message
    for (j=0; j<iterations; j+=3) {
      endloop = looping[j+1];
      loopinc = looping[j+2];
      //now go through and perform the encryption or decryption  
      for (i=looping[j]; i!=endloop; i+=loopinc) { //for efficiency
        right1 = right ^ keys[i]; 
        right2 = ((right >>> 4) | (right << 28)) ^ keys[i+1];
        //the result is attained by passing these bytes through the S selection functions
        temp = left;
        left = right;
        right = temp ^ (spfunction2[(right1 >>> 24) & 0x3f] | spfunction4[(right1 >>> 16) & 0x3f] | spfunction6[(right1 >>>  8) & 0x3f] | spfunction8[right1 & 0x3f] | spfunction1[(right2 >>> 24) & 0x3f] | spfunction3[(right2 >>> 16) & 0x3f] | spfunction5[(right2 >>>  8) & 0x3f] | spfunction7[right2 & 0x3f]);
      }
      temp = left; left = right; right = temp; //unreverse left and right
    } //for either 1 or 3 iterations
    //move then each one bit to the right
    left = ((left >>> 1) | (left << 31)); 
    right = ((right >>> 1) | (right << 31)); 
    //now perform IP-1, which is IP in the opposite direction
    temp = ((left >>> 1) ^ right) & 0x55555555; right ^= temp; left ^= (temp << 1);
    temp = ((right >>> 8) ^ left) & 0x00ff00ff; left ^= temp; right ^= (temp << 8);
    temp = ((right >>> 2) ^ left) & 0x33333333; left ^= temp; right ^= (temp << 2);
    temp = ((left >>> 16) ^ right) & 0x0000ffff; right ^= temp; left ^= (temp << 16);
    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f; right ^= temp; left ^= (temp << 4);
    //for Cipher Block Chaining mode, xor the message with the previous result
    if (mode == 1) {if (encrypt) {cbcleft = left; cbcright = right;} else {left ^= cbcleft2; right ^= cbcright2;}}
    tempresult += String.fromCharCode ((left>>>24), ((left>>>16) & 0xff), ((left>>>8) & 0xff), (left & 0xff), (right>>>24), ((right>>>16) & 0xff), ((right>>>8) & 0xff), (right & 0xff));
    chunk += 8;
    if (chunk == 512) {result += tempresult; tempresult = ""; chunk = 0;}
  } //for every 8 characters, or 64 bits in the message
  //return the result as an array
  return result + tempresult;
}; //end of des
//des_createKeys
//this takes as input a 64 bit key (even though only 56 bits are used)
//as an array of 2 integers, and returns 16 48 bit keys
encryptObj.des_createKeys = function (key) {
  pc2bytes0  = new Array (0,0x4,0x20000000,0x20000004,0x10000,0x10004,0x20010000,0x20010004,0x200,0x204,0x20000200,0x20000204,0x10200,0x10204,0x20010200,0x20010204);
  pc2bytes1  = new Array (0,0x1,0x100000,0x100001,0x4000000,0x4000001,0x4100000,0x4100001,0x100,0x101,0x100100,0x100101,0x4000100,0x4000101,0x4100100,0x4100101);
  pc2bytes2  = new Array (0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808,0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808);
  pc2bytes3  = new Array (0,0x200000,0x8000000,0x8200000,0x2000,0x202000,0x8002000,0x8202000,0x20000,0x220000,0x8020000,0x8220000,0x22000,0x222000,0x8022000,0x8222000);
  pc2bytes4  = new Array (0,0x40000,0x10,0x40010,0,0x40000,0x10,0x40010,0x1000,0x41000,0x1010,0x41010,0x1000,0x41000,0x1010,0x41010);
  pc2bytes5  = new Array (0,0x400,0x20,0x420,0,0x400,0x20,0x420,0x2000000,0x2000400,0x2000020,0x2000420,0x2000000,0x2000400,0x2000020,0x2000420);
  pc2bytes6  = new Array (0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002,0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002);
  pc2bytes7  = new Array (0,0x10000,0x800,0x10800,0x20000000,0x20010000,0x20000800,0x20010800,0x20000,0x30000,0x20800,0x30800,0x20020000,0x20030000,0x20020800,0x20030800);
  pc2bytes8  = new Array (0,0x40000,0,0x40000,0x2,0x40002,0x2,0x40002,0x2000000,0x2040000,0x2000000,0x2040000,0x2000002,0x2040002,0x2000002,0x2040002);
  pc2bytes9  = new Array (0,0x10000000,0x8,0x10000008,0,0x10000000,0x8,0x10000008,0x400,0x10000400,0x408,0x10000408,0x400,0x10000400,0x408,0x10000408);
  pc2bytes10 = new Array (0,0x20,0,0x20,0x100000,0x100020,0x100000,0x100020,0x2000,0x2020,0x2000,0x2020,0x102000,0x102020,0x102000,0x102020);
  pc2bytes11 = new Array (0,0x1000000,0x200,0x1000200,0x200000,0x1200000,0x200200,0x1200200,0x4000000,0x5000000,0x4000200,0x5000200,0x4200000,0x5200000,0x4200200,0x5200200);
  pc2bytes12 = new Array (0,0x1000,0x8000000,0x8001000,0x80000,0x81000,0x8080000,0x8081000,0x10,0x1010,0x8000010,0x8001010,0x80010,0x81010,0x8080010,0x8081010);
  pc2bytes13 = new Array (0,0x4,0x100,0x104,0,0x4,0x100,0x104,0x1,0x5,0x101,0x105,0x1,0x5,0x101,0x105);
  //how many iterations (1 for des, 3 for triple des)
  var iterations = key.length > 8 ? 3 : 1; //changed by Paul 16/6/2007 to use Triple DES for 9+ byte keys
  //stores the return keys
  var keys = new Array (32 * iterations);
  //now define the left shifts which need to be done
  var shifts = new Array (0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0);
  //other variables
  var lefttemp, righttemp, m=0, n=0, temp;
  for (var j=0; j<iterations; j++) { //either 1 or 3 iterations
    left = (key.charCodeAt(m++) << 24) | (key.charCodeAt(m++) << 16) | (key.charCodeAt(m++) << 8) | key.charCodeAt(m++);
    right = (key.charCodeAt(m++) << 24) | (key.charCodeAt(m++) << 16) | (key.charCodeAt(m++) << 8) | key.charCodeAt(m++);
    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f; right ^= temp; left ^= (temp << 4);
    temp = ((right >>> -16) ^ left) & 0x0000ffff; left ^= temp; right ^= (temp << -16);
    temp = ((left >>> 2) ^ right) & 0x33333333; right ^= temp; left ^= (temp << 2);
    temp = ((right >>> -16) ^ left) & 0x0000ffff; left ^= temp; right ^= (temp << -16);
    temp = ((left >>> 1) ^ right) & 0x55555555; right ^= temp; left ^= (temp << 1);
    temp = ((right >>> 8) ^ left) & 0x00ff00ff; left ^= temp; right ^= (temp << 8);
    temp = ((left >>> 1) ^ right) & 0x55555555; right ^= temp; left ^= (temp << 1);
    //the right side needs to be shifted and to get the last four bits of the left side
    temp = (left << 8) | ((right >>> 20) & 0x000000f0);
    //left needs to be put upside down
    left = (right << 24) | ((right << 8) & 0xff0000) | ((right >>> 8) & 0xff00) | ((right >>> 24) & 0xf0);
    right = temp;
    //now go through and perform these shifts on the left and right keys
    for (i=0; i < shifts.length; i++) {
      //shift the keys either one or two bits to the left
      if (shifts[i]) {left = (left << 2) | (left >>> 26); right = (right << 2) | (right >>> 26);}
      else {left = (left << 1) | (left >>> 27); right = (right << 1) | (right >>> 27);}
      left &= -0xf; right &= -0xf;
      //now apply PC-2, in such a way that E is easier when encrypting or decrypting
      //this conversion will look like PC-2 except only the last 6 bits of each byte are used
      //rather than 48 consecutive bits and the order of lines will be according to 
      //how the S selection functions will be applied: S2, S4, S6, S8, S1, S3, S5, S7
      lefttemp = pc2bytes0[left >>> 28] | pc2bytes1[(left >>> 24) & 0xf] | pc2bytes2[(left >>> 20) & 0xf] | pc2bytes3[(left >>> 16) & 0xf] | pc2bytes4[(left >>> 12) & 0xf] | pc2bytes5[(left >>> 8) & 0xf] | pc2bytes6[(left >>> 4) & 0xf];
      righttemp = pc2bytes7[right >>> 28] | pc2bytes8[(right >>> 24) & 0xf] | pc2bytes9[(right >>> 20) & 0xf] | pc2bytes10[(right >>> 16) & 0xf] | pc2bytes11[(right >>> 12) & 0xf] | pc2bytes12[(right >>> 8) & 0xf] | pc2bytes13[(right >>> 4) & 0xf];
      temp = ((righttemp >>> 16) ^ lefttemp) & 0x0000ffff; 
      keys[n++] = lefttemp ^ temp; keys[n++] = righttemp ^ (temp << 16);
    }
  } //for each iterations
  //return the keys we've created
  return keys;
}; //end of des_createKeys
encryptObj.stringToHex = function (s) {
  var r = "0x";
  var hexes = new Array ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
  for (var i=0; i<s.length; i++) {r += hexes [s.charCodeAt(i) >> 4] + hexes [s.charCodeAt(i) & 0xf];}
  return r;
};
encryptObj.hexToString = function (h) {
  var r = "";
  for (var i= (h.substr(0, 2)=="0x")?2:0; i<h.length; i+=2) {r += String.fromCharCode (parseInt (h.substr (i, 2), 16));}
  return r;
};


// excanvas svn trunk 2009.06.16 (cel nou din 2010.02.04 are un bug pt ie6)
if(!document.createElement('canvas').getContext){(function(){var m=Math;var mr=m.round;var ms=m.sin;var mc=m.cos;var abs=m.abs;var sqrt=m.sqrt;var Z=10;var Z2=Z/2;function getContext(){return this.context_||(this.context_=new CanvasRenderingContext2D_(this));}
var slice=Array.prototype.slice;function bind(f,obj,var_args){var a=slice.call(arguments,2);return function(){return f.apply(obj,a.concat(slice.call(arguments)));};}
function encodeHtmlAttribute(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;');}
function addNamespacesAndStylesheet(doc){if(!doc.namespaces['g_vml_']){doc.namespaces.add('g_vml_','urn:schemas-microsoft-com:vml','#default#VML');}
if(!doc.namespaces['g_o_']){doc.namespaces.add('g_o_','urn:schemas-microsoft-com:office:office','#default#VML');}
if(!doc.styleSheets['ex_canvas_']){var ss=doc.createStyleSheet();ss.owningElement.id='ex_canvas_';ss.cssText='canvas{display:inline-block;overflow:hidden;'+'text-align:left;width:300px;height:150px}';}}
addNamespacesAndStylesheet(document);var G_vmlCanvasManager_={init:function(opt_doc){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var doc=opt_doc||document;doc.createElement('canvas');doc.attachEvent('onreadystatechange',bind(this.init_,this,doc));}},init_:function(doc){var els=doc.getElementsByTagName('canvas');for(var i=0;i<els.length;i++){this.initElement(els[i]);}},initElement:function(el){if(!el.getContext){el.getContext=getContext;addNamespacesAndStylesheet(el.ownerDocument);el.innerHTML='';el.attachEvent('onpropertychange',onPropertyChange);el.attachEvent('onresize',onResize);var attrs=el.attributes;if(attrs.width&&attrs.width.specified){el.style.width=attrs.width.nodeValue+'px';}else{el.width=el.clientWidth;}
if(attrs.height&&attrs.height.specified){el.style.height=attrs.height.nodeValue+'px';}else{el.height=el.clientHeight;}}
return el;}};function onPropertyChange(e){var el=e.srcElement;switch(e.propertyName){case'width':el.getContext().clearRect();el.style.width=el.attributes.width.nodeValue+'px';el.firstChild.style.width=el.clientWidth+'px';break;case'height':el.getContext().clearRect();el.style.height=el.attributes.height.nodeValue+'px';el.firstChild.style.height=el.clientHeight+'px';break;}}
function onResize(e){var el=e.srcElement;if(el.firstChild){el.firstChild.style.width=el.clientWidth+'px';el.firstChild.style.height=el.clientHeight+'px';}}
G_vmlCanvasManager_.init();var dec2hex=[];for(var i=0;i<16;i++){for(var j=0;j<16;j++){dec2hex[i*16+j]=i.toString(16)+j.toString(16);}}
function createMatrixIdentity(){return[[1,0,0],[0,1,0],[0,0,1]];}
function matrixMultiply(m1,m2){var result=createMatrixIdentity();for(var x=0;x<3;x++){for(var y=0;y<3;y++){var sum=0;for(var z=0;z<3;z++){sum+=m1[x][z]*m2[z][y];}
result[x][y]=sum;}}
return result;}
function copyState(o1,o2){o2.fillStyle=o1.fillStyle;o2.lineCap=o1.lineCap;o2.lineJoin=o1.lineJoin;o2.lineWidth=o1.lineWidth;o2.miterLimit=o1.miterLimit;o2.shadowBlur=o1.shadowBlur;o2.shadowColor=o1.shadowColor;o2.shadowOffsetX=o1.shadowOffsetX;o2.shadowOffsetY=o1.shadowOffsetY;o2.strokeStyle=o1.strokeStyle;o2.globalAlpha=o1.globalAlpha;o2.font=o1.font;o2.textAlign=o1.textAlign;o2.textBaseline=o1.textBaseline;o2.arcScaleX_=o1.arcScaleX_;o2.arcScaleY_=o1.arcScaleY_;o2.lineScale_=o1.lineScale_;}
function processStyle(styleString){var str,alpha=1;styleString=String(styleString);if(styleString.substring(0,3)=='rgb'){var start=styleString.indexOf('(',3);var end=styleString.indexOf(')',start+1);var guts=styleString.substring(start+1,end).split(',');str='#';for(var i=0;i<3;i++){str+=dec2hex[Number(guts[i])];}
if(guts.length==4&&styleString.substr(3,1)=='a'){alpha=guts[3];}}else{str=styleString;}
return{color:str,alpha:alpha};}
var DEFAULT_STYLE={style:'normal',variant:'normal',weight:'normal',size:10,family:'sans-serif'};var fontStyleCache={};function processFontStyle(styleString){if(fontStyleCache[styleString]){return fontStyleCache[styleString];}
var el=document.createElement('div');var style=el.style;try{style.font=styleString;}catch(ex){}
return fontStyleCache[styleString]={style:style.fontStyle||DEFAULT_STYLE.style,variant:style.fontVariant||DEFAULT_STYLE.variant,weight:style.fontWeight||DEFAULT_STYLE.weight,size:style.fontSize||DEFAULT_STYLE.size,family:style.fontFamily||DEFAULT_STYLE.family};}
function getComputedStyle(style,element){var computedStyle={};for(var p in style){computedStyle[p]=style[p];}
var canvasFontSize=parseFloat(element.currentStyle.fontSize),fontSize=parseFloat(style.size);if(typeof style.size=='number'){computedStyle.size=style.size;}else if(style.size.indexOf('px')!=-1){computedStyle.size=fontSize;}else if(style.size.indexOf('em')!=-1){computedStyle.size=canvasFontSize*fontSize;}else if(style.size.indexOf('%')!=-1){computedStyle.size=(canvasFontSize/100)*fontSize;}else if(style.size.indexOf('pt')!=-1){computedStyle.size=canvasFontSize*(4/3)*fontSize;}else{computedStyle.size=canvasFontSize;}
computedStyle.size*=0.981;return computedStyle;}
function buildStyle(style){return style.style+' '+style.variant+' '+style.weight+' '+
style.size+'px '+style.family;}
function processLineCap(lineCap){switch(lineCap){case'butt':return'flat';case'round':return'round';case'square':default:return'square';}}
function CanvasRenderingContext2D_(surfaceElement){this.m_=createMatrixIdentity();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle='#000';this.fillStyle='#000';this.lineWidth=1;this.lineJoin='miter';this.lineCap='butt';this.miterLimit=Z*1;this.globalAlpha=1;this.font='10px sans-serif';this.textAlign='left';this.textBaseline='alphabetic';this.canvas=surfaceElement;var el=surfaceElement.ownerDocument.createElement('div');el.style.width=surfaceElement.clientWidth+'px';el.style.height=surfaceElement.clientHeight+'px';el.style.overflow='hidden';el.style.position='absolute';surfaceElement.appendChild(el);this.element_=el;this.arcScaleX_=1;this.arcScaleY_=1;this.lineScale_=1;}
var contextPrototype=CanvasRenderingContext2D_.prototype;contextPrototype.clearRect=function(){if(this.textMeasureEl_){this.textMeasureEl_.removeNode(true);this.textMeasureEl_=null;}
this.element_.innerHTML='';};contextPrototype.beginPath=function(){this.currentPath_=[];};contextPrototype.moveTo=function(aX,aY){var p=this.getCoords_(aX,aY);this.currentPath_.push({type:'moveTo',x:p.x,y:p.y});this.currentX_=p.x;this.currentY_=p.y;};contextPrototype.lineTo=function(aX,aY){var p=this.getCoords_(aX,aY);this.currentPath_.push({type:'lineTo',x:p.x,y:p.y});this.currentX_=p.x;this.currentY_=p.y;};contextPrototype.bezierCurveTo=function(aCP1x,aCP1y,aCP2x,aCP2y,aX,aY){var p=this.getCoords_(aX,aY);var cp1=this.getCoords_(aCP1x,aCP1y);var cp2=this.getCoords_(aCP2x,aCP2y);bezierCurveTo(this,cp1,cp2,p);};function bezierCurveTo(self,cp1,cp2,p){self.currentPath_.push({type:'bezierCurveTo',cp1x:cp1.x,cp1y:cp1.y,cp2x:cp2.x,cp2y:cp2.y,x:p.x,y:p.y});self.currentX_=p.x;self.currentY_=p.y;}
contextPrototype.quadraticCurveTo=function(aCPx,aCPy,aX,aY){var cp=this.getCoords_(aCPx,aCPy);var p=this.getCoords_(aX,aY);var cp1={x:this.currentX_+2.0/3.0*(cp.x-this.currentX_),y:this.currentY_+2.0/3.0*(cp.y-this.currentY_)};var cp2={x:cp1.x+(p.x-this.currentX_)/3.0,y:cp1.y+(p.y-this.currentY_)/3.0};bezierCurveTo(this,cp1,cp2,p);};contextPrototype.arc=function(aX,aY,aRadius,aStartAngle,aEndAngle,aClockwise){aRadius*=Z;var arcType=aClockwise?'at':'wa';var xStart=aX+mc(aStartAngle)*aRadius-Z2;var yStart=aY+ms(aStartAngle)*aRadius-Z2;var xEnd=aX+mc(aEndAngle)*aRadius-Z2;var yEnd=aY+ms(aEndAngle)*aRadius-Z2;if(xStart==xEnd&&!aClockwise){xStart+=0.125;}
var p=this.getCoords_(aX,aY);var pStart=this.getCoords_(xStart,yStart);var pEnd=this.getCoords_(xEnd,yEnd);this.currentPath_.push({type:arcType,x:p.x,y:p.y,radius:aRadius,xStart:pStart.x,yStart:pStart.y,xEnd:pEnd.x,yEnd:pEnd.y});};contextPrototype.rect=function(aX,aY,aWidth,aHeight){this.moveTo(aX,aY);this.lineTo(aX+aWidth,aY);this.lineTo(aX+aWidth,aY+aHeight);this.lineTo(aX,aY+aHeight);this.closePath();};contextPrototype.strokeRect=function(aX,aY,aWidth,aHeight){var oldPath=this.currentPath_;this.beginPath();this.moveTo(aX,aY);this.lineTo(aX+aWidth,aY);this.lineTo(aX+aWidth,aY+aHeight);this.lineTo(aX,aY+aHeight);this.closePath();this.stroke();this.currentPath_=oldPath;};contextPrototype.fillRect=function(aX,aY,aWidth,aHeight){var oldPath=this.currentPath_;this.beginPath();this.moveTo(aX,aY);this.lineTo(aX+aWidth,aY);this.lineTo(aX+aWidth,aY+aHeight);this.lineTo(aX,aY+aHeight);this.closePath();this.fill();this.currentPath_=oldPath;};contextPrototype.createLinearGradient=function(aX0,aY0,aX1,aY1){var gradient=new CanvasGradient_('gradient');gradient.x0_=aX0;gradient.y0_=aY0;gradient.x1_=aX1;gradient.y1_=aY1;return gradient;};contextPrototype.createRadialGradient=function(aX0,aY0,aR0,aX1,aY1,aR1){var gradient=new CanvasGradient_('gradientradial');gradient.x0_=aX0;gradient.y0_=aY0;gradient.r0_=aR0;gradient.x1_=aX1;gradient.y1_=aY1;gradient.r1_=aR1;return gradient;};contextPrototype.drawImage=function(image,var_args){var dx,dy,dw,dh,sx,sy,sw,sh;var oldRuntimeWidth=image.runtimeStyle.width;var oldRuntimeHeight=image.runtimeStyle.height;image.runtimeStyle.width='auto';image.runtimeStyle.height='auto';var w=image.width;var h=image.height;image.runtimeStyle.width=oldRuntimeWidth;image.runtimeStyle.height=oldRuntimeHeight;if(arguments.length==3){dx=arguments[1];dy=arguments[2];sx=sy=0;sw=dw=w;sh=dh=h;}else if(arguments.length==5){dx=arguments[1];dy=arguments[2];dw=arguments[3];dh=arguments[4];sx=sy=0;sw=w;sh=h;}else if(arguments.length==9){sx=arguments[1];sy=arguments[2];sw=arguments[3];sh=arguments[4];dx=arguments[5];dy=arguments[6];dw=arguments[7];dh=arguments[8];}else{throw Error('Invalid number of arguments');}
var d=this.getCoords_(dx,dy);var w2=sw/2;var h2=sh/2;var vmlStr=[];var W=10;var H=10;vmlStr.push(' <g_vml_:group',' coordsize="',Z*W,',',Z*H,'"',' coordorigin="0,0"',' style="width:',W,'px;height:',H,'px;position:absolute;');if(this.m_[0][0]!=1||this.m_[0][1]||this.m_[1][1]!=1||this.m_[1][0]){var filter=[];filter.push('M11=',this.m_[0][0],',','M12=',this.m_[1][0],',','M21=',this.m_[0][1],',','M22=',this.m_[1][1],',','Dx=',mr(d.x/Z),',','Dy=',mr(d.y/Z),'');var max=d;var c2=this.getCoords_(dx+dw,dy);var c3=this.getCoords_(dx,dy+dh);var c4=this.getCoords_(dx+dw,dy+dh);max.x=m.max(max.x,c2.x,c3.x,c4.x);max.y=m.max(max.y,c2.y,c3.y,c4.y);vmlStr.push('padding:0 ',mr(max.x/Z),'px ',mr(max.y/Z),'px 0;filter:progid:DXImageTransform.Microsoft.Matrix(',filter.join(''),", sizingmethod='clip');");}else{vmlStr.push('top:',mr(d.y/Z),'px;left:',mr(d.x/Z),'px;');}
vmlStr.push(' ">','<g_vml_:image src="',image.src,'"',' style="width:',Z*dw,'px;',' height:',Z*dh,'px"',' cropleft="',sx/w,'"',' croptop="',sy/h,'"',' cropright="',(w-sx-sw)/w,'"',' cropbottom="',(h-sy-sh)/h,'"',' />','</g_vml_:group>');this.element_.insertAdjacentHTML('BeforeEnd',vmlStr.join(''));};contextPrototype.stroke=function(aFill){var lineStr=[];var lineOpen=false;var W=10;var H=10;lineStr.push('<g_vml_:shape',' filled="',!!aFill,'"',' style="position:absolute;width:',W,'px;height:',H,'px;"',' coordorigin="0,0"',' coordsize="',Z*W,',',Z*H,'"',' stroked="',!aFill,'"',' path="');var newSeq=false;var min={x:null,y:null};var max={x:null,y:null};for(var i=0;i<this.currentPath_.length;i++){var p=this.currentPath_[i];var c;switch(p.type){case'moveTo':c=p;lineStr.push(' m ',mr(p.x),',',mr(p.y));break;case'lineTo':lineStr.push(' l ',mr(p.x),',',mr(p.y));break;case'close':lineStr.push(' x ');p=null;break;case'bezierCurveTo':lineStr.push(' c ',mr(p.cp1x),',',mr(p.cp1y),',',mr(p.cp2x),',',mr(p.cp2y),',',mr(p.x),',',mr(p.y));break;case'at':case'wa':lineStr.push(' ',p.type,' ',mr(p.x-this.arcScaleX_*p.radius),',',mr(p.y-this.arcScaleY_*p.radius),' ',mr(p.x+this.arcScaleX_*p.radius),',',mr(p.y+this.arcScaleY_*p.radius),' ',mr(p.xStart),',',mr(p.yStart),' ',mr(p.xEnd),',',mr(p.yEnd));break;}
if(p){if(min.x==null||p.x<min.x){min.x=p.x;}
if(max.x==null||p.x>max.x){max.x=p.x;}
if(min.y==null||p.y<min.y){min.y=p.y;}
if(max.y==null||p.y>max.y){max.y=p.y;}}}
lineStr.push(' ">');if(!aFill){appendStroke(this,lineStr);}else{appendFill(this,lineStr,min,max);}
lineStr.push('</g_vml_:shape>');this.element_.insertAdjacentHTML('beforeEnd',lineStr.join(''));};function appendStroke(ctx,lineStr){var a=processStyle(ctx.strokeStyle);var color=a.color;var opacity=a.alpha*ctx.globalAlpha;var lineWidth=ctx.lineScale_*ctx.lineWidth;if(lineWidth<1){opacity*=lineWidth;}
lineStr.push('<g_vml_:stroke',' opacity="',opacity,'"',' joinstyle="',ctx.lineJoin,'"',' miterlimit="',ctx.miterLimit,'"',' endcap="',processLineCap(ctx.lineCap),'"',' weight="',lineWidth,'px"',' color="',color,'" />');}
function appendFill(ctx,lineStr,min,max){var fillStyle=ctx.fillStyle;var arcScaleX=ctx.arcScaleX_;var arcScaleY=ctx.arcScaleY_;var width=max.x-min.x;var height=max.y-min.y;if(fillStyle instanceof CanvasGradient_){var angle=0;var focus={x:0,y:0};var shift=0;var expansion=1;if(fillStyle.type_=='gradient'){var x0=fillStyle.x0_/arcScaleX;var y0=fillStyle.y0_/arcScaleY;var x1=fillStyle.x1_/arcScaleX;var y1=fillStyle.y1_/arcScaleY;var p0=ctx.getCoords_(x0,y0);var p1=ctx.getCoords_(x1,y1);var dx=p1.x-p0.x;var dy=p1.y-p0.y;angle=Math.atan2(dx,dy)*180/Math.PI;if(angle<0){angle+=360;}
if(angle<1e-6){angle=0;}}else{var p0=ctx.getCoords_(fillStyle.x0_,fillStyle.y0_);focus={x:(p0.x-min.x)/width,y:(p0.y-min.y)/height};width/=arcScaleX*Z;height/=arcScaleY*Z;var dimension=m.max(width,height);shift=2*fillStyle.r0_/dimension;expansion=2*fillStyle.r1_/dimension-shift;}
var stops=fillStyle.colors_;stops.sort(function(cs1,cs2){return cs1.offset-cs2.offset;});var length=stops.length;var color1=stops[0].color;var color2=stops[length-1].color;var opacity1=stops[0].alpha*ctx.globalAlpha;var opacity2=stops[length-1].alpha*ctx.globalAlpha;var colors=[];for(var i=0;i<length;i++){var stop=stops[i];colors.push(stop.offset*expansion+shift+' '+stop.color);}
lineStr.push('<g_vml_:fill type="',fillStyle.type_,'"',' method="none" focus="100%"',' color="',color1,'"',' color2="',color2,'"',' colors="',colors.join(','),'"',' opacity="',opacity2,'"',' g_o_:opacity2="',opacity1,'"',' angle="',angle,'"',' focusposition="',focus.x,',',focus.y,'" />');}else if(fillStyle instanceof CanvasPattern_){if(width&&height){var deltaLeft=-min.x;var deltaTop=-min.y;lineStr.push('<g_vml_:fill',' position="',deltaLeft/width*arcScaleX*arcScaleX,',',deltaTop/height*arcScaleY*arcScaleY,'"',' type="tile"',' src="',fillStyle.src_,'" />');}}else{var a=processStyle(ctx.fillStyle);var color=a.color;var opacity=a.alpha*ctx.globalAlpha;lineStr.push('<g_vml_:fill color="',color,'" opacity="',opacity,'" />');}}
contextPrototype.fill=function(){this.stroke(true);};contextPrototype.closePath=function(){this.currentPath_.push({type:'close'});};contextPrototype.getCoords_=function(aX,aY){var m=this.m_;return{x:Z*(aX*m[0][0]+aY*m[1][0]+m[2][0])-Z2,y:Z*(aX*m[0][1]+aY*m[1][1]+m[2][1])-Z2};};contextPrototype.save=function(){var o={};copyState(this,o);this.aStack_.push(o);this.mStack_.push(this.m_);this.m_=matrixMultiply(createMatrixIdentity(),this.m_);};contextPrototype.restore=function(){if(this.aStack_.length){copyState(this.aStack_.pop(),this);this.m_=this.mStack_.pop();}};function matrixIsFinite(m){return isFinite(m[0][0])&&isFinite(m[0][1])&&isFinite(m[1][0])&&isFinite(m[1][1])&&isFinite(m[2][0])&&isFinite(m[2][1]);}
function setM(ctx,m,updateLineScale){if(!matrixIsFinite(m)){return;}
ctx.m_=m;if(updateLineScale){var det=m[0][0]*m[1][1]-m[0][1]*m[1][0];ctx.lineScale_=sqrt(abs(det));}}
contextPrototype.translate=function(aX,aY){var m1=[[1,0,0],[0,1,0],[aX,aY,1]];setM(this,matrixMultiply(m1,this.m_),false);};contextPrototype.rotate=function(aRot){var c=mc(aRot);var s=ms(aRot);var m1=[[c,s,0],[-s,c,0],[0,0,1]];setM(this,matrixMultiply(m1,this.m_),false);};contextPrototype.scale=function(aX,aY){this.arcScaleX_*=aX;this.arcScaleY_*=aY;var m1=[[aX,0,0],[0,aY,0],[0,0,1]];setM(this,matrixMultiply(m1,this.m_),true);};contextPrototype.transform=function(m11,m12,m21,m22,dx,dy){var m1=[[m11,m12,0],[m21,m22,0],[dx,dy,1]];setM(this,matrixMultiply(m1,this.m_),true);};contextPrototype.setTransform=function(m11,m12,m21,m22,dx,dy){var m=[[m11,m12,0],[m21,m22,0],[dx,dy,1]];setM(this,m,true);};contextPrototype.drawText_=function(text,x,y,maxWidth,stroke){var m=this.m_,delta=1000,left=0,right=delta,offset={x:0,y:0},lineStr=[];var fontStyle=getComputedStyle(processFontStyle(this.font),this.element_);var fontStyleString=buildStyle(fontStyle);var elementStyle=this.element_.currentStyle;var textAlign=this.textAlign.toLowerCase();switch(textAlign){case'left':case'center':case'right':break;case'end':textAlign=elementStyle.direction=='ltr'?'right':'left';break;case'start':textAlign=elementStyle.direction=='rtl'?'right':'left';break;default:textAlign='left';}
switch(this.textBaseline){case'hanging':case'top':offset.y=fontStyle.size/1.75;break;case'middle':break;default:case null:case'alphabetic':case'ideographic':case'bottom':offset.y=-fontStyle.size/2.25;break;}
switch(textAlign){case'right':left=delta;right=0.05;break;case'center':left=right=delta/2;break;}
var d=this.getCoords_(x+offset.x,y+offset.y);lineStr.push('<g_vml_:line from="',-left,' 0" to="',right,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!stroke,'" stroked="',!!stroke,'" style="position:absolute;width:1px;height:1px;">');if(stroke){appendStroke(this,lineStr);}else{appendFill(this,lineStr,{x:-left,y:0},{x:right,y:fontStyle.size});}
var skewM=m[0][0].toFixed(3)+','+m[1][0].toFixed(3)+','+
m[0][1].toFixed(3)+','+m[1][1].toFixed(3)+',0,0';var skewOffset=mr(d.x/Z)+','+mr(d.y/Z);lineStr.push('<g_vml_:skew on="t" matrix="',skewM,'" ',' offset="',skewOffset,'" origin="',left,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',encodeHtmlAttribute(text),'" style="v-text-align:',textAlign,';font:',encodeHtmlAttribute(fontStyleString),'" /></g_vml_:line>');this.element_.insertAdjacentHTML('beforeEnd',lineStr.join(''));};contextPrototype.fillText=function(text,x,y,maxWidth){this.drawText_(text,x,y,maxWidth,false);};contextPrototype.strokeText=function(text,x,y,maxWidth){this.drawText_(text,x,y,maxWidth,true);};contextPrototype.measureText=function(text){if(!this.textMeasureEl_){var s='<span style="position:absolute;'+'top:-20000px;left:0;padding:0;margin:0;border:none;'+'white-space:pre;"></span>';this.element_.insertAdjacentHTML('beforeEnd',s);this.textMeasureEl_=this.element_.lastChild;}
var doc=this.element_.ownerDocument;this.textMeasureEl_.innerHTML='';this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(doc.createTextNode(text));return{width:this.textMeasureEl_.offsetWidth};};contextPrototype.clip=function(){};contextPrototype.arcTo=function(){};contextPrototype.createPattern=function(image,repetition){return new CanvasPattern_(image,repetition);};function CanvasGradient_(aType){this.type_=aType;this.x0_=0;this.y0_=0;this.r0_=0;this.x1_=0;this.y1_=0;this.r1_=0;this.colors_=[];}
CanvasGradient_.prototype.addColorStop=function(aOffset,aColor){aColor=processStyle(aColor);this.colors_.push({offset:aOffset,color:aColor.color,alpha:aColor.alpha});};function CanvasPattern_(image,repetition){assertImageIsValid(image);switch(repetition){case'repeat':case null:case'':this.repetition_='repeat';break;
case'repeat-x':case'repeat-y':case'no-repeat':this.repetition_=repetition;break;default:throwException('SYNTAX_ERR');}
this.src_=image.src;this.width_=image.width;this.height_=image.height;}
function throwException(s){throw new DOMException_(s);}
function assertImageIsValid(img){if(!img||img.nodeType!=1||img.tagName!='IMG'){throwException('TYPE_MISMATCH_ERR');}
if(img.readyState!='complete'){throwException('INVALID_STATE_ERR');}}
function DOMException_(s){this.code=this[s];this.message=s+': DOM Exception '+this.code;}
var p=DOMException_.prototype=new Error;p.INDEX_SIZE_ERR=1;p.DOMSTRING_SIZE_ERR=2;p.HIERARCHY_REQUEST_ERR=3;p.WRONG_DOCUMENT_ERR=4;p.INVALID_CHARACTER_ERR=5;p.NO_DATA_ALLOWED_ERR=6;p.NO_MODIFICATION_ALLOWED_ERR=7;p.NOT_FOUND_ERR=8;p.NOT_SUPPORTED_ERR=9;p.INUSE_ATTRIBUTE_ERR=10;p.INVALID_STATE_ERR=11;p.SYNTAX_ERR=12;p.INVALID_MODIFICATION_ERR=13;p.NAMESPACE_ERR=14;p.INVALID_ACCESS_ERR=15;p.VALIDATION_ERR=16;p.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=G_vmlCanvasManager_;CanvasRenderingContext2D=CanvasRenderingContext2D_;CanvasGradient=CanvasGradient_;CanvasPattern=CanvasPattern_;DOMException=DOMException_;})();}


// stroketext
if (/^opera/.test(navigator.userAgent.toLowerCase())/* && Number(navigator.userAgent.toLowerCase().lastIndexOf('/')) <= 10.50*/) {
	function check_strokeTextCapability() {
		if(document.namespaces['v']==null) {
			var e=["shape","shapetype","group","background","path","formulas","handles","fill","stroke","shadow","textbox","textpath","imagedata","line","polyline","curve","roundrect","oval","rect","arc","image"],s=document.createStyleSheet(); 
			for(var i=0; i<e.length; i++) {s.addRule("v\\:"+e[i],"behavior: url(#default#VML);");} document.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"); // 3rd parameter for annoying IE print bug (doens't print texts with doctype)
		} 
		if(typeof get_strokeText == 'function' && document.namespaces['v'] != null) {return true;}else {return false;}
	}
	function get_boundingBox(x,y,baseline,lineheight,linewidth,weight,color,opacity,rotation) {
		rotation=typeof(rotation)!='undefined'?rotation:0; color=typeof(color)!='undefined'?color:'#000000'; opacity=typeof(opacity)!='undefined'?opacity:1; id=typeof(id)!='undefined'?'id="'+id+'"':''; var w=parseInt(linewidth), b=parseInt(baseline), h=parseInt(lineheight);
		return '<v:shape '+id+' filled="f" stroked="t" coordorigin="0,0" coordsize="'+w+','+h+'" path="m 0,'+b+' l 0,0,'+w+',0,'+w+','+b+',0,'+b+',0,'+h+','+w+','+h+','+w+','+b+' e" style="rotation:'+rotation+';position:absolute;margin:0px;top:'+Math.round(y)+'px;left:'+Math.round(x)+'px;width:'+w+'px;height:'+h+'px;"><v:stroke color="'+color+'" opacity="'+opacity+'" weight="'+weight+'" /></v:shape>';	
	}
	function get_strokeText(string,x,y,size,weight,width,space,font,color,opacity,rotation,id) {
		function qC(cX,cY,CPx,CPy,aX,aY) {var t = new Array(6); t[0]=cX+2.0/3.0*(CPx-cX); t[1]=cY+2.0/3.0*(CPy-cY); t[2]=t[0]+(aX-cX)/3.0; t[3]=t[1]+(aY-cY)/3.0; t[4]=aX; t[5]=aY; return t;}
		size=typeof(size)!='undefined'?size:12; weight=typeof(weight)!='undefined'?weight:100; width=/* typeof(width)!='undefined'?width: */100; space=/* typeof(space)!='undefined'?space: */100;
		font=/*typeof(font)!='undefined'?font:*/"sans-serif"; string=typeof(string)!='undefined'?string:' '; var xx=typeof(x)!='undefined'?x:0; var yy=typeof(y)!='undefined'?y:0;
		rotation=typeof(rotation)!='undefined'?rotation:0; color=typeof(color)!='undefined'?color:'#000000'; opacity=typeof(opacity)!='undefined'?opacity:1; id=typeof(id)!='undefined'?'id="'+id+'"':'';
		var i=0,j=0,f=10,path="",a,b,z,k,c,p,o,len=string.length,mag=size/25.0,fac=Math.max(Math.min(weight,400),1)/40, faw=Math.max(Math.min(width,400),10)/100;
		var spc=Math.max(Math.min(space,1000),10)/100,mx=((mag*16*faw)*spc)-(mag*16*faw),lw=(fac*mag);x=0;y=size;
		var ww=Math.round(get_textWidth(string,size,width,space,font)), hh=Math.round(get_textHeight(size));
		var out='<v:shape '+id+' filled="f" stroked="t" coordorigin="0,0" coordsize="'+parseInt(ww*f)+','+parseInt(hh*f)+'"';
		for(i=0; i<len; i++) { c=strokeFont[font][string.charAt(i)]; if(!c) {continue;} o=0; 
			for(j=0; j<c.n; j++) {
				if(typeof(c.d[o])!="string") {o++; continue;} p=c.d[o]; o++; a=c.d[o];
				if(p=="m") {path+=' m '+parseInt((x+a[0]*mag*faw)*f)+','+parseInt((y-a[1]*mag)*f); o++;}else
				if(p=="q") {z=c.d[o-2]; o++; b=c.d[o]; k=qC(z[0],z[1],a[0],a[1],b[0],b[1]); path+=' c '+parseInt((x+k[0]*mag*faw)*f)+','+parseInt((y-k[1]*mag)*f)+','+parseInt((x+k[2]*mag*faw)*f)+','+parseInt((y-k[3]*mag)*f)+','+parseInt((x+k[4]*mag*faw)*f)+','+parseInt((y-k[5]*mag)*f); o++;}else 
				if(p=="b") {o++; b=c.d[o]; o++; z=c.d[o]; path+=' c '+parseInt((x+a[0]*mag*faw)*f)+','+parseInt((y-a[1]*mag)*f)+','+parseInt((x+a[0]*mag*faw)*f)+','+parseInt((y-a[1]*mag)*f)+','+parseInt((x+z[0]*mag*faw)*f)+','+parseInt((y-z[1]*mag)*f); o++;}else
				if(p=="l") {path+=' l '+parseInt((x+a[0]*mag*faw)*f)+','+parseInt((y-a[1]*mag)*f); o++; while(typeof(c.d[o])!="string" && o<c.d.length) {a=c.d[o]; path+=' l '+parseInt((x+a[0]*mag*faw)*f)+','+parseInt((y-a[1]*mag)*f); o++;}}
			} x+=((c.w*faw)*mag)+mx;
		} out+=' path="'+path+' e" style="rotation:'+rotation+';position:absolute;margin:0px;top:'+Math.round(yy)+'px;left:'+Math.round(xx)+'px;width:'+ww+'px;height:'+hh+'px;"><v:stroke color="'+color+'" opacity="'+opacity+'" weight="'+lw+'" miterlimit="0" endcap="round" joinstyle="round" /></v:shape>';	
		return out;
	}
	function get_baseLine(size) {return size;} 
	function get_textHeight(size) {size=typeof(size)!='undefined'?size:12; return 32*(size/25);} 
	function get_textWidth(string,size,width,space,font) {
		size=typeof(size)!='undefined'?size:12; width=/* typeof(width)!='undefined'?width: */100; space=/* typeof(space)!='undefined'?space: */100; string=typeof(string)!='undefined'?string:' ';
		font=/*typeof(font)!='undefined'?font:*/"sans-serif"; var total=0,len=string.length,mg=size/25.0,fw=Math.max(Math.min(width,400),10)/100,sp=Math.max(Math.min(space,1000),10)/100,m=((mg*16*fw)*sp)-(mg*16*fw);
		for(var i=0; i<len; i++) {var c=strokeFont[font][string.charAt(i)]; if(c) total += ((c.w*fw)*mg)+m;}return total-(m);
	}
	function get_widthText(string,width,size,fontwidth,space,font) {
		size=typeof(size)!='undefined'?size:12; fontwidth=typeof(fontwidth)!='undefined'?fontwidth:100; space=/* typeof(space)!='undefined'?space: */100; string=typeof(string)!='undefined'?string:' '; width=/* typeof(width)!='undefined'?width: */100;
		font=/*typeof(font)!='undefined'?font:*/"sans-serif"; var cur=0,total=0,len=string.length,mg=size/25.0,fw=Math.max(Math.min(fontwidth,400),10)/100,sp=Math.max(Math.min(space,1000),10)/100,m=((mg*16*fw)*sp)-(mg*16*fw); 	
		for(var i=0; i<len; i++) {var c=strokeFont[font][string.charAt(i)]; if(c) {cur = ((c.w*fw)*mg)+m; if((total+cur-(m)) <= width) {total += cur;}else {break; }}else {break; }} return string.substring(0,i); 
	}
	function draw_boundingBox(ctx,x,y,baseline,lineheight,linewidth) {ctx.strokeRect(x,y+baseline,linewidth,lineheight-baseline); ctx.strokeRect(x,y,linewidth,baseline);}
	function do_drawText(string,x,y,size,weight,width,space,font) {
		size=typeof(size)!='undefined'?size:12; weight=typeof(weight)!='undefined'?weight:100; width=/* typeof(width)!='undefined'?width: */100; space=/* typeof(space)!='undefined'?space: */100;
		font=/*typeof(font)!='undefined'?font:*/"sans-serif"; x=typeof(x)!='undefined'?x:0; y=typeof(y)!='undefined'?y+size:0+size; string=typeof(string)!='undefined'?string:' ';
		var i=0,j=0,a,b,z,c,p,o,len=string.length,mag=size/25.0,fac=Math.max(Math.min(weight,400),1)/40, faw=Math.max(Math.min(width,400),10)/100;
		var spc=Math.max(Math.min(space,1000),10)/100,mx=((mag*16*faw)*spc)-(mag*16*faw),lw=this.lineWidth, ml=this.miterLimit, lj=this.lineJoin, lc=this.lineCap;
		this.lineWidth=(fac*mag); this.miterLimit=0; this.lineJoin="round"; this.lineCap="round";
		for(i=0; i<len; i++) { c=strokeFont[font][string.charAt(i)]; if(!c) {continue;} o=0; this.beginPath(); 
			for(j=0; j<c.n; j++) {
				if(typeof(c.d[o])!="string") {o++; continue;} p=c.d[o]; o++; a=c.d[o];
				if(p=="m") {this.moveTo(x+a[0]*mag*faw, y-a[1]*mag); o++;}else
				if(p=="q") {o++; b=c.d[o]; this.quadraticCurveTo(x+a[0]*mag*faw, y-a[1]*mag, x+b[0]*mag*faw, y-b[1]*mag); o++;}else 
				if(p=="b") {o++; b=c.d[o]; o++; z=c.d[o]; this.bezierCurveTo(x+a[0]*mag*faw, y-a[1]*mag, x+b[0]*mag*faw, y-b[1]*mag, x+z[0]*mag*faw, y-z[1]*mag); o++;}else 
				if(p=="l") {this.lineTo(x+a[0]*mag*faw, y-a[1]*mag); o++; while(typeof(c.d[o])!="string" && o<c.d.length) {a=c.d[o]; this.lineTo(x+a[0]*mag*faw, y-a[1]*mag); o++;}}
			} this.stroke(); x+=((c.w*faw)*mag)+mx;
		} this.lineWidth=lw; this.miterLimit=ml; this.lineJoin=lj; this.lineCap=lc;
	}
	function set_textRenderContext(ctx) {if(typeof CanvasRenderingContext2D == 'undefined') {ctx.strokeText=do_drawText;}}
	function check_textRenderContext(ctx) {if(typeof ctx.strokeText == 'function') {return true;}else {return false;}}
	if(typeof CanvasRenderingContext2D != 'undefined') {CanvasRenderingContext2D.prototype.strokeText=do_drawText; }
	strokeFont = new Array();
	strokeFont["sans-serif"] = {
		' ': {w:16,n:1,d:[]},
		'!': {w:10,n:4,d:['m',[5,21],'l',[5,7],'m',[5,2],'l',[4,1],[5,0],[6,1],[5,2]]},
		'"': {w:14,n:4,d:['m',[4,21],'l',[4,14],'m',[10,21],'l',[10,14]]},
		'#': {w:21,n:8,d:['m',[11,25],'l',[4,-7],'m',[17,25],'l',[10,-7],'m',[4,12],'l',[18,12],'m',[3,6],'l',[17,6]]},
		'$': {w:20,n:12,d:['m',[16,18],'q',[15,21],[10,21],'q',[5,21],[4,17],'q',[3,12],[7,11],'l',[13,10],'q',[18,9],[17,4],'q',[16,0],[10,0],'q',[4,0],[3,4],'m',[8,25],'l',[6,-4],'m',[14,25],'l',[12,-4]]},
		'%': {w:24,n:12,d:['m',[21,21],'l',[3,0],'m',[7,21],'q',[3,21],[3,17],'q',[3,13],[7,13],'q',[11,13],[11,17],'q',[11,21],[7,21],'m',[17,8],'q',[13,8],[13,4],'q',[13,0],[17,0],'q',[21,0],[21,4],'q',[21,8],[17,8]]},
		'&': {w:26,n:14,d:['m',[23,12],'q',[23,14],[22,14],'q',[20,14],[19,11],'l',[17,6],'q',[15,0],[9,0],'q',[3,0],[3,5],'q',[3,8],[7,10],'l',[12,13],'q',[14,15],[14,17],'q',[14,21],[11,21],'q',[8,21],[8,17],'q',[8,14],[12,8],'q',[17,0],[21,0],'q',[23,0],[23,2]]},
		'\'': {w:10,n:2,d:['m',[5,19],'l',[4,20],[5,21],[6,20],[6,18],[5,16],[4,15]]},
		'(': {w:14,n:3,d:['m',[11,25],'q',[4,19],[4,9],'q',[4,-1],[11,-7]]},
		')': {w:14,n:3,d:['m',[3,25],'q',[10,19],[10,9],'q',[10,-1],[3,-7]]},
		'*': {w:16,n:6,d:['m',[8,21],'l',[8,9],'m',[3,18],'l',[13,12],'m',[13,18],'l',[3,12]]},
		'+': {w:26,n:4,d:['m',[13,18],'l',[13,0],'m',[4,9],'l',[22,9]]},
		',': {w:10,n:2,d:['m',[6,1],'l',[5,0],[4,1],[5,2],[6,1],[6,-1],[5,-3],[4,-4]]},
		'-': {w:26,n:2,d:['m',[4,9],'l',[22,9]]},
		'.': {w:10,n:2,d:['m',[5,2],'l',[4,1],[5,0],[6,1],[5,2]]},
		'/': {w:22,n:2,d:['m',[20,25],'l',[2,-7]]},
		'0': {w:20,n:7,d:['m',[10,21],'q',[3,21],[3,12],'l',[3,9],'q',[3,0],[10,0],'q',[17,0],[17,9],'l',[17,12],'q',[17,21],[10,21]]},
		'1': {w:20,n:3,d:['m',[6,17],'q',[8,18],[11,21],'l',[11,0]]},
		'2': {w:20,n:5,d:['m',[17,0],'l',[3,0],[13,10],'q',[16,13],[16,16],'q',[16,21],[10,21],'q',[4,21],[4,16]]},
		'3': {w:20,n:5,d:['m',[5,21],'l',[16,21],[10,14],'q',[17,14],[17,7],'q',[17,0],[10,0],'q',[5,0],[3,4]]},
		'4': {w:20,n:2,d:['m',[13,0],'l',[13,21],[3,7],[18,7]]},
		'5': {w:20,n:6,d:['m',[15,21],'l',[5,21],[4,12],'q',[5,14],[10,14],'q',[17,14],[17,7],'q',[17,0],[10,0],'q',[5,0],[3,4]]},
		'6': {w:20,n:8,d:['m',[16,18],'q',[15,21],[10,21],'q',[3,21],[3,12],'l',[3,7],'q',[3,0],[10,0],'q',[17,0],[17,7],'q',[17,13],[10,13],'q',[3,13],[3,7]]},
		'7': {w:20,n:2,d:['m',[3,21],'l',[17,21],[7,0]]},
		'8': {w:20,n:9,d:['m',[10,13],'q',[15,13],[15,17],'q',[15,21],[10,21],'q',[5,21],[5,17],'q',[5,13],[10,13],'q',[3,13],[3,7],'q',[3,0],[10,0],'q',[17,0],[17,7],'q',[17,13],[10,13]]},
		'9': {w:20,n:8,d:['m',[17,14],'q',[17,8],[10,8],'q',[3,8],[3,14],'q',[3,21],[10,21],'q',[17,21],[17,14],'l',[17,9],'q',[17,0],[10,0],'q',[5,0],[4,3]]},
		':': {w:10,n:4,d:['m',[5,14],'l',[4,13],[5,12],[6,13],[5,14],'m',[5,2],'l',[4,1],[5,0],[6,1],[5,2]]},
		';': {w:10,n:4,d:['m',[5,14],'l',[4,13],[5,12],[6,13],[5,14],'m',[6,1],'l',[5,0],[4,1],[5,2],[6,1],[6,-1],[5,-3],[4,-4]]},
		'<': {w:24,n:2,d:['m',[20,18],'l',[4,9],[20,0]]},
		'=': {w:26,n:4,d:['m',[4,12],'l',[22,12],'m',[4,6],'l',[22,6]]},
		'>': {w:24,n:2,d:['m',[4,18],'l',[20,9],[4,0]]},
		'?': {w:18,n:8,d:['m',[3,16],'q',[3,21],[9,21],'q',[15,21],[15,16],'q',[15,11],[10,11],'q',[9,11],[9,10],'l',[9,7],'m',[9,2],'l',[8,1],[9,0],[10,1],[9,2]]},	
		'@': {w:27,n:17,d:['m',[21,3],'q',[20,1],[14,0],'l',[13,0],'q',[4,1],[3,10],'l',[3,11],'q',[4,20],[13,21],'l',[14,21],'q',[23,20],[24,11],'l',[24,10],'q',[24,6],[20,6],'q',[17,6],[18,10],'q',[18,6],[13,6],'q',[8,6],[9,11],'q',[10,15],[14,15],'q',[19,15],[18,10],'m',[18,10],'l',[19,14]]},
		'A': {w:18,n:6,d:['m',[1,0],'l',[9,21],[17,0],'m',[4,7],'l',[14,7]]},
		'B': {w:21,n:9,d:['m',[4,11],'l',[12,11],'m',[13,0],'l',[4,0],[4,21],[12,21],'q',[17,21],[17,16],'q',[17,11],[12,11],'q',[18,11],[18,6],'l',[18,5],'q',[18,0],[13,0]]},
		'C': {w:21,n:7,d:['m',[11,21],'q',[17,21],[18,16],'m',[18,5],'q',[17,0],[11,0],'q',[3,0],[3,9],'l',[3,12],'q',[3,21],[11,21]]},
		'D': {w:21,n:5,d:['m',[11,0],'l',[4,0],[4,21],[11,21],'q',[18,21],[18,12],'l',[18,9],'q',[18,0],[11,0]]},
		'E': {w:19,n:4,d:['m',[17,21],'l',[4,21],[4,0],[17,0],'m',[4,11],'l',[12,11]]},
		'F': {w:18,n:4,d:['m',[17,21],'l',[4,21],[4,0],'m',[4,11],'l',[12,11]]},
		'G': {w:21,n:8,d:['m',[11,21],'q',[17,21],[18,16],'m',[13,8],'l',[18,8],[18,5],'q',[17,0],[11,0],'q',[3,0],[3,9],'l',[3,12],'q',[3,21],[11,21]]},
		'H': {w:22,n:6,d:['m',[4,21],'l',[4,0],'m',[18,21],'l',[18,0],'m',[4,11],'l',[18,11]]},
		'I': {w:8,n:2,d:['m',[4,21],'l',[4,0]]},
		'J': {w:16,n:5,d:['m',[12,21],'l',[12,5],'q',[12,0],[7,0],'q',[2,0],[2,5],'l',[2,7]]},
		'K': {w:21,n:6,d:['m',[4,21],'l',[4,0],'m',[18,21],'l',[4,7],'m',[9,12],'l',[18,0]]},
		'L': {w:17,n:2,d:['m',[4,21],'l',[4,0],[16,0]]},
		'M': {w:24,n:2,d:['m',[4,0],'l',[4,21],[12,0],[20,21],[20,0]]},
		'N': {w:22,n:2,d:['m',[4,0],'l',[4,21],[18,0],[18,21]]},
		'O': {w:22,n:7,d:['m',[11,21],'q',[19,21],[19,12],'l',[19,9],'q',[19,0],[11,0],'q',[3,0],[3,9],'l',[3,12],'q',[3,21],[11,21]]},
		'P': {w:21,n:6,d:['m',[4,10],'l',[13,10],'q',[18,10],[18,15],'l',[18,16],'q',[18,21],[13,21],'l',[4,21],[4,0]]},
		'Q': {w:22,n:9,d:['m',[11,21],'q',[19,21],[19,12],'l',[19,9],'q',[19,0],[11,0],'q',[3,0],[3,9],'l',[3,12],'q',[3,21],[11,21],'m',[12,4],'l',[18,-2]]},
		'R': {w:21,n:8,d:['m',[4,10],'l',[13,10],'q',[18,10],[18,15],'l',[18,16],'q',[18,21],[13,21],'l',[4,21],[4,0],'m',[13,10],'l',[18,0]]},
		'S': {w:20,n:8,d:['m',[16,18],'q',[15,21],[10,21],'q',[5,21],[4,17],'q',[3,12],[7,11],'l',[13,10],'q',[18,9],[17,4],'q',[16,0],[10,0],'q',[4,0],[3,4]]},
		'T': {w:16,n:4,d:['m',[8,21],'l',[8,0],'m',[1,21],'l',[15,21]]},
		'U': {w:22,n:5,d:['m',[4,21],'l',[4,6],'q',[4,0],[11,0],'q',[18,0],[18,6],'l',[18,21]]},
		'V': {w:18,n:2,d:['m',[1,21],'l',[9,0],[17,21]]},
		'W': {w:24,n:2,d:['m',[2,21],'l',[7,0],[12,21],[17,0],[22,21]]},
		'X': {w:20,n:4,d:['m',[3,21],'l',[17,0],'m',[17,21],'l',[3,0]]},
		'Y': {w:18,n:4,d:['m',[1,21],'l',[9,11],[17,21],'m',[9,11],'l',[9,0]]},
		'Z': {w:20,n:2,d:['m',[3,21],'l',[17,21],[3,0],[17,0]]},
		'[': {w:14,n:2,d:['m',[11,25],'l',[4,25],[4,-7],[11,-7]]},
		'\\': {w:14,n:2,d:['m',[0,21],'l',[14,-3]]},
		']': {w:14,n:2,d:['m',[3,25],'l',[10,25],[10,-7],[3,-7]]},
		'^': {w:16,n:2,d:['m',[3,16],'l',[8,21],[13,16]]},
		'_': {w:16,n:2,d:['m',[0,-2],'l',[16,-2]]},
		'`': {w:10,n:2,d:['m',[6,21],'l',[5,20],[4,18],[4,16],[5,15],[6,16],[5,17]]},
		'a': {w:19,n:10,d:['m',[15,14],'l',[15,0],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[13,0],[15,2],'m',[15,12],'q',[13,14],[10,14]]},
		'b': {w:19,n:10,d:['m',[4,21],'l',[4,0],'m',[10,14],'l',[9,14],'q',[6,14],[4,12],'m',[4,2],'q',[6,0],[9,0],'l',[10,0],'q',[16,0],[16,7],'q',[16,14],[10,14]]},
		'c': {w:18,n:10,d:['m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[14,0],[15,3],'m',[15,11],'q',[14,14],[10,14]]},
		'd': {w:19,n:10,d:['m',[15,21],'l',[15,0],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[13,0],[15,2],'m',[15,12],'q',[13,14],[10,14]]},
		'e': {w:18,n:8,d:['m',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[14,0],[15,3],'m',[3,8],'l',[15,8],'q',[15,14],[9,14]]},
		'f': {w:12,n:5,d:['m',[10,21],'q',[5,21],[5,17],'l',[5,0],'m',[2,14],'l',[9,14]]},
		'g': {w:19,n:12,d:['m',[15,14],'l',[15,-2],'q',[15,-7],[10,-7],'q',[7,-7],[6,-6],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[13,0],[15,2],'m',[15,12],'q',[13,14],[10,14]]},
		'h': {w:19,n:6,d:['m',[4,21],'l',[4,0],'m',[4,10],'q',[6,14],[11,14],'q',[15,14],[15,10],'l',[15,0]]},
		'i': {w: 8,n:4,d:['m',[3,21],'l',[4,20],[5,21],[4,22],[3,21],'m',[4,14],'l',[4,0]]},
		'j': {w:10,n:5,d:['m',[5,21],'l',[6,20],[7,21],[6,22],[5,21],'m',[6,14],'l',[6,-3],'q',[6,-8],[1,-7]]},
		'k': {w:17,n:6,d:['m',[4,21],'l',[4,0],'m',[14,14],'l',[4,4],'m',[8,8],'l',[15,0]]},
		'l': {w: 8,n:2,d:['m',[4,21],'l',[4,0]]},
		'm': {w:26,n:10,d:['m',[4,14],'l',[4,0],'m',[4,10],'q',[6,14],[10,14],'q',[13,14],[13,10],'l',[13,0],'m',[13,10],'q',[15,14],[19,14],'q',[22,14],[22,10],'l',[22,0]]},
		'n': {w:19,n:6,d:['m',[4,14],'l',[4,0],'m',[4,10],'q',[6,14],[11,14],'q',[15,14],[15,10],'l',[15,0]]},
		'o': {w:19,n:7,d:['m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[16,0],[16,7],'q',[16,14],[10,14]]},
		'p': {w:19,n:10,d:['m',[4,14],'l',[4,-7],'m',[10,14],'l',[9,14],'q',[6,14],[4,12],'m',[4,2],'q',[6,0],[9,0],'l',[10,0],'q',[16,0],[16,7],'q',[16,14],[10,14]]},
		'q': {w:19,n:10,d:['m',[15,14],'l',[15,-7],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[13,0],[15,2],'m',[15,12],'q',[13,14],[10,14]]},
		'r': {w:13,n:4,d:['m',[4,14],'l',[4,0],'m',[4,8],'q',[5,14],[12,14]]},
		's': {w:16,n:7,d:['m',[13,11],'q',[13,14],[8,14],'q',[3,14],[3,11],'q',[3,8],[8,7],'q',[13,6],[13,3],'q',[13,0],[8,0],'q',[3,0],[3,3]]},
		't': {w:12,n:5,d:['m',[5,21],'l',[5,4],'q',[5,-1],[10,0],'m',[2,14],'l',[9,14]]},
		'u': {w:19,n:6,d:['m',[4,14],'l',[4,4],'q',[4,0],[8,0],'q',[13,0],[15,4],'m',[15,14],'l',[15,0]]},
		'v': {w:16,n:2,d:['m',[2,14],'l',[8,0],[14,14]]},
		'w': {w:22,n:2,d:['m',[3,14],'l',[7,0],[11,14],[15,0],[19,14]]},
		'x': {w:17,n:4,d:['m',[3,14],'l',[14,0],'m',[14,14],'l',[3,0]]},
		'y': {w:16,n:5,d:['m',[2,14],'l',[8,0],'m',[14,14],'l',[8,0],'q',[5,-7],[1,-7]]},
		'z': {w:17,n:2,d:['m',[3,14],'l',[14,14],[3,0],[14,0]]},
		'{': {w:14,n:9,d:['m',[9,25],'q',[5,24],[5,20],'q',[5,17],[7,16],'q',[9,15],[8,12],'q',[7,9],[4,9],'q',[7,9],[8,6],'q',[9,3],[7,2],'q',[5,1],[5,-2],'q',[5,-6],[9,-7]]},
		'|': {w: 8,n:2,d:['m',[4,25],'l',[4,-7]]},
		'}': {w:14,n:9,d:['m',[5,25],'q',[9,24],[9,20],'q',[9,17],[7,16],'q',[5,15],[6,12],'q',[7,9],[10,9],'q',[7,9],[6,6],'q',[5,3],[7,2],'q',[9,1],[9,-2],'q',[9,-6],[5,-7]]},
		'~': {w:24,n:4,d:['m',[3,6],'q',[3,12],[10,10],'l',[14,8],'q',[21,4],[21,10]]},
		'Â ': {w:16,n:1,d:[]},
		'Â¡': {w:10,n:4,d:['m',[5,10],'l',[5,-4],'m',[5,17],'l',[4,16],[5,15],[6,16],[5,17]]},
		'Â¢': {w:18,n:14,d:['m',[9,14],'l',[9,18],'m',[9,0],'l',[9,-4],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[14,0],[15,3],'m',[15,11],'q',[14,14],[10,14]]},
		'Â£': {w:18,n:8,d:['m',[4,11],'l',[13,11],'m',[16,18],'q',[15,21],[11,21],'q',[5,21],[6,16],'q',[7,8],[6,2],'q',[5,0],[4,0],'l',[16,0]]},
		'Â¤': {w:19,n:13,d:['m',[15,3],'l',[17,1],'m',[15,13],'l',[17,15],'m',[5,3],'l',[3,1],'m',[5,13],'l',[3,15],'m',[10,14],'q',[4,14],[4,8],'q',[4,2],[10,2],'q',[16,2],[16,8],'q',[16,14],[10,14]]},
		'Â¥': {w:18,n:8,d:['m',[4,7],'l',[14,7],'m',[4,11],'l',[14,11],'m',[1,21],'l',[9,11],[17,21],'m',[9,11],'l',[9,0]]},
		'Â¦': {w: 8,n:4,d:['m',[4,25],'l',[4,12],'m',[4,6],'l',[4,-7]]},
		'Â§': {w:20,n:12,d:['m',[16,18],'q',[16,21],[10,21],'q',[4,21],[4,18],'q',[4,15],[10,14],'q',[16,13],[16,10],'q',[16,6],[10,7],'m',[10,14],'q',[4,15],[4,11],'q',[4,8],[10,7],'q',[16,6],[16,3],'q',[16,0],[10,0],'q',[4,0],[4,3]]},
		'Â¨': {w:16,n:4,d:['m',[4,25],'l',[4,23],'m',[12,25],'l',[12,23]]},
		'Â©': {w:27,n:15,d:['m',[18,13],'q',[17,15],[14,15],'q',[9,15],[9,11],'l',[9,10],'q',[9,6],[14,6],'q',[17,6],[18,8],'m',[24,10],'q',[24,0],[14,0],'l',[13,0],'q',[3,0],[3,10],'l',[3,11],'q',[3,21],[13,21],'l',[14,21],'q',[24,21],[24,11],'l',[24,10]]},
		'Âª': {w:14,n:9,d:['m',[4,12],'l',[10,12],'m',[10,21],'l',[10,15],'m',[4,18],'q',[4,15],[7,15],'q',[10,15],[10,18],'q',[10,21],[7,21],'q',[4,21],[4,18]]},
		'Â«': {w:24,n:4,d:['m',[12,16],'l',[3,9],[12,2],'m',[21,16],'l',[12,9],[21,2]]},
		'Â¬': {w:22,n:2,d:['m',[4,12],'l',[18,12],[18,8]]},
		'Â­': {w:22,n:2,d:['m',[4,9],'l',[18,9]]},
		'Â®': {w:27,n:17,d:['m',[9,6],'l',[9,15],[16,15],'m',[9,10],'l',[16,10],[18,6],'m',[16,10],'q',[18,10],[18,12],'l',[18,13],'q',[18,15],[16,15],'m',[24,10],'q',[24,0],[14,0],'l',[13,0],'q',[3,0],[3,10],'l',[3,11],'q',[3,21],[13,21],'l',[14,21],'q',[24,21],[24,11],'l',[24,10]]},
		'Â¯': {w:16,n:2,d:['m',[0,24],'l',[16,24]]},
		'Â°': {w:10,n:5,d:['m',[3,23],'q',[3,21],[5,21],'q',[7,21],[7,23],'q',[7,25],[5,25],'q',[3,25],[3,23]]},
		'Â±': {w:22,n:6,d:['m',[11,18],'l',[11,6],'m',[4,12],'l',[18,12],'m',[4,2],'l',[18,2]]},
		'Â²': {w:14,n:6,d:['m',[10,11],'l',[4,11],'q',[4,15],[7,15],'q',[10,15],[10,18],'q',[10,21],[7,21],'q',[4,21],[4,18]]},
		'Â³': {w:14,n:5,d:['m',[4,14],'q',[4,11],[7,11],'q',[10,11],[10,14],'q',[10,17],[7,17],'l',[10,21],[4,21]]},
		'Â´': {w:19,n:2,d:['m',[9,18],'l',[12,20]]},
		'Âµ': {w:19,n:7,d:['m',[4,14],'l',[4,-6],'m',[4,4],'q',[4,0],[8,0],'q',[13,0],[15,4],'m',[15,14],'l',[15,0]]},
		'Â¶': {w:18,n:5,d:['m',[8,11],'q',[3,11],[3,16],'q',[3,21],[9,21],'m',[9,0],'l',[9,21],[15,21],[15,0]]},
		'Â·': {w:10,n:2,d:['m',[5,14],'l',[4,13],[5,12],[6,13],[5,14]]},
		'Â¸': {w:18,n:2,d:['m',[10,0],'l',[10,-2],[7,-4]]},
		'Â¹': {w:10,n:2,d:['m',[4,19],'l',[6,21],[6,11]]},
		'Âº': {w:14,n:7,d:['m',[4,12],'l',[10,12],'m',[4,18],'q',[4,15],[7,15],'q',[10,15],[10,18],'q',[10,21],[7,21],'q',[4,21],[4,18]]},
		'Â»': {w:24,n:4,d:['m',[3,16],'l',[12,9],[3,2],'m',[12,16],'l',[21,9],[12,2]]},
		'Â¼': {w:24,n:6,d:['m',[4,19],'l',[6,21],[6,11],'m',[16,15],'l',[6,5],'m',[19,0],'l',[19,10],[14,4],[20,4]]},
		'Â½': {w:24,n:10,d:['m',[4,19],'l',[6,21],[6,11],'m',[16,15],'l',[6,5],'m',[20,0],'l',[14,0],'q',[14,4],[17,4],'q',[20,4],[20,7],'q',[20,10],[17,10],'q',[14,10],[14,7]]},
		'Â¾': {w:24,n:10,d:['m',[4,14],'q',[4,11],[7,11],'q',[10,11],[10,14],'q',[10,17],[7,17],'l',[10,21],[4,21],'m',[18,15],'l',[8,5],'m',[19,0],'l',[19,10],[14,4],[20,4]]},
		'Â¿': {w:18,n:7,d:['m',[9,21],'l',[8,20],[9,19],[10,20],[9,21],'m',[9,14],'l',[9,10],'q',[3,10],[3,5],'q',[3,0],[9,0],'q',[15,0],[15,5]]},	
		'Ã€': {w:18,n:6,d:['m',[7,25],'l',[10,23],'m',[1,0],'l',[9,21],[17,0],'m',[4,7],'l',[14,7]]},
		'Ã�': {w:18,n:6,d:['m',[8,23],'l',[11,25],'m',[1,0],'l',[9,21],[17,0],'m',[4,7],'l',[14,7]]},
		'Ã‚': {w:18,n:6,d:['m',[7,23],'l',[9,25],[11,23],'m',[1,0],'l',[9,21],[17,0],'m',[4,7],'l',[14,7]]},
		'Ãƒ': {w:18,n:6,d:['m',[6,23],'l',[8,25],[10,23],[12,25],'m',[1,0],'l',[9,21],[17,0],'m',[4,7],'l',[14,7]]},
		'Ã„': {w:18,n:10,d:['m',[5,25],'l',[5,23],'m',[13,25],'l',[13,23],'m',[1,0],'l',[9,21],[17,0],'m',[4,7],'l',[14,7]]},
		'Ã…': {w:18,n:10,d:['m',[7,23],'q',[7,21],[9,21],'q',[11,21],[11,23],'q',[11,25],[9,25],'q',[7,25],[7,23],'m',[1,0],'l',[9,21],[17,0],'m',[4,7],'l',[14,7]]},
		'Ã†': {w:18,n:12,d:['m',[9,21],'l',[1,0],'m',[4,7],'l',[9,7],'m',[9,21],'l',[9,0],'m',[9,21],'l',[17,21],'m',[9,11],'l',[17,11],'m',[9,0],'l',[17,0]] },
		'Ã‡': {w:21,n:9,d:['m',[11,0],'l',[11,-2],[8,-4],'m',[11,21],'q',[17,21],[18,16],'m',[18,5],'q',[17,0],[11,0],'q',[3,0],[3,9],'l',[3,12],'q',[3,21],[11,21]]},
		'Ãˆ': {w:19,n:8,d:['m',[7,25],'l',[10,23],'m',[17,21],'l',[4,21],[4,0],[17,0],'m',[4,11],'l',[12,11]]},
		'Ã‰': {w:19,n:8,d:['m',[9,23],'l',[12,25],'m',[17,21],'l',[4,21],[4,0],[17,0],'m',[4,11],'l',[12,11]]},
		'ÃŠ': {w:19,n:8,d:['m',[8,23],'l',[10,25],[12,23],'m',[17,21],'l',[4,21],[4,0],[17,0],'m',[4,11],'l',[12,11]]},
		'Ã‹': {w:19,n:10,d:['m',[6,25],'l',[6,23],'m',[15,25],'l',[15,23],'m',[17,21],'l',[4,21],[4,0],[17,0],'m',[4,11],'l',[12,11]]},
		'ÃŒ': {w:8,n:4,d:['m',[3,25],'l',[6,23],'m',[4,21],'l',[4,0]]},
		'Ã�': {w:8,n:4,d:['m',[2,23],'l',[5,25],'m',[4,21],'l',[4,0]]},
		'ÃŽ': {w:8,n:4,d:['m',[2,23],'l',[4,25],[6,23],'m',[4,21],'l',[4,0]]},
		'Ã�': {w:8,n:6,d:['m',[2,25],'l',[2,23],'m',[6,25],'l',[6,23],'m',[4,21],'l',[4,0]]},
		'Ã�': {w:21,n:7,d:['m',[2,10],'l',[11,10],'m',[11,0],'l',[4,0],[4,21],[11,21],'q',[18,21],[18,12],'l',[18,9],'q',[18,0],[11,0]]},
		'Ã‘': {w:22,n:4,d:['m',[8,23],'l',[10,25],[12,23],[14,25],'m',[4,0],'l',[4,21],[18,0],[18,21]]},
		'Ã’': {w:22,n:9,d:['m',[8,25],'l',[11,23],'m',[11,21],'q',[19,21],[19,12],'l',[19,9],'q',[19,0],[11,0],'q',[3,0],[3,9],'l',[3,12],'q',[3,21],[11,21]]},
		'Ã“': {w:22,n:9,d:['m',[10,23],'l',[13,25],'m',[11,21],'q',[19,21],[19,12],'l',[19,9],'q',[19,0],[11,0],'q',[3,0],[3,9],'l',[3,12],'q',[3,21],[11,21]]},
		'Ã”': {w:22,n:9,d:['m',[9,23],'l',[11,25],[13,23],'m',[11,21],'q',[19,21],[19,12],'l',[19,9],'q',[19,0],[11,0],'q',[3,0],[3,9],'l',[3,12],'q',[3,21],[11,21]]},
		'Ã•': {w:22,n:9,d:['m',[8,23],'l',[10,25],[12,23],[14,25],'m',[11,21],'q',[19,21],[19,12],'l',[19,9],'q',[19,0],[11,0],'q',[3,0],[3,9],'l',[3,12],'q',[3,21],[11,21]]},
		'Ã–': {w:22,n:13,d:['m',[6,25],'l',[6,23],'m',[16,25],'l',[16,23],'m',[11,21],'q',[19,21],[19,12],'l',[19,9],'q',[19,0],[11,0],'q',[3,0],[3,9],'l',[3,12],'q',[3,21],[11,21]]},
		'Ã—': {w:12,n:4,d:['m',[2,16],'l',[10,6],'m',[10,16],'l',[2,6]]},
		'Ã˜': {w:22,n:9,d:['m',[3,1],'l',[19,20],'m',[11,21],'q',[19,21],[19,12],'l',[19,9],'q',[19,0],[11,0],'q',[3,0],[3,9],'l',[3,12],'q',[3,21],[11,21]]},
		'Ã™': {w:22,n:7,d:['m',[8,25],'l',[11,23],'m',[4,21],'l',[4,6],'q',[4,0],[11,0],'q',[18,0],[18,6],'l',[18,21]]},
		'Ãš': {w:22,n:7,d:['m',[10,23],'l',[13,25],'m',[4,21],'l',[4,6],'q',[4,0],[11,0],'q',[18,0],[18,6],'l',[18,21]]},
		'Ã›': {w:22,n:7,d:['m',[9,23],'l',[11,25],[13,23],'m',[4,21],'l',[4,6],'q',[4,0],[11,0],'q',[18,0],[18,6],'l',[18,21]]},
		'Ãœ': {w:22,n:9,d:['m',[7,25],'l',[7,23],'m',[15,25],'l',[15,23],'m',[4,21],'l',[4,6],'q',[4,0],[11,0],'q',[18,0],[18,6],'l',[18,21]]},
		'Ã�': {w:18,n:6,d:['m',[8,23],'l',[11,25],'m',[1,21],'l',[9,11],[9,0],'m',[17,21],'l',[9,11]]},
		'Ãž': {w:19,n:7,d:['m',[4,18],'l',[4,-5],'m',[4,14],'l',[9,14],'q',[16,14],[16,7],'q',[16,0],[9,0],'l',[4,0]]},
		'ÃŸ': {w:21,n:9,d:['m',[8,0],'l',[11,0],'q',[17,0],[17,5],'l',[17,6],'q',[17,10],[11,12],'q',[16,13],[16,16],'q',[16,21],[10,21],'q',[4,21],[4,16],'l',[4,0]]},
		'Ã ': {w:19,n:12,d:['m',[7,20],'l',[10,18],'m',[15,14],'l',[15,0],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[13,0],[15,2],'m',[15,12],'q',[13,14],[10,14]]},
		'Ã¡': {w:19,n:12,d:['m',[9,18],'l',[12,20],'m',[15,14],'l',[15,0],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[13,0],[15,2],'m',[15,12],'q',[13,14],[10,14]]},
		'Ã¢': {w:19,n:12,d:['m',[7,18],'l',[9,20],[11,18],'m',[15,14],'l',[15,0],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[13,0],[15,2],'m',[15,12],'q',[13,14],[10,14]]},
		'Ã£': {w:19,n:12,d:['m',[7,18],'l',[9,20],[11,18],[13,20],'m',[15,14],'l',[15,0],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[13,0],[15,2],'m',[15,12],'q',[13,14],[10,14]]},
		'Ã¤': {w:19,n:14,d:['m',[4,20],'l',[4,18],'m',[15,20],'l',[15,18],'m',[15,14],'l',[15,0],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[13,0],[15,2],'m',[15,12],'q',[13,14],[10,14]]},
		'Ã¥': {w:19,n:15,d:['m',[7,18],'q',[7,16],[9,16],'q',[11,16],[11,18],'q',[11,20],[9,20],'q',[7,20],[7,18],  'm',[15,14],'l',[15,0],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[13,0],[15,2],'m',[15,12],'q',[13,14],[10,14]]},
		'Ã¦': {w:21,n:10,d:['m',[11,14],'l',[11,0],'m',[11,8],'l',[18,8],'q',[18,14],[12,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[13,0],'q',[17,0],[18,3]]},
		'Ã§': {w:18,n:10,d:['m',[10,0],'l',[10,-2],[7,-4],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[14,0],[15,3],'m',[15,11],'q',[14,14],[10,14]]},
		'Ã¨': {w:18,n:10,d:['m',[7,20],'l',[10,18],'m',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[14,0],[15,3],'m',[3,8],'l',[15,8],'q',[15,14],[9,14]]},
		'Ã©': {w:18,n:10,d:['m',[9,18],'l',[12,20],'m',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[14,0],[15,3],'m',[3,8],'l',[15,8],'q',[15,14],[9,14]]},
		'Ãª': {w:18,n:10,d:['m',[7,18],'l',[9,20],[11,18],'m',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[14,0],[15,3],'m',[3,8],'l',[15,8],'q',[15,14],[9,14]]},
		'Ã«': {w:18,n:12,d:['m',[4,20],'l',[4,18],'m',[15,20],'l',[15,18],'m',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[14,0],[15,3],'m',[3,8],'l',[15,8],'q',[15,14],[9,14]]},
		'Ã¬': {w:8,n:4,d:['m',[3,20],'l',[6,18],'m',[4,14],'l',[4,0]]},
		'Ã­': {w:8,n:4,d:['m',[2,18],'l',[5,20],'m',[4,14],'l',[4,0]]},
		'Ã®': {w:8,n:4,d:['m',[2,18],'l',[4,20],[6,18],'m',[4,14],'l',[4,0]]},
		'Ã¯': {w:8,n:6,d:['m',[2,20],'l',[2,18],'m',[6,20],'l',[6,18],'m',[4,14],'l',[4,0]]},
		'Ã°': {w:19,n:12,d:['m',[8,17],'l',[10,21],'m',[7,20],'l',[11,18],'q',[16,16],[16,8],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[16,0],[16,7],'q',[16,14],[10,14]]},
		'Ã±': {w:19,n:8,d:['m',[7,18],'l',[9,20],[11,18],[13,20],'m',[4,14],'l',[4,0],'m',[4,10],'q',[6,14],[11,14],'q',[15,14],[15,10],'l',[15,0]]},
		'Ã²': {w:19,n:9,d:['m',[7,20],'l',[10,18],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[16,0],[16,7],'q',[16,14],[10,14]]},
		'Ã³': {w:19,n:9,d:['m',[9,18],'l',[12,20],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[16,0],[16,7],'q',[16,14],[10,14]]},
		'Ã´': {w:19,n:9,d:['m',[7,18],'l',[9,20],[11,18],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[16,0],[16,7],'q',[16,14],[10,14]]},
		'Ãµ': {w:19,n:9,d:['m',[7,18],'l',[9,20],[11,18],[13,20],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[16,0],[16,7],'q',[16,14],[10,14]]},
		'Ã¶': {w:19,n:11,d:['m',[4,20],'l',[4,18],'m',[15,20],'l',[15,18],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[16,0],[16,7],'q',[16,14],[10,14]]},
		'Ã·': {w:18,n:6,d:['m',[9,15],'l',[9,14],'m',[4,9],'l',[14,9],'m',[9,4],'l',[9,3]]},
		'Ã¸': {w:19,n:9,d:['m',[3,1],'l',[15,14],'m',[10,14],'l',[9,14],'q',[3,14],[3,7],'q',[3,0],[9,0],'l',[10,0],'q',[16,0],[16,7],'q',[16,14],[10,14]]},
		'Ã¹': {w:19,n:8,d:['m',[7,20],'l',[10,18],'m',[4,14],'l',[4,4],'q',[4,0],[8,0],'q',[13,0],[15,4],'m',[15,14],'l',[15,0]]},
		'Ãº': {w:19,n:8,d:['m',[9,18],'l',[12,20],'m',[4,14],'l',[4,4],'q',[4,0],[8,0],'q',[13,0],[15,4],'m',[15,14],'l',[15,0]]},
		'Ã»': {w:19,n:8,d:['m',[7,18],'l',[9,20],[11,18],'m',[4,14],'l',[4,4],'q',[4,0],[8,0],'q',[13,0],[15,4],'m',[15,14],'l',[15,0]]},
		'Ã¼': {w:19,n:10,d:['m',[4,20],'l',[4,18],'m',[15,20],'l',[15,18],'m',[4,14],'l',[4,4],'q',[4,0],[8,0],'q',[13,0],[15,4],'m',[15,14],'l',[15,0]]},
		'Ã½': {w:16,n:7,d:['m',[7,18],'l',[10,20],'m',[2,14],'l',[8,0],'m',[14,14],'l',[8,0],'q',[5,-7],[1,-7]]},
		'Ã¾': {w:19,n:10,d:['m',[4,21],'l',[4,-7],'m',[10,14],'l',[9,14],'q',[6,14],[4,12],'m',[4,2],'q',[6,0],[9,0],'l',[10,0],'q',[16,0],[16,7],'q',[16,14],[10,14]]},
		'Ã¿': {w:16,n:9,d:['m',[2,20],'l',[2,18],'m',[14,20],'l',[14,18],'m',[2,14],'l',[8,0],'m',[14,14],'l',[8,0],'q',[5,-7],[1,-7]]}
	};
}

// JSON parser
if(!this.JSON){this.JSON={};}
(function(){function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());
