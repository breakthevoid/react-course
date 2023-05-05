import {useMemo} from "react";
import {getPagesArray} from "../utils/pages";

export const usePagination = (totalPages) => {
    // useMemo - хук для Мемоизации - запоминания, кэширования состояния компонента
    // callback вызывается при изменении deps
    const pagesArray = useMemo(() => {
        return getPagesArray(totalPages)
    }, [totalPages])
    return pagesArray;
}