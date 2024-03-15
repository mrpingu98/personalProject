import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


export const useMutationPost = (url: string, payload: any, key?: string) => {
    const queryClient = useQueryClient()
    
    const mutation = useMutation({
            mutationFn: () => {return axios.post(url, payload)},
            onSuccess: () => {queryClient.invalidateQueries({queryKey: [key], refetchType: 'all'})}
        })
    return {mutation}
}

export const useMutationPut = (url: string, payload: any, key?: string) => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: () => {return axios.put(url, payload)},
        onSuccess: () => {queryClient.invalidateQueries({queryKey: [key], refetchType: 'all'})}
    })
    return {mutation}
}

export const useMutationDelete = (url: string, payload: any, key?: string) => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: () => {return axios.delete(url, payload)},
        onSuccess: () => {queryClient.invalidateQueries({ queryKey: [key], refetchType: 'all'})}
    })
    return {mutation}
}

//By default invalidateQueries() only forces refetch for active queries, and for some reason the loader doesn't count as being "active", 
//so I had to add the prop refetchType: 'all' to invalidateQueries()