<template lang="">
  <header>
    <div class="header-icons">
      <router-link to="/" class="logo-container">
        <LogoIcon class="logo-icon" />
      </router-link>
      <router-link to="/cart">
        <CartIcon class="cart-icon" />
      </router-link>
    </div>
    <nav>
      <ul class="navigation">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/shop">Shop</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
  <button @click="handleSignOut">sign out</button>
  <span v-if="store.state.user">{{store.state.user.email}}</span>
</template>
<script setup>
// export default {};
// Element.getBoundingClientRect()
import LogoIcon from '@imgs/svg/logo-icon.svg';
import CartIcon from '@imgs/svg/cart-icon.svg';
import firebase from 'firebase/compat/app'; //v9
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore();

const router = useRouter();

const handleSignOut = () => {
  firebase.auth().signOut();
    console.log(store.state.user);
  store.commit('setUser', null);
  localStorage.removeItem('user');
  console.log(store.state.user);
  router.push('/signin');
};

// const handleRoute = () => {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (!user) {
//       router.push('/signin');
//     }
//   });
// };

</script>
<style lang="css" scoped>
header {
  background-color: #ffffff;
  filter: drop-shadow(0px 3px 6px rgb(83, 177, 117, 0.1));
}
.header-icons {
  height: 60px;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-container {
  display: block;
  height: 30px;
}
.logo-icon {
  height: 100%;
}
.cart-icon {
  height: 24.61;
}
nav {
  height: 30px;
  padding: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .navigation {
  display: flex;
} */
.navigation {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}
li a {
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: #7c7c7c;
}
a:hover {
  cursor: pointer;
}
button {
  background: none;
  border: none;
}
button:hover {
  cursor: pointer;
}
@media (min-width: 992px) {
  header {
    height: 100px;
    padding: 30px 240px;
  }
  .logo-icon {
    height: 40px;
  }
  .cart-icon {
    height: 27.61;
  }
  .header-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li a {
    font-size: 18px;
  }
  .navigation {
    width: 342px;
    justify-content: space-evenly;
    position: absolute;
    top: 38px;
    text-align: center;
  }
}
</style>
