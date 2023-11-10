import { createTheme } from '@mui/material/styles';


export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ffa500',
        contrastText: '#481a00'
      },
      secondary: {
        main: '#ffeb85'
      },
      info: {
        main: '#ffc71b'
      }, 
    },
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
      },
  
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontSize: 30,
            fontWeight: 600,
            color: '#481a00'
          },
          h2: {
            fontSize: 20,
            fontWeight: 400,
            color: '#481a00'
          },
          subtitle1: {
            fontSize: 18,
            fontWeight: 600, 
            color: '#481a00'
          }
        }
      },
  
  
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          size: 'large',
          color: 'info'
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            boxShadow: 'none',
            color: 'white',
            borderRadius: 10,
            ":hover": {
              backgroundColor: '#e27c00',
              transition: 'all 0.3s ease-in-out'
            }
          }
        }
      },  
  
      MuiCard: {
        defaultProps: {
          elevation: 0
        },
        styleOverrides: {
          root: {
            boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
            borderRadius: '10px',
            ':hover': {
              tranasition: 'all 0.2s ease-out',
              boxShadow: '0px 4px 8px rgba(38, 38, 38, 0.2)',
            }
          }
        }
      }
      
    }
  });