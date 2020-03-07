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


// "ENUMS"
// Status
const statusList = [
// TODO might want value to be int later on if used in a switch statement
    {value: 'Open', label: 'Open'},
    {value: 'Closed', label: 'Closed'},
    {value: 'Inactive', label: 'Inactive'}
];

// Priority
const priorityList = [
    {value: 'Low', label: 'Low'},
    {value: 'Medium', label: 'Medium'},
    {value: 'High', label: 'High'},
    {value: 'Critical', label: 'Critical'}
];




module.exports = {
    cleanState,
    localUrl,
    serverRoute,
    serverRouteAdd,
    serverRouteEdit,
    statusList,
    priorityList
};