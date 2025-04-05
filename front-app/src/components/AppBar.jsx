import { AppBar, Toolbar, Typography } from '@mui/material';

function CustomAppBar() {
  return (
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Account Table
            </Typography>
        </Toolbar>
        </AppBar>
  );
}

export default CustomAppBar;
