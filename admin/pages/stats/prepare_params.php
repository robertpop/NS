<?php
	
	$params = new Params();
	
	mysql_select_db("stats");
	
	$cc=0;

	$mysql_request="SELECT * FROM params_log order by id DESC limit 10";
	$result = mysql_query($mysql_request);
	$arr=array();

	while ( $entry = mysql_fetch_array($result))
		{
//			echo $entry['id'].'<br>';
			$roww= array (0=>$entry['id'],1=>$entry['time_start'],5=>$entry['counted'],6=>$entry['id_last'],8=>$entry['completed']);
			$arr[]=$roww;
				
		}
	
	$smarty->assign ('rows',$arr);
		
	
	

 
	