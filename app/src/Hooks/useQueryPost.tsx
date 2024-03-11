import { useQuery, useMutation, UseMutationResult } from "@tanstack/react-query";
import { get, post } from "../Store/apiStore";
import axios, { AxiosResponse } from "axios";

interface UseQueryPost {
    mutation: UseMutationResult<AxiosResponse<any, any>, Error, void, unknown>
  }

export const useQueryPost = (url: string, payload: object, refetchOnMount?: boolean, refetchOnWindowFocus?: boolean): UseQueryPost => {
    
    const mutation = useMutation({mutationFn: () => {
        return axios.post(url, payload)
    }})

    return {mutation: mutation}

}