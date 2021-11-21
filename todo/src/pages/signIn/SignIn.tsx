import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from 'react-router-dom';
import { SignInForm } from 'types/auth';
import { useAppDispatch } from 'app/hooks';
import { signInAsync } from 'features/auth/authSlice'

const theme = createTheme();

export const SignIn: React.FC = () => {

  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm<SignInForm>();
  const onSubmit: SubmitHandler<SignInForm> = data => dispatch(signInAsync({ data }));

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              label="email"
              fullWidth
              autoComplete="email"
              autoFocus
              {...register('email', {
                required: true
              })}
            />
            <TextField
              margin="normal"
              label="password"
              fullWidth
              type="password"
              autoComplete="current-password"
              {...register('password', {
                required: true
              })}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='#'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/sign-up/'>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider >
  );
}

