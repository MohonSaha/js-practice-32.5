const god = 'Suprime Load is Shree Krishna';
let firstBoy = 'rabby';
firstBoy = 'Mohon Saha';
// console.log(god);
const abuotMe = {
    firstName: "Mohon S",
    lastName: "Krishna",
    age: 21,
    designation: "Entreprenure",
    company: {
        name: "DpcSeba", 
        age: "2 month", 
        Mission: "Organizes Medical service", 
        vission:{
            firstV: "serial",
            secondV: "ambulance",
            thirdV: "blood"}
        }
};

const tamplate = ` I am belonging from hindu religion. 
And i believe that ${god}. My name is ${abuotMe.firstName} ${abuotMe.lastName}.I am an ${abuotMe.designation}. My company name is ${abuotMe.company.name}.
It's actually an ${abuotMe.company.Mission}.Our services are ${abuotMe.company.vission.firstV}, ${abuotMe.company.vission.secondV}, ${abuotMe.company.vission.thirdV}.
`;

// console.log(tamplate);



const multiply = (num1) => num1 * 5;

const result = multiply(10);
// console.log(result);

const twoParameter = (num1, num2) => {
    const firstAdd = num1 + 2;
    const secondAdd = num2 + 2;
    const multiple = firstAdd * secondAdd;
    return multiple; 
}
const last = twoParameter(10,10);
console.log(last);





