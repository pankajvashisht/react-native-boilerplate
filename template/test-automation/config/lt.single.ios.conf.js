const capabilities = require('./capabilities');

exports.config = {
  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,
  logFile : './logDir/api.log',
    product : 'appAutomation',
    services: [
        ['lambdatest', {
            tunnel: false,
        }]
    ],

  updateJob: false,
  specs: [
    "../test/specs/android/***.*.js",
    ],
  exclude: [
    '../test/specs/ios/TC1.specs.js',

  ],

  maxInstances: 10,
  commonCapabilities: {
    build: "The Draft",
    isRealMobile: true,
    network: true,
    devicelog: true,
    visual: true
  },

  capabilities: [
    {
      build: capabilities.BUILDNAME,
      isRealMobile: true,
      platformName: "ios",
      deviceName: capabilities.LT_IOS_SINGLE_DEVICE_NAME,
      platformVersion: capabilities.LT_IOS_SINGLE_OSVERSION,
      app: process.env.LT_APP_ID,
      appProfiling: true,
      autoGrantPermissions: true,
      autoAcceptAlerts: false
    }
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 15000,
  connectionRetryTimeout: 600000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: process.env.LT_GRID_URL||"mobile-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 100000,
  },
};

exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
