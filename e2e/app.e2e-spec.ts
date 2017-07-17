import { YourDailyQuotesPage } from './app.po';

describe('your-daily-quotes App', () => {
  let page: YourDailyQuotesPage;

  beforeEach(() => {
    page = new YourDailyQuotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
