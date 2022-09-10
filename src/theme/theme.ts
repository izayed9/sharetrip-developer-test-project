import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from '@mui/material/styles';
import colors from './colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const options: ThemeOptions = {
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
  },

  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 400,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontSize: '16px',
      fontWeight: 700,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 500,
      color: '#000000',
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      fontSize: `14px`,
      fontWeight: 500,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontSize: `14px`,
      fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          html: {
            fontFamily:
              '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
            WebkitFontSmoothing: 'auto',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: '14px',
          margin: '10px 0 0 0',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
          boxShadow: 'none',
          borderRadius: '4px',
          height: '36px',
          fontSize: '14px',
          fontWeight: 500,
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: '8px',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          marginBottom: '4px',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: colors.white,
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          marginTop: 0,
        },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        child: {
          backgroundColor: colors.white,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: '1px 2px',
          fontFamily: '"Bornomala", "Roboto", "Helvetica", "Arial", sans-serif',
          '&.Mui-selected': {
            color: colors.black,
            fontWeight: 'bold',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `"Bornomala", "Roboto", "sans-serif" !important`,
          fontWeight: 400,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {},
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {},
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
          padding: '0 16px 8px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: `"Bornomala", "Roboto", "sans-serif" !important`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${colors.borderColor}`,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 900,
  //     lg: 1270,
  //     xl: 1536,
  //   },
  // },
};

const theme = responsiveFontSizes(createTheme(options));

export default theme;
