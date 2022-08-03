<svelte:head>
	<!-- CSS only -->
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
		crossorigin="anonymous"
	/>
	<title>Date for dos</title>
</svelte:head>
<div class="backdround">
	<div class="container text-center">
		<slot />
	</div>
</div>

<style>
	* {
		direction: rtl;
	}

	.backdround {
		background-color: #e0ceb7;
	}
</style>
