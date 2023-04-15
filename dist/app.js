"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}) : ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(`Total employees are : ${this.employees.length}  -->  ${this.employees}`);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
const itDept = new ITDepartment("id1", ["Jack"]);
itDept.addEmployee("Jack");
itDept.addEmployee("Richard");
itDept.describe();
itDept.printEmployeeInfo();
console.log(itDept);
class AccountDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (value) {
            this.addReport(value);
        }
        else {
            throw new Error("Please pass valid value for report.");
        }
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name) {
        if (name === "Jack") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accountingDept = new AccountDepartment("id2", []);
accountingDept.mostRecentReport = "Report 0";
accountingDept.addReport("Report 1");
console.log(`mostRecentReport : -> ${accountingDept.mostRecentReport}`);
accountingDept.printReports();
accountingDept.addEmployee("Jack");
accountingDept.addEmployee("Karle");
accountingDept.printEmployeeInfo();
console.log(accountingDept);
