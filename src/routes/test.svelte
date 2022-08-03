<script lang="ts">
	import UserCard from './.componants/user-card.svelte';

	import { get_data } from '$lib/get-data';
</script>

{#await get_data()}
	<p>wait...</p>
{:then list}
	<div class="row">
		{#each list as user}
			<UserCard {user} />
		{/each}
	</div>
{/await}
