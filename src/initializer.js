import { createApp } from "vue";
import installPlugins from "./plugins";

import installMiddleware from "./middleware";
import authMiddleware from './middleware/auth.middleware'

import installDirectives from "./directives";

const config = {
  plugins: ["axios", "vee-validate"],
  middleware: [authMiddleware],
  directives: ['skeleton']
};

import App from "./App.vue";

export default function () {
  const app = createApp(App);
  installPlugins(app , config.plugins);
  installMiddleware(app , config.middleware);
  installDirectives(app , config.directives);
  return app;
}
