import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CustomAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Finance Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Accounts
        </Button>
        <Button color="inherit" component={Link} to="/chart">
          Chart
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
