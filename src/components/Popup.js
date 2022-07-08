import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Controls } from "./controls";

function Popup({ children, title, openPopup, setOpenPopup }) {
  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      sx={{ "&	.MuiDialog-paper": { position: "absolute", top: "40px", p: 2 } }}
    >
      <DialogTitle>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>{title}</div>
          <Controls.Button
            color="error"
            size="small"
            onClick={() => {
              setOpenPopup(false);
            }}
            style={{ minWidth: 0 }}
          >
            <CloseOutlinedIcon />
          </Controls.Button>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
