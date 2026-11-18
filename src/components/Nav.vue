<template>
  <div class="nav-container separator-container">
    <div class="vertical-center-container">
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
</style>