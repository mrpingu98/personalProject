import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { spotifyPost } from "../Store/apiStore";


export const useMutationPost = (url: string, payload: any, key?: string) => {
    const [snackbar, setSnackbar] = React.useState<boolean>(false);
    const queryClient = useQueryClient()
    
    const mutation = useMutation({
            mutationFn: () => {return axios.post(url, payload)},
            onSuccess: () => {queryClient.invalidateQueries({queryKey: [key], refetchType: 'all'}), setSnackbar(true)}
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


export const useMutationSpotifyPost = (url: string, key?: string) => {
    const queryClient = useQueryClient() 
    const refreshToken = localStorage.getItem("refresh_token");
    const payload = {
      grant_type: "refresh_token",
      refresh_token: refreshToken == null ? "" : refreshToken,
      client_id: "44deba64e2b04230a4e7c818ca419918",
    }
    
    const mutation = useMutation({
            mutationFn: () => {
                return spotifyPost(url, payload)},
            onSuccess: (data) => {
                queryClient.invalidateQueries({queryKey: [key], refetchType: 'all'}), 
                data?.access_token && localStorage.setItem("access_token", data.access_token),
                data?.refresh_token && localStorage.setItem("refresh_token", data.refresh_token)
            },
        })
    return {mutation}
}