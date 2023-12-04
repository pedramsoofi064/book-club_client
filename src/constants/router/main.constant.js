export default Object.freeze({
  HOME_PATH: "/",
  HOME_COMPONENT: import('@/views/home/home.view.vue'),
  HOME_NAME: "Home",
  HOME_META: {
    layout: 'main',
  },

  ABOUT_US_PATH: "/about-us",
  ABOUT_US_COMPONENT: import('@/views/about-us/about-us.view.vue'),
  ABOUT_US_NAME: "AboutUs",
  ABOUT_US_META: {
    layout: 'main-inner',
  }

});
