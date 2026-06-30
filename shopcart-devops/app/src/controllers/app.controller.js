const health = (req, res) => {

    res.status(200).json({

        success: true,

        message: "Application Healthy",

        timestamp: new Date(),

    });

};

const info = (req, res) => {

    res.status(200).json({

        app: process.env.APP_NAME,

        version: "1.0.0",

        environment: process.env.NODE_ENV,

        nodeVersion: process.version,

    });

};

module.exports = {

    health,

    info,

};
