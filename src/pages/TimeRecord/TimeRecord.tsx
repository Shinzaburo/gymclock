import { faDoorClosed, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const formatTime = (date: Date) => {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

const formatDuration = (ms: number) => {
  const totalMinutes = Math.floor(ms / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(hours)}:${pad(minutes)}`;
};

const TimeRecord: React.FC = () => {
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  const handleStart = () => {
    const now = new Date();
    setStartTime(now);
    setEndTime(null);
    setDuration(null);
  };

  const handleEnd = () => {
    if (!startTime) return;
    const now = new Date();
    setEndTime(now);
    const diffMs = now.getTime() - startTime.getTime();
    setDuration(formatDuration(diffMs));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h5" gutterBottom>
        入館・退館記録
      </Typography>

      <Stack direction="row" spacing={3} mb={2} mt={5}>
        <Button
          variant="contained"
          color="success"
          onClick={handleStart}
          sx={{ width: 120, height: 120, fontSize: "1.2rem" }}
          endIcon={<FontAwesomeIcon icon={faDoorOpen} />}
        >
          開始
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleEnd}
          sx={{ width: 120, height: 120, fontSize: "1.2rem" }}
          endIcon={<FontAwesomeIcon icon={faDoorClosed} />}
        >
          終了
        </Button>
      </Stack>

      {startTime && (
        <Typography variant="body1" mt={1}>
          開始時刻: {formatTime(startTime)}
        </Typography>
      )}
      {endTime && (
        <Typography variant="body1" mt={1}>
          終了時刻: {formatTime(endTime)}
        </Typography>
      )}
      {duration && (
        <Typography variant="h6" mt={2}>
          滞在時間: {duration}
        </Typography>
      )}
    </Box>
  );
};

export default TimeRecord;
