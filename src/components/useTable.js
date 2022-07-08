import { useState } from "react";
import {
  Table,
  TableCell,
  TableHead as MuiTableHead,
  TableRow,
  TablePagination as MuiTablePagination,
} from "@mui/material";

function useTable(records, headCells, filterFn) {
  const pages = [5, 10, 15];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

  // Container
  const TableContainer = ({ children }) => (
    <Table sx={{ mt: 3 }}>{children}</Table>
  );

  //Head
  const TableHead = () => {
    return (
      <MuiTableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              sx={{
                fontWeight: "600",
                backgroundColor: "background.default",
                color: "secondary.main",
              }}
              key={headCell.id}
            >
              {headCell.label}
            </TableCell>
          ))}
        </TableRow>
      </MuiTableHead>
    );
  };

  //Pagination
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    //   newPage la chi muc cua trang tinh tu 0
  };
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(~~event.target.value);
    setPage(0);
  };
  const TablePagination = () => (
    <MuiTablePagination
      component="div"
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={pages} //nhan vao 1 mang number(moi number la 1 option)
      count={records.length}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleRowsPerPageChange}
    />
  );
  const recordsAfterPaging = () => {
    return filterFn
      .fn(records)
      .slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };
  return {
    TableContainer,
    TableHead,
    TablePagination,
    recordsAfterPaging,
  };
}

export default useTable;
