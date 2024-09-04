const moment = require('moment');

exports.myDateTime = function() {
    return moment().format('dddd, MMMM Do YYYY, h:mm:ss A');
};
