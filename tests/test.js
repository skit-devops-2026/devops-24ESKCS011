const fs = require("fs");
const assert = require("assert");

console.log("Running Campus Connect tests...");

assert.ok(fs.existsSync("index.html"), "index.html is missing");
assert.ok(fs.existsSync("events.html"), "events.html is missing");
assert.ok(fs.existsSync("css/style.css"), "CSS file is missing");
assert.ok(fs.existsSync("js/script.js"), "JavaScript file is missing");

const index = fs.readFileSync("index.html", "utf8");
const events = fs.readFileSync("events.html", "utf8");

assert.ok(index.includes("Campus Connect"), "Home page content is incorrect");
assert.ok(events.includes("Technology"), "Technology event category is missing");
assert.ok(events.includes("Cultural"), "Cultural event category is missing");
assert.ok(events.includes("Sports"), "Sports event category is missing");

console.log("All Campus Connect tests passed!");