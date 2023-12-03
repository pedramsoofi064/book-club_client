export default function (app) {
  let { $router } = app?.config?.globalProperties;
  $router.beforeEach(async (to, from) => {
    console.log("auth middle ware");         
    // const { isAuthRequired = false } = to.meta;
    // const sharedStore = useSharedStore();
    // const appType = sharedStore.appType;
    // const isLoggedIn = sessionStorage.getItem("access_token");
    // if (!isLoggedIn && isAuthRequired) {
    //   if (appType === "pwa") {
    //     window.location.href = "https://pwa.omidbank.ir/";
    //     return false;
    //   }
    //   return { name: authenticationRoutes.ROOT_NAME };
    //   // TODO: should be fixed or removed
    // } else if (isLoggedIn && !to.meta.isAuthRequired && from?.meta.isAuthRequired) {
    //   return { name: from.name };
    // }
    return true;
  });
}
