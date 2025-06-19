import { v4 as uuidv4 } from "uuid";

export default function todosReducer(todos, action) {
    switch (action.type) {
        case "add": {
            const newTodo = {
                title: action.payload.titleInput,
                id: uuidv4(),
                description: "",
                isCompleted: false,
            };
            return [newTodo, ...todos];
        }
        case "update": {
            const updatedTodos = todos.map((t) => {
                if (t.id === action.payload.id) {
                    return {
                        ...t,
                        title: action.payload.updatedTodo.title,
                        description: action.payload.updatedTodo.description,
                    };
                } else {
                    return t;
                }
            });
            return updatedTodos;
        }
        case "delete": {
            const updatedTodos = todos.filter(
                (t) => t.id !== action.payload.id
            );
            return updatedTodos;
        }
        case "completed": {
            const updatedTodos = todos.map((t) => {
                if (t.id === action.payload.id) {
                    return { ...t, isCompleted: !t.isCompleted };
                } else {
                    return t;
                }
            });
            return updatedTodos;
        }
        default: {
            throw Error("Unknown Action: " + action.type);
        }
    }
}
