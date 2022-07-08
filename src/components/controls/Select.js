import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";

function Select({ name, label, value, onChange, options, error = null }) {
  return (
    <FormControl
      variant="outlined"
      sx={{ width: "80%", mt: 2 }}
      {...(error && { error: true })}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect name={name} value={value} onChange={onChange} label={label}>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}

export default Select;
