const fs = require('fs');

exports.sendPFZ = function (req, res) {
        fs.createReadStream(`${process.env.FILE_DIRECTORY}/pfz/${req.params.image}`,
            {
                autoDestroy: true
            }
        )
            .on("error", () => res.status(400).send("Bad Request"))
            .on("end", () => {
                res.end();
            })
            .pipe(res);
}