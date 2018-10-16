const fs = require("fs");
const mkfifo = require("mkfifo");

const PREFIX = "/tmp/palombe/";

exports.send = function(name, value) {
    const path = `${PREFIX}${name}`;
    fs.mkdirSync(`${PREFIX}`);
    mkfifo.mkfifoSync(path, 0o600);
    fs.appendFileSync(path, value);
}

exports.receive = function(name) {
    const path = `${PREFIX}${name}`
    while (!fs.existsSync(path));
    const output = fs.readFileSync(path);
    fs.unlinkSync(path);
    return output;
}
