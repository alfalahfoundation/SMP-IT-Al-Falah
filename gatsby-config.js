require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Gatsby Firebase Authentication`,
  },
  plugins: [
    `gatsby-plugin-portal`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {

      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    // {
    //   resolve: `gatsby-source-firebase-collections`,
    //   options: {
    //     // credential or appConfig
    //     credential: require(`./credentials.json`),
    //     appConfig: {
    //       apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    //       authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    //       databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
    //       projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    //       storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    //       messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
    //       appID: process.env.GATSBY_FIREBASE_APP_ID,
    //     },
    //     types: [
    //       {
    //         type: `Book`,
    //         collection: `books`,
    //         map: (doc) => ({
    //           title: doc.title,
    //           isbn: doc.isbn,
    //           author___NODE: doc.author.id,
    //         }),
    //       },
    //       {
    //         type: `Author`,
    //         collection: `authors`,
    //         map: (doc) => ({
    //           name: doc.name,
    //           country: doc.country,
    //           books___NODE: doc.books.map((book) => book.id),
    //         }),
    //       },
    //     ],
    //   },
    // },
    `gatsby-plugin-sass`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, 
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['/video-react.css', ], 
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, 
        },
      },
    },
     'gatsby-plugin-optimize-svgs',
    {
      resolve: '@fika/gatsby-source-cockpit',
      options: {
        token: `${process.env.COCKPIT_TOKEN}`,
        baseUrl:
          'https://muhzulzidan.my.id', 
        locales: ['id'], 
        collections: ['video'], 
        singletons: [], 
        aliases: {
          collection: {
            A_COLLECTION_NAME: 'video',

          },
          singleton: {
            A_SINGLETON_NAME: 'privacy',

          }
        }, 
        brokenImageReplacement: 'https://www.google.co.id/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png', 
    },
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alfalah`,
        short_name: `Alfalah`,
        start_url: `/`,
        background_color: `#EAE8DC`,
        theme_color: `#BE2623`,
        display: `standalone`,
        icon: `static/logo.png`, 
        cache_busting_mode: 'none',
        crossOrigin: `use-credentials`,
      },
    }
    // {
    //   resolve: "gatsby-plugin-firebase",
    //   options: {
    //     credentials: {
    //       apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    //       authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    //       databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
    //       projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    //       storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    //       messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
    //       appId: process.env.GATSBY_FIREBASE_APP_ID,
    //     }
    //   }
    // }
  ]
}
