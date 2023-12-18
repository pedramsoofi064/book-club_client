import { reactive, onUnmounted, onMounted } from "vue";

const useWindowDimensions = () => {
  const dimensions = reactive({ width: window.innerWidth, height: window.innerHeight });

  const updateDominations = () => {
    dimensions.width = window.innerWidth;
    dimensions.height = window.innerHeight;
  };

  onMounted(() => window.addEventListener("resize", updateDominations));

  onUnmounted(() => window.removeEventListener("resize", updateDominations));

  return dimensions;
};

export default useWindowDimensions;
