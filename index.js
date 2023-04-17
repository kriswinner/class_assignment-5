const fs = require("fs");
const data = `

name, gender, party, age
tinubu, male, apc, 89
kachi, male, apc, 12
obi, male, lp, 30
`;


fs.writeFile("data.csv", data, "utf-8", (err) => {
    if (err) console.log(err);
    else console.log("Data saved");
});
console.log[require("fs")];