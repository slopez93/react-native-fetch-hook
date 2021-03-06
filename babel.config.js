module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~': './',
          '@Screens': './src/screens',
          '@Components': './src/components',
          '@Navigation': './src/navigation',
          '@Context': './src/context',
          '@Hooks': './src/hooks',
          '@Config': './src/config',
          '@Constants': './src/constants',
          '@Services': './src/services',
        },
      },
    ],
  ],
};
