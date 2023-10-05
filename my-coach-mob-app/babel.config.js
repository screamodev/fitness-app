module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module:react-native-dotenv',
      [
        'module-resolver',
        {
          alias: {
            app: './src/app',
            processes: './src/processes',
            screens: './src/screens',
            widgets: './src/widgets',
            features: './src/features',
            entities: './src/entities',
            shared: './src/shared',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
