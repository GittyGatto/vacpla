export function getCurrentAnnualLeave(ev) {
    const annualLeaves = ev.data.annualLeaves;
    const currentYear = (new Date()).getFullYear();
    let result = annualLeaves.filter(function (annualLeave) {
        return annualLeave.annual === currentYear.toString();
    });
    return result[0].leave;
}


export function extractAnnualLeave(annualLeaves) {
    const currentYear = (new Date()).getFullYear();
    let result = annualLeaves.filter(function (annualLeave) {
        return annualLeave.annual === currentYear.toString();
    });
    return result[0].leave;
}
