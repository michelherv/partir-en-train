import { PartirEnTrainPage } from './app.po';

describe('partir-en-train App', () => {
  let page: PartirEnTrainPage;

  beforeEach(() => {
    page = new PartirEnTrainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
