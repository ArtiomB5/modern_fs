import { UIButton, UIButtonVariants, UITextField } from "@/5_shared/ui"
import { useSignUpForm } from "../model/use-sign-up-form";

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
        <UIButton
            variant={UIButtonVariants.Secondary}
            disabled={isLoading}
        >
            Sign In
        </UIButton>
        {errorMessage && <div className={'text-rose-500 text-center'}>{errorMessage}</div>}
    </form>
}