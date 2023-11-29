import { authControllerSignUp } from "@/5_shared/api/generated";
import { Routes } from "@/5_shared/constants";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

export const useSignUpForm = () => {
    const router = useRouter();

    const { register, handleSubmit } = useForm<{
        email: string;
        password: string;
    }>();

    const signUpMutation = useMutation({
        mutationFn: authControllerSignUp,
        onSuccess() {
            router.push(Routes.Home)
        }
    });

    const errorMessage = signUpMutation.error ? "Sign Up failed!" : null;

    return {
        register,
        handleSubmit: handleSubmit(data => signUpMutation.mutate(data)),
        isLoading: signUpMutation.isLoading,
        errorMessage
    }
}