module.exports = {
	"pluginConfig": {
		"@axway/api-builder-plugin-fn-swagger": {
			"st": {
				// A. Authentication Related Options
				// Optional. This must be explicitly stated if you have several securityDefinitions in the corresponding swagger.
				// Possible values are - "basic", "apiKey" "oauth2"
				"x-vendor-openapi-authtype": "basic",

				// The plugin can automatically switch between auth types.
				// Make sure you set only one of the following
				// 1. For "basic" authentication uncomment and provide values for:
				"x-vendor-openapi-username": "sandeep",
				"x-vendor-openapi-password": "sandeep",

				// 2. For "apiKey" authentication uncomment and provide values for:
				// "x-vendor-openapi-key": "API KEY"

				// 3. For "oauth2" authentication uncomment and provide values for:
				// "x-vendor-openapi-token": "OAUTH TOKEN"

				// B. URI Related Options
				'x-vendor-openapi-uri': {
				    protocol: process.env.B2BIPROTOCOL || "https",
				    host: process.env.B2BIHOST || "10.129.59.152",
				    port: process.env.B2BIPORT || "443",
				    basePath: process.env.B2BIBASEPATH || "/api/v14"
				}
			}, 
			"st-admin": {
				// A. Authentication Related Options
				// Optional. This must be explicitly stated if you have several securityDefinitions in the corresponding swagger.
				// Possible values are - "basic", "apiKey" "oauth2"
				"x-vendor-openapi-authtype": "basic",

				// The plugin can automatically switch between auth types.
				// Make sure you set only one of the following
				// 1. For "basic" authentication uncomment and provide values for:
				"x-vendor-openapi-username": "sandeep",
				"x-vendor-openapi-password": "sandeep",

				// 2. For "apiKey" authentication uncomment and provide values for:
				// "x-vendor-openapi-key": "API KEY"

				// 3. For "oauth2" authentication uncomment and provide values for:
				// "x-vendor-openapi-token": "OAUTH TOKEN"

				// B. URI Related Options
				'x-vendor-openapi-uri': {
				    protocol: process.env.B2BIPROTOCOL || "https",
				    host: process.env.B2BIHOST || "10.129.59.152",
				    port: process.env.B2BIPORT || "444",
				    basePath: process.env.B2BIBASEPATH || "/api/v1"
				}
			}
		}
	}
};
