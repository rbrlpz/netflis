import { NetflisPage } from './app.po';

describe('netflis App', () => {
  let page: NetflisPage;

  beforeEach(() => {
    page = new NetflisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
