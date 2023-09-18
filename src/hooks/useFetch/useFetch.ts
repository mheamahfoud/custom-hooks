import useAsync from "../useAsync/useAsync";


const useFetch = (url: string, options :any= {}, dependencies:any = []) => {

    return useAsync(() => {
        return fetch(url, { ...options }).then(
            (res) => {
                if (res.ok) return res.json();
                return res.json().then(json => Promise.reject(json))
            }
        )
    }, dependencies)
}

export default useFetch;
