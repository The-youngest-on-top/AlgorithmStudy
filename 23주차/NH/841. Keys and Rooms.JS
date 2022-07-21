function canVisitAllRooms(rooms) {
    let key = new Array(rooms.length).fill(1);
    
    const check=(room)=>{
        key[room]=0;
        for(let keys of rooms[room]){
            if(key[keys]==1)check(keys);
        }
    }
    check(0);
    let answer=key.filter((item)=>item>0);
    if(answer.length)return false;
    return true;
   
};