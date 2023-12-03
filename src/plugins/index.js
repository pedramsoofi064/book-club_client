import router from "@/router";
import pinia from "@/stores";

export default function (app, plugins) {
  app.use(router);
  app.use(pinia);
  for (const plugin of plugins) {
    import(`./${plugin}/${plugin}.plugin.js`)?.then((module) => {
      module?.default(app);
    });
  }
}
