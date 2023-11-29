import { FC, ReactNode } from "react"
import { UIHeader } from "."

interface IFormPageLayoutProps {
    title: string
    children: ReactNode
}

export const FormPageLayout: FC<IFormPageLayoutProps> = (props) => {
    const { children, title } = props;
    return <div className={'self-center rounded-xl w-full max-w-[400px] border border-slate-100 px-14 py-8'}>
        <h1 className={'text-2xl mb-10'}>{title}</h1>
        {children}
    </div>
}