import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <CustomAppBar />
        <Routes>
          <Route path="/" element={<AccountTable data={data} />} />
          <Route path="/chart" element={<BalancePieChart data={data} />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
