<table cellpadding="3" cellspacing="3" border="0">

	<tr>
		<td>Email:</td>
		<td>{$user.email|htmlspecialchars}</td>
	</tr>
	
	<tr>
		<td>Active:</td>
		<td>{if ($user.active == 1)}YES{else}NO{/if}</td>
	</tr>
	
	<tr>
		<td>Screen name:</td>
		<td>{$user.screenname|htmlspecialchars}</td>
	</tr>
	
	<tr>
		<td>Type:</td>
		<td>{$user.type|htmlspecialchars}</td>
	</tr>
	
	<tr>
		<td>Confirmed:</td>
		<td>{if ($user.confirmed == 1)}YES{else}NO{/if}</td>
	</tr>

	<tr>
		<td>Id:</td>
		<td>{$user.id}</td>
	</tr>

</table>