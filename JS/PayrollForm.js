const salary = document.querySelector('#salary');
const salaryOutput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.oninput = function() {
    salaryOutput.textContent = salary.value;
};

class EmployeePayrollData {
    // Property
    name;
    gender;
    department;
    salary;
    startDate;
    notes;

    constructor(...params) {
        this.name = params[0];
        this.gender = params[1];
        this.department = params[2];
        this.salary = params[3];
        this.startDate = params[4];
        this.notes = params[5];
    }


    get name() {
        return this._name;
    }
    set name(name) {
        if (regexName.test(name))
            this._name = name;
        else
            throw "Enter Capital First Letter and minimum should be 3 "
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }

    get salary() {
        return this.salary;
    }
    set salary(salary) {
        this.salary = salary;
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate <= new Date())
            this._startDate = startDate;
        else
            throw "Invalid date."

    }
    get notes() {
        return this._notes;
    }
    set notes(notes) {
        this._notes = notes;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this._startDate === undefined ? "undefined" :
            new Date(this.startDate).toLocaleDateString("en-US", options);
        return " Name: " + this.name + "\n Gender: " + this.gender + "\n Department: " + this.department + "\n Salary: " + this.salary + "\n Start Date: " + empDate + "\n Notes: " + this.notes;
    }
}

const text = document.querySelector('#name')
const textError = document.querySelector('.text-error')
text.addEventListener('input', function() {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$")
    if (nameRegex.test(text.value)) {
        textError.textContent = ""
    } else {
        textError.textContent = "Name is Incorrect"
    }
})

function save() {
    try {
        let name = document.querySelector('#name').value;
        let namefinal = '';
        if (name.charAt(0) === name.charAt(0).toLowerCase()) {
            namefinal = "incorrect";
        } else {
            namefinal = name;
        }
        let gender = document.querySelector('input[name=gender]:checked').value;
        let deptList = new Array();
        let departments = document.querySelectorAll('input[name=department]:checked');
        for (let i = 0; i < departments.length; i++) {
            deptList.push(department[i].value);
        }
        let salary = document.querySelector('#salary').value;
        let startDate = document.querySelector('#startDate').value;
        console.log("startdate", startDate);
        let notes = document.querySelector('#notes').value;
        let newEmployee = new EmployeePayrollData(namefinal, gender, departments, salary, startDate, notes);
        alert(newEmployee);
    } catch (error) {
        alert(error);
    }

}