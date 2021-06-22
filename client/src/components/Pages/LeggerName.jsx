import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { MainBody, CustomTableRow, CustomTableCell, CustomButton, DisplayFlex, CustomField } from '../commonComponents'
import { columns, rows } from '../../utils/constants';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    root: {
      width: '75%',
      height: "95%"

    },
    container: {
      maxHeight: 440,
    },
  });


export const LeggerName = ({}) => {
    const classes = useStyles();
    const routeHook = useHistory();
    const [open, setOpen] = useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const changeRoute = (route) => {
        routeHook.push(route);
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
    setOpen(false);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    return (
        <MainBody>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <CustomTableRow>
                        {columns.map((column) => (
                            <CustomTableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </CustomTableCell>
                        ))}
                        </CustomTableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        return (
                            <CustomTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                <CustomTableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                </CustomTableCell>
                                );
                            })}
                            </CustomTableRow>
                        );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
                </Paper>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Enter Name of the Legger</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            This Name will be added in the column of Name field
                        </DialogContentText>
                        <CustomField
                            id="outlined-basic" 
                            label="Legger Name"
                            variant="outlined"                 
                            type="text"
                            placeholder="Legger Name"
                            name="email"
                            value={"this.state.email"}
                            onChange={(e) => {}}
                            required
                        />
                        </DialogContent>
                        <DialogActions>
                        <CustomButton onClick={handleClose}>
                            Cancel
                        </CustomButton>
                        <CustomButton onClick={handleClose}>
                            Add Name
                        </CustomButton>
                        </DialogActions>
                    </Dialog>
                <DisplayFlex>
                <CustomButton onClick={()=>handleClickOpen()}>Add Name</CustomButton>
                <CustomButton onClick={()=>changeRoute(`/dashboard`)}>Go Back</CustomButton>
                </DisplayFlex>
        </MainBody>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LeggerName)
