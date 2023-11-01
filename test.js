
/* try {
    function checkText(name){
        if (typeof name !== 'string'){
            throw new Error('text type wrong');
        }
        if (name.length > 3){
            throw new Error('lenght text more 5');
        }
        console.log(name)
    }
    checkText(true);
} catch (error){

    console.log('error:', error.name);
    console.log('error:', error.message);
} finally {
    console.log('Finally');
} */

/* let json = '[11,23,14,12,232]';
console.log(json[0]);
let data = JSON.parse(json);
console.log(data);
console.log(data[2]); */

const iser = {
    name: "Daniel",
    family: "Makarov",
    city: "Syktyvkar",
    sayHi(){
        console.log(`hi, my name is ${this.name}`);
    }
};
function replacer(key, value) {
    if(typeof value === 'function') {
        return undefined;
    }
    return value;
}

try {
	const jsonString = JSON.stringify(iser, replacer);
	console.log(jsonString);
} catch (error) {
	console.error(error);
}


/* const json2 = '{"users":{"user1":{"key1":"value1", "key2":"value2"},"user2":{"key1":"value1","key2":"value2"}}}';
const user = JSON.parse(json2);
console.log(user.users.user2.key1); */