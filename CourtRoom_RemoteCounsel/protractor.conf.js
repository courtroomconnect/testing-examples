const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 300000,
    suites: {
        default: './e2e/test-suites/*.e2e-spec.ts',
    },
    capabilities: {
        "browserName": "chrome",
        chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
          }
    },
    params: {
        user1: {
            email: "sharddha@fullstacklabs.co",
            password: "changemeplease123&"
        }
    },
    directConnect: true,
    baseUrl: 'https://staging.remotecounsel.com/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000,
        print: function () {
        }
    },
    onPrepare() {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: false
            }
        }));
    }
};
