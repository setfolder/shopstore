import {useEffect, useState} from "react"
export type LoadingStatus = "loading" | "success" | "empty" | "error"

export default function useFetch<T=unknown>(url :string|null) :{ data :T | null, loadingStatus :LoadingStatus } {
    const [data, setData] = useState<T | null>(null)
    const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>("loading")

    useEffect( ()=>{

        if (!url) {
            setData(null)
            setLoadingStatus("empty")
            return
          }

        const controller = new AbortController()
        setLoadingStatus("loading")
        setData(null)

        fetch( url, {signal:controller.signal} )
            .then( response=>{
                if (!response.ok) throw new Error("Network error")
                return response.json() as Promise<T>
            })
            .then( json=>{
                const isEmptyObject =
                    json !== null &&
                    typeof json === "object" &&
                    !Array.isArray(json) &&
                    Object.keys(json as Record<string, unknown>).length === 0
                const isEmptyArray =
                    Array.isArray(json) && json.length === 0
                if ( json == null || isEmptyObject || isEmptyArray ) {
                    setData(json)
                    setLoadingStatus("empty")
                } else {
                    setData(json)
                    setLoadingStatus("success")
                }
            })
            .catch( err=>{
                if (err.name === "AbortError") return
                setLoadingStatus("error")
                setData(null)
            })

        return  ()=>{ controller.abort() }
    }, [url])

    return { data, loadingStatus }
}