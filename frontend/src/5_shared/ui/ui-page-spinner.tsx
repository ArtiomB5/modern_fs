import { FC } from "react"
import { IUISpinnerProps, UISpinner } from "."
import clsx from "clsx";

export const UIPageSpinner: FC<IUISpinnerProps> = (props) => {
    const { className, ...otherProps } = props;
    return <div className={clsx(
        'fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-slate-100',
        className
    )}
        {...otherProps}
    >
        <UISpinner className={'text-teal-600 w-24 h-24'}/>
    </div>
}