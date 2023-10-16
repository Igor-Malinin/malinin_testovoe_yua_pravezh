module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/malinin_testovoe_yua_pravezh/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/_reset.scss";
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
          @import "@/styles/_base.scss";
          `,
      },
    },
  },
}
