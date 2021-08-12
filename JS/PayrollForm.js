const salary = document.querySelector('#salary');
const salaryOutput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.oninput = function() {
    salaryOutput.textContent = salary.value;
};


const text = document.querySelector('#name')
const textError = document.querySelector('.text-error')
text.addEventListener('input', function() {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$")
    if (nameRegex.test(text.value)) {
        textError.textContent = ""
    } else {
        textError.textContent = "Enter Capital First Letter and minimum should be 3 "
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