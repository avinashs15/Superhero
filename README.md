# Superhero

Cucumber BDD Framework using Webdriver.io as automation engine

Tests are specified in features/superhero.feature in the form of Given, When and Then.

All the steps are in one js file now under step-definitions/steps.js

Page definitions and functions are designed using Page object model and is specified in features/pageobjects/*.js


To run the tests, Gitclone the current Branch

NPM Package install : npm install
Running the tests : npx wdio run .\wdio.conf.js

Check out Reports folder after the test execution
