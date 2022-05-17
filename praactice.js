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

console.log(tamplate);

