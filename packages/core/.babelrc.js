module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "optional-require",
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        root: ['./src'],
        alias: {
          "underscore": "lodash",
          "test": "./test"
        },
      },
    ],
  ],
  "env": {
    "production": {
      "plugins": ["transform-remove-console"]
    }
  }
};
