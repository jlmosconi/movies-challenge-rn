module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@adapters': './src/adapters',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
