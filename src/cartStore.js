import create from 'zustand';

const useCartStore = create(set => ({
  items: [],
  addToCart: item => {
    set(state => ({
      items: [...state.items, item],
    }));
  },
}));

export const addToCart = item => {
  useCartStore.setState(state => ({
    items: [...state.items, item],
  }));
};

export default useCartStore;
