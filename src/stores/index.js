import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import crypto from "@/services/crypto";

const pinia = createPinia();
pinia.use(
  createPersistedState({
    auto: true,
    storage: sessionStorage,
    serializer: {
      deserialize: crypto.decrypt,
      serialize: crypto.encrypt,
    },
  }),
);

export const resetAllStores = () => {
  sessionStorage.clear();
  pinia._s.forEach((store) => store.$reset());
};

export default pinia