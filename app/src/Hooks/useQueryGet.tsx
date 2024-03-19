import { useQuery } from "@tanstack/react-query";
import { get } from "../Store/apiStore";

interface UseQueryGet {
    data: any;
    error: Error | null;
    isPending: boolean;
  }

export const useQueryGet = (url: string, key: string, refetchOnMount?: boolean, refetchOnWindowFocus?: boolean): UseQueryGet => {
    const getRequest = async () => await get(url)
    return useQuery({queryKey: [key], queryFn: getRequest, enabled: true, refetchOnMount: refetchOnMount, refetchOnWindowFocus: refetchOnWindowFocus});
}