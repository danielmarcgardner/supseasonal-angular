import { SupseasonalAngularPage } from './app.po';

describe('supseasonal-angular App', () => {
  let page: SupseasonalAngularPage;

  beforeEach(() => {
    page = new SupseasonalAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
