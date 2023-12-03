import ChainOfResponsibility from "@/utils/chainOfResponsibility";

const createChainNode = ChainOfResponsibility.createChainNode;

const addSkeletonClass = (element) => element.classList.add("skeleton-loading");

const loadSkeleton = (element, self) => {
  const elementChainOfResponsibility = new ChainOfResponsibility(
    [
      createChainNode(self, () => element.classList.add("skeleton-loading")),
      createChainNode(element.tagName === "IMG", () => addSkeletonClass(element.parentElement)),
      createChainNode(!element.children.length || element.tagName === "BUTTON", () =>
        addSkeletonClass(element),
      ),
      createChainNode(true, () => {
        for (const child of element.children) {
          loadSkeleton(child);
        }
      }),
    ],
    "first",
  );
  elementChainOfResponsibility.execute();
};

const unLoadSkeleton = (element) => {
  element.classList.remove("skeleton-loading");
  for (const child of element.children) {
    unLoadSkeleton(child);
  }
};

const skeleton = {
  mounted(el, { value, modifiers }) {
    value ? loadSkeleton(el, modifiers.self) : unLoadSkeleton(el);
  },
  updated(el, { value, modifiers }) {
    value ? loadSkeleton(el, modifiers.self) : unLoadSkeleton(el);
  },
};

export default skeleton;
