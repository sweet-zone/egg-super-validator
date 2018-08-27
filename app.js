
'use strict';

module.exports = app => {
    if(app.config.superValidator.middleware) {
        app.config.coreMiddlewares.push('superValidator');
    }
};