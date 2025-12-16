<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="border-2 bg-pink-900 p-4">
	<h1 class="text-3xl">Root Layout</h1>
	<nav class="my-2 bg-amber-600 p-2">
		<ul class="flex gap-2">
			<li>
				<a href="/">Home</a>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
	{@render children()}
</div>
