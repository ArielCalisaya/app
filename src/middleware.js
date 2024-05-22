import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const headers = { 'accept-language': 'en-US,en;q=0.5' };
const languages = new Negotiator({ headers }).languages();
const locales = ['en', 'es'];
const defaultLocale = 'en';

const middleware = () => match(languages, locales, defaultLocale);

export default middleware;
