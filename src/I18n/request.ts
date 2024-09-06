import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale}) => {
  const messages = (await import(`../messages/${locale}.json`)).default;
  return {
    messages,
  };
});
