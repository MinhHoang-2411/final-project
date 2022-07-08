import { Grid, Box } from "@mui/material";
import { useEffect } from "react";
import { useForm, Form } from "../../components/useForm";
import { Controls } from "../../components/controls";
import * as EmployeeService from "../../services/EmployeeServices";
const initValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentID: "",
  hireDate: new Date(),
  isPermanent: false,
};
const genderItems = [
  {
    id: "male",
    title: "Male",
  },
  {
    id: "female",
    title: "Female",
  },
  {
    id: "others",
    title: "Others",
  },
];

function EmployeeForm({ addOrEdit, recordForEdit }) {
  const { values, setValues, handleInputChange, errors, setErrors, resetForm } =
    useForm(initValues, true, validate);

  function validate(fieldValues = values) {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required";
    if ("email" in fieldValues)
      temp.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        fieldValues.email
      )
        ? ""
        : "Email is not valid";
    if ("mobile" in fieldValues)
      temp.mobile = /^([+]\d{2})?\d{10}$/.test(fieldValues.mobile)
        ? ""
        : "10 numbers required";
    if ("departmentID" in fieldValues)
      temp.departmentID =
        fieldValues.departmentID.length !== 0 ? "" : "This field is required";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null) {
      setValues({ ...recordForEdit });
    }
  }, [recordForEdit]);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              name="fullName"
              label="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />
            <Controls.Input
              name="email"
              label="Email"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <Controls.Input
              name="mobile"
              label="Mobile"
              value={values.mobile}
              onChange={handleInputChange}
              error={errors.mobile}
            />
            <Controls.Input
              name="city"
              label="City"
              value={values.city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroup
              label="Gender"
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
              items={genderItems}
            />

            <Box>
              <Controls.Select
                name="departmentID"
                label="Department"
                value={values.departmentID}
                onChange={handleInputChange}
                options={EmployeeService.getDepartmentCollection()}
                error={errors.departmentID}
              />
            </Box>
            <Controls.DatePicker
              name="hireDate"
              label="Hire Date"
              value={values.hireDate}
              onChange={handleInputChange}
            />
            <Controls.Checkbox
              name="isPermanent"
              label="Permanent Employee"
              value={values.isPermanent}
              onChange={handleInputChange}
            />
            <div>
              <Controls.Button text="Submit" type="submit" />
              <Controls.Button
                text="Reset"
                color="notify"
                onClick={resetForm}
              />
            </div>
          </Grid>
        </Grid>
      </Form>
    </>
  );
}

export default EmployeeForm;
