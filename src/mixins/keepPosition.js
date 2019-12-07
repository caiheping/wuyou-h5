export default {
  activated () {
    document.body.scrollTop = this.$route.meta.saveTop
  }
}
