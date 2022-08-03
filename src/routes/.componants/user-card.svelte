<script lang="ts">
	import type { User } from '$lib/user-type';
	export let user: User;
</script>

<div class="col-sm-6 col-md-4 col-lg-3 mb-4">
	<div class="user-card mt-4">
		<h3>{user.sf_first_name}</h3>
		<img src={user.sf_picture} alt="" />
		<div id="details">
			<p>{user.sf_family_stat}</p>
			<p>{user.sf_religion_sector}</p>
			<p>גיל: {user.sf_age}</p>
		</div>
		<p id="about">{user.sf_about_me}</p>

		<a target="_" href="https://www.date4dos.co.il/members/member_profile/{user.sf_id}">לפרופיל</a>
		<br />
		<!-- <code>
			{JSON.stringify(user, undefined, '\r\n')}
		</code> -->
	</div>
</div>

<style>
	h3 {
		font-weight: bold;
	}
	.user-card {
		box-shadow: 4px 4px 10px 0px;
		border-radius: 35px 5px;
		padding: 5px 20px;
		background-color: #f9f0d2;
		height: 100%;
		transition: all 1s;
		border: 2px solid #d1b968;
	}
	.user-card:hover {
		box-shadow: 0px 0px 20px 0px;
		background-color: #e4d8b2;
	}
	img {
		border-radius: 5px;
		width: 160px;
		border: 2px solid #959595;
		box-sizing: content-box;
	}
	#details p {
		margin: 0;
	}
	p {
		margin-top: 10px;
	}
	#about {
		font-size: small;
	}
</style>
