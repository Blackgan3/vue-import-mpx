<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Button @tap="testButtonTap">hello world</Button>
    <Hello />
  </div>
</template>

<script>
import Vue from 'vue';
import Button from '@didi/turbo-ui/lib/button/button.mpx?isComponent';
import Hello from '../components/helloWorld.mpx?isComponent'
export default Vue.extend({
  name: 'Home',
  components: {
    Button,
    Hello
  },
  methods: {
    testButtonTap() {
      console.log('testButtonTap')
    }
  }
});
</script>
