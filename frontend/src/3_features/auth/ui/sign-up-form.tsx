import { UIButton, UIButtonVariants, UILink, UITextField } from "@/5_shared/ui"
import { useSignUpForm } from "../model/use-sign-up-form";
import { Routes } from "@/5_shared/constants";

export const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        isLoading,
        errorMessage
    } = useSignUpForm();

    return <form
        className={'flex flex-col gap-5'}
        onSubmit={handleSubmit}
    >
        <UITextField
            label={'Email'}
            inputProps={{ type: "email", ...register("email", { required: true }) }}
        />
        <UITextField
            label={'Password'}
            inputProps={{ type: "browser", ...register("password", { required: true }) }}
        />
        <UIButton
            variant={UIButtonVariants.Primary}
            disabled={isLoading}
        >
            Sign Up
        </UIButton>
        <UILink href={Routes.SignIn} className={'text-center'}>
            Sign In
        </UILink>
        {errorMessage && <div
            className={'text-rose-500 text-center'}
        >
            {errorMessage}
        </div>}
    </form>
}