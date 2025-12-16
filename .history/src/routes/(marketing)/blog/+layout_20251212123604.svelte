<script lang="ts">
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

div.border-3.bg-indigo-700
{@render children()}
