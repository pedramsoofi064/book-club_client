import { computed } from "vue";

export function useClassModifier(rootName, conditionMapper) {
  return computed(() => {
    return conditionMapper.value.map((item) => {
      if (item.condition) return rootName + item.modifier;
    });
  });
}
