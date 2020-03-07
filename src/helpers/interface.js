// TODO test whether Date is new once used or if remains at runtime
let cleanState = {
    issueNumber: 0,
    subject: "",
    status: "",
    priority: "",
    assignedTo: "",
    overdueDays: 0,
    description: "",
    lastUpdated: null,
    dueDate: new Date(),
    createdDate: null,
    closedDate: null,
    closed: false
};

const localUrl = 'http://localhost:4000/';
const serverRoute = 'issuesroute/';
const serverRouteAdd = 'add/';
const serverRouteEdit = 'edit/';

module.exports = {
    cleanState,
    localUrl,
    serverRoute,
    serverRouteAdd,
    serverRouteEdit
};