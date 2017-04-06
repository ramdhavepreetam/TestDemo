import { AnglarSrcPage } from './app.po';

describe('anglar-src App', function() {
  let page: AnglarSrcPage;

  beforeEach(() => {
    page = new AnglarSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
