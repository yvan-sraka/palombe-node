const fs = require("fs");
const mkfifo = require("mkfifo");

exports.send = function(name, value) {
    const path = `/tmp/palombe/${name}`;
    fs.mkdirSync(`/tmp/palombe/`);
    mkfifo.mkfifoSync(path, 0o600);
    fs.appendFileSync(path, value);
}

exports.receive = function(name) {
    const path = `/tmp/palombe/${name}`
    while (!fs.existsSync(path));
    const output = fs.readFileSync(path);
    fs.unlinkSync(path);
    return output;
}
