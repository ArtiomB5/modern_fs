import { useResetSession } from "@/4_entities/session/queries";
import { authControllerSignOut } from "@/5_shared/api/generated";
import { Routes } from "@/5_shared/constants";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

export const useSignOut = () => {
    const router = useRouter();
    const resetSession = useResetSession();

    const signOutMutation = useMutation({
        mutationFn: authControllerSignOut,
        async onSuccess() {
            router.push(Routes.SignIn);
            resetSession();
        }
    });

    const errorMessage = signOutMutation.error ? "Sign Out failed!" : null;

    return {
        handleSubmit: signOutMutation.mutate,
        isLoading: signOutMutation.isLoading,
        errorMessage
    }
}