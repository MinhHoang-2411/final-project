import { Button as MuiButton } from "@mui/material";

function Button({
  children,
  text,
  size,
  color,
  variant,
  onClick,
  style,
  ...others
}) {
  return (
    <MuiButton
      sx={style || { m: 0.5, textTransform: "none" }}
      size={size || "large"}
      variant={variant || "contained"}
      color={color || "primary"}
      onClick={onClick}
      {...others}
    >
      {text || children}
    </MuiButton>
  );
}

export default Button;
