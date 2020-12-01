import { Selector, ClientFunction } from 'testcafe';

const getLocation = ClientFunction(() => document.location.href);

fixture `Weather fixture`
  .page `https://igoreskin.github.io/react-weather-widget/`;
  test('user can click the button', async t => {
    await t.wait(2000)
    await t.click(Selector('.zip-container')).wait(2000)
    await t.typeText(Selector('.zip-container'), '90210').wait(2000)
    await t.click(Selector('.update'))
    
    const title = await Selector('.header');
    const titleText = await title.innerText;
    await t.wait(3000)
    await t.expect(titleText).eql('Beverly Hills')
  })