<template>
  <div class="home">
    resume
    <ul>
      <li v-for="item in 99" :key="item"> {{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  activated () {
    document.body.scrollTop = this.$route.meta.saveTop
  }
}
</script>
