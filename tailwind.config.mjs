/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/preline/preline.js'],
	darkMode: "class",
	theme: {
		fontFamily: {
			'body': [
				'Montserrat',
			],
			'sans': [
				'Montserrat',
			],
		},
		extend: {
			colors: {
				"primary": {
					'50': '#fff3ed',
					'100': '#ffe3d5',
					'200': '#fec7aa',
					'300': '#fda374',
					'400': '#fb7d3c',
					'500': '#f96416',
					'600': '#ea580c',
					'700': '#c24a0c',
					'800': '#9a4112',
					'900': '#7c3612',
					'950': '#431c07',
					"DEFAULT": "#ea580c"
				},
				"success": {
					'50': '#eeffee',
					'100': '#d7ffda',
					'200': '#b2ffb8',
					'300': '#76ff82',
					'400': '#33f546',
					'500': '#09de1e',
					'600': '#00b612',
					'700': '#049113',
					'800': '#0a7115',
					'900': '#0a5d15',
					'950': '#003407',
					"DEFAULT": "#00b612"
				},
				"warning": {
					'50': '#fffeea',
					'100': '#fffdc5',
					'200': '#fffa87',
					'300': '#fff248',
					'400': '#ffe41e',
					'500': '#fcc604',
					'600': '#e69e00',
					'700': '#b96d04',
					'800': '#96540a',
					'900': '#7b450c',
					'950': '#472401',
					"DEFAULT": "#e69e00"
				},
				"danger": {
					'50': '#fff0f1',
					'100': '#ffdde0',
					'200': '#ffc0c6',
					'300': '#ff949e',
					'400': '#ff5767',
					'500': '#ff2339',
					'600': '#ff0019',
					'700': '#d70015',
					'800': '#b10314',
					'900': '#920a17',
					'950': '#500008',
					"DEFAULT": "#ff0019"
				},
				light: {
					"background": {
						'50': '#f6f6f6',
						'100': '#eeeeee',
						'200': '#e7e7e7',
						'300': '#dddddd',
						'400': '#d4d4d4',
						'500': '#cfcfcf',
						'600': '#c8c8c8',
						'700': '#bfbfbf',
						'800': '#b3b3b3',
						'900': '#a9a9a9',
						"DEFAULT": "#fafafa"
					},
					"foreground": {
						"50": "#f6f6f6",
						"100": "#e7e7e7",
						"200": "#d1d1d1",
						"300": "#b0b0b0",
						"400": "#888888",
						"500": "#6d6d6d",
						"600": "#5d5d5d",
						"700": "#4f4f4f",
						"800": "#4f4f4f",
						"900": "#3d3d3d",
						"DEFAULT": "#0a0a0a"
					},
				},
				dark: {
					"background": {
						"50": "#545454",
						"100": "#4b4b4b",
						"200": "#424242",
						"300": "#3e3e3e",
						"400": "#373737",
						"500": "#303030",
						"600": "#2c2c2c",
						"700": "#232323",
						"800": "#1e1e1e",
						"900": "#121212",
						"DEFAULT": "#0a0a0a"
					},

					"foreground": {
						'50': '#efefef',
						'100': '#dcdcdc',
						'200': '#bdbdbd',
						'300': '#989898',
						'400': '#7c7c7c',
						'500': '#656565',
						'600': '#525252',
						'700': '#464646',
						'800': '#3d3d3d',
						'900': '#292929',
						"DEFAULT": "#f5f5f5"
					},
				},
			},
		},
	},
	plugins: [
		animations,
		require('@tailwindcss/forms'),
		require('preline/plugin'),
	],
}