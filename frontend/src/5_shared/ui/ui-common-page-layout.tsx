import { FC, ReactNode } from "react"
import { UIHeader } from "."

interface ICommonPageLayoutProps {
    children: ReactNode
}

export const CommonPageLayout: FC<ICommonPageLayoutProps> = (props) => {
    const { children } = props;
    return <div className={'min-h-screen flex flex-col'}>
        <UIHeader />
        <main className={'flex grow flex-col pt-24'}>
            {children}
        </main>
    </div>
}