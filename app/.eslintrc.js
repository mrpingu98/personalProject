module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        // '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        // "react/jsx-key": ["warn", { "checkFragmentShorthand": true, "checkKeyMustBeforeSpread": true }],
        // "jsx-a11y/img-redundant-alt": "warn",
        // "prefer-const": ["warn", {
        //   "destructuring": "all",
        //   "ignoreReadBeforeAssign": false
        // }]

        //setting the severity of unused vars to be a warning, not an error, so that app can be built 
    }
}
