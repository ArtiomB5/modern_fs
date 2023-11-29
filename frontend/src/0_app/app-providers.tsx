import { queryClient } from '@/5_shared/api/query-client';
import { FC, ReactNode } from 'react'
import { QueryClientProvider } from "react-query";

interface IAppProviders {
    children: ReactNode;
}

export const AppProviders: FC<IAppProviders> = (props) => {
    const { children } = props;
    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}