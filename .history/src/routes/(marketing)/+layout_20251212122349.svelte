<script lang="ts">
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

.bg-green-900.p-4
<nav class="my-2 bg-amber-600 p-2">
	<ul class="flex gap-2">
		<li>
			<a href="/">Home</a>
			<a href="/about">About</a>
		</li>
	</ul>
</nav>
{@render children()}
