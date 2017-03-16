import { EmetraPage } from './app.po';

describe('emetra App', () => {
  let page: EmetraPage;

  beforeEach(() => {
    page = new EmetraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
