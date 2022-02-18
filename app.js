let input = prompt("what would you like to do?");
const todos = ["dfgdg", "dfsdfg"];
while (input !== "quit") {

    if (input === "list") {
        console.log("***********")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("***********")
    }
    else if (input === "new") {
        const newTodo = prompt("Ok, what is this new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === "delete") {
        const index = parseInt(prompt("ok, enter an index to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown number')
        }
    }
    input = prompt("what would you like to do?")
}
console.log("YOU QUIT THE APP")