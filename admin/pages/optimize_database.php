<?php

	function getTables()
	{
		$query = "SHOW TABLES";
		$q = new DbMySql($query);
		$tables = array();
		while ($q->nextRecord()){
			$tables[] = $q->f('Tables_in_' . $q->database);
		}
		return $tables;
	}
	
	$tables = getTables();
	
	$ret = array();
	
	if (!empty($tables)){
		
		$tables = '`' . implode("`, `", $tables) . '`';
		$q = new DbMySql(" OPTIMIZE TABLE {$tables}");
		
		while ($q->nextRecord()){
			$ret[] = $q->getRecord();
		}
		
	}
	
	$smarty->assign('result', $ret);
	