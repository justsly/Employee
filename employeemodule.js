/**
 * Created by sly on 20.03.15.
 */
//console.log("VA2 – Employee management");

//Employee Object - definiert die Eigenschaften des Employee
function Employee(eId, name, department, salary){
    this.eId = eId;
    this.name = name;
    this.department = department;
    this.salary = salary;
}

//Git einen Employee durch Übergabe der Entsprechenden ID auf der Console aus.
function printEmployee(empl){
    // Formatmuster: [ID=1000] Name: Miller, Department: Dev, Salary: 56000
console.log("[ID=" + empl.eId + "] Name: " + empl.name + ", Department: " + empl.department + ", Salary: " + empl.salary);
}

//Gibt alle Employees auf der Console aus
function printAllEmployee(){
    for (i=0; i<employees.length; i++){
        printEmployee(employees[i]);
    }
}

//Fügt einen neuen Employee dem Array hinzu
function addNewEmployee(Employee) {
    if(findEmployeeById(Employee.eId) != null){
        return false;
    }
    else {
        employees.push(Employee);
        return true;
    }
}

//Löscht einen vorhandenen Employee aus dem Array und gibt im Erfolgsfall true andernfalls false zurück
function removeEmployeeById(id){
    var index = findEmployeeById(id);
    if (index != null) {
        employees.splice(index,1);
        return true;
    }
    else return false;

}

//Sucht nach dem Employee im Array und gibt im Erfolgsfall den Arrayindex andernfalls null zurück
function findEmployeeById(id) {
    for (i=0; i<employees.length; i++){
        if(id == employees[i].eId){
            return i;
        }
    }
    return null;
}


function getTotalWages() {
    var total_wages = 0;
    for (i=0; i<employees.length; i++){
        total_wages += employees[i].salary;
    }
    return total_wages;
}

var employees = [new Employee(1,"Meier","Dev",1000), new Employee(2,"Miller","Mgmt",50000)];

addNewEmployee(new Employee(3,"James","Sup", 20000));
//removeEmployeeById(2);


//printEmployee(employees[0]);
removeEmployeeById(2);
addNewEmployee(new Employee(4,"Walter","Ops", 40000));
addNewEmployee(new Employee(4,"Test","Ops", 40000));
printAllEmployee();
console.log(getTotalWages());
console.log(findEmployeeById(2));
