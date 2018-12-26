
if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
    console.log('running in prod...')
} else{
    module.exports = require('./dev');
    console.log('running in dev...')
}