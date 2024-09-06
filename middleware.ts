import createMiddleware from 'next-intl/middleware';
import {routing} from './src/I18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(en|pl)/:path*']
};
