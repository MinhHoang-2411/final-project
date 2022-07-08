import { Paper, Stack, Card, Typography } from "@mui/material";

function PageHeader({ title, icon }) {
  return (
    <Paper elevation={0} square>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ p: 3 }}>
        <Card sx={{ p: 3, color: "#8d9579" }}>{icon}</Card>
        <Typography
          variant="h4"
          component="div"
          sx={{ pl: 2, color: "secondary.light", fontWeight: 600 }}
        >
          {title}
        </Typography>
      </Stack>
    </Paper>
  );
}

export default PageHeader;
