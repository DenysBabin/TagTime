<template>
  <div>
    <el-menu
        router
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">


<!--      <el-menu router :default-active="$route.path">-->
        <template v-for="(rule, index) in $router.options.routes">
          <el-menu-item
              :key="index"
              :index="rule.path"
          >
            <i :class="rule.icon"></i>
            {{ rule.name }}
          </el-menu-item>
        </template>
<!--      <el-menu-item index="1">Мой профиль</el-menu-item>-->
<!--      <el-submenu index="2">-->
<!--        <template slot="title">Выпадашка</template>-->
<!--        <el-menu-item index="2-1">item one</el-menu-item>-->
<!--        <el-menu-item index="2-2">item two</el-menu-item>-->
<!--        <el-menu-item index="2-3">item three</el-menu-item>-->
<!--        <el-submenu index="2-4">-->
<!--          <template slot="title">Вторая выпадашка</template>-->
<!--          <el-menu-item index="2-4-1">item one</el-menu-item>-->
<!--          <el-menu-item index="2-4-2">item two</el-menu-item>-->
<!--          <el-menu-item index="2-4-3">item three</el-menu-item>-->
<!--        </el-submenu>-->
<!--      </el-submenu>-->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "TagMenu",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  mounted() {
    console.log(this.$router.options.routes)
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>