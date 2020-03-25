const myConstants = require('./interface');

function calculateOverdueDays(date1, date2) {
    return Math.round((new Date(date2) - new Date(date1)) / myConstants.dailyMilliseconds);
}

module.exports = {
    calculateOverdueDays
};