exports.send = (name, value) => {
    const path = __mkfifo(name)
    fs.appendFileSync(path, value)

    var exec = require('child_process').exec;
    exec('pwd', function callback(error, stdout, stderr){
        // result
    });
}

exports.receive = name => {
    const path = __mkfifo(name)
    const output = fs.readFileSync(path)
    fs.unlinkSync(path)
    return output
}
