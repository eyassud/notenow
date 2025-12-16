<script lang="ts">
	import { page } from '$app/state';
	import type { PageProps } from '../../edit/$types';

	let { data }: PageProps = $props();
</script>

{JSON.stringify(page.params)}