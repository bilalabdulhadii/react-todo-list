import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({
        state: false,
        message: "",
    });

    const showToast = (message) => {
        setToast({ state: true, message: message });
    };

    const hideToast = () => {
        setToast((prev) => ({
            state: false,
            message: prev.message,
        }));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            <Toast toast={toast} hideToast={hideToast} />
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    return useContext(ToastContext);
}