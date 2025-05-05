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
     "../test/specs/android/***.*.js"
   
  ],
  exclude: [
   
  ],

  commonCapabilities: {
    build: "The Draft",
    isRealMobile: true,
    network: true,
    devicelog: true,
    visual: true,
  },

  capabilities: [
    {
      build: capabilities.BUILDNAME,
      isRealMobile: true,
      platformName: "Android",
      deviceName: capabilities.LT_ANDROID_SINGLE_DEVICE_NAME,
      platformVersion: capabilities.LT_ANDROID_SINGLE_OSVERSION,
      app: process.env.LT_APP_ID,
      appProfiling: true
    }
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "https://mobile-hub.lambdatest.com",
  waitforTimeout: 18000,
  connectionRetryTimeout: 3000000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: process.env.LT_GRID_URL,
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
