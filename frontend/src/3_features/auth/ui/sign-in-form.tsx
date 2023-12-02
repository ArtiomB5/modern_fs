import { UIButton, UIButtonVariants, UILink, UITextField } from "@/5_shared/ui"
import { useSignInForm } from "../model/use-sign-in-form";
import { Routes } from "@/5_shared/constants";

export const SignInForm = () => {
    const {
        register,
        handleSubmit,
        isLoading,
        errorMessage
    } = useSignInForm();

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
            Sign In
        </UIButton>
        <UILink
            href={Routes.SignUp}
            className={'text-center'}
        >
            Sign Up
        </UILink>
        {errorMessage && <div className={'text-rose-500 text-center'}>
            {errorMessage}
        </div>}
    </form>
}