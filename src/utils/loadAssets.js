const loadAsset = (src) => {
  return new URL("../assets/imgs/" + src, import.meta.url).href;
};
export default loadAsset;
