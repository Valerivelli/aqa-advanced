function getToDo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            if (!response.ok) {
                throw new Error('Error during getToDo function');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error in getToDo function', error);
        })

}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
            if (!response.ok) {
                throw new Error('Error during getUser function');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error in getUser function', error);
        })
}

Promise.all([getToDo(), getUser()])
    .then(result => {
        const [toDo, user] = result;
        console.log('Result in Promise.all: ');
        console.log('ToDo: ', toDo);
        console.log('User: ', user);
    })
    .catch(error => {
        console.error('Error in Promise.all!', error);
    })

Promise.race([getToDo(), getUser()])
    .then(result => {
        console.log("Result Promise.race:");
        console.log(result);
    })
    .catch(error => console.error("Error in Promise.race:", error));