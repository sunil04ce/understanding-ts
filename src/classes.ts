abstract class Department {
  //   public id: string;
  //   public name: string;

  protected employees: string[] = [];

  constructor(public readonly id: string, public name: string) {
    // this.name = n;
  }

  abstract describe(): void;

  addEmployee(employee: string) {
    // this.id = "d2";
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(
      `Total employees are : ${this.employees.length}  -->  ${this.employees}`
    );
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

const employee1 = Department.createEmployee("Jack 1");
console.log(employee1);

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe(): void {
    console.log("IT Department - ID : " + this.id);
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
  private static instance: AccountDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountDepartment("id3", []);
    return this.instance;
  }

  describe(): void {
    console.log("Account Department - ID : " + this.id);
  }

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

// const accountingDept = new AccountDepartment("id2", []);
const accountingDept = AccountDepartment.getInstance();
accountingDept.describe();
accountingDept.mostRecentReport = "Report 0"; // "";
accountingDept.addReport("Report 1");
console.log(`mostRecentReport : -> ${accountingDept.mostRecentReport}`);
accountingDept.printReports();

accountingDept.addEmployee("Jack");
accountingDept.addEmployee("Karle");
accountingDept.printEmployeeInfo();

console.log(accountingDept);
