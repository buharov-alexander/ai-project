import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function AccountTable({ data }) {
  return (
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
  );
}

export default AccountTable;
