let a =''
function segitiga(input){
    for(let b=1;b<=input;b++){
        for(let c=input-1;c>=b;c--){
            a += ' ';
        }
        for(let k =b;k>=1;k--){
            a += '*';
        }a += '\n';
    }
    console.log(a);
}
segitiga(5);