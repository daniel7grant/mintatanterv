module.exports = {
	"verbose": true,
	"transform": {
		".*": "<rootDir>/node_modules/babel-jest"
	},
	"moduleNameMapper": {
		"\\.(css|scss|styl)$": "<rootDir>/jest.null.js"
	},
	"setupFiles": ["<rootDir>/jest.setup.js"],
	"collectCoverage": true,
	"coverageDirectory": "coverage",
	"coverageReporters": ["html", "text"]
}
