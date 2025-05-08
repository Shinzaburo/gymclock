import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Menu {
  id: string;
  name: string;
  memo: string;
}

interface MenuStore {
  menus: Menu[];
  favoriteMenuId: string | null;
  historyByDate: Record<string, Menu | null>;
  addMenu: (menu: Menu) => void;
  setFavoriteMenu: (id: string) => void;
  getFavoriteMenu: () => Menu | null;
  recordTodayMenu: (dateKey: string) => void;
  getMenuForDate: (dateKey: string) => Menu | null;
}

export const useMenuStore = create<MenuStore>()(
  persist(
    (set, get) => ({
      menus: [],
      favoriteMenuId: null,
      historyByDate: {},

      addMenu: (menu) =>
        set((state) => ({
          menus: [...state.menus, menu],
        })),

      setFavoriteMenu: (id) => set({ favoriteMenuId: id }),

      getFavoriteMenu: () => {
        const { favoriteMenuId, menus } = get();
        return menus.find((menu) => menu.id === favoriteMenuId) || null;
      },

      recordTodayMenu: (dateKey: string) => {
        const favoriteMenu = get().getFavoriteMenu();
        if (favoriteMenu) {
          set((state) => ({
            historyByDate: {
              ...state.historyByDate,
              [dateKey]: favoriteMenu,
            },
          }));
        }
      },

      getMenuForDate: (dateKey: string) => {
        return get().historyByDate[dateKey] || null;
      },
    }),
    { name: "menu-storage" }
  )
);
