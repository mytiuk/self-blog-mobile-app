export const COLORS = {
  primary: '#001F2D',
  secondary: '#4D626C',
  white: '#FFF',
  gray: '#74858C',
  blue: '#4CA6E9',
  red: '#EC5757'
}

export const FONTS = {
  light:  'OpenSans-Light',
  regular: 'OpenSans-Regular',
  medium: 'OpenSans-Medium',
  bold: 'OpenSans-Bold'
}

export const SIZES = {
  small: 8,
  base: 12,
  font: 14,
  medium: 16,
  large: 20,
  extraLarge: 24
}

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 7.11,
    elevation: 14,
  },
  
  extraDark: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.41,
    shadowRadius: 4.62,
    elevation: 14,
  },
};