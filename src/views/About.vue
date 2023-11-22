<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{ count }}</span>
  </div>
</template>
<script lang="js">
export default {
  data() {
    return {
      count: 0
    }
  },
  created() {
    this.count++
    console.log('count:', this.count)
  }
}
</script>
