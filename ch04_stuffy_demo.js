// let's create some stuffies
//create 3 stuffies store in an array, then print contents of array to console

let s1 = {
    id: 1,
    type: "Weresquirrel",
    color: "Gray",
    size: "XL",
    limbs: 7
};

let s2 = {
    id: 2,
    type: "Authentic Sean Blessing",
    color: "Caucasian",
    size: "L",
    limbs: 4
};

let s3 = {
    id: 3,
    type: "Monkey",
    color: "Indigo",
    size: "Medium",
    limbs: 4
};

let Stuffies = [s1,s2,s3];

for (let s of Stuffies) {
    //console.log(s);
    //console.log("Stuffy "+s.id+" Type = "+s.type);
    //console.log(Object.keys(s));
    for( let k of Object.keys(s)) {
        console.log("property " +k+", value: " + s[k]);
    }
}


