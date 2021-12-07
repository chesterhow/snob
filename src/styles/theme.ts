export interface Theme {
  colors: {
    primary: string;
    black: string;
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
}
const theme: Theme = {
  colors: {
    primary: '#fff',
    black: '#000',
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
};

export default theme;
