import Grid from '@mui/material/Grid';
import SideMenu from './components/SideMenu';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Grid container component='main' className='app-container'>
        <SideMenu />

        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          xl={11}
          sx={{ padding: { xs: '4rem 1.3rem', md: '2rem' } }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
