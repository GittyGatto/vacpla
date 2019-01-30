import holidayStore from "../../stores/holiday-store";
import {holidaysToISODate} from "./holidayService";

export function calculateVacationDays(range) {
    let vacCount = 0;
    range.forEach(curr => {
        if (!isWeekend(curr) && !isPubicHoliday(curr)) {
            vacCount++;
        }
    });
    return vacCount;
}

function isWeekend(date) {
    const day = date.getDay();
    if (day === 6 || day === 0) {
        return true;
    } else {
        return false;
    }
}

function isPubicHoliday(date) {
    const holidays = holidaysToISODate(holidayStore.data.holidays);
    const requestedDay = new Date(date).toDateString();
    const indexOf = holidays.indexOf(requestedDay);
    if (indexOf >= 0) {
        return true;
    } else {
        return false;
    }
}