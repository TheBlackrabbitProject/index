// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

import netlify from '@astrojs/netlify';
import { AstroJSX } from 'astro/jsx-runtime';

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
			  {
				label: 'Fangames',
				items: [
					{
						label: "Five Nights at Candy's",
						items: [
							{ label: "Five Night's at Candy's 1", slug: 'fangames/five-nights-at-candys/1' },
							{ label: "Five Night's at Candy's 2", slug: 'fangames/five-nights-at-candys/2' },
							{ label: "Five Night's at Candy's 3", slug: 'fangames/five-nights-at-candys/3' },
							{ label: "Five Night's at Candy's 4", slug: 'fangames/five-nights-at-candys/4', badge: 'Fanverse', },
						]
					},
					{
						label: "One Night at Flumpty's",
						items: [
							{ label: "One Night at Flumpty's", slug: 'fangames/one-night-at-flumptys/1' },
							{ label: "One Night at Flumpty's 2", slug: 'fangames/one-night-at-flumptys/2' },
							{ label: "One Night at Flumpty's 3", slug: 'fangames/one-night-at-flumptys/3', badge: 'Fanverse', },
						]
					},
					{
						label: "POPGOES",
						items: [
							{ label: "POPGOES(2016)", slug: 'fangames/popgoes/1' },
							{ label: "POPGOES Arcade", slug: 'fangames/popgoes/arcade', badge: 'Fanverse', },
							{ label: "POPGOES Evergreen", slug: 'fangames/popgoes/evergreen', badge: 'Fanverse', },
						]
					},
				],
				
				
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