import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';


export const AppLayout: React.FC = (props) => {
  const {children} = props

  const mdTheme = createTheme();

  return (
    <ThemeProvider theme={mdTheme}>
      <Box height={'100%'} sx={{ display: 'flex' }}>
        <CssBaseline />
        {children}
      </Box>
    </ThemeProvider>
  );
}