const path = require("path");
const allowedImageWordPressDomain = new URL(process.env.NEXT_PUBLIC_WORDPRESS_URL).hostname;

module.exports = {
  webpack: (config) => {
    config.experiments = { asyncWebAssembly: true, layers: true };
    return config;
  },
  i18n: {
    locales: ['ua'],
    defaultLocale: 'ua',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',         // Протокол (https или http)
        hostname: 'luxtexcopi.lux-texcv.com.ua',   // Домен, с которого разрешены изображения
        port: '',                  // Порт, если требуется (оставьте пустым для стандартного)
        pathname: '/**',           // Шаблон пути, где ** означает все подкаталоги
      },
      // Добавьте дополнительные паттерны для других доменов, если нужно
    ],
  },
};
