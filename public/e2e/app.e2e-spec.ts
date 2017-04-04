import { VolumPage } from './app.po';

describe('volum App', () => {
  let page: VolumPage;

  beforeEach(() => {
    page = new VolumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
