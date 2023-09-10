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
    white: '#ffffff',
    green: '#45d0c1',
    smoke: '#f1f7fc',
    gray: '#dee1e6',
    filter: '#9eaeb7',
    carbon: '#406a76',
    text: '#b2b4b9',
    heading: '#053b4b',
  },

  rounded: {
    default: '50px',
  },

  font: {
    sm: '12px',
    md: '16px',
  },
} as const

export type BaseTheme = typeof theme
