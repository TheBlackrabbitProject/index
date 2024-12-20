// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'The Blackrabbit Project',
			plugins: [starlightBlog()],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'About',
					autogenerate: { directory: 'about' }
				},
				{
					label: 'Contributing',
					autogenerate: { directory: 'contributing' },
				},
			],
			customCss: [
				'./src/styles/customCss.css',
				'./src/font/font-face.css'
			]
		}),
	],
});
