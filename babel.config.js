module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@navigator': './src/navigator',
          '@rbac': './src/rbac',
          '@adapters': './src/adapters',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@routes': './src/routes',
          '@guards': './src/guards',
          '@utils': './src/utils',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
