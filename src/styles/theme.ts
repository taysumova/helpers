export const baseTheme = {
  fonts: {
    main: 'Aeonik Pro',
  },

  decorations: {
    borderRadius: '8px',
  },

  colors: {
    primary: '#b4f2ff',
    secondary: '#f0f2f3',
    success: '#4caf50',
    danger: '#f44336 ',
    grey: '#969696',

    bg: '#ffffff',
    font: '#181818',
    lightFont: '#777777',
    tagFont: '#1c1c1c',
  },

  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },

  // in px
  sizes: {
    header: { height: 110 },
    gutter: { mobile: 20 },
    container: { width: 375 },
    footer: { height: 128 },
    modal: { width: 650 },
  },

  // in ms
  durations: {
    ms300: 300,
  },

  // z-index
  order: {
    header: 50,
    modal: 100,
  },
};

export const componentsTheme = {
  token: {
    colorPrimary: baseTheme.colors.primary,
  },
};
