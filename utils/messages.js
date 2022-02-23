const moment = require("moment");

function formtMessage(username, text){
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }
}

module.exports = formtMessage;