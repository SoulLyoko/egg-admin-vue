import Vue from "vue";

const files = require.context("./", true, /index\.vue$/);

files.keys().forEach(key => {
  const component = files(key).default;
  Vue.component(component.name, component);
});
