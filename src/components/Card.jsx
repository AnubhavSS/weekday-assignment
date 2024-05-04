import React from "react";
import {
  Box,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
const Cards = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* Card top section */}
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        style={{ marginLeft: 20, padding: 4, marginTop: 50 }}
      >
        {" "}
        <Avatar style={{ paddingTop: 6 }} variant="rounded"></Avatar>
        <Stack gap={1}>
          <Typography variant="body2" color={"gray"}>
            Ema
          </Typography>
          <Typography variant="subtitle1">Software</Typography>
          <Typography variant="caption" display="block">
            BLR
          </Typography>
        </Stack>
      </Box>

      <Typography marginLeft={2} color={"gray"} fontSize={14}>
        Estimated Salary:
      </Typography>

{/* Job Description section */}
      <CardContent>
        <Typography variant="h6" component="div" fontWeight={600} fontSize={18}>
          About Company:
        </Typography>
        <Typography variant="h6" component="div" fontWeight={600} fontSize={15}>
          Job Description:
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          commodi incidunt, voluptatum fuga officia velit facilis dicta,
          consequuntur illum ratione alias. Provident blanditiis tempore ipsa
          ea, laboriosam doloremque harum distinctio?
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" size="small" style={{ marginLeft: 120 , textTransform:'capitalize' }}>
          View Job
        </Button>
      </CardActions>

{/* Bottom buttons */}
      <Button
        variant="contained"
        startIcon={<BoltIcon style={{ color: "yellow" }} />}
        style={{
          backgroundColor: "#0EDAC6",
          color: "#000",
          width: "20vw",
          fontWeight: 600,
          marginLeft: 45,
          textTransform: "capitalize",
          borderRadius: 8,
        }}
      >
        Easy Apply
      </Button>
      <Button
        variant="contained"
        startIcon={
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
          />
        }
        style={{
          backgroundColor: "#7528F2",
          color: "#FFF",
          width: "20vw",
          fontWeight: 400,
          marginLeft: 45,
          borderRadius: 8,
          textTransform: "capitalize",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Unlock Refferals
      </Button>
    </Card>
  );
};

export default Cards;
