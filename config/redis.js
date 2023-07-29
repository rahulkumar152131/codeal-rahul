const redis = require('redis');

const client = redis.createClient(6379, '127.0.0.1');

client.on('connect', function () {
  console.log('Connected to Redis server');
});

client.on('error', function (err) {
  console.error('Error:', err);
});
