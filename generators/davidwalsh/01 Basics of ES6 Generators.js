setTimeout(function(){
    console.log("Hello World");
},1);

function foo() {
    // NOTE: don't ever do crazy long-running loops like this
    for (var i=0; i<=10000; i++) {
        console.log(i);
    }
}

foo();
// 0..10000
// "Hello World"