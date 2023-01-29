/**
 * @jest-environment jsdom
 */

import * as main from "../ts/main";
import { removeAllTodos, } from "../ts/functions";
import * as functions from "../ts/functions";
import { Todo } from "./models/Todo";

beforeEach(() => {
    document.body.innerHTML = ``;
});


test('should call removeAllTodos', () => {
    // Arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let spy = jest.spyOn(functions, "removeAllTodos").mockReturnValue();
    
    // Act
    main.clearTodos([]);

    // Assert
    expect(spy).toHaveBeenCalled();
});

test('should call createHtml', () => {
    // Arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let spy = jest.spyOn(main, "createHtml").mockReturnValue();
    
    // Act
    main.clearTodos([]);

    // Assert
    expect(spy).toHaveBeenCalled();
});

test("should create New Todo",()=>{
        //Arrange           
        document.body.innerHTML = `
        <ul id="todos" class="todo"></ul>
        `;
        let todoText = "new todo";
        let todos: Todo[] = [];
        let result = document.getElementById('todos');

        //Act           
        main.createNewTodo(todoText, todos,);

        //Assert             
        expect(result).toBeTruthy();
});

test("should NOT create NewTodo", () => {
    //Arrange           
    document.body.innerHTML = `
    <div id="error" class="error"></div>
    `;
    let todoText = "st";
    let todos: Todo[]= [];
    let result = document.getElementById('error');

    //Act           
    main.createNewTodo(todoText, todos);

    //Assert        
    expect(result).toBeTruthy();
});

test("should toggle to do list", () => {
    //Arrange    
    document.body.innerHTML = `
    <ul id="todos" class="todo"></ul>
    `;
    let spy = jest.spyOn(functions, "changeTodo").mockReturnValue();
    let spy2 = jest.spyOn(main, "createHtml").mockReturnValue();
    let todos: Todo = { text: 'text', done: true };
    
    //Act    
    main.toggleTodo(todos);
    
    //Assert    
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
});

test("should show error message", () => {
    //Arrange
    document.body.innerHTML = `
    <div id="error" class="error"></div>
    `;
    let errorContainer: HTMLDivElement = document.getElementById(
        "error"
      ) as HTMLDivElement;
    let error = "Du måste ange minst tre bokstäver"

    //Act
    main.displayError(error,true);

    //Assert
    expect(errorContainer.innerHTML).toBe(error);

});

