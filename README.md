# Palombe [![npm version](https://badge.fury.io/js/palombe.svg)](https://www.npmjs.com/package/palombe)

Palombe lets you send and receive messages synchronously through different processes using named pipes

## Quick example

```javascript
const palombe = require("palombe");

palombe.send("foo", "bar");
console.log(palombe.receive("foo").toString("utf-8")); // bar
```
