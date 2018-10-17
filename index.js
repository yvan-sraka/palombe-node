const fs = require("fs");
const mkfifo = require("mkfifo");

exports.mkfifo = function(name) {
    const prefix = "/tmp/palombe/";
    const path = `${prefix}${name}`;
    fs.mkdirSync(prefix);
    mkfifo.mkfifoSync(path, 0o600);
    return path;
}

exports.send = function(name, value) {
    const path = exports.mkfifo(name);
    fs.appendFileSync(path, value);
}

exports.receive = function(name) {
    const path = exports.mkfifo(name);
    const output = fs.readFileSync(path);
    fs.unlinkSync(path);
    return output;
}
