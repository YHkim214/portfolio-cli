import moment from "moment";

const getTodayDateString = () => {
    return moment().format("YYYY-MM-DD");
}

const getNextDayDateString = (dateString) => {
    const date = moment(dateString, "YYYY-MM-DD");

    if(!date.isValid) {
        return getTodayDateString();
    }

    return date.add(1 , 'days').format("YYYY-MM-DD");
}

const getBeforeDayDateString = (dateString) => {
    const date = moment(dateString, "YYYY-MM-DD");

    if(!date.isValid) {
        return getTodayDateString();
    }

    return date.add(-1 , 'days').format("YYYY-MM-DD");
}

export {getTodayDateString, getNextDayDateString, getBeforeDayDateString};