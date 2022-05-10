const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.google.com');

driver.findElement(By.name('q')).sendKeys('webdriver');

driver.findElement(By.name('btnK')).click();