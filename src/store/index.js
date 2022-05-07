import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
    availableCategories: [
      { title: 'fruits & vegetable', id: 'fruits_vegetable' },
      { title: 'cooking oil & ghee', id: 'oil_ghee' },
      { title: 'meat & fish', id: 'meat' },
      { title: 'bakery & snacks', id: 'bakery' },
      { title: 'dairy & eggs', id: 'dairy_eggs' },
      { title: 'beverages', id: 'beverages' },
      { title: 'crockery & cutlery', id: 'crockery_cutlery' },
      { title: 'snakes & branded foods', id: 'snakes' },
    ],

    user: localStorage.getItem('user') || null,
  },

  mutations: {
    addToCart: (state, newItem) => {
      const isExist = state.cart.some((item) => item.id === newItem.id);

      if (!isExist) {
        state.cart = [...state.cart, newItem];
      } else {
        state.cart = [
          ...state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, qty: item.qty + newItem.qty }
              : item
          ),
        ];
      }

      return (localStorage.myCart = JSON.stringify(state.cart));
    },

    removeItem: (state, itemID) => {
      state.cart = [...state.cart.filter((item) => item.id !== itemID)];

      return (localStorage.myCart = JSON.stringify(state.cart));
    },

    changeQty: (state, { id: itemID, count: itemQty }) => {
      state.cart = [
        ...state.cart.map((item) =>
          item.id === itemID ? { ...item, qty: itemQty } : item
        ),
      ];

      return (localStorage.myCart = JSON.stringify(state.cart));
    },

    setUser(state, payload) {
      state.user = payload;
      localStorage.setItem('user', payload);
      console.log(state.user);
    },
  },

  getters: {},
});
