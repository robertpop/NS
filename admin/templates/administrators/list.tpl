<table cellpadding="0" cellspacing="0" border="0" class="orders displaytable" align="center">
	<tr>
		<th>id</th>
		<th>Name</th>
		<th>Last login</th>
		<th>&nbsp;</th>
	</tr>
	
	{foreach from=$administrators item=adm name=nr}
	<tr>
		<td>{$adm->id}</td>
		<td>{$adm->email}</td>
		<td>{$adm->last_login}</td>
		<td>
		<a href="?page=administrators&amp;action=edit&amp;id={$adm->id}">Edit</a>
		 | 
		<a href="?page=administrators&amp;action=remove&amp;id={$adm->id}" onclick="return confirm('Are you sure?');">Remove</a>
		</td>
	</tr>
	{/foreach}
	<tr>
		<td colspan="4" align="right">
			<a href="?page=administrators&amp;action=add">Add new user</a>
		</td>
	</tr>
</table>