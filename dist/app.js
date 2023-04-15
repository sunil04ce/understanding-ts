"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(`Total employees are : ${this.employees.length}  -->  ${this.employees}`);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
const employee1 = Department.createEmployee("Jack 1");
console.log(employee1);
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID : " + this.id);
    }
}
const itDept = new ITDepartment("id1", ["Jack"]);
itDept.addEmployee("Jack");
itDept.addEmployee("Richard");
itDept.describe();
itDept.printEmployeeInfo();
console.log(itDept);
class AccountDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountDepartment("id3", []);
        return this.instance;
    }
    describe() {
        console.log("Account Department - ID : " + this.id);
    }
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
const accountingDept = AccountDepartment.getInstance();
accountingDept.describe();
accountingDept.mostRecentReport = "Report 0";
accountingDept.addReport("Report 1");
console.log(`mostRecentReport : -> ${accountingDept.mostRecentReport}`);
accountingDept.printReports();
accountingDept.addEmployee("Jack");
accountingDept.addEmployee("Karle");
accountingDept.printEmployeeInfo();
console.log(accountingDept);
