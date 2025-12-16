import type { PageLoad } from './$types';

export const load = (async () => {
	console.log('🌍 Blog Route Universal Load');
	return {
		title: 'The Blogx\',
		count: 10
	};
}) satisfies PageLoad;