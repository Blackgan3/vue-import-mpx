<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Hello />
  </div>
</template>

<script>
import Vue from 'vue';
import Hello from '../components/helloWorld.mpx?isComponent'
export default Vue.extend({
  name: 'Home',
  components: {
    Hello
  },
  methods: {
    testButtonTap() {
      console.log('testButtonTap')
    }
  }
});
</script>
