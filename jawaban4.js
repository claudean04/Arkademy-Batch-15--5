function randomize(n){
    var prima =[2,3,5,7,11,13,17,19,23,29];
    var result = {
        array : [],
        sum : 0
    };
    
    for(i=0 ;i < n; i++){
        var rand = prima[Math.floor(Math.random()*(prima.length))];
        result.array.push(rand);
        result.sum += rand;
    };
    return "array : "+result.array+"  sum: "+result.sum;
};

console.log(randomize(5));