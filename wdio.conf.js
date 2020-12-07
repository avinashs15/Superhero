const { ReportAggregator, HtmlReporter } = require('@rpii/wdio-html-reporter');
exports.config = {
    runner: 'local',
    specs: [
        './features/**/*.feature'

    ],

    exclude: [
    ],
    
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    
    }],
    
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec', [
        HtmlReporter,
        {
          debug: true,
          outputDir: './reports/html-reports/',
          filename: 'report.html',
          reportTitle: 'Superhero UI test Automation Report',
          //to show the report in a browser when done
          showInBrowser: true,
          //to turn on screenshots after every test
          useOnAfterCommandForScreenshot: true,
        },
      ],],
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
    
    onPrepare: function (capabilities) {
        const reportAggregator = new ReportAggregator({
          outputDir: './reports/html-reports/',
          filename: 'master-report.html',
          browserName: 'Chrome',
          reportTitle: 'Superhero.com e2e Tests',
        });
        reportAggregator.clean();
        global.reportAggregator = reportAggregator;
      },
    before: function (capabilities, specs) {
        browser.setWindowSize(1200,720);
        browser.maximizeWindow();
    },
    
  afterStep: function (test, context) {
    // }, { error , result , duration , passed , retries  }) {
    // if (error) {
    browser.saveScreenshot('./Screenshots/Screenshot' + Date.now() + '.png');
    //}
  },
  onComplete: function (exitCode, config, capabilities, results) {
    (async () => {
      await global.reportAggregator.createReport();
    })();
  },
}
