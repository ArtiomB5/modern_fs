import { authControllerSignIn } from "@/5_shared/api/generated";
import { Routes } from "@/5_shared/constants";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

export const useSignInForm = () => {
    const router = useRouter();

    const { register, handleSubmit } = useForm<{
        email: string;
        password: string;
    }>();

    const signInMutation = useMutation({
        mutationFn: authControllerSignIn,
        onSuccess() {
            router.push(Routes.Home)
        }
    });

    const errorMessage = signInMutation.error ? "Sign In failed!" : null;

    return {
        register,
        handleSubmit: handleSubmit(data => signInMutation.mutate(data)),
        isLoading: signInMutation.isLoading,
        errorMessage
    }
}