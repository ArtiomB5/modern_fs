import { UIButton, UIButtonVariants } from "@/5_shared/ui"
import { useToggleBlocking } from "../model/use-toggle-blocking";

export const ToggleBlockingButton = () => {
    const {
        isLoading,
        toggleBlocking,
        isBlockingEnabled,
        isReady,
    } = useToggleBlocking();
    const variant = isBlockingEnabled ? UIButtonVariants.Primary : UIButtonVariants.Secondary;

    if (!isReady) {
        return null;
    }

    return <UIButton
        variant={variant}
        onClick={toggleBlocking}
        disabled={isLoading}
    >
        {
            isBlockingEnabled ?
                "Disable Blocking" :
                "Enable Blocking"
        }
    </UIButton>
}