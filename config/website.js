const tailwind = require('../tailwind')

const backgroundColor = '#941BD5'

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Captain Dev - Deviens un leader technique', // Navigation and Site Title
  siteTitleAlt: 'Captain Dev', // Alternative Site title for SEO
  siteTitleShort: 'Captain Dev', // short_name for manifest
  siteHeadline: "Captain Dev vous accompagne dans l'amélioration des performances de votre site web", // Headline for schema.org JSONLD
  siteUrl: 'https://www.captaindev.io', // Domain of your site. No trailing slash!
  siteLanguage: 'fr', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',
  author: 'Emmanuel ERNEST', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@captaindev404', // Twitter Username
  ogSiteName: 'Captain-Dev-415521452355443', // Facebook Site Name
  ogLanguage: 'fr_FR', // Facebook Language
  googleAnalyticsID: 'UA-120679952-1',

  // Manifest and Progress color
  themeColor: tailwind.colors['purple-dark'],
  backgroundColor: backgroundColor,
}
