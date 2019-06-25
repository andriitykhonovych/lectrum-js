const arr = [1, 2, 3, 4, 5, 6];

for (let i=0; i<arr.length; i++){
    for(let a=0; a<arr.length; a++){
        if(arr[i] > arr[a]){
            let bla = arr[i];
            arr[i] = arr[a];
            arr[a] = bla;
        }
    }
}

console.log(arr);