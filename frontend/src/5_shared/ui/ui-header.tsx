import { FC, HTMLAttributes, ReactNode } from "react"
import { UILogo } from "./"
import clsx from "clsx";

interface IUIHeader extends HTMLAttributes<HTMLElement> {
    children?: ReactNode
}

export const UIHeader: FC<IUIHeader> = (props) => {
    const { children, className, ...otherProps } = props;
    return <header
        className={clsx(
            'w-full px-4 border-b border-b-slate-300 flex justify-between items-center',
            className
        )}
        {...otherProps}
    >
        <UILogo />
        {children}
    </header>
}