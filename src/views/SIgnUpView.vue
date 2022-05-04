<template>
  <div class="parent">
    <div class="parent__logo">
      <LogoIcon class="logo__small" />
      <LogoIconBig class="logo__big" />
    </div>
    <div class="parent__form">
      <div class="parent__form__header">
        <h1>Sign Up</h1>
        <p>Enter your credentials to continue</p>
      </div>
      <form class="parent__form__form" @submit.prevent="handleForm">
        <label for="name">Username</label>
        <input
          type="text"
          placeholder="Enter your Name"
          name="name"
          class="input-btn"
          v-model="name"
        />
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          class="input-btn"
          v-model="email"
        />
        <label for="password">password</label>
        <input
          type="password"
          placeholder="Enter your Email"
          name="password"
          class="input-btn"
          v-model="password"
        />
        <p>
          By continuing you agree to our
          <span style="color: #53b175">Terms of Service</span> and
          <span style="color: #53b175">Privacy Policy</span>.
        </p>
        <input type="submit" value="Sign Up" class="submit-btn" />
      </form>
      <span v-if="error" style="color: red; font-size: 16px">{{ error }}</span>
      <p class="signin">
        Already have an account?<span
          ><router-link
            style="color: #53b175; text-decoration: none"
            to="/signin"
            >Sign In</router-link
          ></span
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import LogoIcon from '@imgs/svg/trademark.svg';
import LogoIconBig from '@imgs/svg/trademarkbig.svg';

import firebase from 'firebase/compat/app'; //v9
import { getAuth } from 'firebase/auth';
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const name = ref('');
const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();
const store = useStore();

const handleForm = async () => {
  try {
    let res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value);
    if (res) {
      store.commit('setUser', res.user);
      router.push('/');
    }
  } catch (err) {
    if (password.value.length <= 6) {
      error.value = 'password must be 6 letters at least';
    } else {
      error.value = 'email in use';
    }
  }
};

name, email, password, handleForm;
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.parent {
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  & .parent__logo {
    display: flex;
    height: 240px;
    justify-content: center;
    align-items: center;

    & .logo__small {
      width: 194px;
      height: 55px;
    }
    & .logo__big {
      display: none;
    }
  }

  & .parent__form {
    & .parent__form__header {
      & h1 {
        font-size: 26px;
        color: #030303;
      }

      & p {
        font-size: 16px;
        color: #7c7c7c;
      }
    }

    & .parent__form__form {
      & label {
        font-size: 16px;
        color: #7c7c7c;
        margin-top: 40px;
        display: block;
      }
      & .input-btn {
        display: block;
        border: none;
        outline: none;
        border-bottom: 1px solid #e2e2e2;
        margin-top: 10px;
        margin-bottom: 57px;
        width: 100%;
        color: #030303;
        font-size: 18px;
      }
      & p {
        font-size: 16px;
        color: #7c7c7c;
        margin-bottom: 40px;
      }

      & .submit-btn {
        width: 100%;
        height: 67px;
        background-color: #53b175;
        border-radius: 15px;
        border: none;
        outline: none;
        color: white;
      }
    }
  }
  & .signin {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
    gap: 50px;

    & .parent__logo {
      grid-column: 1/1;
      background-color: #53b175;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      & .logo__small {
        display: none;
      }
      & .logo__big {
        display: block;
        width: 194px;
        height: 55px;
      }
    }

    & .parent__form {
      max-width: 728px;
      margin-top: 220px;
      margin-bottom: 220px;
    }
  }
}
</style>
