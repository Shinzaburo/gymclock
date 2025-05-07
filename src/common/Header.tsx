import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          onClick={handleMenu}
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

        {/* メニュー（仮） */}
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose} component={RouterLink} to="/">
            入退館記録
          </MenuItem>
          <MenuItem onClick={handleClose} component={RouterLink} to="/calendar">
            カレンダー
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
