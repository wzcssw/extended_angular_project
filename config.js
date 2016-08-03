module.exports = {
    port:  8080,

    api_host: 'localhost',
    api_port: 3000,
    app_token: '1adf912ff8e4',

    session_redis: {
        key: ['NODE_TEST_KEY'],
        host: '127.0.0.1',
        port: 6379,
        ttl: 3600,
        db: 13
    }
};
