import { AngularRxLabPage } from './app.po';

describe('angular-rx-lab App', () => {
  let page: AngularRxLabPage;

  beforeEach(() => {
    page = new AngularRxLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
