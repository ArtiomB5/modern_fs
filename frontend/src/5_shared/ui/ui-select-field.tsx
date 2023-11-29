import clsx from "clsx";
import { FC, HTMLAttributes, SelectHTMLAttributes, PropsWithRef, ReactNode, useId } from "react"
import { v4 as uuidv4 } from 'uuid';

interface IUISelectOptions {
    value: string;
    label: string;
}

interface IUISelectFieldProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    error?: string;
    selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>
    selectOptions: IUISelectOptions[];
}

export const UISelectField: FC<IUISelectFieldProps> = (props) => {
    const {
        label,
        error,
        selectProps,
        selectOptions,
        className,
        ...divProps
    } = props;
    const id = useId();
    const selectOptionsWithKeys = selectOptions.map((option) => ({...option, key: uuidv4()}))
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
        <select
            {...selectProps}
            id={id}
            className={clsx(
                'rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none',
                selectProps?.className
            )}
        >
            {selectOptionsWithKeys.map((option) => <option
                key={option.key}
                value={option.value}
            >
                {option.label}
            </option>)}
        </select>
        {error &&
            <div
                className={'text-rose-400 text-sm'}
            >
                {error}
            </div>}
    </div>
}