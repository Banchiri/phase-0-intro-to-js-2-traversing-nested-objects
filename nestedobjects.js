let counter = 0;
function deepIterator(target){
    counter++;
    if(typeof target === "object"){
        
        for(const key in target){
            deepIterator(target[key])
        }
    }
     else{
            console.log(target);
        }
 }   
const userInfo = {
    Firstname : "Sandra",
    Lastname : "Banchiri",
    company : {
        name : "rangerover company",
        jobtitle : "Developing  Manager",
    },
    Friends :[
        {
            Firstname : "pepe",
            Lastname : "liam",
            company : {
                name : "range rover ",
                jobtitle : " Assistant Manager",
            },
        },
        {
            Firstname : "Beyonce",
            Lastname : "Nyang'ara",
            company : {
                name : "range rover ",
                jobtitle : " Lead Manager",
            },
        },  
    ],
    projects :[
    {
        title : "Scuber",
        Description : "sell cars and get tenders from organizations",
    },
    {
        title : "engine service",
        Description : "service engines and sell V8 engines to customers",

    },
 ],
 

};
deepIterator(userInfo)
console.log(counter)
// console.log(userInfo.Lastname)
// console.log(userInfo.Firstname)
// console.log(userInfo.company.jobtitle)
// console.log(userInfo.projects[1].title)

