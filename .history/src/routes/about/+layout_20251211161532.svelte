<script lang="ts">
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<div class="bg-purple-700 p-4">
    h1.mb-2
</div>
{@render children()}
