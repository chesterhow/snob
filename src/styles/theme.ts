export interface Theme {
  colors: {
    primary: string;
    white: string;
    black: string;
    grey: string;
  };

  font: {
    serif: string;
    sansSerif: string;
  };

  fontScale: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };

  breakPoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}
const theme: Theme = {
  colors: {
    primary: '#f8f4f1',
    white: '#fff',
    black: '#000',
    grey: '#999',
  },

  font: {
    serif: '"Fraunces", serif',
    sansSerif: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`,
  },

  fontScale: {
    sm: '0.667rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2.25rem',
    xxl: '3.375rem',
    xxxl: '5.063rem',
  },

  breakPoints: {
    xs: '320px',
    sm: '425px',
    md: '768px',
    lg: '1024px',
  },
};

export default theme;
