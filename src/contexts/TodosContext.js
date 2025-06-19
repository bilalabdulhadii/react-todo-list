import { createContext, useContext, useEffect, useReducer } from "react";
import todosReducer from "../reducers/TodosReducer";

const TodosContext = createContext([]);

const initialTodos = [
    {
        id: 1,
        title: "Welcome! 👋",
        description: "This is your first task. Feel free to edit or delete it.",
        isCompleted: false,
    },
];

export const TodosProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(
        todosReducer,
        JSON.parse(localStorage.getItem("todos")) || initialTodos
    );

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodosContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodosContext.Provider>
    );
};

export const useTodos = () => {
    return useContext(TodosContext);
};
