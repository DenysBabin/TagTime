<template>
  <div id="app">
    <tag-menu></tag-menu>
    <router-view/>
  </div>
</template>

<script>
import TagMenu from "@/components/TagMenu";
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    TagMenu,
  }
})

export default class App extends Vue {}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
