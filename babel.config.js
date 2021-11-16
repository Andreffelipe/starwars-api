module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript',
    "@babel/preset-flow"
  ],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties"],
    ['module-resolver', {
        alias: {
          "@controllers": "./src/controllers",
          "@models": "./src/models",
          "@services": "./src/services",
          "@interfaces": "./src/interfaces",
          "@repository": "./src/repository"
        }
      }
    ]
  ],
  ignore: ['**/*.spec.ts']
}
