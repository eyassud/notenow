<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<title>{page}</title>
	<meta property="og:title" content="NoteNow" />
	<meta property="og:description" content="Some description" />
	<meta name="description" content="Some description" />
</svelte:head>

{@render children()}
