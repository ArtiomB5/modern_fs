import { clsx } from "clsx";
import { ButtonHTMLAttributes, FC, ReactNode } from "react"

interface IUIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: UIButtonVariants;
    disabled?: boolean
}

export enum UIButtonVariants {
    Primary,
    Secondary,
    Outlined,
}

export const UIButton: FC<IUIButtonProps> = (props) => {
    const {
        children,
        variant,
        disabled = false,
        className,
        ...buttonProps
    } = props;
    return <button
        {...buttonProps}
        className={
            clsx(
                'px-4 h-10 rounded cursor-pointer flex gap-2 items-center justify-center',
                {
                    [UIButtonVariants.Primary]: 'text-white bg-teal-500 hover:bg-teal-600 disabled:opacity-50 shadow shadow-teal-500/30',
                    [UIButtonVariants.Secondary]: 'text-black bg-teal-200 hover:bg-teal-400 disabled:opacity-50 shadow shadow-teal-500/30',
                    [UIButtonVariants.Outlined]: 'border border-slate-300 hover:bg-slate-500 disabled:opacity-50',
                }[variant],
                disabled && 'text-black bg-gray-400',
                className
            )}
    >
        {children}
    </button>
}