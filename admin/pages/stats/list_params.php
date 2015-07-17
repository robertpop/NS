<?php

	if ($config->isPost()){
		$_SESSION['admin_filters_stats']['filters'] = $_POST;
	}
//deg($_POST);
	$order_count = '';
	$order_count = isset($_SESSION['admin_filters_stats']['filters']['order_count']) ? $_SESSION['admin_filters_stats']['filters']['order_count'] : null;
	
	$order_param = '';
	$order_param = isset($_SESSION['admin_filters_stats']['filters']['order_param']) ? $_SESSION['admin_filters_stats']['filters']['order_param'] : null;
	
	$filters = array();
	$filters = isset($_SESSION['admin_filters_stats']['filters']) ? $_SESSION['admin_filters_stats']['filters'] : array();

	if ((isset($filters['categories'])) && (($filters['categories']=='')))$filters['subcategories']='';	

	$pp = 1;
	if (isset ($_GET['p'])) $pp = $_GET['p']; 
	$append = " WHERE params_vals.param_id = params.id ";
	

	if (isset($_SESSION['admin_filters_stats']['filters']['name']) && !empty($_SESSION['admin_filters_stats']['filters']['name'])){
		$_SESSION['admin_filters_stats']['filters']['name'] = trim($_SESSION['admin_filters_stats']['filters']['name']);
		$name = realEscapeString($_SESSION['admin_filters_stats']['filters']['name']);
		$append .= " AND params.name LIKE '%{$name}%' ";
	}
	
	if (isset($_SESSION['admin_filters_stats']['filters']['param_value']) && $_SESSION['admin_filters_stats']['filters']['param_value'] != ''){
		$param_value = realEscapeString($_SESSION['admin_filters_stats']['filters']['param_value']);
		$append .= " AND params_vals.value = '{$param_value}' ";
	}


	$append .= " AND ( 0  ";
 	
 	if (isset($_SESSION['admin_filters_stats']['filters']['template_hash']) && $_SESSION['admin_filters_stats']['filters']['template_hash'] != ''){
		
 		$templateHash = $_SESSION['admin_filters_stats']['filters']['template_hash'];
		
		foreach ($templateHash as $temp) {
			if ($temp !=""){
				$append .= " OR params.tpl_hash = '{$temp}' ";
				$arr[]=$temp;
			}	
		}
	}
	$append .= " ) ";
	
	/////////////////////////// -- START -- ///////  cat - subcat from template with defaults
	
		if (!isset($arr)){
		$arr[]='';
	}
	
	if ($arr[0]!='' && !isset($arr[1])) {
		$default_show=1;
		$current="http://devfiles.quizsnack.net.s3.amazonaws.com/templates/xml/".$arr[0];
		if(!isset($filters['categories']))$filters['categories'] ='';
		if(!isset($filters['subcategories']))$filters['subcategories'] ='';
		if ($handle = @fopen($current, "rb"))
		{
			fclose($handle); 	    		
			$use_include_path=0;
			$dat = array();
			$dat = gzfile($current, $use_include_path);
		   	$datu = implode($dat);
		
			$xml = $datu;
			$xmlParser = new XmlParser($xml);
			$data = $xmlParser->GetData();

			if (isset($data['configs'])){
				$categories = array(); 
				$subcategories = array(); 
				$parameters_in_selection = array(); 
				$count_params=0;
				foreach ($data['configs']['categories']['category'] as $cat => $cat_item) {
						///echo"[ name : ".$cat_item['name']."]<br>";
						$categories[]=$cat_item['name'];
						$query_suppress=1;
						if(($filters['categories']==$cat_item['name'] || $filters['categories']==''))
						{
//						deg($filters['categories']);
//						deg($cat_item['name']);
							foreach ($cat_item['params'] as $subcat => $subcat_item){
								if (is_array($subcat_item)){
									if (isset($subcat_item['subcatLabel'])){
										///echo"---[subcat : ".$subcat."] [subcatLabel : ".$subcat_item['subcatLabel']."]<br>";
										if(($filters['subcategories']==$subcat || $filters['subcategories']==''))
										{
											foreach($subcat_item['params'] as $params => $params_item){
												if (is_array($params_item)){
													
													if(isset($params_item['defaultValue'])){
														///echo"------PARAM [param : ".$params."] - [Label : ".$params_item['label']."] [Default : ".$params_item['defaultValue']."]<br>"; 
														
														$label = $params_item['label'];
														$subcatlabel = $subcat_item['subcatLabel'];
														$name = $cat_item['name'];
														$param = $params;
														$default = $params_item['defaultValue'];
													}
													else{
														///echo"------PARAM [param : ".$params."] - [Label : ".$params_item['label']."] [Default : NO DEFAULT] <br>";
														$label = $params_item['label'];
														$subcatlabel = $subcat_item['subcatLabel'];
														$name = $cat_item['name'];
														$param = $params;
														$default = 'No default';
													}
													if($query_suppress){
														if ($count_params == 0)	
															$paramlist="('".$param."'";
														else 
															$paramlist .=", '".$param."'";
														$count_params++;
													}	
													$parameters_in_selection[$param]=array("a1"=>$param, "a2"=>$name, 'a3'=>$label ,'a4'=>$subcatlabel, 'a5'=>$default);
												
												}
											}	
										}
//										if($query_suppress){
										if(isset($filters['categories']) && ($filters['categories']==$cat_item['name'])){
											$subcategories[$subcat]=array($subcat,$cat_item['name'],'',$subcat_item['subcatLabel'] );
										}	
									}
									else 
									{
										if (isset($subcat_item['label'])){
											 ///echo"---[original : ".$subcat."] [label : ".$subcat_item['label']."]<br>";
											if(isset($subcat_item['defaultValue'])){
												///echo"------SUBCAT IS PARAM [param : ". $subcat."] [Label : ".$subcat_item['label']."] [Default : ".$subcat_item['defaultValue']."]<br>";
												$label = $subcat_item['label'];
												$subcatlabel = $subcat_item['label'];
												$name = $cat_item['name'];
												$param = $subcat;
												$default = $subcat_item['defaultValue'];
												
											}
											else
											{
												///echo"------SUBCAT IS PARAM [param : ". $subcat."] [Label : ".$subcat_item['label']."] [Default : NO DEFAULT]<br>";
												$label = $subcat_item['label'];
												$subcatlabel = $subcat_item['label'];
												$name = $cat_item['name'];
												$param = $subcat;
												$default = 'No default';
												
											}
											
//											if($query_suppress){
											if(($filters['categories']==$cat_item['name'])){
												$subcategories[$subcat]=array($subcat,$name,$subcat,$subcatlabel);
											}

											$parameters_in_selection[$param]=array("a1"=>$param, "a2"=>$name, 'a3'=>$label ,'a4'=>$subcatlabel, 'a5'=>$default);
											if(($filters['subcategories']==$subcat || $filters['subcategories']=='')){
											
													if($query_suppress){
														if ($count_params == 0)	
															$paramlist="('".$param."'";
														else 
															$paramlist .=", '".$param."'";
														$count_params++;	
												
													}
											}
										}
										
										
									}
										
								}	
							}
						}
				}
			}
			
			////// echo"<br><br><br>";
		}	
	
	}
	else{
		$default_show=0;
		unset($_SESSION['admin_filters_stats']['filters']['categories']);
	}
	if (isset($paramlist)){
		$paramlist.=')';
//		deg($paramlist);
		$append.=" AND params.name IN ".$paramlist." ";
	}	
	//////////////////////// -- END -- ///////  cat - subcat from template with defaults
	
	$recordsPerPage = isset($filters['records']) ? intval($filters['records']) : 10;
	if ($recordsPerPage < 10 || $recordsPerPage > 500){
		$recordsPerPage = 10;
	}
	
	
	$params = new Params();
	$query_params = "SELECT params.name, params_vals.value , params_vals.contor , params.tpl_hash
				FROM params, params_vals ";
	$query_params .= $append;
	$query_params .= "	ORDER BY  ";
	if ($order_param!=''){
		$query_params .= " params.name ".$order_param." ,  "; 
	}
	if ($order_count!=''){
		$query_params .= " params_vals.contor ".$order_count." ,  "; 
	}
	$query_params .= "params.name asc ";
			
