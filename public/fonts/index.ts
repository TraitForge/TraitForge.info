import localFont from 'next/font/local';

export const bebasFont = localFont({
  src: [{ path: './bebas/BebasNeue-Regular.ttf', weight: '400', style: 'normal' }],
  variable: '--font-bebas',
});

export const electroliceFont = localFont({
  src: [{ path: './electrolize/Electrolize-Regular.ttf', weight: '400', style: 'normal' }],
  variable: '--font-electrolize',
});

export const racesportFont = localFont({
  src: [{ path: './racesport/Race Sport.ttf', weight: '400', style: 'normal' }],
  variable: '--font-racesport',
});

export const monsterratFont = localFont({
  src: [{ path: './monsterrat/Monsterrat font.ttf', weight: '400', style: 'normal' }],
  variable: '--font-monsterrat',
});