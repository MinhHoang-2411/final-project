import { useState } from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { Search } from "@mui/icons-material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  InputAdornment,
  Paper,
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@mui/material";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import useTable from "../../components/useTable";
import * as EmployeeService from "../../services/EmployeeServices";
import { Controls } from "../../components/controls";
import Popup from "../../components/Popup";
import Notification from "../../components/Notification";
import ConfirmDialog from "../../components/ConfirmDialog";

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department" },
  { id: "actions", label: "Actions" },
];

function Employees() {
  const [records, setRecords] = useState(EmployeeService.getAllEmployees());
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const { TableContainer, TableHead, TablePagination, recordsAfterPaging } =
    useTable(records, headCells, filterFn);

  //Search Employee handle
  const handleSearch = (e) => {
    setFilterFn({
      fn: (items) => {
        if (e.target.value.trim() === "") {
          return items;
        } else {
          return items.filter((x) => {
            return (
              x.fullName.includes(e.target.value.trim()) ||
              x.fullName.toLowerCase().includes(e.target.value.trim()) ||
              x.fullName.toUpperCase().includes(e.target.value.trim())
            );
          });
        }
      },
    });
  };

  //Submit or edit handle
  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) {
      EmployeeService.insertEmployee(employee);
    } else {
      EmployeeService.updateEmployee(employee);
    }

    resetForm();
    setOpenPopup(false);
    setRecords(EmployeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: "Submitted successfully",
      type: "success",
    });
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const onDelete = (id) => {
    setConfirmDialog({ ...confirmDialog, isOpen: false });
    EmployeeService.deleteEmployee(id);
    setRecords(EmployeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: "Deleted successfully",
      type: "error",
    });
  };
  return (
    <>
      <PageHeader
        icon={<PeopleAltOutlinedIcon />}
        title="Employee Management App"
      />
      <Paper elevation={1} sx={{ m: 5, p: 3 }}>
        <Toolbar>
          <Controls.Input
            label="Search Employees"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            style={{ m: 0, p: 0, width: "70%" }}
            onChange={handleSearch}
          />
          <Controls.Button
            text="Add New"
            variant="outlined"
            startIcon={<AddOutlinedIcon />}
            style={{ p: "14px", position: "absolute", right: "10px" }}
            onClick={() => {
              setRecordForEdit(null);
              setOpenPopup(true);
            }}
          />
        </Toolbar>
        {/* Table  */}
        <TableContainer>
          <TableHead />
          <TableBody>
            {recordsAfterPaging().map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  "&:hover": { backgroundColor: "#fffbf2", cursor: "pointer" },
                }}
              >
                <TableCell sx={{ fontWeight: "300" }}>
                  {item.fullName}
                </TableCell>
                <TableCell sx={{ fontWeight: "300" }}>{item.email}</TableCell>
                <TableCell sx={{ fontWeight: "300" }}>{item.mobile}</TableCell>
                <TableCell sx={{ fontWeight: "300" }}>
                  {item.department}
                </TableCell>
                {/* Actions */}
                <TableCell>
                  <Stack spacing={2} direction="row">
                    {/* Update btn */}
                    <Controls.Button
                      style={{ minWidth: 0 }}
                      size="small"
                      onClick={() => {
                        openInPopup(item);
                      }}
                    >
                      <EditOutlinedIcon fontSize="small" />
                    </Controls.Button>
                    {/* Delete btn  */}
                    <Controls.Button
                      style={{ minWidth: 0 }}
                      size="small"
                      color="error"
                      onClick={() => {
                        setConfirmDialog({
                          isOpen: true,
                          title: "Are you sure to delete this record?",
                          subTitle: "You can't undo this operation",
                          onConfirm: () => {
                            onDelete(item.id);
                          },
                        });
                      }}
                    >
                      <DeleteOutlineOutlinedIcon fontSize="small" />
                    </Controls.Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
        <TablePagination />
        {/* end Table  */}
      </Paper>

      {/* Popup : Form */}
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Employee Form"
      >
        <EmployeeForm addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}

export default Employees;
