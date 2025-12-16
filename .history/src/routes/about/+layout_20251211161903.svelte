<script lang="ts">
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<div class="border-2 bg-purple-700 p-4">
	<h1 class="mb-2 text-3xl">About Layout</h1>
    <div class="flex gap-4">
        <div class="w-[200px] bg-amber-700"></div>
        <div></div>
    </div>
	
</div>{@render children()}
