function printWithDelay(text, ms) {
    setTimeout(() => console.log(text), ms);
}

printWithDelay('Task 1 completed!', 3000);