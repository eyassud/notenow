<script lang="ts">
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<div class="bg-green-900 p-4">
	<h1 class="text-3xl">(marketing) Layout</h1>
</div>
{@render children()}
