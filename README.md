# Palombe [![npm version](https://badge.fury.io/js/palombe.svg)](https://badge.fury.io/js/palombe)

Palombe lets you send and receive messages synchronously through different processes using named pipes

## Quick example

```javascript
const palombe = require("palombe");

palombe.send("foo", "bar");
console.log(palombe.receive("foo").toString("utf-8")); // bar
```

[![Columba palumbus](https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Common_Wood_Pigeon.jpg/600px-Common_Wood_Pigeon.jpg)](https://en.wikipedia.org/wiki/Common_wood_pigeon)
