/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
	i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["en-US", "es-ES"],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: "en-US",
  },
  reactStrictMode: true,
  trailingSlash: false,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}

		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
}

module.exports = nextConfig
