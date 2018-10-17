# Palombe [![npm version](https://badge.fury.io/js/palombe.svg)](https://www.npmjs.com/package/palombe)

Palombe lets you send and receive messages synchronously through different processes using named pipes

## Quick example

### Thread A

```javascript
const palombe = require("palombe");

palombe.send("foo", "bar");
```

### Thread B

```javascript
const palombe = require("palombe");

console.log(palombe.receive("foo").toString("utf-8")); // bar
```
