const arr = [6, 5, 4, 3, 2, 1];

for (let i=0; i<arr.length; i++){
    for(let a=0; a<arr.length; a++){
        if(arr[i] < arr[a]){
            let bla = arr[a];
            arr[a] = arr[i];
            arr[i] = bla;
        }
    }
}

console.log(arr);