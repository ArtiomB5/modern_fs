import { UIButton, UIButtonVariants } from "@/5_shared/ui"
import { useSignOut } from "../model/use-sign-out";

export const SignOutButton = () => {
    const {
        handleSubmit,
        isLoading,
    } = useSignOut();

    return <>
        <UIButton
            onClick={() => handleSubmit({})}
            variant={UIButtonVariants.Outlined}
            disabled={isLoading}
        >
            Sign Out
        </UIButton>
    </>
}