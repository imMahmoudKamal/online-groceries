<template>
  <header>
    <div class="header-icons">
      <router-link to="/" class="logo-container">
        <LogoIcon class="logo-icon" />
      </router-link>
      <router-link to="/cart">
        <CartIcon class="cart-icon" />
      </router-link>
    </div>
  </header>
</template>
<script setup>
// export default {};
// Element.getBoundingClientRect()
import LogoIcon from '@imgs/svg/logo-icon.svg';
import CartIcon from '@imgs/svg/cart-icon.svg';
</script>
<style lang="css" scoped>
header {
  background-color: #ffffff;
  filter: drop-shadow(0px 3px 6px rgb(83, 177, 117, 0.1));
}
.header__icons {
  height: 60px;
  padding: 15px 0px;
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
nav {
  height: 30px;
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
  }
}
</style>