//	$query_params .= "	ORDER BY  params.name asc, params_vals.contor  ".$orderAlbums. " , params.name asc " ;

	$query_all = $query_params;
	
	mysql_select_db("stats");
	
	
	
	$result = mysql_query($query_params);
	$all = array();
	$ccc = 1 ; 

	$count = mysql_num_rows($result);	
	
	if (1+ $recordsPerPage * ($pp - 1) > $count ) $pp=1;
	
	while ($row = mysql_fetch_array($result, MYSQL_NUM)) 
	{
    	if ($ccc >= 1+ $recordsPerPage * ($pp - 1) and $ccc <= $recordsPerPage * ($pp ) )
    		{ $all[$ccc] = $row; $all[$ccc][4]=$ccc; }
    	$ccc++;   
	}
//	 deg($all);
	$paginator = new Paginator($count);
	$paginator->setRecordsPerPage($recordsPerPage);
	$paginator->setCurrentPage($pp);
	$append .= " LIMIT " . $paginator->getLimit();

	$_SESSION['admin_filters_stats']['filters']['count']=$count;
	$templates = new Templates();
	$templates_list= $templates->getAll();
//	deg($templates_list);
	if (!$default_show){
		$template_names_by_hash= array();
		foreach ($templates_list as $s){
			$template_names_by_hash[$s->hash]=$s->name;
		}
		$smarty->assign('template_names_by_hash', $template_names_by_hash);
//		deg($template_names_by_hash);	
	}
							
	$smarty->assign('templateClass', $templates);	
	$smarty->assign('templates', $templates_list);
	$smarty->assign('paginatorHtml', $paginator->getHtml());
	$smarty->assign('paginator', $paginator);
	$smarty->assign('filters', $filters);
	$smarty->assign('arr', $all);
	$smarty->assign('total_count', $count);
	$smarty->assign('default_show', $default_show);
	$smarty->assign('arr_template', $arr);
	
	if (isset($categories)){
//		deg($categories);
		$smarty->assign('arr_categories', $categories);
	}
	if (isset($subcategories)){
		$mm='subcategories';
//		deg($mm);
//		deg($subcategories);
		$smarty->assign('arr_subcategories', $subcategories);
	}
//	deg($_SESSION);
	$smarty->assign($_SESSION['admin_filters_stats'], $_SESSION['admin_filters_stats']);
	if (isset($_SESSION['admin_filters_stats']['filters']['categories'])){
		$smarty->assign('cat_post', $_SESSION['admin_filters_stats']['filters']['categories']);
	}
	
	
	if ( (isset($_SESSION['admin_filters_stats']['filters']['categories']) && $_SESSION['admin_filters_stats']['filters']['categories']!='' ))
	{
		$smarty->assign('submenu', '1');
	}
	if (isset($parameters_in_selection)){
		$mm='params - parameters_in_selection';
//		deg($mm);
//		deg($parameters_in_selection);
		$smarty->assign('params', $parameters_in_selection);
	}	
	if (isset($_SESSION['admin_filters_stats']['filters']['subcategories'])){
		$smarty->assign('subcat_post', $_SESSION['admin_filters_stats']['filters']['subcategories']);
	}
	
	