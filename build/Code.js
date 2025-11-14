(() => {
  // src/shared/util.ts
  function add(a, b) {
    return a + b;
  }

  // src/gas/code.ts
  globalThis.doGet = (e) => {
    const params = (e == null ? void 0 : e.parameter) || {};
    if (params.mode === "json") {
      return ContentService.createTextOutput(
        JSON.stringify({
          status: "success",
          message: "JSON from GAS",
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    if (params.a !== void 0 && params.b !== void 0) {
      const a = Number(params.a);
      const b = Number(params.b);
      const result = add(a, b);
      return ContentService.createTextOutput(
        JSON.stringify({ a, b, result })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    return ContentService.createTextOutput("Use ?mode=json or ?a=1&b=2");
  };
})();
