import { Dispatch, FC, useCallback, useEffect, useState } from 'react';
interface LocalStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
    clear(): void;
    length: number;
    key(index: number): string | null;
}

interface Props {
    key: string,
    defaultValue: any,
    storageObject: Storage
}



const useStorage: FC<Props> = ({ key, defaultValue, storageObject })  :[value:any, setValue:Dispatch<any>,rempve:()=>void]=> {
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof defaultValue === "function")
            return defaultValue();
        else
            return defaultValue;
    })

    useEffect(() => {
        if (value == undefined) return storageObject.removeItem(key)
        storageObject.setItem(key, JSON.stringify(value))
    }, [value, key, storageObject])

    const remove = useCallback(() => [
        setValue(null)
    ], [])

    return [value, setValue, remove]
}
const useSessionStorage = (key:string, defaultValue:any) => {
    const storageObject: Storage = window.sessionStorage;
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof defaultValue === "function")
            return defaultValue();
        else
            return defaultValue;
    })

    useEffect(() => {
        if (value == undefined) return storageObject.removeItem(key)
        storageObject.setItem(key, JSON.stringify(value))
    }, [value, key, storageObject])

    const remove = useCallback(() => [
        setValue(null)
    ], [])

    return [value, setValue, remove]
}
const useLocalStorage = (key:string, defaultValue:any) :[value:any, setValue:Dispatch<any>,rempve:()=>void] => {
    const storageObject: Storage = window.localStorage;
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof defaultValue === "function")
            return defaultValue();
        else
            return defaultValue;
    })

    useEffect(() => {
        if (value == undefined) return storageObject.removeItem(key)
        storageObject.setItem(key, JSON.stringify(value))
    }, [value, key, storageObject])

    const remove = useCallback(() => [
        setValue(null)
    ], [])

    return [value, setValue, remove]
}
export  {useLocalStorage,useSessionStorage};
