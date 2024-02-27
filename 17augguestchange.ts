//let Guest : string[] = ['Kareem','Raheem','rouf','raheem','salam','momin'];
let Guest : string[] = ['Kareem','Raheem'];

const absent : string = 'Raheem';
//et absent : string = 'Raheem';

let newarrival : string = 'sultan';

Guest[1] = newarrival;

// for(let i=0; i<Guest.length;i++){
    //console.log('I welcome you Sir!' + Guest[i]);
//     console.log('Dear Mr. ' + Guest[i] + ',\n\n Please be informed that you have been invited by us today at sharp 9.00 pm!'  + '\n\n');
    
// }
//okconsole.log(`Mr. ${absent} is not coming`);

//console.log('Good news! we find big table so we are inviting 3 more guests.');

Guest.unshift('farhan');
Guest.splice(2,0, 'rehman');
Guest.push('saleem');
console.log('/n new /n' + Guest + '/n/n');
for(let i=0; i<Guest.length;i++){
    //console.log('I welcome you Sir!' + Guest[i]);
    console.log('Dear Mr. ' + Guest[i] + ',\n\n Please be informed that you have been invited by us today at sharp 9.00 pm!'  + '\n\n');
    
}

console.log('\n Sorry due to congested arragment kindly only informed Guests can join us');

while(Guest.length > 2){
    let deletedguest=Guest.pop();
    console.log(`Sorry Mr. ${deletedguest}, we apologies your inivitation is pending sorry for inconvience \n\n thank u \n\n `);
}

for(let i=0; i<Guest.length;i++){

   // let deletedguest=Guest.pop();
    console.log(`Sorry Mr. ${Guest[i]}, we confirm u inivitation despite congested arragment \n\n thank u \n\n `);
}


Guest.splice(0,2);
console.log(Guest);
