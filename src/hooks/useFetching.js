import {useState} from "react";

/*
Хук обработки индикации загрузки, ошибки получения данных
*/
export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const  fetching = async(...args) => {
        try {
            setIsLoading(true);

            await callback(...args);
        } catch (e) {
            setError(e.message);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 100)
        }
    }

    return [fetching, isLoading, error]
}