import axios from "axios";
// import router from "@/router";

// import { toast } from "@/services/toast";
// import { loading } from "@/services/loading";
// import { authenticationRoutes } from "@/constants/router";
// // import authStoreConstants from "@/constants/store/authentication.constant";
// // const { actions: authActionsConstants } = authStoreConstants;
// // import useAuthenticationStore from "@/store/authentication";
// import ChainOfResponsibility from "@/utils/chainOfResponsibility";
// const { createChainNode } = ChainOfResponsibility;
// import { decrypt, encrypt } from "@/services/crypto";
// import generateCacheKey from "@/utils/generateCacheKey";

// const authStore = useAuthenticationStore();
// const showLoading = (config, key) => {
//   if (!config) return;

//   const { text = "در حال دریافت اطلاعات...", type = "circular" } = config;
//   loading.show({ key, text, type });
// };
const onRequest = (request) => {
  return;
  const { url, params, data, loading: loadingConfig, cache } = request;
  const storedData = decrypt(
    sessionStorage.getItem(generateCacheKey({ url, params, data }))
  );

  showLoading(loadingConfig, url);

  const requestChainOfResponsibility = new ChainOfResponsibility(
    [
      createChainNode(cache && storedData, () => {
        throw new axios.Cancel({
          isCached: true,
          data: storedData,
        });
      }),
      createChainNode(true, () => {
        request.headers = {
          "gateway-system": import.meta.env.VITE_GATEWAY_SYSTEM,
          "Cache-Control": "no-cache", // JESUS !!
        };
        const token = sessionStorage.getItem("access_token");

        if (token) request.headers["gateway-token"] = token;

        return request;
      }),
    ],
    "first"
  );

  return requestChainOfResponsibility.execute();
};
const onRequestError = (error) => Promise.reject(error);

const onResponse = (response) => {
  return;
  //   const { url, params, data, loading: showLoading, showToast } = response.config;

  //   const responseChainOfResponsibility = new ChainOfResponsibility([
  //     createChainNode(response.data?.data?.message && showToast, () => {
  //       toast.showMessage({
  //         message: response?.data?.data?.message?.fa,
  //         color: "success",
  //       });
  //     }),
  //     createChainNode(response.config.cache, () => {
  //       sessionStorage.setItem(
  //         generateCacheKey({ url, params, data: JSON.parse(data || "{}") }),
  //         encrypt(response.data?.data),
  //       );
  //     }),
  //     createChainNode(showLoading, () => {
  //       loading.hide({ key: url });
  //     }),
  //   ]);
  //   responseChainOfResponsibility.execute();

  return response.data;
};

const handleRetry = (error) => {
  const { retry } = error.config;
  const {
    count = 5,
    mode = "exponential",
    coefficient = 1,
    currentRetry = 1,
    delayFunction = (count, currentRetry) => currentRetry,
  } = retry;

  const delayMapper = {
    exponential: () => Math.pow(2, currentRetry) * coefficient + 1,
    logarithm: () => Math.log2(currentRetry + 1) * coefficient + 1,
    linear: () => coefficient,
    custom: () => delayFunction(count, currentRetry),
  };

  if (currentRetry < count) {
    const delay = delayMapper[mode]();
    const requestConfig = error.config;
    requestConfig.retry = {
      count,
      mode,
      coefficient,
      currentRetry: currentRetry + 1,
    };
    return new Promise((resolve) =>
      setTimeout(() => resolve(axios.request(requestConfig)), delay * 1000)
    );
  }

  error.config.retry = false;
};

const onResponseError = (error) => {
  return Promise.reject(error.response);
  const metaCode = error?.response?.data?.meta?.code;
  const statusCode = parseInt(error.response && error.response.status);

  const errorChainOfResponsibility = new ChainOfResponsibility([
    createChainNode(error.config?.showToast, () => {
      toast.showMessage({
        message:
          error?.response?.data?.data?.message?.fa || "خطا در ارتباط با سرور",
        color: "error",
        id: metaCode,
      });
    }),
    createChainNode(
      statusCode === 401 || metaCode === "tokenNotProvided",
      () => {
        authStore[authActionsConstants.REMOVE_TOKEN]();
        router.push(authenticationRoutes.ROOT_PATH);
      }
    ),
    createChainNode(error.config?.retry, () => handleRetry(error)),
    createChainNode(error?.message?.isCached && error?.message?.data, () =>
      Promise.resolve({
        data: error.message.data,
      })
    ),
    createChainNode(error.config?.loading, () => {
      loading.hide({ key: error.config.url });
    }),
    createChainNode(true, () => Promise.reject(error.response)),
  ]);

  return errorChainOfResponsibility.execute();
};

export default function (app) {
  // global axios defaults
//   axios.defaults.showToast = true;
//   axios.defaults.loading = false;
//   axios.defaults.retry = false;
  axios.defaults.timeout = 3 * 60 * 1000;
  axios.interceptors.request.use(onRequest, onRequestError);
  axios.interceptors.response.use(
    (response) => onResponse(response),
    (error) => onResponseError(error)
  );
}
