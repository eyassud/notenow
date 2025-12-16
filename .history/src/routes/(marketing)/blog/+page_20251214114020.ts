import type { PageLoad } from './$types';

export const load = (async ({ data }) => {
    console.log('🌍 Blog Route Page Load');
	return {
		...data,
		x: 1
	};
}) satisfies PageLoad;