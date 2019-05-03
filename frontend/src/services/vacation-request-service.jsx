export function getVacationRequests(ev) {
    const currentYear = (new Date()).getFullYear();
    const requests = ev.data.vacationRequests[currentYear];
    return requests;
}

export function getFilteredRequestsByStatus(ev, searchString) {
    if (!ev.data.vacationRequests[(new Date()).getFullYear()]) {
        return {};
    }
    const requests = getVacationRequests(ev);
    let approvedRequests = requests.filter(function (curr) {
        return (curr.vacationRequestStatus === searchString)
    });
    return approvedRequests;
}

