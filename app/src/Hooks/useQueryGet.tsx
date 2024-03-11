import { useQuery } from "@tanstack/react-query";
import { get } from "../Store/apiStore";

interface UseQueryGet {
    data: any;
    error: Error | null;
    isPending: boolean;
  }

export const useQueryGet = (url: string, queryKey: string, refetchOnMount?: boolean, refetchOnWindowFocus?: boolean): UseQueryGet => {
    const getRequest = () => get(url)
    const { data, error, isPending } = useQuery({queryKey: [{queryKey}], queryFn: getRequest, refetchOnMount: refetchOnMount, refetchOnWindowFocus: refetchOnWindowFocus});
    return {data: data, error: error, isPending: isPending}
}