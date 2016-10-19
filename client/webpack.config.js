switch (process.env.NODE_ENV) {
    case 'production':
        console.log('===Running production===');
        module.exports = require('./config/webpack.production.js');
        break;
    case 'integration':
        console.log('===Running integration===');
        module.exports = require('./config/webpack.integration.js');
        break;
    case 'development':
    default:
        console.log('===Running development===');
        module.exports = require('./config/webpack.development.js');
}
