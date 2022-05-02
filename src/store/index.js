import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0,
    cart: [
      {
        id: 0,
        title: 'Natural Red Apple',
        imgs: [
          '/src/assets/images/apple.png',
          '/src/assets/images/apple.png',
          '/src/assets/images/apple.png',
        ],
        price: 4.99,
        qty: 1,
        qtyPerPrice: '1kg, Price',
      },
      {
        id: 1,
        title: 'Organic Bananas',
        imgs: [
          '/src/assets/images/banana.png',
          '/src/assets/images/banana.png',
          '/src/assets/images/banana.png',
        ],
        price: 3.99,
        qty: 2,
        qtyPerPrice: '12kg, Price',
      },
      {
        id: 2,
        title: 'Natural Red Apple',
        imgs: [
          '/src/assets/images/apple.png',
          '/src/assets/images/apple.png',
          '/src/assets/images/apple.png',
        ],
        price: 4.99,
        qty: 1,
        qtyPerPrice: '1kg, Price',
      },
    ],
    user: localStorage.getItem('user') || null,
  },

  mutations: {
    increment: (state) => state.counter++,
    decrement: (state) => state.counter--,

    addToCart: (state, newItem) => {
      const isExist = state.cart.some((item) => item.id === newItem.id);

      if (!isExist) {
        return (state.cart = [...state.cart, newItem]);
      } else {
        return (state.cart = [
          ...state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, qty: item.qty + newItem.qty }
              : item
          ),
        ]);
      }
    },

    removeItem: (state, itemID) => {
      return (state.cart = [
        ...state.cart.filter((item) => item.id !== itemID),
      ]);
    },

    changeQty: (state, { id: itemID, count: itemQty }) => {
      return (state.cart = [
        ...state.cart.map((item) =>
          item.id === itemID ? { ...item, qty: itemQty } : item
        ),
      ]);
    },
    setUser(state, payload) {
      state.user = payload;
      localStorage.setItem('user', payload);
      console.log(state.user);
    },
  },

  getters: {
    getCounter: (state) => state.counter,
  },
});
