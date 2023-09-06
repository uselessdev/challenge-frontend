export const theme = {
  sizes: {
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    container: '1433px',
  },

  screens: {
    tablet: '768px',
    desktop: '992px',
    largeDesktop: '1216px',
    ultraLargeDesktop: '1408px',
  },

  colors: {
    green: '#45d0c1',
    smoke: '#f1f7fc',
    gray: '#dee1e6',
    carbon: '#406a76',
  },

  rounded: {
    default: '50px',
  },

  font: {
    md: '16px',
  },
} as const

export type BaseTheme = typeof theme
