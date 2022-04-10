/* eslint-disable prettier/prettier */
<template>
  <div class="parent">
    <div class="main">
      <div class="one">
        <h1>Subscribe To Our Newsletter</h1>
        <p>
          And get the best offer and updates about your favorite brands or
          products.
        </p>
      </div>
      <div class="two">
        <input type="text" placeholder="Enter your email address here" />
        <input type="submit" value="SUBMIT" />
      </div>
    </div>
    <div class="catogries">
      <div class="desc">
        <h3>Vegitables & Fruits</h3>
        <p>Fresh Vegitables</p>
        <p>Fresh Fruits</p>
        <p>Herbs</p>
        <p>Seasonings</p>
        <p>Exotic Fruits</p>
        <p>Exotic Veggies</p>
      </div>
      <div class="desc">
        <h3>Premium Fruits</h3>
        <p>Avacado, Peach, Plum</p>
        <p>Cherries</p>
        <p>Organic</p>
        <p>Apples</p>
        <p>Dates</p>
        <p>Seasonal</p>
      </div>
      <div class="desc">
        <h3>Beverages</h3>
        <p>Tea</p>
        <p>Coffee</p>
        <p>Fruite Jucies</p>
        <p>Energy Drinks</p>
        <p>Health Supplement</p>
        <p>Soda Water</p>
      </div>
      <div class="desc">
        <h3>Home Care</h3>
        <p>Detergent</p>
        <p>Dishwash</p>
        <p>All Cleaners</p>
        <p>Fresheners</p>
        <p>Shoe Care</p>
        <p>Pet Supplies</p>
      </div>
      <div class="desc">
        <h3>Get To Know Us</h3>
        <p>About Us</p>
        <p>In News</p>
        <p>Green bigbasket</p>
        <p>Privacy Policy</p>
        <p>Affiliate</p>
        <p>Terms and Conditions</p>
      </div>
    </div>
  </div>
  <div class="trademark">
    <div class="div">
      <LogoIcon class="logo" />
      <ConnectionIcon class="connect" />
    </div>
  </div>
</template>

<script setup>
import LogoIcon from '@imgs/svg/trademark.svg';
import ConnectionIcon from '@imgs/svg/connection.svg';
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.parent {
  background-color: #f2f3f2;
  padding-top: 60px;
  padding-bottom: 60px;

  & .main {
    width: 75%;
    margin: auto;
    display: flex;
    padding-bottom: 21px;
    border-bottom: 1px solid #7c7c7c;

    & .one {
      width: 45%;
      padding: 0px;
      & h1 {
        width: 100%;
        font-size: 1.75rem;
      }
      & p {
        width: 100%;
        font-size: 0.9rem;
      }
      @media (min-width: 0px) and (max-width: 576px) {
        padding: 0px !important;
      }
      @media (min-width: 768px) and (max-width: 1200px) {
        width: 50%;
        & h1 {
          font-size: 1rem;
        }
        & p {
          font-size: 0.75rem;
        }
      }
    }

    & .two {
      width: 49%;
      position: relative;
      height: 67px;
      margin-left: 5%;
      margin-top: 22px;
      & input[type='text'] {
        width: 100%;
        border: none;
        outline: none;
        background-color: #f2f3f2;
        border: solid 1px #7c7c7c;
        border-radius: 15px;
        height: 67px;
        font-size: 0.9rem;
      }
      & input[type='text']::placeholder {
        padding-left: 17px;
      }
      & input[type='submit'] {
        border: none;
        outline: none;
        background-color: #53b175;
        color: #fff9ff;
        position: absolute;
        right: 0;
        width: 31%;
        height: 67px;
        border-radius: 15px;
      }

      @media (min-width: 0px) and (max-width: 576px) {
        margin-left: 0;
      }
      @media (min-width: 768px) and (max-width: 1200px) {
        width: 45%;
        font-size: 0.75rem;
        margin: 0;
        margin-left: 15%;

        & input[type='text'] {
          font-size: 0.6rem;
          width: 100%;
          height: 50px;
        }
        & input[type='text']::placeholder {
          padding-left: 0;
        }
        & input[type='submit'] {
          font-size: 0.65rem;
          height: 50px;
        }
      }
    }

    @media (min-width: 0px) and (max-width: 768px) {
      width: 82%;
      flex-direction: column;
      border-bottom: none;
      margin-left: 25px;
      & .one {
        padding: 25px;
        width: 100%;
      }
      & .two {
        width: 100%;
      }
    }

    @media (min-width: 768) and (max-width: 1200px) {
      width: 82%;
      flex-direction: column;
    }
  }

  & .catogries {
    width: 75%;
    margin: auto;
    display: flex;
    gap: 11.8%;
    padding-top: 30px;
    & .desc {
      & h3 {
        font-size: 0.9rem;
        color: #181725;
      }
      & p {
        font-size: 0.6rem;
        color: #7c7c7c;
      }
      @media (max-width: 570px) {
        & h3 {
          font-size: 24px;
        }
        & p {
          font-size: 18px;
        }
      }
    }
    @media (min-width: 0px) and (max-width: 576px) {
      margin: 25px;
      flex-direction: column;
      gap: 30px;
    }
    @media (min-width: 576px) and (max-width: 992px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
.trademark {
  background-color: hsl(0, 0%, 100%);
  width: 100%;

  & .div {
    width: 75%;
    margin: auto;
    display: flex;
    height: 220px;
    align-items: center;
    & .logo {
      width: 27%;
      height: 100px;
      margin-right: 58%;
    }

    & .connect {
      width: 15%;
      height: 50px;
    }
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & .logo {
        margin-right: 0;
        width: 195px;
      }
      & .connect {
        width: 218px;
      }
    }

    @media (min-width: 768px) and (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & .connect {
        width: 300px;
      }

      & .logo {
        width: 300px;
        margin-right: 0;
      }
    }
  }
}
</style>
