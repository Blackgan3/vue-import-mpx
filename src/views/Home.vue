<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Button @tap="testButtonTap">hello world</Button>
  </div>
</template>

<script>
import Vue from 'vue';
import Button from '@didi/turbo-ui/lib/button/button.mpx?isComponent';
export default Vue.extend({
  name: 'Home',
  components: {
    Button
  },
  methods: {
    testButtonTap() {
      console.log('testButtonTap')
    }
  }
});
</script>
