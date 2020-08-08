
let array = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry","Paula","Laura","Jim"];

for (let i = 0; i < array.length; i++) {
    let str =array[i];
    
    if ( str[0]=="J") {
        console.log('Goodbye '+str);
    }
    else if(str[0]=="j"){
        console.log('Goodbye '+str);
    }
    else {
        console.log('Hello '+str);
    }
}
