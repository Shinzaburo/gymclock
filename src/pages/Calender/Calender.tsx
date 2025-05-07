import { Box, Typography } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import React from "react";

const Calendar: React.FC = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        活動履歴
      </Typography>
      <DateCalendar />
    </Box>
  );
};

export default Calendar;
