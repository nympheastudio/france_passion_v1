module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        extensions: [
          '.js',
        ],
        alias: {
          '@components': './src/components',
          '@containers': './src/containers',
          '@store': './src/store',
          '@styles': './src/styles',
          '@actions': './src/actions',
          '@services': './src/services',
          '@app': './',
        },
      }],
      "react-native-reanimated/plugin",
    ],
  };
};
