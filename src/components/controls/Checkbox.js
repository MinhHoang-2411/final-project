import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";

function Checkbox({ name, label, value, onChange }) {
  //   bien thanh e cua handleChange
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
}

export default Checkbox;
