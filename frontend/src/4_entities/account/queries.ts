import { accountControllerGetAccount } from "@/5_shared/api/generated"
import { QueryKeys } from "@/5_shared/constants"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { accountControllerPatchAccount } from '../../5_shared/api/generated';

export const useAccountQuery = () => {
    return useQuery({
        queryKey: QueryKeys.Account,
        queryFn: accountControllerGetAccount
    })
}

export const useUpdateAccountMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: accountControllerPatchAccount,
        async onSettled() {
            await queryClient.invalidateQueries(QueryKeys.Account)
        }
    })
}