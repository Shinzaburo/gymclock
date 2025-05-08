// src/App.tsx
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./common/Header";
import Calendar from "./pages/Calender/Calender";
import TimeRecord from "./pages/TimeRecord/TimeRecord";
import theme from "./theme/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Header />
          <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Routes>
              <Route path="/" element={<TimeRecord />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </Container>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
