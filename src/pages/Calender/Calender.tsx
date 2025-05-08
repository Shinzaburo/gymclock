import { Box, Typography } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import { useMenuStore } from "../../store/menuStore";

// 仮の活動記録データ（直近3日分）
const activityData: Record<string, { start: string; end: string; duration: string }> =
  (() => {
    const today = dayjs();
    return {
      [today.format("YYYY-MM-DD")]: {
        start: "10:15",
        end: "11:45",
        duration: "01:30",
      },
      [today.subtract(1, "day").format("YYYY-MM-DD")]: {
        start: "9:15",
        end: "10:45",
        duration: "01:30",
      },
      [today.subtract(3, "day").format("YYYY-MM-DD")]: {
        start: "10:15",
        end: "11:45",
        duration: "01:30",
      },
    };
  })();

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const getMenuForDate = useMenuStore((state) => state.getMenuForDate);

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  const selectedDateStr = selectedDate?.format("YYYY-MM-DD");
  const record = selectedDateStr ? activityData[selectedDateStr] : null;

  const menu = selectedDate ? getMenuForDate(selectedDate.format("YYYY-MM-DD")) : null;

  return (
    <Box sx={{ mt: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h5" gutterBottom>
        活動履歴
      </Typography>
      <DateCalendar onChange={handleDateChange} />

      {selectedDate && (
        <Box mt={-2}>
          <Typography variant="subtitle1">
            選択日: {selectedDate.format("YYYY年MM月DD日")}
          </Typography>

          {record ? (
            <Box mt={3} textAlign="center">
              <Typography variant="body1">開始時刻: {record.start}</Typography>
              <Typography variant="body1">終了時刻: {record.end}</Typography>
              <Typography variant="h6" mt={1}>
                滞在時間: {record.duration}
              </Typography>
            </Box>
          ) : selectedDate ? (
            <Typography mt={3} color="text.secondary">
              この日の記録はありません。
            </Typography>
          ) : null}

          {menu ? (
            <Box mt={1}>
              <Typography variant="body1">メニュー名: {menu.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                メモ: {menu.memo}
              </Typography>
            </Box>
          ) : (
            <Typography variant="body2" color="text.secondary" mt={1}>
              登録されたメニューはありません。
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Calendar;
