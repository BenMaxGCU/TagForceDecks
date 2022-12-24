import create from 'zustand';

interface ActionState {
  selectedItem: {};
  selectItem: (item: {}) => void;
}

export const useActionsStore = create<ActionState>((set) => ({
  selectedItem: {},
  selectItem: (item: {}) => {
    set((state) => ({
      selectedItem: item,
    }));
  },
}));
