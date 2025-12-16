<script lang="ts">
	import { page } from '$app/state';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
    let pageId = $derivedpage.params.id;
</script>

<h1 class="text-4xl">Single Blog {pageId}</h1>

<a href="/blog/123">Another Text</a>