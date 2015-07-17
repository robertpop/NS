<table cellpadding="3" cellspacing="3" border="0">

	<tr>
		<td>ID:</td>
		<td>{$notification->id|htmlspecialchars}</td>
	</tr>
	
	<tr>
		<td>Hash:</td>
		<td>{$notification->hash|htmlspecialchars}</td>
	</tr>
	
	<tr>
		<td>Name:</td>
		<td>{$notification->name|htmlspecialchars}</td>
	</tr>
	
	<tr>
		<td>Parent hash:</td>
		<td>{$notification->parent_hash|htmlspecialchars}</td>
	</tr>
	
	<tr>
		<td>Date created:</td>
		<td>{$notification->date_created}</td>
	</tr>

	<tr>
		<td>Date published:</td>
		<td>{$notification->date_published}</td>
	</tr>

</table>