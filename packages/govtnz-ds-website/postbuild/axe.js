const { AxePuppeteer } = require('axe-puppeteer');
const puppeteer = require('puppeteer');
const { Pretty } = require('pretty3');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.setBypassCSP(true);
  await page.goto('http://localhost:9000/', { waitUntil: 'networkidle0' });

  const results = await new AxePuppeteer(page).analyze();
  console.log(Array.isArray(results));
  const { violations } = results;
  const seriousViolations = violations.filter(
    (violation) => violation.impact === 'serious'
  );
  const otherViolations = violations.filter(
    (violation) => violation.impact !== 'serious'
  );

  await page.close();
  await browser.close();

  if (seriousViolations.length === 0) {
    process.exit(0);
  }

  console.log(Pretty.print(seriousViolations));

  console.log(`Serious violations: ${seriousViolations.length}`);
  console.log(`Other potential violations: ${otherViolations.length}`);

  process.exit(1);
})();
