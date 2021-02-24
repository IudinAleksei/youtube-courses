function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("amodal");
}

$.modal = function (options) {
  return {
    open() {},
    close() {},
    destroy() {},
  };
};
