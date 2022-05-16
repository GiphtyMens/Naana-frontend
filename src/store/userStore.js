import create from "zustand";
import { persist } from "zustand/middleware";

const userState = persist(
  (set) => ({
    user: null,
    isLoggedIn: false,
    appointment: [],
    categories: [{ name: "spa" }, { name: "health" }, { name: "you" }],
    setUser: (user) => {
      set(() => set({ user, isLoggedIn: true }));
    },
    logOut: () => set({ user: null, token: null, isLoggedIn: false }),
  }),
  { name: "user-setting" }
);

export const userUserState = create(userState);