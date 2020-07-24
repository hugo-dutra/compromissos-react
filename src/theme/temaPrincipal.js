import { createMuiTheme } from '@material-ui/core/styles';

const temaPrincipal = createMuiTheme({
  palette: {
    primary: {
      light: '#B9DFE4',
      main: '#3f50b5',
      dark: 'rgb(65, 61, 61)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },

  },
});

export default temaPrincipal;