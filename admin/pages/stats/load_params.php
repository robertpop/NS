<?php
	set_time_limit(0);
	require_once APPLICATION_PATH . "/include/lib/classes/Xml.php";

	$stringu = "";  // aici construim query mysql
	if (isset($_POST['poz']) and $_POST['poz']!='' ){   // daca dorim, incarcam limita inferioara manual 
		$from_album= $_POST['poz'];
		$stringu.= "where id > ".$from_album;
	}
	else
	if (isset($_POST['job']) and $_POST['job']!='' ){   // daca continuam, incarcam limita inferioara
		$from_album= $_POST['job'];
		$stringu.= "where id > ".$from_album;
	}
	else
	{
		$from_album= 0 ;
		$stringu.= "where id > 0 ";
		
	}
	$smarty->assign ('from_album',$from_album);
	$all = ' albums checked: ';  // doar pt. interfata
	
	$stringu .= " AND status='PUBLISHED' "; // criteriul de selectare obligatoriu, doar albumele PUBLISHED
	$stringu .= " order by id asc "; // criteriul de ordonare obligatoriu, parcurgerea albumelor se face in ordinea id-ului
	
	if (isset($_POST['nr']) && ($_POST['nr']!= '')){  // daca impunem limita de lucru, cate albume va verifica (altfel toate)
		$cate_albums= $_POST['nr'];
		$stringu.=" limit ".$cate_albums;
	}
	
	$albums = new Quiz();
	
	$albums = $albums->getAll($stringu);
	$qq= $stringu;  //  doar pt. interfata
	$cate_albums = count($albums); 
	$cate_atribute = 0; //  doar pt. interfata
	$cate_valori = 0;//  doar pt. interfata
	$cate_dubluri = 0;//  doar pt. interfata
	$params = new Params();

 	$smarty->assign ('cate_albums',$cate_albums);
	if (isset($_POST['delete_templates']) and $_POST['delete_templates']=="on"){ //  daca sterge inregistrarile indicilor de atribute pt templaturile existente
			$mysql_request="SELECT COUNT(*) FROM params ";
			$deleted = mysql_result(mysql_query($mysql_request), 0);
			$message_delete="<br>". $deleted ." existing entries were prior deleted<br>";		
			$mysql_request="truncate table params ";
			mysql_query($mysql_request); 
	}
	
	if (isset($_POST['delete']) and $_POST['delete']=="on"){ //  daca sterge inregistrarile valorilor existente
			$mysql_request="SELECT COUNT(*) FROM params_vals ";
			$deleted = mysql_result(mysql_query($mysql_request), 0);
			$message_delete="<br>". $deleted ." existing entries were prior deleted<br>";		
			$mysql_request="truncate table params_vals ";
			mysql_query($mysql_request); 
	}
	else
	{
			$message_delete="<br>Data is appended to existing entries<br>";			
	}
	$smarty->assign ('message_delete',$message_delete);
	mysql_select_db("stats");
	$cc=0;

	$mysql_request="INSERT INTO params_log ( date_start  , time_start , id_last ) VALUES ( '".date('Y-m-d')."', '".date('H:i:s')."' , '". $from_album ."');";
	mysql_query($mysql_request);
	$curr_log_id = mysql_insert_id();
 	
	foreach ($albums as $album){
	
		$cc++;
		$stringu="http://devfiles.quizsnack.net.s3.amazonaws.com/quizzes/xml/" .$album->hash;
//		echo $stringu."<br>";
		$xml_hash =  $album->hash ;
		$all .= " ".$album->id;
		$mysql_request="UPDATE params_log SET id_last = ".$album->id.",  counted = ".$cc.", time_stop = '".date('H:i:s')."' , date_stop = '".date('Y-m-d')."' WHERE id = ".$curr_log_id." LIMIT 1" ;
		mysql_query($mysql_request);
	
		if ($handle = @fopen($stringu, "rb"))
		{
			fclose($handle); 	    		
			$use_include_path=0;
			$dat = array();
			$dat = gzfile($stringu, $use_include_path);
		   	$datu = implode($dat);
		

				$xml=$datu;
				 {
						$xmlParser = new XmlParser($xml);	
						$data = $xmlParser->GetData();
						
						if (isset($data['configs']))
						{
							foreach ($data['configs'] as $key => $item) {
									if ($key == "template_hash" ) 
									{
									$curr_tpl_hash=$item;	
									} 
							}	
							if (isset($data['configs']['params']))
							{
								
								foreach ($data['configs']['params'] as $key => $item) {
									if (isset($item['value']))
									{
										$curr_param=$item['value'];
											// verificam daca exista deja tipul de param asociat tpl din terminal
										$mysql_request="SELECT * FROM params where tpl_hash='".$curr_tpl_hash."'  and name='".$key."' ";
										$result = mysql_query($mysql_request);
										
										if( mysql_num_rows($result))
										{
											// daca exista luam id-ul 
											$row = mysql_fetch_array($result, MYSQL_ASSOC);
											$curr_id = $row['id'];
											$mysql_request="select * FROM params_vals WHERE param_id = '".$curr_id."' AND value = '".$curr_param."' ";
											$exista = mysql_query($mysql_request);
											
											// daca exista incrementam [contor], daca nu exista inseram in params_vals
											if(mysql_num_rows($exista)> 0) {
												$row = mysql_fetch_array($exista, MYSQL_ASSOC) ;
 												$vals_id = $row['id']; 
 												$vals_contor = $row['contor'];  $vals_contor++;
 												// deg($row);		
												$mysql_request="UPDATE params_vals SET contor = ".$vals_contor ." WHERE id = ".$vals_id." LIMIT 1" ;
												mysql_query($mysql_request);
												$cate_dubluri++;
											}
											else{ 
												$mysql_request="INSERT INTO params_vals ( param_id , value  ) VALUES ( '".$curr_id."', '".$curr_param."' );";
												mysql_query($mysql_request);
												$cate_valori++;
												
											}
										}
										else 
										{	// daca nu exista depunem val seed in params, luam id-ul si inseram si in param_vals
											$mysql_request="INSERT INTO params ( tpl_hash ,  name ) VALUES ( '".$curr_tpl_hash."', '".$key."');";
											mysql_query($mysql_request);
											$curr_id = mysql_insert_id();
											$mysql_request="INSERT INTO params_vals ( param_id , value ) VALUES ( '".$curr_id."', '".$curr_param."' );";
											mysql_query($mysql_request);
											$cate_atribute++;
											$cate_valori++;
										}
										
									}
									else 
									{
//										echo "<br><br>some invalid entries".$stringu."<br>";
									}	
									
							
										
								}
							}	
										
						}
					$xmlParser->__destruct();	
				}
//				else 
//				{
//				 echo '-x'; // no xml in gz flie
//				}	
			
	    }
	    else 
	    {
//	    	echo '-g'; //no gz file on server
	    }
		
	} // de la for
		$mysql_request="UPDATE params_log SET completed = '1'  WHERE id = ".$curr_log_id." LIMIT 1" ;
		mysql_query($mysql_request);
		$smarty->assign ('cate_valori',$cate_valori);
		$smarty->assign ('cate_atribute',$cate_atribute);
		$smarty->assign ('cate_dubluri',$cate_dubluri);
		$smarty->assign ('cc',$cc);
		$smarty->assign ('all',$all);
		$smarty->assign ('qq',$qq);
							
