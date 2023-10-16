<template>
  <section class="debtor-data">
    <h2 class="visually_hidden">Данные о должнике</h2>
    <ul class="debtor-data__list">
      <li class="debtor-data__list__item" v-for="data in debtorData" :key="data.key">
        <b>{{data.title}}:</b>
        <span>{{data.data}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "DebtorData",
  data() {
    return {
      debtorData: [
        {key: "status", title: "Статус", data: "status"},
        {key: "strategy_stage", title: "Этап стратегии", data: "stage"},
        {key: "next_strategy_stage", title: "След этап стратегии: дата/вид/шаблон", data: "date/view/template"},
        {key: "debtor_fio", title: "ФИО должника", data: "fio"},
        {key: "birth_date", title: "Дата рождения", data: "dd/mm/yyyy"},
        {key: "pensioner_worker", title: "Пенс/рабочий", data: "pens/worker"},
        {key: "collector", title: "Взыскатель", data: "collector"},
        {key: "assignor", title: "Цедент", data: "assignor"},
        {key: "number_date_of_assignment", title: "№ и дата договора цессии", data: "№ dd/mm/yyyy"},
        {key: "number_date_of_loan", title: "№ и дата договора займа", data: "№ dd/mm/yyyy"},
        {key: "loan_amount", title: "Сумма займа", data: "loan amount"},
        {key: "return_period", title: "Срок возврата", data: "dd/mm/yyyy"},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.debtor-data__list {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.debtor-data__list__item {
  line-height: 25px;
  border-bottom: 1px solid $dark_accent;
  b {
    display: inline-block;
    min-width: 400px;
  }
}
</style>