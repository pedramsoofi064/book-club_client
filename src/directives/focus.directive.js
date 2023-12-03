const focus = {
  mounted(el, { value }) {
    if (value === undefined || value) el.focus();
  },
};

export default focus;
