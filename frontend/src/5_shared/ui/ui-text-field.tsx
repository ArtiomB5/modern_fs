import clsx from "clsx";
import { FC, HTMLAttributes, InputHTMLAttributes, PropsWithRef, ReactNode, useId } from "react"

interface IUITextFieldProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    error?: string;
    inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
}

export const UITextField: FC<IUITextFieldProps> = (props) => {
    const {
        label,
        error,
        inputProps,
        className,
        ...divProps
    } = props;
    const id = useId();
    return <div
        {...divProps}
        className={clsx(
            'flex flex-col gap-1 my-1',
            className
        )}>
        {label &&
            <label
                className={'block'}
                htmlFor={id}
            >
                {label}
            </label>}
        <input
            {...inputProps}
            id={id}
            className={clsx(
                'rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none',
                inputProps?.className
            )}
        />
        {error &&
            <div
                className={'text-rose-400 text-sm'}
            >
                {error}
            </div>}
    </div>
}