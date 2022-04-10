<template>
  <div class="about">
    <div class="wrapper">
      <div class="about__image">
        <img src="../assets/images/aboutImage.jpg" />
      </div>
      <div class="about__info">
        <div class="about__titles">
          <h4>all natural products</h4>
          <h2>high quality products</h2>
          <h3>+ 15 years experiences</h3>
        </div>
        <div class="about__text">
          <p class="text__sm">
            Orgainc food is food produced by methods that comply the standard of
            farming.
          </p>
          <p class="text__md">
            Orgainc food is food produced by methods that comply the standard of
            farming.s food produced by methods that comply the standard of
            farming. Orgainc food is food produced by methods that comply the
            standard of farming.
          </p>
        </div>
      </div>
      <div></div>
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
  padding-top: 100%;
  position: relative;
  border-radius: 0.75rem;
  .wrapper {
    position: absolute;
    inset: 0;
    padding: 0.75rem;
    border-radius: 0.75rem;
  }
  &__image {
    position: absolute;
    inset: 0;
    border-radius: 0.75rem;
    width: 100%;

    img {
      height: 100%;
      border-radius: 0.75rem;
      width: 100%;
    }
  }

  &__info {
    position: absolute;
    top: 3rem;
    left: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__titles {
    font-weight: 700;
    h4 {
      font-size: 0.7rem;
      text-transform: upperCase;
      letter-spacing: 0.002rem;
    }
    h2 {
      font-size: 0.9rem;
      text-transform: upperCase;
      letter-spacing: 0.002rem;
      line-height: 1.1rem;
      padding-top: 1rem;
    }
    h3 {
      font-size: 0.7rem;
      text-transform: capitalize;
      color: rgb(var(--clr-primary));
      padding-top: 0.2rem;
    }
  }

  &__text {
    width: 80%;
    font-size: 0.6rem;
    color: rgb(var(--clr-neutral-600));
    font-weight: 500;
    .text {
      &__md {
        padding: 0rem 3rem;
        display: none;
      }
      &__sm {
        display: block;
      }
    }
  }

  @media (min-width: 48rem) {
    &__info {
      flex-direction: row;
      top: 5rem;
      left: 4rem;
    }
    &__titles {
      h4 {
        font-size: 1rem;
      }

      h2 {
        font-size: 1.4rem;
        line-height: 1.5rem;
      }

      h3 {
        font-size: 0.8rem;
      }
    }

    &__text {
      .text {
        &__md {
          display: inline-block;
          font-size: 0.7rem;
          padding: 0rem 3rem;
        }
        &__sm {
          display: none;
        }
      }
    }
  }

  @media (min-width: 62rem) {
    &__info {
      top: 6rem;
    }

    &__titles {
      h4 {
        font-size: 1.2rem;
      }
      h2 {
        font-size: 2.4rem;
        line-height: 2rem;
      }
      h3 {
        font-size: 1.6rem;
      }
    }

    &__text {
      .text {
        &__md {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
