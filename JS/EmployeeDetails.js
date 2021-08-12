window.addEventListener("DOMContentLoaded", (event) =>
{
    createInnerHtml();
});
  
const createInnerHtml = () =>
{
    const headerHtml = `<tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
    </tr>`;
    let empPayrollList = createEmployeePayrollJSON()
    let innerHtml = `${headerHtml}`
    for (const empPayrollData of empPayrollList)
    {
        innerHtml = `${innerHtml} 
        <tr>
            <td><img src="${empPayrollData._profilePic}" alt="" class="profile"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="${empPayrollData._id}" onclick="remove(this)">
                <img src="../assets/icons/create-black-18dp.svg" alt="update" id="${empPayrollData.id}" onclick="update(this)">
            </td>
        </tr>`;   
    }
    document.querySelector('#table-display').innerHTML = innerHtml
};
  
const createEmployeePayrollJSON = () =>
{
    let empPayrollListLocal =
    [
        {
            _name:"Nithin Krishna",
            _gender:"Male",
            _department:
            [
                "Sales"
            ],
            _salary:"300000",
            _startDate:"12 JUL 2020",
            _note:"Hey Hi.",
            _id: new Date().getTime(),
            _profilePic: "../assets/profile-images/Ellipse -5.png"
        },
        {
            _name:"Khyathi Somepalli",
            _gender:"Female",
            _department:
            [
                "Sales",
            ],
            _salary:"500000",
            _startDate:"10 august 2019",
            _note:"Hello there!.",
            _id: new Date().getTime(),
            _profilePic: "../assets/profile-images/Ellipse -7.png" 
        }
    ]
    return empPayrollListLocal
}
  
const getDeptHtml = (deptList) =>
{
    let depthtml= "";
    for (const dept of deptList)
    {
        depthtml = `${depthtml} <div class="dept-label">${dept}</div>`
    }
    return depthtml
}