export function holidaysToISODate(holidays) {
    let result = [];
    holidays.forEach(holiday => {
        result.push(new Date(holiday).toISOString());
    });
    return result;
}