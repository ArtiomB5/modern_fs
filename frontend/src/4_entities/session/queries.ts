import { authControllerGetSessionInfo } from "@/5_shared/api/generated"
import { QueryKeys } from "@/5_shared/constants"
import { useQuery, useQueryClient } from "react-query"

export const useSessionQuery = () => {
    return useQuery({
        queryKey: [QueryKeys.Session],
        queryFn: authControllerGetSessionInfo,
        retry: 0,
        staleTime: 5 * 60 * 1000
    })
}

export const useResetSession = () => {
    const queryClient = useQueryClient();
    return () => queryClient.removeQueries([QueryKeys.Session]);
}