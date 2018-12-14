export function getAllRequests(ev) {
  return getVacationRequests(ev);
}

export function getVacationRequests(ev) {
    const currentYear = (new Date()).getFullYear();
    const requests = ev.data.vacationRequests[currentYear];
    return requests;
}