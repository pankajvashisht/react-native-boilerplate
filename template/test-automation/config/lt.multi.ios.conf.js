const capabilities = require('./capabilities');

exports.config = {
  user: process.env.LT_USERNAME || "YOUR_USERNAME",
  key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
  logFile : './logDir/api.log',
    product : 'appAutomation',
    services: [
        ['lambdatest', {
            tunnel: false,
        }]
    ],

  updateJob: false,
  specs: ["../test/specs/ios/***.*.js"],
  exclude: [],

  maxInstances: 10,
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
      platformName: "ios",
      deviceName: capabilities.LT_PARALLEL_IOS_DEVICE_ONE_NAME,
      platformVersion: capabilities.LT_PARALLEL_IOS_DEVICE_ONE_OSVERSION,
      app: process.env.LT_APP_ID,
      appProfiling: true
    },
    {
      build: capabilities.BUILDNAME,
      isRealMobile: true,
      platformName: "ios",
      deviceName: capabilities.LT_PARALLEL_IOS_DEVICE_TWO_NAME,
      platformVersion: capabilities.LT_PARALLEL_IOS_DEVICE_TWO_OSVERSION,
      app: process.env.LT_APP_ID,
      appProfiling: true
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: process.env.LT_GRID_URL||"mobile-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};

exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});