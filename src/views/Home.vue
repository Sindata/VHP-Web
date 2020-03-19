<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="menu" @click="linkTmp">
      <img
        alt="FOC"
        class="icon-image"
        src="@/assets/main-screen/FO-Cashier.svg"
      />
      <h6>Front Office Cashier</h6>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  // components: {
  //   HelloWorld,
  // },
  mounted() {
    console.log('mounted -> this.$api', this.$api);
  },
  methods: {
    linkTmp() {
      this.$router.push('/cashier-front-office');
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  text-align: center;
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  width: 150px;
  height: 150px;
  cursor: pointer;
}
.icon-image {
  width: 100px;
  height: 100px;
}
</style>
