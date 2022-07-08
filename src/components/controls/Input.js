import { TextField } from "@mui/material";
function Input({
  name,
  value,
  onChange,
  label,
  error = null,
  style,
  ...others
}) {
  return (
    <TextField
      sx={style || { "&.MuiFormControl-root": { width: "80%", m: 1 } }}
      radiant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
      {...others}
    />
  );
}

export default Input;
