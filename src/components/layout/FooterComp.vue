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
        <li>Fresh Vegitables</li>
        <li>Fresh Fruits</li>
        <li>Herbs</li>
        <li>Seasonings</li>
        <li>Exotic Fruits</li>
        <li>Exotic Veggies</li>
      </div>
      <div class="desc">
        <h3>Premium Fruits</h3>
        <li>Avacado, Peach, Plum</li>
        <li>Cherries</li>
        <li>Organic</li>
        <li>Apples</li>
        <li>Dates</li>
        <li>Seasonal</li>
      </div>
      <div class="desc">
        <h3>Beverages</h3>
        <li>Tea</li>
        <li>Coffee</li>
        <li>Fruite Jucies</li>
        <li>Energy Drinks</li>
        <li>Health Supplement</li>
        <li>Soda Water</li>
      </div>
      <div class="desc">
        <h3>Home Care</h3>
        <li>Detergent</li>
        <li>Dishwash</li>
        <li>All Cleaners</li>
        <li>Fresheners</li>
        <li>Shoe Care</li>
        <li>Pet Supplies</li>
      </div>
      <div class="desc">
        <h3>Get To Know Us</h3>
        <li>About Us</li>
        <li>In News</li>
        <li>Green bigbasket</li>
        <li>Privacy Policy</li>
        <li>Affiliate</li>
        <li>Terms and Conditions</li>
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
    max-width: 1440px;
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
      @media (min-width: 576px) and (max-width: 768px) {
        margin-left: 25px;
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
        padding: 0px;
        width: 100%;
      }
      & .two {
        width: 100%;
        margin-left: 0px;
      }
    }

    @media (min-width: 768px) and (max-width: 992px) {
      width: 82%;
      flex-direction: column;
      border-bottom: none;
      margin-left: 25px;
      margin-right: 0px;
      & .one {
        width: 100%;
        margin-bottom: 30px;
      }
      & .two {
        width: 80%;
        margin: auto;
        margin-left: 0px;
      }
    }

    @media (min-width: 992px) and (max-width: 1200px) {
      width: 100%;
      border: none;
      margin: 0;
      padding: 0;
      padding: 0 25px;
      margin-bottom: 30px;
      padding-bottom: 30px;
    }
    @media (min-width: 1200px) and (max-width: 1440px) {
      width: 95%;
      border: none;
      margin: 0;
      padding: 0;
      padding: 0 25px;
      margin-bottom: 30px;
      padding-bottom: 30px;
    }
  }

  & .catogries {
    max-width: 1440px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    & .desc {
      & h3 {
        font-size: 1.25 rem;
        color: #181725;
      }
      & li {
        font-size: 1rem;
        color: #7c7c7c;
        list-style-type: none;
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
      gap: 30px;
      margin-left: 25px;
    }
    @media (min-width: 992px) and (max-width: 1200px) {
      width: 100%;
      display: grid;
      gap: 30px;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 0;
      padding: 0;
      padding: 0 25px;
    }
    @media (min-width: 1200px) and (max-width: 1440px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 30px;
      padding: 0 25px;
    }
  }
  // @media (min-width: 768px) and (max-width: 1200;){
  //   ma
  // }
}
.trademark {
  background-color: hsl(0, 0%, 100%);
  width: 100%;

  & .div {
    max-width: 1440px;
    margin: auto;
    display: flex;
    height: 220px;
    align-items: center;
    & .logo {
      height: 100px;
      margin-right: 58%;
    }

    & .connect {
      height: 50px;
    }

    // @media (min-width: 768px) and (max-width: 1200px) {
    //   flex-direction: column;
    //   align-items: center;
    //   justify-content: center;
    //   & .connect {
    //     width: 300px;
    //   }

    //   & .logo {
    //     width: 300px;
    //     margin-right: 0;
    //   }
    // }
  }
  @media (min-width: 0px) and (max-width: 768px) {
    & .div {
      margin-top: 30px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 75%;
      gap: 30px;

      & .logo {
        margin-right: 0;
      }
      & .connect {
        width: 218px;
      }
    }
  }
  @media (min-width: 0px) and (max-width: 992px) {
    & .div {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & .logo {
        margin-right: 0px;
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    & .div {
      width: 100%;
      padding: 0 75px;
      & .logo {
        margin-right: 20%;
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    & .div {
      width: 100%;
      padding: 0 75px;
      & .logo {
        margin-right: 25%;
      }
    }
  }
}
</style>
