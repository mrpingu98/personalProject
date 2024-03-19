import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";


export const useMutationPost = (url: string, payload: any, key?: string) => {
    const [snackbar, setSnackbar] = React.useState<boolean>(false);
    const queryClient = useQueryClient()
    
    const mutation = useMutation({
            mutationFn: () => {return axios.post(url, payload)},
            onSuccess: () => {queryClient.invalidateQueries({queryKey: [key], refetchType: 'all'}), setSnackbar(true)},
        })
    return {mutation, snackbar, setSnackbar}
}

export const useMutationPut = (url: string, payload: any, key?: string) => {
    const [snackbar, setSnackbar] = React.useState<boolean>(false);
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: () => {return axios.put(url, payload)},
        onSuccess: () => {queryClient.invalidateQueries({queryKey: [key], refetchType: 'all'}), setSnackbar(true)}
    })
    return {mutation, snackbar, setSnackbar}
}

export const useMutationDelete = (url: string, payload: any, key?: string) => {
    const [snackbar, setSnackbar] = React.useState<boolean>(false);
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: () => {return axios.delete(url, {data: payload})},
        onSuccess: () => {queryClient.invalidateQueries({ queryKey: [key], refetchType: 'all'}), setSnackbar(true)}
    })
    return {mutation, snackbar, setSnackbar}
}

//By default invalidateQueries() only forces refetch for active queries, and for some reason the loader doesn't count as being "active", 
//so I had to add the prop refetchType: 'all' to invalidateQueries()