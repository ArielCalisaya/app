/* eslint-disable consistent-return */
import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

const middleware = async (req) => {
  if (
    req.nextUrl.pathname.startsWith('/_next')
    || req.nextUrl.pathname.includes('/api/')
    || PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.locale === 'default') {
    return NextResponse.redirect(
      new URL(`/en${req.nextUrl.pathname}`, req.url),
    );
  }
};

export default middleware;
