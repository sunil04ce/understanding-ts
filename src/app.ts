class Department {
  //   public id: string;
  //   public name: string;

  protected employees: string[] = [];

  constructor(public readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}) : ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "d2";
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(
      `Total employees are : ${this.employees.length}  -->  ${this.employees}`
    );
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

const itDept = new ITDepartment("id1", ["Jack"]);
itDept.addEmployee("Jack");
itDept.addEmployee("Richard");

//accounting.name = "NEW NAME";
// accounting.employees[2] = "Mark";

itDept.describe();
itDept.printEmployeeInfo();
console.log(itDept);

// const accountingCopy = {
//   name: "DUMMY",
//   describe: accounting.describe,
// };
// accountingCopy.describe();

class AccountDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (value) {
      this.addReport(value);
    } else {
      throw new Error("Please pass valid value for report.");
    }
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Jack") {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accountingDept = new AccountDepartment("id2", []);
accountingDept.mostRecentReport = "Report 0"; // "";
accountingDept.addReport("Report 1");
console.log(`mostRecentReport : -> ${accountingDept.mostRecentReport}`);
accountingDept.printReports();

accountingDept.addEmployee("Jack");
accountingDept.addEmployee("Karle");
accountingDept.printEmployeeInfo();

console.log(accountingDept);
