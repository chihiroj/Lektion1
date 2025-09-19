import { create } from "zustand";

export const useColorChange = create((set) => ({
  color: "black",
  change: () => set((state) => ({ color: state.color === "black" ? "darkred" : "black" })),
}));