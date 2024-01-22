import {withSentryConfig} from '@sentry/nextjs';
// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */

/** @type {import("next").NextConfig} */

const config = {
  reactStrictMode: true,
  /* If trying out the experimental appDir, comment the i18n config out
   * @see https://github.com/vercel/next.js/issues/41980 */
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
  experimental:{
    instrumentationHook : true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.fbsbx.com',
      },
      {
        protocol: 'https',
        hostname: 'pistache-production.s3.us-east-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'pistache-production*.s3.*.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: '**.giphy.com',
      },
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: '**.pistachebyforbe.com'
      },
      {
        protocol: 'https',
        hostname: '**.prograpp.com.mx'
      },
      {
        protocol: 'https',
        hostname: '**.prograpp.dev',
      },
      {
        protocol: 'https',
        hostname: 'prograpp-platsage.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'prograpp-platsage*.s3.*.amazonaws.com',
      },
      {
        protocol: 'http',
        hostname: 'placekitten.com',
      }
      ,
      {
        protocol: 'http',
        hostname: '**.local'
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
      ,
      {
        protocol: 'https',
        hostname: 'pistache-inbox-local*.s3.*.amazonaws.com',

      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com'
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}
export default withSentryConfig(config, {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

// Suppresses source map uploading logs during build
  silent: true,

  org: "prograpp",
  project: "platsage",
}, {
// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

// Transpiles SDK to be compatible with IE11 (increases bundle size)
  transpileClientSDK: true,

// Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
  tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
  hideSourceMaps: false,

// Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
});