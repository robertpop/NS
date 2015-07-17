<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
  "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

		<title>::Administration Panel::</title>

		<link href="{"/admin/css/index.css?$CSS_TIMESTAMP"|url}" type="text/css" rel="stylesheet">

		<script type="text/javascript">var language = '{if $page_meta->language}{$page_meta->language|lower}{else}{if $lang}{$lang|lower}{else}en{/if}{/if}';</script>
		<script type="text/javascript" src="/script/jquery.js"></script>
		<script type="text/javascript" src="/script/admin.js"></script>
		<script type="text/javascript" src="/script/jquery-ui.js"></script>
		<link type="text/css" href="css/jquery-ui.css" rel="stylesheet" />

	</head>
<body>
<table align="center" cellspacing="0" cellpadding="0" width="100%" border="0">
  <tr>
    <td class="header" colspan="2" style="padding: 10px 20px;"><a href="index.php"><img src="/images/logo_small.png" border="0" alt="Quizsnack"></a></td>
  </tr>
  <tr valign="top">
    <td height="23" class="bgmain" style="border-bottom: 1px solid #dddddd; font-weight: normal;" colspan="2">
      <!-- BEGIN top_bar -->
      <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td>
		  {if $ADMIN}
			  <a href="index.php" style="padding-left:20px;">&raquo; Home</a></td>
	          <!-- BEGIN webmaster_shortcut -->
	          <td style="padding-left:30px;">
	          </td>
	          <!-- END webmaster_shortcut -->
	          <td align="right" style="padding-right:20px;">
	          	{*
				<strong>{LOGINNAME}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
	          	[<a href="admin.php?page=accounts.changepass">Change password</a>]&nbsp; &nbsp;
				*}
	          	[<a href='?page=logout'>Logout</a>]
			{/if}
		  </td>
        </tr>
      </table>
      <!-- END top_bar -->
    </td>
  </tr>
  
  <tr valign="top">
  {if $ADMIN}
  	<td width="120">
  		
  		<div class="leftMenu">
	  		{include file="components/left.tpl"}
  		</div>
  	</td>
  	{/if}
    <td class="mainContent">
    {$messages}
    <br>{include file = $CONTENT}<br>
    
    </td>
  </tr>
</table>
</body>
</html>