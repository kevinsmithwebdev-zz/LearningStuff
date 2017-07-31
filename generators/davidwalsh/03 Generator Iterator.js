var y, z;

function *foo(x) {
    y = 2 * (yield (x + 1));
    z = yield (y / 3);
    return (x + y + z);
}

//this "instantiates" (not sure if this is correct??) the generator
//and returns an object with a `next` method

var it = foo( 5 );
console.log("y = " + y + "  and z = " + z + "\n\n\n");

// note: not sending anything into `next()` here
//if something was sent into `next` here it would be "ignored" and have no effect
//essentially `yield` will pass data out of the generator and into the `value

console.log( it.next() );       // { value:6, done:false }
console.log("y = " + y + "  and z = " + z + "\n\n\n");;

//essentially this is a form of "dependency injection" and the `12` passed into
//`next` is injected into the function, completely omitting the previous
//`x + 1` value, completely fucking forget about it and don't ask questions -:P
//therefore `y = 2 * 12` and the next `yield` spits out `24 / 3` into `value`

console.log( it.next( 12 ) );   // { value:8, done:false }
console.log("y = " + y + "  and z = " + z + "\n\n\n");

//again fucking forget about `2 * 12 / 3` because `13` is injected into the function
//so that's what the fuck `z` is. If this doesn't make since just relax because 
//hopefully in a week or so you can actually figure out how to use a generator in
//production code, anyway 
//`x = 5`
//`y = 24`
//`z = 13`
//+--------
//     42
//and at least we don't feel so stupid that we can do simple math and if there
//are no more `yield`s what is returned is the `value`

console.log( it.next( 13 ) );   // { value:42, done:true }
console.log("y = " + y + "  and z = " + z + "\n\n\n");