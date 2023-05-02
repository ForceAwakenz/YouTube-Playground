
var globe = 'I\'m global variable!';
withoutVar = 'hi, I was declared without a thing';

// console.log(window.globe);
// console.log(window.withoutVar);

function Example() {
    const secret = 'secret data';

    this.innerRevealer = function() {
        console.log('inner revealer', secret );
    }
}

Example.prototype.outerRevealer = function () { console.log('outer revealer', secret) }

const example1 = new Example();

example1.innerRevealer();
try {
    example1.outerRevealer();
} catch(err) {
    console.error(err.message);
}
