import { newE2EPage } from '@stencil/core/testing';

it('item: basic', async () => {
  const page = await newE2EPage({
    url: '/src/components/item/test/basic?ionic:_testing=true'
  });

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});
