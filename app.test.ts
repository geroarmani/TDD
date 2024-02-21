import Todo from './app';

test('добавяне на задача', () => {
    const todo = new Todo();
    todo.addTask('Почисти къщата');
    expect(todo.getTasks()).toEqual(['Почисти къщата']);
});

test('изтриване на задача', () => {
    const todo = new Todo();
    todo.addTask('Почисти къщата');
    todo.deleteTask('Почисти къщата');
    expect(todo.getTasks()).toEqual([]);
});

test('взимане на всички задачи', () => {
    const todo = new Todo();
    todo.addTask('Почисти къщата');
    todo.addTask('Изпрати имейл');
    expect(todo.getTasks()).toEqual(['Почисти къщата', 'Изпрати имейл']);
});
