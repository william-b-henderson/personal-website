import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'primary.lightGray.100',
      },
    },
  },
  components: {
    Text: {
      default: {
        fontSize: '12px',
        fontWeight: '500',
        fontFamily: 'Rubik',
      },
      variants: {
        section: {
          fontSize: '12px',
          fontWeight: '500',
        },
      },
    },
  },
  colors: {
    primary: {
      lightGray: {
        100: '#E1E5E7',
        200: '#AAB0B3',
        300: '#818689',
        400: '#606465',
        500: '#37393A',
      },
      lightBlue: {
        100: '#39BBFF',
        200: '#30A1DC',
        300: '#298BBE',
        400: '#22739D',
        500: '#1C5C7D',
      },
      meadow: {
        100: '#7fb069',
        200: '#638952',
        300: '#47623A',
        400: '#314428',
        500: '#1C2717',
      },
      sand: {
        100: '#e6aa68',
        200: '#C18D56',
        300: '#A07648',
        400: '#805E39',
        500: '#5D4429',
      },
      lake: {
        100: '#3f88c5',
        200: '#3574A7',
        300: '#2C608A',
        400: '#214969',
        500: '#152F44',
      },
    },
    secondary: {
      orange: '#ff6600',
      dark: '#2B2541',
      meadow: '#7fb069',
      sand: '#e6aa68',
      dorian: '#f5f5f5',
      gold: '#f49d37',
      lake: '#3f88c5',
    },
  },

  fonts: {
    rubik: 'Rubik, sans-serif',
  },
  textStyles: {
    defaults: {
      lineHeight: '100%',
      fontFamily: 'rubik',
    },
    h1: {
      fontSize: '36px',
      fontWeight: '700',
    },
    h2: {
      fontSize: '30px',
      fontWeight: '700',
    },
    h3: {
      fontSize: '24px',
      fontWeight: '700',
    },
    h4: {
      fontSize: '18px',
      fontWeight: '700',
    },
    h5: {
      fontSize: '16px',
      fontWeight: '700',
    },
    sub1: {
      fontSize: '22px',
      fontWeight: '500',
    },
    sub2: {
      fontSize: '20px',
      fontWeight: '500',
    },
    sub3: {
      fontSize: '16px',
      fontWeight: '500',
    },
    sub4: {
      fontSize: '14px',
      fontWeight: '500',
    },
    sub5: {
      fontSize: '12px',
      fontWeight: '500',
    },
    b1: {
      fontSize: '18px',
      fontWeight: '400',
    },
    b2: {
      fontSize: '16px',
      fontWeight: '400',
    },
    b3: {
      fontSize: '14px',
      fontWeight: '400',
    },
    b4: {
      fontSize: '12px',
      fontWeight: '400',
    },
    b5: {
      fontSize: '10px',
      fontWeight: '400',
    },
    sec1: {
      fontSize: '12px',
      fontWeight: '400',
    },
    sec2: {
      fontSize: '10px',
      fontWeight: '400',
    },
  },
});

export default theme;
