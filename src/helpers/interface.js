const cleanState = {
    issueNumber: null,
    subject: "",
    status: "",
    priority: "",
    assignedTo: "",
    overdueDays: null,
    description: "",
    lastUpdated: null,
    dueDate: null,
    createdDate: null,
    createdBy: "",
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

// Number of milliseconds in a day for calculating overdue days
const dailyMilliseconds = 1000 * 60 * 60 * 24;



module.exports = {
    cleanState,
    localUrl,
    serverRoute,
    serverRouteAdd,
    serverRouteEdit,
    statusList,
    priorityList,
    dailyMilliseconds
};