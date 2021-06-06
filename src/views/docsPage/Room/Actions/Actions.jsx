import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// import s from "./Actions.module.css"
import { GetApp, Visibility } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import View from "./Acts/View"
import { jsPDF } from "jspdf"
import logoPNG from "./../../../../assets/img/logo.png"
import { sbColors } from 'src/common/config';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        boxShadow: "0 12px 48px 0 rgb(14 40 135 / 25%)"
    },
    container: {
        maxHeight: 440,
    },
    noDoc: {
        fontSize: '1.2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.875rem'
        }
    },
    tableHead: {
        backgroundColor: sbColors.actionTable.header,
        fontWeight: "bold", textTransform: "capitalize",
    },
    pagInput: {
        fontSize: '1.5rem'
    },
    statusButton: {
        padding: "3px 15px",
        borderRadius: "30px",
        width: "150px",
        height: "30px",
        display: "inline-block",
        color: "#fff",
        textAlign: "center"
    }
}));

function Actions(props) {

    const columns = [
        { id: "id", label: 'ID', minWidth: 50, align: 'left' },
        { id: "name", label: 'Görnüşi', minWidth: 160 , maxWidth:180},
        {
            id: "date",
            label: 'Senesi',
            minWidth: 130,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: "status",
            label: 'Ýagdaýy',
            minWidth: 120,
            align: 'center',
            format: (value) => {
                const changing = (text, color) => {
                    return (
                        <span style={
                            {
                                backgroundColor: color,

                            }
                        } className={classes.statusButton}>{text}</span>
                    )
                }
                switch (value) {
                    case 1:
                        return (
                            changing('Kabul edildi', '#00ff00')
                        )
                    case 0:
                        return (
                            changing('Goybolsun', '#ff0000')
                        )
                    case 2:
                        return (
                            changing('Garasylyar', 'orange')
                        )
                    case 3:
                        return (
                            changing('Tamamlandy', '#0000ff')
                        )
                    default: return (
                        changing('Garasylyar', 'orange')
                    )
                }
            }
        },
        {
            id: 'orderId', minWidth: 200, label: 'Amal', align: 'center', format: (value) => <div>
                <Button variant='contained' onClick={() => { handleClickOpen(value) }}><Visibility /></Button>
                <span style={{ padding: '10px' }}></span>
                <Button variant='contained' onClick={() => { downloadAct(value) }}><GetApp /></Button>
            </div>
        }
    ];
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const [open, setOpen] = React.useState(false);
    const viewData = React.useRef(0)

    const handleClickOpen = (value) => {
        viewData.current = value - 1
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // const size = Object.keys(props.data[0]).length

    const setColumns = useCallback((data) => {
        // const size = Object.keys(props.data[0]).length - 2
        // // console.log('set Columns')
        // if (size > columns.length) {
        //     for (var i = columns.length; i < size; i++) {


        //         const check = (label) => {
        //             if (label === 'percentage') return 'Göterim'
        //             if (label === 'amount') return 'Pul möçberi'
        //         }

        //         columns.push({ id: Object.keys(data[0])[i + 2], minWidth: 40, label: check(Object.keys(data[0])[i + 2]), align: 'center' })
        //     }

        // }
        // else if (size < columns.length) {

        //     for (var j = columns.length; i > size; j--) {

        //         columns.splice(-1, 1)

        //     }
        // }
        return columns
    }, [props.data])

    const downloadAct = async (value) => {
        viewData.current = value - 1
        pdfGenerate(props.data[viewData.current])

    }
    const pdfGenerate = (data) => {
        var doc = new jsPDF()
        doc.addImage(logoPNG, "PNG", 10, 10, 50, 10)
        doc.setFontSize(22);
        doc.setTextColor(0, 0, 0);
        doc.text(10, 40, 'Amal N:' + data.id);

        doc.setFontSize(16);
        doc.setTextColor(10, 10, 10);
        doc.text(10, 50, 'Amalyn gornusi: ' + data.name);
        doc.text(10, 60, 'Amalyn senesi: ' + data.fulldate);
        doc.text(10, 70, 'Jogapkar isgar: ' + 'Aman Amanow');
        doc.text(10, 80, 'Bizin bankymyzy saylap alanynyz ucin sag bolun:');
        doc.save(data.id + ".pdf");
    }


    return (
        <div>
            {props.data.length > 0 && <View open={open} handleClose={handleClose} data={props.data[viewData.current]} />}
            {/* ////////////////////////////////////////////////////////////////////// */}
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow >
                                {setColumns(props.data).map((column) => (
                                    <TableCell
                                        classes={{ root: classes.tableHead }}
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>

                        </TableHead>
                        <TableBody>


                            {props.data && props.data.length !== 0 ? props.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}

                                    </TableRow>
                                );
                            }) : ''}

                            {/* <TableRow>
                                <TableCell>

                                   
                                </TableCell>
                                </TableRow> */}
                        </TableBody>
                    </Table>
                </TableContainer>
                {props.data && props.data.length !== 0 ? <TablePagination
                    classes={{ input: classes.pagInput }}
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    labelRowsPerPage="Bir sahypadaky ýüzlenmeler:"
                    labelDisplayedRows={() => {
                        var from = props.data.length === 0 ? 0 : page * rowsPerPage + 1,
                            to = props.data.length !== -1 ? Math.min(props.data.length, (page + 1) * rowsPerPage) : (page + 1) * rowsPerPage,
                            count = props.data.length;
                        return "".concat(from, "-").concat(to, "/").concat(count !== -1 ? count : "...".concat(to));
                    }}
                    count={props.data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                /> : <div className={classes.noDoc} style={{ padding: '15px', }}>
                        {props.noDoc}
                    </div>}
            </Paper>

        </div >
    )
}

export default React.memo(Actions)