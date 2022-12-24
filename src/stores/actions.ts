import create from 'zustand';
import { NavbarLink } from '../components/Sidebar/Sidebar.component';

interface ActionState {
  selectedItem: NavbarLink | undefined;
  selectItem: (item: NavbarLink) => void;
}

export const useActionsStore = create<ActionState>((set) => ({
  selectedItem: undefined,
  selectItem: (item: NavbarLink) => {
    set((state) => ({
      selectedItem: item,
    }));
  },
}));
