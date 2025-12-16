<script lang="ts">
	import type { PageProps } from '../signin/$types';

	let { data }: PageProps = $props();
</script>

<h1>{page.params.authType === 'register' ? 'Sign Up' : 'Sign In'}</h1>