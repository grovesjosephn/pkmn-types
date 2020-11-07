import { useApp, useInput } from "ink";

export const useQuit = (quitChar = 'q') => {
    const {exit} = useApp()
    useInput((input, _key) => {
        if (input === quitChar) {
            exit();
        }
    });
} 