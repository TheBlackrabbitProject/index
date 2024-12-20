// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'The Blackrabbit Project',
          plugins: [starlightBlog()],
          social: {
              github: 'https://github.com/TheBlackrabbitProject',
			  discord: 'https://discord.gg/XWvga9sB',
          },
		  pagination: false,
		  editLink: {
			baseUrl: 'https://github.com/TheBlackrabbitProject/index/tree/main',
		  },
		  favicon: '/favicon.ico',
		  logo: {
			light: './src/assets/branding/no bg/icon-dark.png',
    		dark: './src/assets/branding/no bg/icon-light.png',
			replacesTitle: true,
		  },
		  head: [
			// Add ICO favicon fallback for Safari.
			{
			  tag: 'link',
			  attrs: {
				rel: 'icon',
				href: '/favicon.ico',
				sizes: '32x32',
			  },
			},
			{
				tag: 'link',
				attrs: {
					rel: 'icon',
					href: '/android-chrome-192x192.png',
					sizes: '192x192',
				},
			},
			{
				tag: 'link',
				attrs: {
					rel: 'icon',
					href: '/android-chrome-512x512.png',
					sizes: '512x512',
				},
			},
			{
				tag: 'link',
				attrs: {
					rel: 'icon',
					href: '/apple-touch-icon.png',
					sizes: '180x180',
				},
			},
			{
				tag: 'link',
				attrs: {
					rel: 'icon',
					href: '/favicon-16x16.png',
					sizes: '16x16',
				},
			},
			{
				tag: 'link',
				attrs: {
					rel: 'icon',
					href: '/favicon-32x32.png',
					sizes: '32x32',
				},
			},
		  ],
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

  adapter: netlify(),
});