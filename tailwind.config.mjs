/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [
		nextui(
			{
				"themes": {
					"light": {
						"colors": {
							"default": {
								"50": "#f3f3f4",
								"100": "#e3e3e6",
								"200": "#d2d2d7",
								"300": "#c2c2c8",
								"400": "#b1b1b9",
								"500": "#a1a1aa",
								"600": "#85858c",
								"700": "#69696f",
								"800": "#4c4c51",
								"900": "#303033",
								"foreground": "#000",
								"DEFAULT": "#a1a1aa"
							},
							"primary": {
								"50": "#fceae1",
								"100": "#f9cdb6",
								"200": "#f5b08c",
								"300": "#f19261",
								"400": "#ee7537",
								"500": "#ea580c",
								"600": "#c1490a",
								"700": "#983908",
								"800": "#6f2a06",
								"900": "#461a04",
								"foreground": "#f5f5f5",
								"DEFAULT": "#ea580c"
							},
							"secondary": {
								"50": "#efe5e1",
								"100": "#d8c0b8",
								"200": "#c19b8e",
								"300": "#aa7765",
								"400": "#93523b",
								"500": "#7c2d12",
								"600": "#66250f",
								"700": "#511d0c",
								"800": "#3b1509",
								"900": "#250e05",
								"foreground": "#fff",
								"DEFAULT": "#7c2d12"
							},
							"success": {
								"50": "#dff6e1",
								"100": "#b3e9b8",
								"200": "#86dc8e",
								"300": "#59d065",
								"400": "#2dc33b",
								"500": "#00b612",
								"600": "#00960f",
								"700": "#00760c",
								"800": "#005609",
								"900": "#003705",
								"foreground": "#000",
								"DEFAULT": "#00b612"
							},
							"warning": {
								"50": "#fcf3df",
								"100": "#f8e2b3",
								"200": "#f3d186",
								"300": "#efc059",
								"400": "#eaaf2d",
								"500": "#e69e00",
								"600": "#be8200",
								"700": "#966700",
								"800": "#6d4b00",
								"900": "#452f00",
								"foreground": "#000",
								"DEFAULT": "#e69e00"
							},
							"danger": {
								"50": "#ffdfe5",
								"100": "#ffb3c2",
								"200": "#ff869e",
								"300": "#ff597a",
								"400": "#ff2d56",
								"500": "#ff0032",
								"600": "#d20029",
								"700": "#a60021",
								"800": "#790018",
								"900": "#4d000f",
								"foreground": "#000",
								"DEFAULT": "#ff0032"
							},
							"background": "#f5f5f5",
							"foreground": {
								"50": "#e0e0e0",
								"100": "#b6b6b6",
								"200": "#8b8b8b",
								"300": "#606060",
								"400": "#353535",
								"500": "#0a0a0a",
								"600": "#080808",
								"700": "#070707",
								"800": "#050505",
								"900": "#030303",
								"foreground": "#fff",
								"DEFAULT": "#0a0a0a"
							},
							"content1": {
								"DEFAULT": "#ffffff",
								"foreground": "#000"
							},
							"content2": {
								"DEFAULT": "#f4f4f5",
								"foreground": "#000"
							},
							"content3": {
								"DEFAULT": "#e4e4e7",
								"foreground": "#000"
							},
							"content4": {
								"DEFAULT": "#d4d4d8",
								"foreground": "#000"
							},
							"focus": "#b91c1c",
							"overlay": "#0a0a0a",
							"divider": "#c2c2c8"
						}
					},
					"dark": {
						"colors": {
							"default": {
								"50": "#171717",
								"100": "#2e2e2e",
								"200": "#454545",
								"300": "#5c5c5c",
								"400": "#737373",
								"500": "#8f8f8f",
								"600": "#ababab",
								"700": "#c7c7c7",
								"800": "#e3e3e3",
								"900": "#ffffff",
								"foreground": "#fff",
								"DEFAULT": "#737373"
							},
							"primary": {
								"50": "#fceae1",
								"100": "#f9cdb6",
								"200": "#f5b08c",
								"300": "#f19261",
								"400": "#ee7537",
								"500": "#ea580c",
								"600": "#c1490a",
								"700": "#983908",
								"800": "#6f2a06",
								"900": "#461a04",
								"foreground": "#f5f5f5",
								"DEFAULT": "#ea580c"
							},
							"secondary": {
								"50": "#efe5e1",
								"100": "#d8c0b8",
								"200": "#c19b8e",
								"300": "#aa7765",
								"400": "#93523b",
								"500": "#7c2d12",
								"600": "#66250f",
								"700": "#511d0c",
								"800": "#3b1509",
								"900": "#250e05",
								"foreground": "#fff",
								"DEFAULT": "#7c2d12"
							},
							"success": {
								"50": "#dff6e1",
								"100": "#b3e9b8",
								"200": "#86dc8e",
								"300": "#59d065",
								"400": "#2dc33b",
								"500": "#00b612",
								"600": "#00960f",
								"700": "#00760c",
								"800": "#005609",
								"900": "#003705",
								"foreground": "#000",
								"DEFAULT": "#00b612"
							},
							"warning": {
								"50": "#fcf3df",
								"100": "#f8e2b3",
								"200": "#f3d186",
								"300": "#efc059",
								"400": "#eaaf2d",
								"500": "#e69e00",
								"600": "#be8200",
								"700": "#966700",
								"800": "#6d4b00",
								"900": "#452f00",
								"foreground": "#000",
								"DEFAULT": "#e69e00"
							},
							"danger": {
								"50": "#ffdfe5",
								"100": "#ffb3c2",
								"200": "#ff869e",
								"300": "#ff597a",
								"400": "#ff2d56",
								"500": "#ff0032",
								"600": "#d20029",
								"700": "#a60021",
								"800": "#790018",
								"900": "#4d000f",
								"foreground": "#000",
								"DEFAULT": "#ff0032"
							},
							"background": "#0a0a0a",
							"foreground": {
								"50": "#fefefe",
								"100": "#fcfcfc",
								"200": "#fafafa",
								"300": "#f9f9f9",
								"400": "#f7f7f7",
								"500": "#f5f5f5",
								"600": "#cacaca",
								"700": "#9f9f9f",
								"800": "#747474",
								"900": "#4a4a4a",
								"foreground": "#000",
								"DEFAULT": "#f5f5f5"
							},
							"content1": {
								"DEFAULT": "#18181b",
								"foreground": "#fff"
							},
							"content2": {
								"DEFAULT": "#27272a",
								"foreground": "#fff"
							},
							"content3": {
								"DEFAULT": "#3f3f46",
								"foreground": "#fff"
							},
							"content4": {
								"DEFAULT": "#52525b",
								"foreground": "#fff"
							},
							"focus": "#b91c1c",
							"overlay": "#ffffff",
							"divider": "#5c5c5c"
						}
					}
				},
				"layout": {
					"fontSize": {
						"tiny": "0.75rem",
						"small": "0.875rem",
						"medium": "1rem",
						"large": "1.125rem"
					},
					"lineHeight": {
						"tiny": "1rem",
						"small": "1.25rem",
						"medium": "1.5rem",
						"large": "1.75rem"
					},
					"radius": {
						"small": "0.5rem",
						"medium": "0.75rem",
						"large": "0.875rem"
					},
					"borderWidth": {
						"small": "1px",
						"medium": "2px",
						"large": "3px"
					},
					"disabledOpacity": "0.5",
					"dividerWeight": "1px",
					"hoverOpacity": "0.9"
				}
			}
		),
	],
};


