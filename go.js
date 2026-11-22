// Forward an old link to the app, keeping its view (the URL hash) and adding the preset keys.
const add = {"fp": "1"};
const withBooth = {"bp": "on", "bc": "line"};   // added too when the link selects a booth: its footprint needs the booth layers
const p = new URLSearchParams(location.hash.slice(1));
for (const [k, v] of Object.entries({ ...add, ...(p.has('bt') ? withBooth : {}) })) if (!p.has(k)) p.set(k, v);
const h = p.toString().replace(/%7C/gi, '|').replace(/%3A/gi, ':').replace(/%2C/gi, ',').replace(/%2F/gi, '/');
location.replace(new URL("../India_Hex/", location.origin + "/Elections/").href + (h ? `#${h}` : ''));  // from deep links too
