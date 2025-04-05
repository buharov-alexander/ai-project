import './App.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import CustomAppBar from './components/AppBar';

function App() {

  const data = [
    { name: 'Account 1', type: 'Savings', bank: 'Bank A', currency: 'USD', balance: 1000, balanceRub: 75000 },
    { name: 'Account 2', type: 'Checking', bank: 'Bank B', currency: 'EUR', balance: 500, balanceRub: 45000 },
    { name: 'Account 3', type: 'Savings', bank: 'Bank C', currency: 'RUB', balance: 30000, balanceRub: 30000 },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell>Тип</TableCell>
              <TableCell>Банк</TableCell>
              <TableCell>Валюта</TableCell>
              <TableCell>Баланс</TableCell>
              <TableCell>Баланс в рублях</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.bank}</TableCell>
                <TableCell>{item.currency}</TableCell>
                <TableCell>{item.balance}</TableCell>
                <TableCell>{item.balanceRub}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default App;
