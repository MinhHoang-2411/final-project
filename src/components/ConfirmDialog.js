import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { Controls } from "./controls";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function ConfirmDialog({ confirmDialog, setConfirmDialog }) {
  return (
    <Dialog
      open={confirmDialog.isOpen}
      sx={{ "&	.MuiDialog-paper": { position: "absolute", top: "40px", p: 2 } }}
    >
      <DialogTitle sx={{ textAlign: "center" }}>
        <ErrorOutlineIcon sx={{ fontSize: "40px", color: "error.main" }} />
      </DialogTitle>
      <DialogContent>
        <Typography sx={{ textAlign: "center" }} variant="h6">
          {confirmDialog.title}
        </Typography>
        <Typography sx={{ textAlign: "center" }} variant="subtitle2">
          {confirmDialog.subTitle}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Stack direction="row" sx={{ justifyContent: "center", width: "100%" }}>
          <Controls.Button
            text="NO"
            size="small"
            onClick={() =>
              setConfirmDialog({ ...confirmDialog, isOpen: false })
            }
          />
          <Controls.Button
            text="YES"
            size="small"
            color="error"
            onClick={confirmDialog.onConfirm}
          />
        </Stack>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
