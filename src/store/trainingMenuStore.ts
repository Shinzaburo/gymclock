import { create } from "zustand";

export type TrainingMenu = {
  id: string;
  name: string;
  memo: string;
};

type State = {
  menus: TrainingMenu[];
  favoriteId: string | null;
  addMenu: (menu: TrainingMenu) => void;
  setFavorite: (id: string) => void;
};

export const useTrainingMenuStore = create<State>((set) => ({
  menus: [],
  favoriteId: null,
  addMenu: (menu) =>
    set((state) => ({
      menus: [...state.menus, menu],
    })),
  setFavorite: (id) =>
    set(() => ({
      favoriteId: id,
    })),
}));
