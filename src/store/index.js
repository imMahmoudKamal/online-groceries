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
    categoryName: '',
    filteredCat: '',
    availableCategories: [
      'fruits & vegetable',
      'cooking oil & ghee',
      'meat & fish',
      'bakery & snacks',
      'dairy & eggs',
      'beverages',
      'crockery & cutlery',
      'snakes & branded foods',
    ],
    showedList: [],
    hiddenList: [],
    listIndex: '',
    windowSize: '',
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
    setFilteredCat(state, compName) {
      state.filteredCat = compName;
    },
    setCategoryName(state, catName) {
      state.categoryName = catName;
    },
    setListIndex(state) {
      let width = state.windowSize;
      if (width >= 368 && width < 768) {
        state.listIndex = 1;
      } else if (width >= 768 && width < 992) {
        state.listIndex = 2;
      } else if (width >= 992 && width < 1200) {
        state.listIndex = 3;
      } else {
        state.listIndex = 4;
      }
    },
    setWindowSize: (state, width) => {
      state.windowSize = width;
    },
    setUser(state, payload) {
      state.user = payload;
      localStorage.setItem('user', payload);
      console.log(state.user);
    },
  },

  getters: {
    getCounter: (state) => state.counter,
    getFilteredCat: (state) => state.filteredCat,
    getCategoryName: (state) => state.categoryName,
    getAvailableCategories: (state) => state.availableCategories,
    getShowList: (state) => {
      return (state.showedList = state.availableCategories
        .filter((item) => item != state.categoryName)
        .splice(0, state.listIndex));
    },
    getHideList: (state) => {
      return (state.hiddenList = state.availableCategories
        .filter((item) => item != state.categoryName)
        .splice(state.listIndex));
    },
    setWindowSize: (state) => state.windowSize,
  },
});
