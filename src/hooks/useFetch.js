import { useEffect, useState } from "react"

export const useFetch = (url, method = "get") => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(function() {
        fetch(url, {method})
        .then(resp => resp.json())
        .then(json => setResponse({
            datta: json,
            loading: true
        }))
    }, [url, method])

    return response
}