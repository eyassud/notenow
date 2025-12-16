<script lang="ts">
	import { page } from '$app/state';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1 class="text-4xl">Single Blog {page.params.id}</h1>

<a href=""></a>