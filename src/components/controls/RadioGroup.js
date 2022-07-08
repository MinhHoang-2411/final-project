import {
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function RadioGroup({ name, label, value, onChange, items }) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            label={item.title}
            control={<Radio />}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}

export default RadioGroup;
