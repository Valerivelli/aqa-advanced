class toDoService {
    async getToDo() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            if (!response.ok) {
                throw new Error('Error during getToDo function');
            }
            const todo = await response.json();
            return todo;
        } catch (error) {
            console.error('Error in getToDo function', error);
        }
    }
}

class userService {
    async getUser() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            if (!response.ok) {
                throw new Error('Error during getUser function')
            }
            const user = await response.json();
            return user;
        } catch (error) {
            console.error('Error in getUser function', error);
        }
    }
}

async function runRequests() {
    const todoService = new toDoService();
    const usService = new userService();
    try {
        const [todo, user] = await Promise.all([todoService.getToDo(), usService.getUser()]);
        console.log("Result Promise.all:");
        console.log("Todo:", todo);
        console.log("User:", user);

        const firstResult = await Promise.race([todoService.getToDo(), usService.getUser()]);
        console.log("Result Promise.race:");
        console.log(firstResult);
    } catch (error) {
        console.error("Error in runRequests:", error);
    }

}

runRequests();