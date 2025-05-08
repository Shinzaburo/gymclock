import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import CloseIcon from "@mui/icons-material/Close"; // ← 追加
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#773399" }}>
      <Toolbar>
        {/* ハンバーガーメニュー */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ mr: 1 }}
        >
          <MenuIcon />
        </IconButton>

        {/* GymClock アプリ名 */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          GymClock
        </Typography>

        {/* ユーザー名 */}
        <Box>
          <Typography variant="body1" sx={{ color: "white" }}>
            Shinzaburo
          </Typography>
        </Box>

        {/* Drawer（サイドメニュー） */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleDrawer(false)}>
            {/* 閉じるボタン */}
            <Box
              display="flex"
              justifyContent="flex-end"
              p={1}
              borderBottom="1px solid #ddd"
            >
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            <List onClick={toggleDrawer(false)}>
              <ListItem disablePadding>
                <ListItemButton component={RouterLink} to="/">
                  <AccessTimeIcon sx={{ mr: 1.5 }} />
                  <ListItemText primary="入退館記録" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={RouterLink} to="/calendar">
                  <CalendarMonthSharpIcon sx={{ mr: 1.5 }} />
                  <ListItemText primary="活動履歴" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
