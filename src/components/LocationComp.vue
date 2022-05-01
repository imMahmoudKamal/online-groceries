<template>
  <div class="parent">
    <h2>Location</h2>
    <div class="line"></div>
    <div class="parent__main">
      <p class="main__one">
        Nectar Headquarters 1145 17th Street NW Washington, DC 20036
      </p>
      <img class="main__image" src="../assets/images/Location.jpg" />
      <p class="main__two">
        Nectar Headquarters 1145 17th Street NW Washington, DC 20036
      </p>
      <p class="main__three">
        Nectar Headquarters 1145 17th Street NW Washington, DC 20036
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.parent {
  margin: 0 25px;
  margin-bottom: 30px;

  & h2 {
    // font-family: 'Gilroy-SemiBold';
    font-size: 1.25rem;
    @media (min-width: 768px) and (max-width: 992px) {
      font-size: 1.5rem;
    }
    @media (min-width: 992px) and (max-width: 1440px) {
      font-size: 2rem;
    }
    @media (min-width: 1400px) {
      margin-left: 20px;
    }
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: auto;
    & .line {
      border-bottom: solid 3px #7c7c7c;
      margin-left: 20px;
      width: 75px;
    }
  }
}
.parent__main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 50px;

  & .main__one {
    font-size: 14px;
    color: #7c7c7c;

    // font-family: 'Gilroy-Medium';
  }
  & .main__two {
    font-size: 14px;
    color: #7c7c7c;

    // font-family: 'Gilroy-Medium';
  }
  & .main__three {
    font-size: 14px;
    color: #7c7c7c;

    // font-family: 'Gilroy-Medium';
  }

  & .main__image {
    width: 250px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    & .main__one {
      font-size: 1.25rem;
    }
    & .main__two {
      font-size: 1.25rem;
    }
    & .main__three {
      font-size: 1.25rem;
    }
    & .main__image {
      width: 350px;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    & .main__one {
      font-size: 1.25rem;
    }
    & .main__two {
      font-size: 1.25rem;
    }
    & .main__three {
      font-size: 1.25rem;
    }
    & .main__image {
      width: 450px;
    }
  }

  @media (min-width: 992px) and (max-width: 1440px) {
    grid-template-columns: 1fr 150px 500px;
    grid-template-rows: 150px 150px 150px 150px;
    margin-top: 30px;
    & .main__one,
    & .main__two,
    & .main__three {
      font-size: 1rem;
      grid-column-start: 1;
      grid-column-end: 1;
    }

    & .main__image {
      width: 100%;
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row: 1/4;
    }
  }

  @media (min-width: 1440px) {
    margin-top: 30px;
    grid-template-columns: 100px 192px 440px 708px;
    grid-template-rows: 100px 100px 100px 100px;
    grid-column-gap: 0px;
    & .main__one,
    & .main__two,
    & .main__three {
      font-size: 18px;
      grid-column-start: 2;
      grid-column-end: 3;
      width: 200px;
      height: 72px;
    }

    & .main__image {
      width: 708px;
      height: 413px;
      grid-column-start: 4;
      grid-column-end: 4;
      grid-row: 1/4;
    }
  }
}
</style>
