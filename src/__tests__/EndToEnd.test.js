import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let pager;
  beforeAll(async () => {
    jest.setTimeout(3000);
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox'
//        '--disable-setuid-sandbox'
      ]
    });
//    pager = await browser.newPage();
//    await pager.goto('http://localhost:3000/');
//    await pager.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
//    const extra = await pager.$('.eventDetails');
//    expect(extra).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
//    await pager.click('.details-btn');
//    const extra = await pager.$('.eventDetails');
//    expect(extra).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
//    await pager.click('.details-btn');
//    const extra = await pager.$('.eventDetails');
//    expect(extra).toBeNull();
  });

});
