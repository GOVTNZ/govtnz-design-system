<% include SideBar %>
<div class="content-container unit size3of4 lastUnit">
	<article>
		<h1>$Title</h1>
		<div class="content">$Content</div>
	</article>
	<:H1 styleSize="xlarge">test</:H1>

	before 

	<:FlexContainer width="fixed">
		<:FlexRow>
			<:FlexColumn xs="4" sm="4" md="4" lg="4">
				column1
			</:FlexColumn>
			<:FlexColumn xs="4" sm="4" md="4" lg="4">
				column2
			</:FlexColumn>
			<:FlexColumn xs="4" sm="4" md="4" lg="4">
				column3
			</:FlexColumn>
		</:FlexRow>
	</:FlexContainer>


		$Form
		$CommentsForm
</div>