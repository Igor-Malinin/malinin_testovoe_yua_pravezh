<template>
  <div class="debtor-view">
    <div class="container">
      <div class="debtor-view__header">
        <h1 class="debtor-view__title">Данные должника</h1>
        <button class="btn" @click="toggleModal(true)">Текущий звонок</button>
        <TheDialog v-model:show="display">
          <current-call-view @toggle="toggleModal"/>
        </TheDialog>

      </div>
    </div>
    <div class="debtor-view__inner">
      <nav class="debtor-view__navigation">
        <div class="container container__nav-links">
          <router-link to="/debtor-data">Общие данные</router-link>
          <router-link to="/debt-info">Информация о долге</router-link>
          <router-link to="/payment-info">Информация о платежах</router-link>
          <router-link to="/promises-info">Информация об обещаниях</router-link>
          <router-link to="/work-in-court">Работа в суде</router-link>
        </div>
      </nav>
      <div class="container">
        <router-view />
      </div>
    </div>
    <div class="container">
      <div class="debtor-view__history">
        История взаимодействия
      </div>
    </div>
  </div>
</template>

<script>

import CurrentCallView from "@/views/CurrentCallView.vue";
import TheDialog from "@/components/UI/TheDialog.vue";

export default {
  name: 'DebtorView',
  components: {
    TheDialog,
    CurrentCallView
  },
  data() {
    return {
      display: false
    }
  },
  methods: {
    toggleModal(value) {
      this.display = value
    }
  }
}
</script>

<style lang="scss" scoped>

.debtor-view__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  .debtor-view__title {
    text-transform: uppercase;
  }
}


.debtor-view__inner {
  padding: 40px 0;
  border-bottom: 1px solid $accent;
}

.debtor-view__navigation {
  margin-bottom: 20px;
  border-bottom: 1px solid $accent;
  .container__nav-links {
    display: flex;
    justify-content: space-between;
    a {
      padding: 10px;
      border: 1px solid $accent;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom: none;
    }
    a.router-link-exact-active {
      color: $accent;
      border-bottom: 1px solid $dark;
      margin-bottom: -1px;
    }
  }
}

.debtor-view__history {
  padding: 40px 0;
}
</style>
