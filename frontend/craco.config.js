const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
      '@svg': path.resolve(__dirname, 'src/assets/svg/'),
      '@img': path.resolve(__dirname, 'src/assets/images/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@shared': path.resolve(__dirname, 'src/shared/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@locales': path.resolve(__dirname, 'src/locales/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@theme': path.resolve(__dirname, 'src/theme/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@layout': path.resolve(__dirname, 'src/layout/')
    }
  }
};
