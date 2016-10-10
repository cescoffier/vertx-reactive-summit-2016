module.exports = {
    bridge: 'http://' + process.env.VERTX_OPENSHIFT_SLIDES_SERVICE_HOST + ':' +process.env.VERTX_OPENSHIFT_SLIDES_SERVICE_PORT + '/eventbus'
};
