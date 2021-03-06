/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = (empA) => {
    return {
        firstName: empA[0],
        familyName: empA[1],
        title: empA[2],
        payPerHour: empA[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};

const createEmployeeRecords = (arrEmp) =>{
    return arrEmp.map(emp=>{return createEmployeeRecord(emp)});
};

const createTimeInEvent = (emp,date) => {
    debugger;
    let d = date.split(' ')[0];
    let h = date.split(' ')[1];
    let event = {
        type: 'TimeIn',
        hour: parseInt(h),
        date: d
    };
    emp.timeInEvents.push(event);
    return emp;
};