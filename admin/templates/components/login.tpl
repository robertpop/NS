<form name="login" action="index.php?page=login" method="post">
<table border="0" cellpadding="4" align="center">
	<tr>
		<td height="200">&nbsp;</td>
	</tr>
	{if $error_login}
	<tr>
		<td colspan="2" class="error">{$error_login}</td>
	</tr>
	{/if}
	<tr>
		<td align="left">Email</td>
		<td><input type="text" name="email" class="textField"></td>
	</tr>
	<tr>
		<td align="left">Password</td>
		<td><input type="password" name="password" class="textField"></td>
	</tr>
	<tr>
		<td colspan="2" align="center"><input type="submit" name="button" value="Login" class="button"></td>
	</tr>
	<tr>
		<td height="200">&nbsp;</td>
	</tr>
</table>
</form>