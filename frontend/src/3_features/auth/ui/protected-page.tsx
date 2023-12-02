import { useSessionQuery } from "@/4_entities/session/queries";
import { Routes } from "@/5_shared/constants";
import { UIPageSpinner } from "@/5_shared/ui";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export const protectedPage = <P,>(Component: (props: P) => ReactElement) => {
    const ProtectedPage = (props: PropsWithChildren<P>) => {
        const { isLoading, isError } = useSessionQuery();

        const router = useRouter();

        if (isLoading) {
            return <UIPageSpinner />;
        }

        if (isError) {
            router.replace(Routes.SignIn);
        }

        return <Component {...props} />
    }
    return ProtectedPage;
}