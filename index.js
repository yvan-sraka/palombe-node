const fs = require("fs")
const mkfifo = require("mkfifo")

__mkfifo = name => {
    const prefix = "/tmp/palombe/"
    const path = `${prefix}${name}`
    if (!fs.existsSync(prefix))
        fs.mkdirSync(prefix)
    if (!fs.existsSync(path))
        mkfifo.mkfifoSync(path, 0o600)
    return path
}

exports.send = (name, value) => {
    const path = __mkfifo(name)
    fs.appendFileSync(path, value)
}

exports.receive = name => {
    const path = __mkfifo(name)
    const output = fs.readFileSync(path)
    fs.unlinkSync(path)
    return output
}
