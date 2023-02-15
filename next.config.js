/* eslint-disable import/order */
/* eslint-disable no-param-reassign */
/* eslint-disable global-require */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const redirectsList = require('./public/redirects.json');
const redirectsGeneratedList = require('./public/redirects-from-api.json');
const nextTranslate = require('next-translate');

const externalDevDomain = process.env.VERCEL_ENV !== 'production' ? 'http://localhost:9999' : '';
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Content-Security-Policy',
    value: `frame-ancestors 'self' ${externalDevDomain}`,
  },
];

const removeImports = require('next-remove-imports')();

module.exports = removeImports(nextTranslate(withBundleAnalyzer({
  // rest of config here
  // i18n,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // {
      //   source: '/interactive-exercises',
      //   destination: '/interactive-exercise',
      //   permanent: true,
      // },
      ...redirectsList,
      ...redirectsGeneratedList,
      {
        source: '/interactive-exercises/:slug',
        destination: '/interactive-exercise/:slug',
        permanent: true,
      },
      {
        source: '/interactive-exercise',
        destination: '/interactive-exercises',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/interactive-coding-tutorials',
        permanent: true,
      },
      {
        source: '/project',
        destination: '/interactive-coding-tutorials',
        permanent: true,
      },
      {
        source: '/lesson',
        destination: '/lessons',
        permanent: true,
      },
      {
        source: '/lessons/:slug',
        destination: '/lesson/:slug',
        permanent: true,
      },
      {
        source: '/interactive-exercise',
        destination: '/interactive-exercises',
        permanent: true,
      },
      {
        source: '/interactive-exercises/:slug',
        destination: '/interactive-exercise/:slug',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/interactive-coding-tutorial/INTERMEDIATE/:slug',
        destination: '/interactive-coding-tutorial/intermediate/:slug',
      },
      {
        source: '/interactive-coding-tutorial/BEGINNER/:slug',
        destination: '/interactive-coding-tutorial/beginner/:slug',
      },
      {
        source: '/interactive-coding-tutorial/EASY/:slug',
        destination: '/interactive-coding-tutorial/easy/:slug',
      },
      {
        source: '/interactive-coding-tutorial/HARD/:slug',
        destination: '/interactive-coding-tutorial/hard/:slug',
      },
      {
        source: '/profile',
        destination: '/profile/info',
      },
    ];
  },
  // swcMinify: false,
  reactStrictMode: true,
  trailingSlash: false,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/redirects-generator');
      require('./scripts/sitemap-generator');
      require('./scripts/syllabus');
    }
    if (process.env.VERCEL_ENV !== 'production') {
      config.optimization.minimizer = [];
      config.optimization.minimize = false; // Disable minification in development
    }
    return config;
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    BREATHECODE_HOST: process.env.BREATHECODE_HOST,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN, // Pass through env variables
    BC_ACADEMY_TOKEN: process.env.BC_ACADEMY_TOKEN,
    SYLLABUS: process.env.SYLLABUS,
    TAG_MANAGER_KEY: process.env.TAG_MANAGER_KEY,
    STONLY_ID: process.env.STONLY_ID,
    GOOGLE_GEO_KEY: process.env.GOOGLE_GEO_KEY,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    BREATHECODE_HOST: process.env.BREATHECODE_HOST,
    NEXT_PUBLIC_ID: process.env.NEXT_PUBLIC_ID,
    BC_ACADEMY_TOKEN: process.env.BC_ACADEMY_TOKEN,
    SYLLABUS: process.env.SYLLABUS,
    TAG_MANAGER_KEY: process.env.TAG_MANAGER_KEY,
    STONLY_ID: process.env.STONLY_ID,
    GOOGLE_GEO_KEY: process.env.GOOGLE_GEO_KEY,
    BREATHECODE_PAYMENT: process.env.BREATHECODE_PAYMENT,
  },
  images: {
    // Whitelist for image providers
    domains: [
      'assets.vercel.com',
      'github.com',
      'raw.githubusercontent.com',
      'breathecode.herokuapp.com',
      'avatars.githubusercontent.com',
      'storage.googleapis.com',
      'images.prismic.io',
      'images.unsplash.com',
    ],
    // formats: ['image/avif', 'image/webp'],
  },
  env: {
    BREATHECODE_HOST: process.env.BREATHECODE_HOST,
    BC_ACADEMY_TOKEN: process.env.BC_ACADEMY_TOKEN,
    SYLLABUS: process.env.SYLLABUS,
    TAG_MANAGER_KEY: process.env.TAG_MANAGER_KEY,
    STONLY_ID: process.env.STONLY_ID,
    GOOGLE_GEO_KEY: process.env.GOOGLE_GEO_KEY,
    BREATHECODE_PAYMENT: process.env.BREATHECODE_PAYMENT,
    VERCEL_ENV: process.env.VERCEL_ENV,
    LD_CLIENT_ID: process.env.LD_CLIENT_ID,
    PRISMIC_REF: process.env.PRISMIC_REF,
    PRISMIC_API: process.env.PRISMIC_API,
  },
})));
