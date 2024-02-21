class Todo {
    tasks: string[];

    constructor() {
        this.tasks = [];
    }

    addTask(task: string): void {
        this.tasks.push(task);
    }

    deleteTask(task: string): void {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    getTasks(): string[] {
        return this.tasks;
    }
}

export default Todo;
