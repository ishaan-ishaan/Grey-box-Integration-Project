import { add } from "../shared/util";

globalThis.doGet = (e: GoogleAppsScript.Events.DoGet) => {
  const params = e?.parameter || {};

  // JSON mode
  if (params.mode === "json") {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "JSON from GAS",
        timestamp: new Date().toISOString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  // a + b mode
  if (params.a !== undefined && params.b !== undefined) {
    const a = Number(params.a);
    const b = Number(params.b);
    const result = add(a, b);

    return ContentService.createTextOutput(
      JSON.stringify({ a, b, result })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  // Default output
  return ContentService.createTextOutput("Use ?mode=json or ?a=1&b=2");
};
