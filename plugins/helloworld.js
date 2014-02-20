'use strict';

// `exports.attach` gets called by broadway on `app.use`
exports.attach = function(options) {
    this.hello = function(world) {
        console.log('Hello ' + world + options.delimiter || '.');
    };
};

// `exports.init` gets called by broadway on `app.init`.
exports.init = function(done) {
    // this plugin doesnt require any initialization
    return done();
};