import { useAccountQuery, useUpdateAccountMutation } from "@/4_entities/account/queries";

export const useToggleBlocking = () => {
    const accountQuery = useAccountQuery();
    const updateAccountMutation = useUpdateAccountMutation();

    const toggleBlocking = () => {
        if (accountQuery.data) {
            updateAccountMutation.mutate({
                isBlockingEnabled: !accountQuery.data?.isBlockingEnabled
            })
        }
    };

    return {
        isLoading: accountQuery.isLoading || updateAccountMutation.isLoading,
        toggleBlocking,
        isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
        isReady: accountQuery.isSuccess
    }
}