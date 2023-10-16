<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheDialog",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  position: fixed;
}

.dialog__content {
  min-width: 550px;
  max-height: 800px;
  background-color: $light;
  padding: 30px;
  border: 1px solid $dark_accent;
  border-radius: 8px;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, .30);
}
</style>