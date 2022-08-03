import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const dev = true///process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		prerender: {
			default: true
		},
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/your-repo-name',
		},
		// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		// For example, instead of '_app', use 'app_', 'internal', etc.
		appDir: 'internal',
	}
};

export default config;
