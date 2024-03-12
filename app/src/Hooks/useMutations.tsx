import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

interface UseQueryPost {
    mutation: UseMutationResult<AxiosResponse<any, any>, Error, void, unknown>
  }

export const useQueryPost = (url: string, payload: any, refetchOnMount?: boolean, refetchOnWindowFocus?: boolean): UseQueryPost => {
    
    const mutation = useMutation({mutationFn: () => {
        return axios.post(url, payload)
    }})

    return {mutation: mutation}
}

export const useQueryPut = (url: string, payload: any, refetchOnMount?: boolean, refetchOnWindowFocus?: boolean): UseQueryPost => {
    
    const mutation = useMutation({mutationFn: () => {
        return axios.put(url, payload)
    }})

    return {mutation: mutation}
}

export const useQueryDelete = (url: string, payload: any, refetchOnMount?: boolean, refetchOnWindowFocus?: boolean): UseQueryPost => {
    
    const mutation = useMutation({mutationFn: () => {
        return axios.delete(url, payload)
    }})

    return {mutation: mutation}
}