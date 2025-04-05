import './App.css'
import { Box, Grid } from '@mui/material';
import CustomAppBar from './components/AppBar';
import AccountTable from './components/AccountTable';
import BalancePieChart from './components/BalancePieChart';

function App() {
  const data = [
    { name: 'Account 1', type: 'Savings', bank: 'Bank A', currency: 'USD', balance: 1000, balanceRub: 75000 },
    { name: 'Account 2', type: 'Checking', bank: 'Bank B', currency: 'EUR', balance: 500, balanceRub: 45000 },
    { name: 'Account 3', type: 'Savings', bank: 'Bank C', currency: 'RUB', balance: 30000, balanceRub: 30000 },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <CustomAppBar />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AccountTable data={data} />
        </Grid>
        <Grid item xs={12}>
          <BalancePieChart data={data} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default App;
