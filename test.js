import { Selector, ClientFunction } from 'testcafe';

const getLocation = ClientFunction(() => document.location.href);

fixture `My first fixture`
  .page `https://wikipedia.org/`;
  test('users can serach', async t => {
    await t
    .click(Selector('#searchInput')).wait(2000)
    .typeText(Selector('#searchInput'), 'vikings').wait(2000)
    .click(Selector('button[type=submit')).wait(3000)
    .expect(getLocation()).contains('en.wikipedia.org/wiki/Vikings');
  });