// custom helper for handlebars to formate time data
module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    }
}