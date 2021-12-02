import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export const MainLayout: React.FC = (props) => {
  const { children } = props

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar/>
      {children}
    </Box>
  )
}