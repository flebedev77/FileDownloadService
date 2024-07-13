const { exec } = require("child_process");

exec("npx http-server --port 10000", (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(stdout);
    console.log(stderr);
});