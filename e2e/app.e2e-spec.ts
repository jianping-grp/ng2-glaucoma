import { NgGlauPage } from './app.po';

describe('ng-glau App', () => {
  let page: NgGlauPage;

  beforeEach(() => {
    page = new NgGlauPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
