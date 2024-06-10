let student = [{
    fristname : "Raj",
    lastname : "Dubey" ,
    age : 19,
    gender : "male",
    gender : "male",
    address :{
        city : "surat",
        address : "Hirabaugh",
        state : "gujarat",
    },

    contact : "7984175615",
    email : "raj7984@gmail.com",

}, {
    fristname : "Krishna",
    lastname : "Yadav" ,
    age : 19,
    gender : "male",
    address :{
        city : "surat",
        address : "vesu surat",
        state : "gujarat",
    },

    contact : "8980770091",
    email : "Krishna@gmail.com",
}, {
    fristname : "Ankur",
    lastname : " changani" ,
    age : 18,
    gender : "male",
    address :{
        city : "surat",
        address : "sitanagar surat",
        state : "gujarat",
    },

    contact : "6475357624",
    email : "ankur@gmail.com",
}, {
    fristname : "Jay",
    lastname : " kalathiya" ,
    age : 19,
    gender : "male",
    address :{
        city : "surat",
        address : "Amroli surat",
        state : "gujarat",
    },

    contact : "914689976",
    email : "jay@gmail.com",
}, {

    fristname : "Rahul",
    lastname : " jain" ,
    age : 23,
    gender : "male",
    address :{
        city : "surat",
        address : "vesu  surat",
        state : "gujarat",
    },
    
    contact : "93995056",
    email : "rahul@gmail.com",
}, {
    fristname : "Rahul",
    lastname : " jain" ,
    age : 23,
    gender : "male",
    address :{
        city : "surat",
        address : "vesu  surat",
        state : "gujarat",
    },
    
    contact : "93995056",
    email : "rahul@gmail.com",
}, {
    fristname : "ravi",
    lastname : "Shukla" ,
    age : 18,
    gender : "male",
    address :{
        city : "surat",
        address : "Amroli surat",
        state : "gujarat",
    },
    
    contact : "7834593042",
    email : "ravi795@gmail.com",
}, {
    fristname : "Rishi",
    lastname : "Yadav" ,
    age : 22,
    gender : "male",
    address :{
        city : "surat",
        address : "hirabaug surat",
        state : "gujarat",
    },

    contact : "914466788",
    email : "raj3@gmail.com",
}, {
    fristname : "arpit",
    lastname : " pandey" ,
    age : 19,
    gender : "male",
    address :{
        city : "surat",
        address : "hirabaug surat",
        state : "gujarat",
    },

    contact : "6435672567",
    email : "arpit@gmail.com",
}, {
    fristname : "Abhi",
    lastname : "Jaiswal" ,
    age : 21,
    gender : "male",
    address :{
        city : "surat",
        address : "hirabaug surat",
        state : "gujarat",
    },

    contact : "7684729563",
    email : "aj@gmail.com",
}, {
    fristname : "Prakash",
    lastname : "yadav", 
    age : 19,
    gender : "male",
    address :{
        city : "surat",
        address : "ak rode surat",
        state : "gujarat",
    },

    contact : "53684679023",
    email : "prakash@gmail.com",
}, {
    fristname : "Rohit",
    lastname : "Tripathi" ,
    age : 23,
    gender : "male",
    address :{
        city : "surat",
        address : "Ak Rd surat",
        state : "gujarat",
    },

    contact : "5359501020",
    email : "rohit123@gmail.com",
}, {
    fristname : "Abhinav",
    lastname : "Shukla" ,
    age : 19,
    gender : "male",
    address :{
        city : "surat",
        address : "hirabaug surat",
        state : "gujarat",
    },

    contact : "5748636788",
    email : "ab@gmail.com",
}, {
    fristname : "arpit",
    lastname : "Tiwari" ,
    age : 20,
    gender : "male",
    address :{
        city : "surat",
        address : "hirabaug surat",
        state : "gujarat",
    },

    contact : "6435672567",
    email : "arpit@gmail.com",
}, {
    fristname : "Jagdish",
    lastname : " Sharma" ,
    age : 19,
    gender : "male",
    address :{
        city : "surat",
        address : "ak rode surat",
        state : "gujarat",
    },

    contact : "5829683758",
    email : "js@gmail.com",
}, {
    fristname : "Arjun",
    lastname : "Dubay" ,
    age : 20,
    gender : "male",
    address :{
        city : "surat",
        address : "hirabaug surat",
        state : "gujarat",
    },

    contact : "916466788",
    email : "raj163@gmail.com",
}, {
    fristname : "Rahul",
    lastname : " Sharma" ,
    age : 22,
    gender : "male",
    address :{
        city : "surat",
        address : "ak rode surat",
        state : "gujarat",
    },

    contact : "8980770091",
    email : "rahul@gmail.com",
}, {
    fristname : "Anurag",
    lastname : "Yadav" ,
    age : 20,
    gender : "male",
    address :{
        city : "surat",
        address : "hirabaug surat",
        state : "gujarat",
    },

    contact : "9347196836",
    email : "ag@gmail.com",
}, {
    fristname : "dev",
    lastname : " Agrawal" ,
    age : 22,
    gender : "male",
    address :{
        city : "surat",
        address : "ak rode surat",
        state : "gujarat",
    },

    contact : "6483953865",
    email : "dev@gmail.com",
}, {
    fristname : "Varun",
    lastname : " Patel" ,
    age : 19,
    gender : "male",
    address :{
        city : "surat",
        address : "hirabaug surat",
        state : "gujarat",
    },

    contact : "6938672948",
    email : "varun@gmail.com",
}, {
    fristname : "Prakash",
    lastname : "Shukla", 
    age : 19,
    gender : "male",
    address :{
        city : "surat",
        address : "ak rode surat",
        state : "gujarat",
    },

    contact : "64743968319",
    email : "pra57@gmail.com",
}]
student.forEach((card) => {

    Studantcard.innerHTML += (`<div class="card col-4"><div class="informane">
    <div class="d1">
        <h1>Name : ${card.fristname}</h1>
        <span class="mx-2">  ${card.lastname}</span>
    </div>
    <h2>age :   ${card.age}</h2>
    <h2>gender : ${card.gender}</h2>
    <h2>state : ${card.address.state}</h2>
    <h2>city :  ${card.address.city}</h2>
    <h2>Address :  ${card.address.address}</h2>
    <h2>contact :  ${card.contact}</h2>
    <h2>email :  ${card.email}</h2></div></div>`);
});