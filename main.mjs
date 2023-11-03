import data from './data.json' assert {type: "json"};
const dataUsers = data.users;
console.log(dataUsers)
const totality = dataUsers.map(function(dataUsers){
    return console.log(`${dataUsers.lastName}, born at ${dataUsers.dateOfBirth}, and ${dataUsers.knowsAs},`);
}, 0)

for (let key in dataUsers) {
    console.log(`${dataUsers[key].lastName}, born at ${dataUsers[key].dateOfBirth}, and ${dataUsers[key].knowsAs},`);
}

try {
    for (let o = 0; i < dataUsers.length; i++){
        console.log(`${dataUsers[i].lastName}, born at ${dataUsers[i].dateOfBirth}, and ${dataUsers[i].knowsAs},`)
    };
} catch (error) {
console.log("ERROR", error.message);
} finally {
    console.log('end')
}
