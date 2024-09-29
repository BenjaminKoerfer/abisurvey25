import { sveltekit } from "@sveltejs/kit/vite";
import sveltePreprocess from "svelte-preprocess";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit({
			preprocess: sveltePreprocess({
				typescript: {
					tsconfigFile: "./tsconfig.json", // Ensure it points to the correct tsconfig.json
				},
			}),
		}),
	],
};

export default config;
