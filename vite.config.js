import {defineConfig} from 'vite'

export default defineConfig({
	appTyp: 'mpa',
	base: process.env.DEPLOY_BASE_URL
});