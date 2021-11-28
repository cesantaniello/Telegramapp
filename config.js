const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://admin:admin@cluster0.ni2ao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
};

module.exports = config;