<script setup lang="ts">
  import { ref } from 'vue'
  const emit = defineEmits(['activatedSideBar']);
  const activated = ref(false);
  const onActivated = () => {
    activated.value = !activated.value
    emit('activatedSideBar', activated.value)
  }
</script>
<template>
  <div class="nav-container separator-container">
    <div class="vertical-center-container">
      <q-btn
        flat 
        round 
        class="menu-btn"
        :icon="activated ? 'close' : 'menu'" 
        size="0.8rem"
        @click="onActivated"/>
      <q-icon name="shopping_basket" size="28px" />
      <span>J-List</span>
    </div>
    <div class="vertical-center-container end-container">
      <q-btn round flat icon="dark_mode" />
    </div>
  </div>
</template>

<style scoped>
  .nav-container {
    background-color: var(--secondary);
    color: var(--app-bg)
  }
  .nav-container span {
    font-size: 24px;
    font-weight: var(--header-weight);
  }
  .menu-btn {
    margin-right: 10px;
    display: none;

  }
  @media screen and (max-width: 1024px) {
    .menu-btn {
      display: flex;
    }
  }
</style>