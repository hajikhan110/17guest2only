let Guest :string[] = ['Kareem','Raheem'];

const absent : string = 'Raheem';
//et absent : string = 'Raheem';

let newarrival : string = 'sultan';

Guest[1] = newarrival;

for(let i=0; i<Guest.length;i++){
    //console.log('I welcome you Sir!' + Guest[i]);
    console.log('Dear Mr. ' + Guest[i] + ',\n\n Please be informed that you have been invited by us today at sharp 9.00 pm!'  + '\n\n');
    
}
console.log(`Mr. ${absent} is not coming`);

console.log('Good news! we find big table so we are inviting 3 more guests.');

Guest.unshift('farhan');
Guest.splice(2,0, 'rehman');
Guest.push('saleem');

for(let i=0; i<Guest.length;i++){
    //console.log('I welcome you Sir!' + Guest[i]);
    console.log('Dear Mr. ' + Guest[i] + ',\n\n Please be informed that you have been invited by us today at sharp 9.00 pm!'  + '\n\n');
    
}



