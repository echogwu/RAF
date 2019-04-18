<template>
  <div id="app">
    <quickMenu
      :menu-count="count"
      :icon-class="icons"
      :menu-url-list="menuUrlList"
      :position="position"
      :isOpenNewTab="isOpenNewTab"
      :backgroundColor="backgroundColor"
      :color="color"
    ></quickMenu>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import quickMenu from "vue-quick-menu";

export default {
  components: { quickMenu },
  data() {
    return {
      count: 4,
      icons: [
        "fa fa-blogs",
        "fa fa-cooking",
        "fa fa-podcasts",
        "fa fa-miscellaneous"
      ],
      menuUrlList: [
        {
          isLink: true,
          url: "/blogs"
        },
        {
          isLink: true,
          url: "/cooking"
        },
        {
          isLink: true,
          url: "/podcasts"
        },
        {
          isLink: true,
          url: "/miscellaneous"
        }
      ],
      position: "top-left",
      isOpenNewTab: true,
      backgroundColor: "#17d3d3",
      color: "#ffffff"
    };
  }
};
</script>

<style scoped>
#app {
  box-sizing: border-box;
  width: 500px;
  padding: 0 20px 20px;
  margin: 0 auto;
}

.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-weight: normal;
  font-stretch: normal;
  font-size: inherit;
  line-height: 1;
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fa-blogs:before {
  content: "blogs";
}

.fa-podcasts:before {
  content: "podcasts";
}

.fa-cooking:before {
  content: "cooking";
}

.fa-miscellaneous:before {
  content: "miscellaneous";
}
</style>
