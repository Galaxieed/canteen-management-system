import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from "prop-types";
import myTable from './my-table.module.css';

const headCellStyle = {
  color: "white", 
  fontWeight: 'bold',
  fontSize: 'medium',
  letterSpacing: '1px',
  fontFamily: 'inherit'
}
const cellStyle = {
  color: "white", 
  fontSize: 'medium',
  letterSpacing: '1px',
  fontFamily: 'inherit'
}

export default function MyTable(props) {
  
  return (
    <TableContainer component={Paper} 
      sx={{
        background: 'transparent', 
        border: '1px solid white', 
        borderRadius: '30px',
        padding: '10px',
        backdropFilter: "blur(5px)",
        maxHeight: "400px"
      }}>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.columns.map((column, index) => (

              <TableCell key={index} align={index > 0 ? `right` : undefined} 
              sx={headCellStyle}>
                {column}
              </TableCell>

            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {props.data.length > 0 && props.data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={!props.editable ? () => props.callback(row, index) : undefined}>
              <TableCell component="th" scope="row" sx={cellStyle}>
                {row.product}
              </TableCell>
              <TableCell align="right" sx={cellStyle}>{row.price}</TableCell>
              {props.editable && <TableCell align="right" sx={cellStyle}>{row.totalPrice}</TableCell>}
              <TableCell align="right" sx={cellStyle}>
                {props.editable ? 
                  (<input type="number" 
                    className={`${myTable.numberInput}`}
                    value={row.quantity} 
                      onChange={e => props.changeQty(e.target.value, index)} />) : row.quantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}

MyTable.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.any,
    editable: PropTypes.bool,
    callback: PropTypes.func,
    changeQty: PropTypes.func
}