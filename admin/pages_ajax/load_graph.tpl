
$('#graph1').show();

var myChart = new JSChart('graph2', 'line');

	{if $filters.type_editable}
		{strip}
		myChart.setDataArray([
		{foreach from=$result item=ord name=nr}
			{if $smarty.foreach.nr.index > 0},{/if}
			[{$smarty.foreach.nr.index}, {if $ord.type_editable}{$ord.type_editable}{else}0{/if}]
		{/foreach}
		], 'red');
		{/strip}
		myChart.setLineColor('#FF0000','red');
	{/if}

	{if $filters.type_no_watermark}
		{strip}
		myChart.setDataArray([
		{foreach from=$result item=ord name=nr}
			{if $smarty.foreach.nr.index > 0},{/if}
			[{$smarty.foreach.nr.index}, {if $ord.type_no_watermark}{$ord.type_no_watermark}{else}0{/if}]
		{/foreach}
		], 'hotpink');
		{/strip}
		myChart.setLineColor('#FF69B4', 'hotpink');
	{/if}

	{if $filters.type_published_free}
		{strip}
		myChart.setDataArray([
		{foreach from=$result item=ord name=nr}
			{if $smarty.foreach.nr.index > 0},{/if}
			[{$smarty.foreach.nr.index}, {if $ord.type_published_free}{$ord.type_published_free}{else}0{/if}]
		{/foreach}
		], 'purple');
		{/strip}
		myChart.setLineColor('#800080', 'purple');
	{/if}
	
	{if $filters.type_advanced_reporting}
		{strip}
		myChart.setDataArray([
		{foreach from=$result item=ord name=nr}
			{if $smarty.foreach.nr.index > 0},{/if}
			[{$smarty.foreach.nr.index}, {if $ord.type_advanced_reporting}{$ord.type_advanced_reporting}{else}0{/if}]
		{/foreach}
		], 'aquamarine');
		{/strip}
		myChart.setLineColor('#0000FF', 'blue');
	{/if}
	
	
	{assign var=xValsCoef value=`$smarty.foreach.nr.index/$divs`}
	
		{foreach from=$result item=ord name=nr}

			{if $smarty.foreach.nr.index%($xValsCoef|ceil)==0}
				{if $cut==0}
					myChart.setLabelX([{$smarty.foreach.nr.index}, '{$ord.ord_date|truncate:12:"":true}']);
				{else}
					myChart.setLabelX([{$smarty.foreach.nr.index}, '{$ord.ord_date|substr:18:2}']);
				{/if}	
			{assign var=xVals value=`$xVals+1`}
			{/if}

		{/foreach}
	{strip}
	{foreach from=$resultValoric item=ord name=nr}
		myChart.setTooltip([{$smarty.foreach.nr.index}, 
			'<div align="left"><b>{$ord.ord_date}</b>
			{if $type_editable}<br />Editable: {$ord.type_editable|string_format:"%d"}{/if}
			{if $type_published_free}<br />Published Free: {$ord.type_published_free|string_format:"%d"} {/if}
			{if $type_no_watermark}<br />Published No Watermark: {$ord.type_no_watermark|string_format:"%d"} {/if}
			{if $filters.type_advanced_reporting}<br />Advanced Reporting: {$ord.type_advanced_reporting|string_format:"%d"}{/if}
			</div>'
			]);
	{/foreach}
	{/strip}
	myChart.setAxisPaddingBottom(50);
	myChart.setTextPaddingBottom(10);
	myChart.setAxisPaddingTop(32);
	myChart.setAxisPaddingLeft(70);
	myChart.setAxisNameX('{$filter_chart_period|capitalize}');
	myChart.setAxisNameY('{if $yaxis=="procentual"}Unitati procentuale{else}Unitati valorice{/if}');
	myChart.setAxisValuesColor('#454545');
	myChart.setIntervalStartY(0);
	myChart.setShowXValues(false);
	myChart.setFlagColor('#000000');
	myChart.setFlagRadius(4);
	myChart.setTooltipPosition('ne');
	myChart.setGraphExtend(true);
	myChart.setSize(1000, 450);
	myChart.setTitleColor('#454545');
	myChart.setTitle('');
	myChart.setLineSpeed(99);
	myChart.draw();
	$('#graph1').hide();
	$('#graph2').show();
