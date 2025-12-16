import type { PageLoad } from './$types';

export const load = (async ({ data }) => {
    console.log
	return {
		...data,
		x: 1
	};
}) satisfies PageLoad;