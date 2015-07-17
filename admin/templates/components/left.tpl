<span>General</span>
{if ($ADMIN->hasAccessToPage('administrators'))}
<a href="?page=administrators">Administrators</a>
<a href="?page=optimize_database">Optimize Database</a>
<a href="?page=settings">Settings</a>
{/if}

{if ($ADMIN->hasAccessToPage('notifications'))}
<span>Notifications</span>
	<a href="?page=notifications">List</a>
{/if}

{if ($ADMIN->hasAccessToPage('templates'))}
<span>Templates</span>
	<a href="?page=templates&amp;action=add_edit">Add Template</a>
	<a href="?page=templates&amp;action=list">List Templates</a>
	<a href="?page=language">Languages</a>
{/if}
{if ($ADMIN->hasAccessToPage('noscripts'))}
<span>Embed</span>
	<a href="?page=noscripts">Noscripts</a>
{/if}
{if ($ADMIN->hasAccessToPage('examples'))}
<span>Examples</span>
	<a href="?page=examples">Examples</a>
{/if}
{if ($ADMIN->hasAccessToPage('stats'))}
<span>Statistics</span>
	<a href="?page=stats/list_params">Display stats</a>
	<a href="?page=stats/prepare_params">Generate stats</a>
{/if}
{if ($ADMIN->hasAccessToPage('feedbacks'))}
<span>Feedbacks</span>
	<a href="?page=feedback">Display feedbacks</a>
{/if}
{if ($ADMIN->hasAccessToPage('faq'))}
<span class="level1">FAQ</span>
<a href="?page=faq&action=list_categories">Categories</a>
<a href="?page=faq&action=list_questions">Questions</a>
{/if}	