<template>
  <div class="current-call">
    <div class="current-call__header">
      <h1 class="current-call__title">Текущий звонок</h1>
      <button class="btn btn-close" @click="$emit('toggle', false)">Закрыть</button>
    </div>
    <div class="current-call__display">
      <div class="current-call__data">
        <div class="current-call__data__inner">
          <ul class="current-call__data-list">
            <li v-for="call in callData" :key="call">
              <b>{{call.title}}:</b>
              <span>{{call.data}}</span>
            </li>
          </ul>
          <b>Комментарий оператора:</b>
          <textarea class="operator-comment"></textarea>
          <button class="btn">Добавить</button>
        </div>
      </div>
      <div class="current-call__controls">
        <div class="current-call__controls__inner">
          <button class="btn" v-for="button in buttons">{{button.title}}</button>
          <div class="end__buttons">
            <button class="btn btn__end-call">Завершить разговор</button>
            <button class="btn btn__end-processing">Завершить обработку</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentCallView",
  props: {
    display: Boolean
  },
  data() {
    return {
      callData: [
        {key: "call_type", title: "Звонок: входящий/исходящий", data: "inp/out"},
        {key: "telephone_number", title: "Номер телефона", data: "+7(999)123-45-67"},
        {key: "telephone_type", title: "Вид телефона", data: "type"},
        {key: "call_duration", title: "Время разговора", data: "hh:mm:ss"},
        {key: "call_recording", title: "Ведение аудиозаписи", data: "true/false"},
      ],
      buttons: [
        {key: "start_out_call", title: "Начать исходящий"},
        {key: "send_message", title: "Отправить SMS"},
        {key: "send_email", title: "Отправить EMAIL"},
        {key: "add_promise", title: "Добавить обещание"},
        {key: "connect_operator", title: "Привязать оператора"},
        {key: "change_strategy", title: "Сменить стратегию"},
        {key: "call_result", title: "Результат звонка"},
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.current-call__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .current-call__title {
    text-transform: uppercase;
  }
  .btn-close {
    background-color: #802e2e;
  }
}

.current-call__display {
  display: flex;
  justify-content: space-between;
}

.current-call__data {
  width: 50%;
  border-right: 1px solid $accent;
  .current-call__data__inner {
    display: flex;
    flex-direction: column;
    width: 90%;
    .operator-comment {
      display: block;
      width: 100%;
      height: 60px;
      margin-top: 10px;
      padding: 8px;
      border-radius: 5px;
      background-color: $dark;
      resize: none;
      outline: none;
    }
    .btn {
      margin-top: 15px;
      align-self: flex-end;
    }
  }
}

.current-call__data-list {
  li {
    margin-bottom: 15px;
  }
  b {
    display: block;
  }
}

.current-call__controls {
  display: flex;
  justify-content: center;
  width: 50%;
}
.current-call__controls__inner {
  width: 90%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  .btn {
    padding: 5px;
  }
}

.end__buttons {
  text-align: right;
  margin-top: auto;
  .btn__end-call {
    background-color: #592121;
    margin-bottom: 10px;
  }
  .btn__end-processing {
    background-color: #425e23;
  }
}
</style>