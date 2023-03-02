'use strict';


{
    var i = 'visible';
}



console.log(i);

async function as() {
    return await new Promise(res => setTimeout(() => res('async result'), 3000));
}

as().then(console.log);