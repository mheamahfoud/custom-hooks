import { FC, useCallback, useEffect, useState } from 'react';

const useAsync = (callBack: () => Promise<any>, dependencies = []): { loading: boolean, value: any, error: any } => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [value, setValue] = useState();

    const callBackMemoized = useCallback(() => {
        setLoading(true);
        setError(undefined)
        setValue(undefined)
        callBack()
            .then((setValue))
            .catch((setError))
            .finally(() => setLoading(false))
    }, dependencies)

    useEffect(() => {
        callBackMemoized()
    }, [callBackMemoized])

    return { loading, value, error }
}

export default useAsync;
