
class EmployeePayrollData {
    
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let regexName = RegExp("^[A-Z]{1}[a-z]{2,}$")
        if (regexName.test(name))
            this._name = name;
        else
            throw "Enter Capital First Letter and minimum should be 3 "
    }

    get profilePic(){
        return this._profilePic;
    }
    set profilePic(profilePic){
        this._profilePic = profilePic
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

    get notes() {
        return this._notes;
    }
    set notes(notes) {
        this._notes = notes;
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
            this._startDate = startDate;
    }
    

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this._startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id+ ", Name: " + this.name + "\n Gender: " + this.gender + ", profilePic = "+this.profilePic+ ", Department: " + this.department + ", Salary: " + this.salary + ", Start Date: " + empDate + ", Notes: " + this.notes;
    }
}