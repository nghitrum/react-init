module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: 'airbnb',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'comma-dangle': ['error', 'never'],
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx']
			}
		],
		'react/jsx-indent': ['error', 0],
		'react/jsx-indent-props': ['error', 0],
		'react/jsx-no-target-blank': 0
	}
};
