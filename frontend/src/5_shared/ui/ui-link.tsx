import { clsx } from "clsx";
import Link from "next/link";
import { FC } from "react"

type LinkPropsType = Parameters<typeof Link>[0];

interface IUILinkProps extends LinkPropsType {
    disabled?: boolean;
}

export const UILink: FC<IUILinkProps> = (props) => {
    const { disabled } = props;
    const {
        className,
        ...linkProps
    } = props;
    return <Link
        {...linkProps}
        className={
            clsx(
                'p-1 text-teal-500 hover:text-teal-600 cursor-pointer',
                className
            )}
    />
}