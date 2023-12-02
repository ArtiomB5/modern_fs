import { blockListControllerGetList } from "@/5_shared/api/generated";
import { QueryKeys } from "@/5_shared/constants";
import { useMutation, useQuery, useQueryClient } from "react-query"
import { blockListControllerAddBlockItem } from '../../5_shared/api/generated';

const blockingListKey = [QueryKeys.BlockingList] as unknown[];

type UseBlockingListQueryPropsType = {
    q?: string
}

export const useBlockingListQuery = (props: UseBlockingListQueryPropsType) => {
    const { q } = props;
    return useQuery({
        queryKey: blockingListKey.concat([{ q }]),
        queryFn: () => blockListControllerGetList({ q: q === undefined ? null : q })
    })
}

export const useAddBlockingItemMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: blockListControllerAddBlockItem,
        onSettled: async () => {
            await queryClient.invalidateQueries(blockingListKey);
        }
    })
}

export const useAddRemoveItemMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: blockListControllerAddBlockItem,
        onSettled: async () => {
            await queryClient.invalidateQueries(blockingListKey);
        }
    })
}