<table align="center" class="grey" id="playlistsListTable" cellspacing="1" cellpadding="5" border="0" width="90%">
  <tr align="left">
  	<td class="bgmain" width="20" align="right">#</td>
  	<td class="bgmain" align="right">
  		<a href="#" onclick="reload_table('templateName')" 
			{if $column=='templateName' and $column_order==1} style='color:green;'{/if}
  			{if $column=='templateName' and $column_order==-1} style='color:maroon;'{/if}
  		>
  			Template Name (ID)
		</a>  	
  	</td>
 	<td class="bgmain" align="right">
 		<a href="#" onclick="reload_table('type')"
			{if $column=='type' and $column_order==1} style='color:green;'{/if}
		  	{if $column=='type' and $column_order==-1} style='color:maroon;'{/if}
					
		>Type</a>
	</td>
	{if $type_editable}
	  	<td class="bgmain" align="center">
			<a href="#" onclick="reload_table('type_editable')"
			{if $column=='type_editable' and $column_order==1} style='color:green;'{/if}
		  	{if $column=='type_editable' and $column_order==-1} style='color:maroon;'{/if}
					
			>Editable</a>
	  	</td>
	{/if}	

	{if $type_published_free}
	  	<td class="bgmain" align="center">
	  		<a href="#" onclick="reload_table('type_published_free')"
			{if $column=='type_published_free' and $column_order==1} style='color:green;'{/if}
	  	  	{if $column=='type_published_free' and $column_order==-1} style='color:maroon;'{/if}
	  		  		
	  		>Published Free</a>
	  	</td>
	{/if}	
	{if $type_no_watermark}
	  	<td class="bgmain" align="center">
	  		<a href="#" onclick="reload_table('type_published_no_watermark')"
			{if $column=='type_published_no_watermark' and $column_order==1} style='color:green;'{/if}
	  	  	{if $column=='type_published_no_watermark' and $column_order==-1} style='color:maroon;'{/if}
	  		  		
	  		>Published No Watermark</a>
	  	</td>
	{/if}	
	{if $type_advanced_reporting}
	  	<td class="bgmain" align="center">
	  		<a href="#" onclick="reload_table('type_advanced_reporting')"
			{if $column=='type_advanced_reporting' and $column_order==1} style='color:green;'{/if}
	  	  	{if $column=='type_advanced_reporting' and $column_order==-1} style='color:maroon;'{/if}
	  		  		
	  		>Advanced Reporting</a>
  		
	  		
	  	</td>
	{/if}	
  </tr>
{assign var=i value=1}
{foreach from=$result item=lista name=nr key=kk}
  <tr onmouseout="this.className='row_normal'" class="row_normal" onmouseover="this.className='row_hover'">

	    <td align="right">{$i++}</td>
	 	{foreach from=$lista item=playlist name=n_1}
	   		{if $playlist!=''}
	   			<td align="right">{$playlist}</td>
	   		{/if}
	    {/foreach}
  </tr>
{/foreach}
{foreach from=$result_total item=lista name=nr key=kk}
  <tr onmouseout="this.className='row_normal'" class="row_normal" onmouseover="this.className='row_hover'">
	    <td align="right"></td>
	    <td align="right"><b>{$kk}</b> </td>
		   {foreach from=$lista item=playlist name=n_1}
		    <td align="right"><b>{$playlist}</b></td>
		   {/foreach}
  </tr>
{/foreach}
</table>
