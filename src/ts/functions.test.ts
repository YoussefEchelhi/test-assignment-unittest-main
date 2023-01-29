import * as functions from "../ts/functions";
import { Todo } from "./models/Todo";


test("should change todo -> !todo", () => {
    //Arrange        
    let todos: Todo = { text: 'string', done: false };

    //Act        
    functions.changeTodo(todos);

    //Assert        
    expect(todos).not.toBe(true);
    
});

test("should remove element", () => {
    //Arrange    
    let todos: Todo[]= [{text:"string", done: true}];

    //Act    
    functions.removeAllTodos(todos);

    //Assert    
    expect(todos.length).toBe(0);

});