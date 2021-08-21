<template>
  <div class="home">
    Всем привет!!
    Меня зовут Денис и этот проект, который я создаю, будет помощьником мне в логировании времени!
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {}
</script>
