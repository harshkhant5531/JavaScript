let playerName ={
         King : "Virat Kohli",
         MrIPL:"Suresh Raina",
         CaptainCool:"Mahendra Singh Dhoni",
         
};
console.log(playerName.King);
console.log(playerName.MrIPL);
console.log(playerName.CaptainCool);

const playerRunsODI={
    King:13848,
    MrIPL:5615,
    CaptainCool:10773,
};
console.log(playerRunsODI.King);
console.log(playerRunsODI.MrIPL);
console.log(playerRunsODI.CaptainCool);

// loops
if(playerRunsODI.King>playerRunsODI.MrIPL){
 console.log("King kohli is higgest ODI run scorer");
}
if(playerRunsODI.CaptainCool<playerRunsODI.MrIPL){
    console.log("CaptainCool is higgest ODI run scorer");
}
else{
    console.log("MR.IPL is lowest ODI run scorer");
}
