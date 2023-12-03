import ChainOfResponsibility from "./chainOfResponsibility";
const createChainNode = ChainOfResponsibility.createChainNode;

const isDevelopmentMode = import.meta.env.DEV;
const retrievingChainOfResponsibility = new ChainOfResponsibility(
  [
    createChainNode(isDevelopmentMode, () => "/"),
    //TODO: why this happens?
    createChainNode(!isDevelopmentMode && !!import.meta.env, (key) =>
      JSON.parse(JSON.stringify(import.meta.env?.[`VITE_${key}`])),
    ),
    createChainNode(true, () => "/"),
  ],
  "first",
);

const getServiceBaseUrl = (key) => retrievingChainOfResponsibility.execute(key);
export default getServiceBaseUrl;
