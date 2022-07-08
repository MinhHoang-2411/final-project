import { TextField, Box } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
function DatePicker({ name, label, value, onChange }) {
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <Box mt={2}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label={label}
          inputFormat="MM/dd/yyyy"
          name={name}
          value={value}
          onChange={(date) => onChange(convertToDefEventPara(name, date))}
          renderInput={(params) => (
            <TextField sx={{ width: "80%" }} {...params} />
          )}
        />
      </LocalizationProvider>
    </Box>
  );
}

export default DatePicker;
