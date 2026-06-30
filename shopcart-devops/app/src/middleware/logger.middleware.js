const logger = (req, res, next) => {

    const startTime = Date.now();

    console.log("========================================");
    console.log(`Request Started`);
    console.log(`${req.method} ${req.originalUrl}`);
    console.log(`User-Agent : ${req.headers["user-agent"]}`);
    console.log(`IP : ${req.ip}`);
    console.log(`Time : ${new Date().toLocaleString()}`);

    res.on("finish", () => {

        const duration = Date.now() - startTime;

        console.log(`Status : ${res.statusCode}`);
        console.log(`Duration : ${duration} ms`);
        console.log("========================================\n");

    });

    next();

};

module.exports = logger;
