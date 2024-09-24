// For loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element ==5) {
        // console.log("5 is the best number")
    }
    // console.log(element)
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <=10; j++) {
        // console.log(`Ineer loop value ${j} and inner Loop value: ${i}`);
        
        
        
    }
    
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <=10; j++) {
        // console.log(i+ "*" +j+ " = " + i*j);
        // console.log(`${i} * ${j} = ${i*j}`); 
        
    }
    
}
 
let mySupperHero = ["Batman","Flash","Spiderman","DSR"]
// console.log(mySupperHero.length)
for (let index = 0; index < mySupperHero.length; index++) {
    const element = mySupperHero[index];
    // console.log(element);
}

// break () and continue.

for (let index = 1; index < 20; index++) {
    if(index == 5) {
        // console.log(`Detucted ${index}`)
        break  // Kisi bhi control flow co breck karna ho to breck key se kar saktey hai.
    }
//    console.log(index);
}

for (let index = 1; index < 20; index++) {
    if(index == 5) {
        console.log(`Detucted ${index}`)
        continue // condition ko ek bar ke liye skeep karta hai 
    }
   console.log(index);
}