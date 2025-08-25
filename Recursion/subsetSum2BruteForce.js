const arr =[1,2,2];

const s= new Set();
function powerSet(i, list) {

    if (i == arr.length) {
        s.add(JSON.stringify([...list].sort((a,b)=>b-a)));        
        return;
    }

    list.push(arr[i]);
    powerSet(i + 1, list);  
    list.pop();
    powerSet(i + 1, list);

}

powerSet(0, [])
console.log([...s].map((e)=>JSON.parse(e)));
