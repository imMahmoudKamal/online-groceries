<template>
  <div class="about">
    <div class="about__image">
      <img src="@imgs/aboutImage.jpg" />
    </div>

    <div class="about__info">
      <div class="about__titles">
        <h1>high quality products</h1>
        <h3>15+ years experiences</h3>
      </div>

      <div class="about__text">
        <p>
          Orgainc food is food produced by methods that comply the standard of
          farming.s food produced by methods that comply the standard of
          farming. Orgainc food is food produced by methods that comply the
          standard of farming.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutImageComp',
};
</script>

<style lang="scss" scoped>
.about {
  height: calc(100vh - 9rem);
  position: relative;
  border-radius: 0.75rem;

  &__image {
    position: absolute;
    inset: 0;
    border-radius: 0.75rem;
    width: 100%;
    height: 100%;

    img {
      height: 100%;
      border-radius: 0.75rem;
      width: 100%;
      object-fit: cover;
    }
  }

  &__info {
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__titles {
    font-weight: 700;
    h1 {
      font-size: 0.9rem;
      text-transform: upperCase;
      letter-spacing: 0.002rem;
      line-height: 1.1rem;
    }
    h3 {
      font-size: 0.7rem;
      text-transform: capitalize;
      color: rgb(var(--clr-primary));
      padding-top: 0.2rem;
      padding-bottom: 0.4rem;
    }
  }

  &__text {
    width: 90%;
    font-size: 0.6rem;
    color: rgb(var(--clr-neutral-600));
    font-weight: 500;
    height: 2rem;
    overflow: hidden;
  }

  @media (min-width: 36rem) {
    height: calc(100vh - 6.5rem);
    &__info {
      top: 2.2rem;
      left: 2.2rem;
    }
    &__titles {
      h1 {
        font-size: 1.1rem;
        line-height: 1.3rem;
      }
      h3 {
        font-size: 0.8rem;
      }
    }

    &__text {
      width: 80%;
      font-size: 0.7rem;
      height: 2.2rem;
      padding-right: 2.2rem;
    }
  }

  @media (min-width: 48rem) {
    height: calc(100vh - 3rem);
    &__info {
      flex-direction: row;
      top: 2.5rem;
      left: 2.5rem;
    }
    &__titles {
      h1 {
        font-size: 1.5rem;
        line-height: 1.5rem;
      }

      h3 {
        font-size: 0.9rem;
      }
    }

    &__text {
      width: 70%;
      font-size: 0.7rem;
      height: 3.2rem;
    }
  }

  @media (min-width: 62rem) {
    height: calc(100vh - 0.2rem);
    &__info {
      top: 3.2rem;
      left: 3.2rem;
    }

    &__titles {
      h1 {
        font-size: 1.8rem;
        line-height: 2rem;
      }
      h3 {
        font-size: 1.2rem;
      }
    }

    &__text {
      width: 70%;
      font-size: 0.9rem;
      height: 4rem;
      padding-right: 2.5rem;
    }
  }
  @media (min-width: 75rem) {
    height: 100vh;
    &__info {
      top: 3.5rem;
      left: 3.5rem;
    }

    &__titles {
      h1 {
        font-size: 2rem;
        line-height: 2rem;
      }
      h3 {
        font-size: 1.2rem;
      }
    }

    &__text {
      width: 60%;
      font-size: 0.9rem;
      height: 4.2rem;
      padding-right: 2.5rem;
    }
  }
  @media (min-width: 90rem) {
    height: calc(100vh - 12rem);
    &__info {
      top: 4rem;
      left: 4rem;
    }

    &__titles {
      h1 {
        font-size: 2.5rem;
        line-height: 2.6rem;
      }
      h3 {
        font-size: 1.8rem;
      }
    }

    &__text {
      width: 70%;
      height: 5rem;
      padding: 0rem 3.4rem;
    }
  }
}
</style>
