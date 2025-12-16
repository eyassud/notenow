<script lang="ts">
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<div class="border-3 bg-indigo-700 p-4">
    
</div>
{@render children()}
