<template>
  <header>
    <div class="container">
      <div class="header__icons">
        <router-link to="/" class="logo-container">
          <LogoIcon class="header__icons__logo" />
        </router-link>
        <div>
          <router-link to="/signin" v-if="!user">
            <UserIcon class="header__icons__user" />
          </router-link>
          <router-link to="/" v-else @click="handleSignOut">
            <LoggedIcon class="header__icons__user"></LoggedIcon>
          </router-link>
          <router-link
            to="/cart"
            class="header__cart"
            :class="{ 'header__cart--active': cartIsNotEmpty }"
          >
            <CartIcon class="header__icons__cart" />
          </router-link>
        </div>
      </div>
      <nav>
        <ul class="navigation__list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/shop">Shop</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
import LogoIcon from '@imgs/svg/logo-icon.svg';
import CartIcon from '@imgs/svg/cart-icon.svg';
import UserIcon from '@imgs/svg/user-icon.svg';
import LoggedIcon from '@imgs/svg/logged-icon.svg';
import firebase from 'firebase/compat/app';
import { useStore } from 'vuex';
import { computed, watch } from 'vue';
const store = useStore();

const handleSignOut = () => {
  firebase.auth().signOut();
  console.log(store.state.user);
  store.commit('setUser', null);
  localStorage.removeItem('user');
  console.log(store.state.user);
};

const user = computed(() => store.state.user);

const cartIsNotEmpty = computed(() => store.state.cart.length);

watch(
  () => cartIsNotEmpty.value,
  (currentValue, newValue) => {
    if (currentValue !== newValue) {
      cartIsNotEmpty.value = computed(() => store.state.cart.length);
    }
  }
);
</script>
<style lang="scss" scoped>
header {
  background-color: #ffffff;
  filter: drop-shadow(0px 3px 6px rgb(83, 177, 117, 0.1));
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.header__icons {
  height: 60px;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-container {
  display: block;
  height: 30px;
}
.header__icons__logo {
  height: 100%;
}
.header__icons__cart {
  height: 25px;
}
.header__icons__user {
  margin-right: 15px;
}
nav {
  height: 30px;
  // padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation__list {
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
  padding: 0px;
  background: none;
  border: none;
  height: 25px;
}
button:hover {
  cursor: pointer;
}
@media (min-width: 48rem) {
  header {
    height: 100px;
  }
  .header__icons {
    height: 100px;
  }
  .header__icons__cart {
    height: 25px;
  }
  nav {
    margin-left: 35vw;
    width: 300px;
    justify-content: space-evenly;
    position: absolute;
    top: 35px;
    text-align: center;
  }
}
@media (min-width: 62rem) {
  nav {
    margin-left: 45vw;
    width: 342px;
  }
  nav li a {
    font-size: 18px;
  }
}
@media (min-width: 75rem) {
  nav {
    margin-left: calc(100vw * 0.5 - 342px);
    // margin-left: 100px;
  }
}

.header__cart {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    right: -0.2rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: rgb(var(--clr-primary));
    border: 1px solid rgb(var(--clr-white));
    opacity: 0;
    transition: opacity 100ms ease-in-out;
  }

  &--active::before {
    opacity: 1;
  }
}
</style>
