import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from "@mui/material";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Header() {
  return (
    <AppBar position="static" sx={{ background: "#fff" }}>
      <Toolbar>
        <Grid
          container
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item>
            <InputBase
              sx={{ "&:hover": { background: "#ccc" } }}
              placeholder="Search here"
              startAdornment={
                <SearchOutlinedIcon
                  size="small"
                  sx={{ mr: 2, opacity: "0.8" }}
                />
              }
            />
          </Grid>

          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="notify">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={1} color="notify">
                <ChatBubbleOutlineOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
