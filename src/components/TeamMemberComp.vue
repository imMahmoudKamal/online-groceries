<template>
  <div class="team__member">
    <div class="wrapper">
      <div class="team__img">
        <img src="@imgs/teamMember.png" />
      </div>
      <div class="team__info">
        <strong class="member__name">mahmoud kamel</strong>
        <p class="member__job">account manger</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMemberComp',
};
</script>

<style lang="scss" scoped>
.team {
  &__member {
    padding-top: 100%;
    position: relative;
    border-radius: 0.75rem;
    background-color: rgb(var(--clr-orange) / 10%);
    .wrapper {
      position: absolute;
      inset: 0;
      padding: 0.75rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-decoration: none;
      border-radius: 0.75rem;
      color: rgb(var(--clr-blue-900));
      border: 1px solid rgb(var(--clr-orange) / 70%);
    }
  }

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 100%;
    position: relative;
    img {
      position: relative;
      height: 100%;
      width: 60%;
    }
  }

  &__info {
    margin-top: 0.9rem;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-transform: capitalize;
    line-height: 1.4;
    .member {
      &__name {
        font-weight: 800;
        font-size: 0.7rem;
      }
      &__job {
        font-weight: 400;
        font-size: 0.55rem;
        color: rgb(var(--clr-primary));
      }
    }
  }

  @media (min-width: 36rem) {
    &__info {
      .member {
        &__name {
          font-size: 0.8rem;
        }
        &__job {
          font-size: 0.6rem;
        }
      }
    }
  }
  @media (min-width: 75rem) {
    &__info {
      .member {
        &__name {
          font-size: 0.9rem;
        }
        &__job {
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>
