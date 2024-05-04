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
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const Cards = ({ data }) => {
  console.log(data);
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ borderWidth: 10, borderColor: "gray" }}
    >
      {/* Card top section */}
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        style={{ marginLeft: 20, padding: 4, marginTop: 50 }}
      >
        {" "}
        <Avatar
          style={{ paddingTop: 6 }}
          variant="rounded"
          src={data?.logoUrl}
        ></Avatar>
        <Stack gap={1}>
          {/* Company Name */}
          <Typography variant="body2" color={"gray"}>
            {data?.companyName}
          </Typography>

          {/* Job Role */}
          <Typography variant="subtitle1">{data?.jobRole}</Typography>

          {/* Location */}
          <Typography variant="caption" display="block" fontWeight={600}>
            {data?.location}
          </Typography>
        </Stack>
      </Box>

      {/* Salary */}
      <Typography
        marginLeft={2}
        color={"gray"}
        fontSize={14}
        fontWeight={600}
        display={"flex"}
      >
        Estimated Salary: {data?.salaryCurrencyCode} {data?.minJdSalary} -{" "}
        {data?.salaryCurrencyCode} {data?.maxJdSalary}
        <span>
          <CheckBoxIcon
            style={{ color: "#64F669", height: 20, aspectRatio: 1 }}
          />
        </span>
      </Typography>

      {/* Job Description section */}
      <CardContent>
        <Typography variant="h6" component="div" fontWeight={600} fontSize={18}>
          About Company:
        </Typography>
        <Typography variant="h6" component="div" fontWeight={600} fontSize={15}>
          Job Description:
        </Typography>
        <Typography variant="body1">{data?.jobDetailsFromCompany}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          size="small"
          style={{ marginLeft: 120, textTransform: "capitalize", color:'purple' }}
        >
          View Job
        </Button>
      </CardActions>
<Stack marginLeft={2}>
      <Typography
        
        color={"gray"}
        fontSize={14}
        fontWeight={600}
      >
      Minimum Experience
      </Typography>
      <Typography fontWeight={500}>
      {data?.minExp} years
      </Typography>
      </Stack>

      {/* Bottom buttons */}
      <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} >
      <Button
       sx={{fontSize:{xs:10,md:15}}}
        variant="contained"
        startIcon={<BoltIcon style={{ color: "yellow" }} />}
        style={{
          backgroundColor: "#0EDAC6",
          color: "#000",
          width: "20vw",
          fontWeight: 600,
          textTransform: "capitalize",
          borderRadius: 8,
          marginTop: 10,
        }}
      >
        Easy Apply
      </Button>
      
      <Button
       sx={{fontSize:{xs:10,md:15}}}
        variant="contained"
        startIcon={
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width:{xs:20, md:24},  height:{xs:20, md:24},}}
          />
        }
        style={{
          backgroundColor: "#7528F2",
          color: "#FFF",
          width: "20vw",
          fontWeight: 400,
          borderRadius: 8,
          textTransform: "capitalize",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Unlock Refferals
      </Button></Stack>
    </Card>
  );
};

export default Cards;
