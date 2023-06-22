'use server';
import { headers } from 'next/headers';
import MobileDetect from 'mobile-detect';

export async function getIsMobileSSR() {
  const userAgent = headers().get('user-agent');

  if (!userAgent) return false;
  return Boolean(new MobileDetect(userAgent).mobile());
}
