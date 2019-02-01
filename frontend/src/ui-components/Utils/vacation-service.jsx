import holidayStore from "../../stores/holiday-store";
import {holidaysToDateString} from "./holidayService";

export function calculateVacationDays(range) {
    let vacCount = 0;
    range.forEach(curr => {
        if (!isWeekend(curr) && !isPubicHoliday(curr)) {
            vacCount++;
        }
    });
    return vacCount;
}

export function giveVacationDays(range) {
    let vacDays = [];
    range.forEach(day => {
        if (!isWeekend(day) && !isPubicHoliday(day)) {
            vacDays.push(day);
        }
    });
    return vacDays;
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
    const holidays = holidaysToDateString(holidayStore.data.holidays);
    const requestedDay = new Date(date).toDateString();
    const indexOf = holidays.indexOf(requestedDay);
    if (indexOf >= 0) {
        return true;
    } else {
        return false;
    }
}