// src/pages/MenuManager/MenuManager.tsx
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Menu = {
  id: string;
  name: string;
  memo: string;
};

const MenuManager: React.FC = () => {
  const [menuName, setMenuName] = useState("");
  const [memo, setMemo] = useState("");
  const [menus, setMenus] = useState<Menu[]>([]);
  const [favoriteId, setFavoriteId] = useState<string | null>(null);

  const handleAdd = () => {
    if (!menuName) return;
    setMenus([...menus, { id: uuidv4(), name: menuName, memo }]);
    setMenuName("");
    setMemo("");
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        トレーニングメニュー管理
      </Typography>
      <TextField
        label="メニュー名"
        fullWidth
        value={menuName}
        onChange={(e) => setMenuName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="メモ"
        fullWidth
        multiline
        rows={3}
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleAdd}>
        登録
      </Button>

      <List sx={{ mt: 4 }}>
        {menus.map((menu) => (
          <ListItem
            key={menu.id}
            secondaryAction={
              <Radio
                checked={favoriteId === menu.id}
                onChange={() => setFavoriteId(menu.id)}
              />
            }
          >
            <ListItemText primary={menu.name} secondary={menu.memo} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuManager;
