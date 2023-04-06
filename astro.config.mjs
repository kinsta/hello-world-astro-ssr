import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	site: 'https://hello-world-astro-ssr-oypwt.kinsta.app',
	output: 'server',
	adapter: node({
		mode: "standalone"
	})
});