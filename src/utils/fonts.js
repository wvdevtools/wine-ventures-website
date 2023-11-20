import {
  Roboto_Condensed,
  Didact_Gothic,
  Libre_Baskerville,
  Inter,
  Arimo,
} from 'next/font/google';

export const roboto = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const didact = Didact_Gothic({
  weight: ['400'],
  subsets: ['latin'],
});

export const baskervville = Libre_Baskerville({
  weight: ['400'],
  subsets: ['latin'],
});

export const inter = Inter({
  weight: ['100', '200', '400'],
  subsets: ['latin'],
});

export const arimo = Arimo({
  weight: ['400'],
  subsets: ['latin'],
});
