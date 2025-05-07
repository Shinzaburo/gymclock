import { Container } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./common/Header";
import Calendar from "./pages/Calender/Calender";
import TimeRecord from "./pages/TimeRecord/TimeRecord";

const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Header />
        <Container maxWidth="sm" sx={{ mt: 5 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TimeRecord />
                </>
              }
            />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </Container>
      </Router>
    </LocalizationProvider>
  );
};

export default App;
