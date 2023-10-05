const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({'Message': 'Delayed Success!'});
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'Error': 'Delayed Exception!'});
        }, 500);
    });
}

resolvedPromise().then((result) => console.log(result));

rejectedPromise().catch((error) => console.log(error));