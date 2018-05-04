exports.defineManualTests = function (contentEl, beforeEach, createActionButton) {
  requireAllTestModules();
  detachJasmineInterfaceFromGlobal();

  Object.keys(exports.tests).forEach(function (key) {
      if (!exports.tests[key].getEnabled()) { return; }
      if (!exports.tests[key].hasOwnProperty('defineManualTests')) { return; }
      createActionButton(key, function () {
          beforeEach(key);
          exports.tests[key].defineManualTests(contentEl, createActionButton);
      });
  });

  createActionButton('Complex Test', function() {
    contentEl.innerHTML = "test";
  });
};