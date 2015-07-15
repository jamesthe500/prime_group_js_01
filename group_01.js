var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var nameFinder = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

var emp = prompt("Please enter employee ID number or type \"all\" to view all employee data");

if (emp == "all"){
	for (var i = 0; i < nameFinder.length; i++){
	calculateSti(nameFinder[i]);
	console.log("\n");
	} 
} else {
	for (var i = 0; i < nameFinder.length; i++){
		
		if (nameFinder[i][1] == emp) {

			calculateSti(nameFinder[i]);
			break;
		} else if (i == nameFinder.length-1) {
			alert("Employee number not found.");
			emp = prompt("Please enter employee ID number.");
			i = 0;
		} else if (emp == null){
			break;
		}
	}
}

function calculateSti(arrayName){

	var sti = 0;
	var employeeName = arrayName[0];
	var employeeNum = arrayName[1];
	var salary = parseInt(arrayName[2]);
	var rating = arrayName[3];

	switch (rating) {
		case 5:
		sti = .10;
		break;

		case 4:
		sti = .06;
		break;
		
		case 3:
		sti = .04;
		break;
		
		default:
		case 2:
		sti = 0;
		break;
	}

	if (employeeNum.length===4){
		sti +=.05;
	}

	if (salary > 65000) {
		sti -= .01;
	}
	if (sti > .13){
		sti = .13;
	}

var arrayResults = [];

arrayResults[0]= employeeName;
arrayResults[1]= sti * 100 + "%";
arrayResults[2]= salary + (salary * sti);
arrayResults[3]= Math.round((salary * sti));

console.log("Employee Name: " + arrayResults[0]);
console.log("STI Percentage: " + arrayResults[1]);
console.log("Adjusted Annual Salary: $" + arrayResults[2]);
console.log("STI: $" + arrayResults[3]);

return arrayResults;

}


