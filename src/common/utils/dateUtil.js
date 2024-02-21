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

const getDiffString = (dateString) => {
    const curDate = moment();
    const date = moment(dateString, "YYYY-MM-DD HH:mm:ss")

    if(!date.isValid) {
        return "미정";
    }

    const minDiff = Math.floor(moment.duration(date.diff(curDate)).asMinutes());
    const hourDiff = Math.floor(moment.duration(date.diff(curDate)).asHours());

    if(minDiff > 60) {
        return `${hourDiff}시간 후 시작 예정(${date.format("HH:mm")})`
    } else if(minDiff < 60 && minDiff >= 0) {
        return `${minDiff}분 후 시작 예정(${date.format("HH:mm")})`
    } else {
        return "곧 시작 예정";
    }
}

const formatSqlDate = (sqlDate) => {
    return moment(sqlDate).utc().format("YYYY-MM-DD HH:mm:ss");
}

export {getTodayDateString, getNextDayDateString, getBeforeDayDateString, getDiffString, formatSqlDate};