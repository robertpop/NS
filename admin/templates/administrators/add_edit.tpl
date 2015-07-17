<form method="post" action="">
<table cellpadding="0" cellspacing="0" border="0" class="displaytable" align="center">
	<tr>
		<td>Name:</td>
		<td><input type="text" value="{$adm->email}" name="email" /></td>
	</tr>
	
	<tr>
		<td>Password:</td>
		<td><input type="password" value="" name="password" /></td>
	</tr>
	
	<tr>
		<td>Repeat password:</td>
		<td><input type="password" value="" name="password2" /></td>
	</tr>
	
	<tr>
		<th colspan="2">Access Data</th>
	</tr>
	
	<tr>
		<td colspan="2" style="padding: 0; margin: 0;">
			<table cellpadding="0" cellspacing="0" border="0" class="displaytable" align="center" width="100%">
				{foreach from=$accessData item=ad key=k}
				<tr>
					<td style="padding: 0 8px;" align="center"><input type="checkbox" name="access[]" value="{$k}" id="acc{$k}" {if ($adm->hasAccess($k))} checked="checked" {/if}></td>
					<td align="left" style="padding: 0 8px; text-align: left;"><label style="display: block; line-height: 24px;" for="acc{$k}">{$ad}</label></td>
				</tr>
				{/foreach}
			</table>
		</td>
	</tr>
	
	<tr>
		<td colspan="2" align="center">
			<input type="submit" value="Save" class="button" />
			<button onclick="location.href='?page=administrators'; return false;" class="button">Cancel</button>
		</td>
	</tr>
	
</table>
</form>