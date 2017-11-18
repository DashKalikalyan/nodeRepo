setTimeout(() => {
    console.log('Call back 8 ms');
},8000);
console.log('starting app');
setTimeout(() => {
    console.log('Call back 2 ms');
},2000);
setTimeout(() => {
    console.log('Call back 0 ms');
},0);
console.log('finishing up');
