import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import React from "react";
import { spotifyPost } from "../Store/apiStore";
import { put, post, deletes } from "../Store/apiStore";
import { CustomError } from "../Constants/Types/ErrorHandling";


interface Props {
    url: string,
    payload: any,
    key?: string,
    header?: object
  }
  

export const useMutationPost = ({url, payload, key, header} : Props) => {
    const [snackbar, setSnackbar] = React.useState<boolean>(false);
    const queryClient = useQueryClient()
    //changed type of Error the useMutation expects so I can do custom error handling
    //normal Error type doesn't have same properties as an AxiosError response 
    //so I made a custom error type, and in the post request, pulled the information needed from the AxiosError response, and set them to the new type to be passed through 
    const mutation = useMutation<AxiosResponse, CustomError, void, unknown>({
            mutationFn: async () => await post(url, payload, header),
            onSuccess: (data) => {queryClient.invalidateQueries({queryKey: [key], refetchType: 'all'}), setSnackbar(true)}
        })
    return {mutation, snackbar, setSnackbar}
}

export const useMutationPostLogout = ({url, payload, key, header} : Props) => {
    const queryClient = useQueryClient()
    const mutation = useMutation<AxiosResponse, CustomError, void, unknown>({
            mutationFn: async () => await post(url, payload, header),
            onSuccess: () => {queryClient.invalidateQueries({queryKey: [key], refetchType: 'all'}), localStorage.setItem('loginAccessToken', '')}
        })
    return {mutation}
}

//when logging out set the local storage back to '' for the acces stokens 

export const useMutationPostLogin = ({url, payload, key, header} : Props) => {
    const queryClient = useQueryClient()
    const [snackbar, setSnackbar] = React.useState<boolean>(false);
    const mutation = useMutation<any, CustomError, void, unknown>({
            mutationFn: async () => await post(url, payload, header),
            onSuccess: (data) => {queryClient.invalidateQueries({queryKey: [key], refetchType: 'all'}), 
            localStorage.setItem("loginAccessToken", data.accessToken)}
        })
    return {mutation, snackbar, setSnackbar}
}


export const useMutationAuthorisedPost = ({url, payload, key} : Props) => {
    const [snackbar, setSnackbar] = React.useState<boolean>(false);
    const queryClient = useQueryClient()
    const accessToken = localStorage.getItem('loginAccessToken')
    const header = { Authorization: "Bearer " + accessToken }
    const mutation = useMutation<AxiosResponse, CustomError, void, unknown>({
            mutationFn: async () => await post(url, payload, header),
            onSuccess: () => {queryClient.invalidateQueries({queryKey: [key], refetchType: 'all'}), setSnackbar(true)}
        })
    return {mutation, snackbar, setSnackbar}
}

export const useMutationPut = (url: string, payload: any, key?: string) => {
    const [snackbar, setSnackbar] = React.useState<boolean>(false);
    const queryClient = useQueryClient()

    const mutation = useMutation<AxiosResponse, CustomError, void, unknown>({
        mutationFn: async () => await put(url, payload),
        onSuccess: () => {queryClient.invalidateQueries({queryKey: [key], refetchType: 'all'}), setSnackbar(true)},
    })
    return {mutation, snackbar, setSnackbar}
}

export const useMutationDelete = (url: string, payload: any, key?: string) => {
    const [snackbar, setSnackbar] = React.useState<boolean>(false);
    const queryClient = useQueryClient()

    const mutation = useMutation<AxiosResponse, CustomError, void, unknown>({
        mutationFn: async () => await deletes(url, {data: payload}),
        onSuccess: () => {queryClient.invalidateQueries({ queryKey: [key], refetchType: 'all'}), setSnackbar(true)}
    })
    return {mutation, snackbar, setSnackbar}
}

//By default invalidateQueries() only forces refetch for active queries, and for some reason the loader doesn't count as being "active", 
//so I had to add the prop refetchType: 'all' to invalidateQueries()


export const useMutationSpotifyPost = (url: string, key?: string) => {
    const [snackbar, setSnackbar] = React.useState<boolean>(false);
    const queryClient = useQueryClient() 
    const refreshToken = localStorage.getItem("refresh_token");
    const payload = {
      grant_type: "refresh_token",
      refresh_token: refreshToken == null ? "" : refreshToken,
      client_id: "44deba64e2b04230a4e7c818ca419918",
    }
    //change response type from within here, rather than in the api request itself...like ive done for the error type 
    const mutation = useMutation({
            mutationFn: () => {
                return spotifyPost(url, payload)},
            onSuccess: (data) => {
                queryClient.invalidateQueries({queryKey: [key], refetchType: 'all'}), 
                data?.access_token && localStorage.setItem("access_token", data.access_token),
                data?.refresh_token && localStorage.setItem("refresh_token", data.refresh_token),
                setSnackbar(true)
            },
        })
    return {mutation, snackbar, setSnackbar}
}