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

