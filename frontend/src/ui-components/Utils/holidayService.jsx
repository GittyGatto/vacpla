export function holidaysToDateString(holidays) {
    let result = [];
    holidays.forEach(holiday => {
        result.push(new Date(holiday).toDateString());
    });
    return result;
}