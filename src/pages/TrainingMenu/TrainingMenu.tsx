import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTrainingMenuStore } from "../../store/trainingMenuStore";

const TrainingMenu = () => {
  const [name, setName] = useState("");
  const [memo, setMemo] = useState("");
  const { menus, addMenu, favoriteId, setFavorite } = useTrainingMenuStore();

  const handleAdd = () => {
    if (name.trim() === "") return;
    addMenu({ id: uuidv4(), name, memo });
    setName("");
    setMemo("");
  };

  return (
    <Box>
      <Typography variant="h5" mb={2}>
        トレーニングメニュー登録
      </Typography>
      <Stack spacing={2} mb={3}>
        <TextField
          label="メニュー名"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField label="メモ" value={memo} onChange={(e) => setMemo(e.target.value)} />
        <Button variant="contained" onClick={handleAdd}>
          登録
        </Button>
      </Stack>

      <Typography variant="h6">登録済みメニュー</Typography>
      <List>
        {menus.map((menu) => (
          <ListItem
            key={menu.id}
            secondaryAction={
              <Radio
                checked={favoriteId === menu.id}
                onChange={() => setFavorite(menu.id)}
              />
            }
          >
            <ListItemText
              primary={menu.name}
              secondary={menu.memo}
              sx={{ wordBreak: "break-word" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TrainingMenu;
