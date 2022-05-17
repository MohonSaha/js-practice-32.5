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
// console.log(last);


const threeParameter = (x,y,z) => {
    const first = x * y;
    const second = first * z;
    return second;
}
const lastResult = threeParameter(10,10,10);
// console.log(lastResult);


const serialNo = [22, 9, 30, 13, 78, 88, 98];
const resultIt = serialNo.map(serial => serial*5);
// console.log(resultIt);

const oddNumber = [1, 3, 5, 7, 10, 14, 18, 90];
const oddNum = oddNumber.filter(num => (num%2 != 0) );
// console.log(oddNum);

const doctorMagura = [
    {name: "Krishna Gopal Sen", Fee: 5000, cember: "ash-shefa"},
    {name: "Mithun Kumar Saha", Fee: 3000, chember: "Lab-Aid"},
    {name: "Zakia SUltana", Fee: 5000, chember: "sonoplus"},
    {name: "Somapti Biswas", Fee: 1000, chember: "peerless"},
    {name: "Mukul Krishna Biswas", Fee: 5040, chember: "peerless"}
];

const docList = doctorMagura.filter(doctor => doctor.Fee == 5000);
console.log(docList);
