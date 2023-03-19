function receivesAFunction(cb) {
    return cb();
};

function returnsANamedFunction() {
    return function fn() {};
};

function returnsAnAnonymousFunction() { return function() {};};