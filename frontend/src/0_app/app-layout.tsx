import { FC, ReactNode } from "react"
import { UIHeader } from "../5_shared/ui"
import { Profile } from "@/2_widgets/Profile";

interface ICommonPageLayoutProps {
    children: ReactNode
}

export const AppLayout: FC<ICommonPageLayoutProps> = (props) => {
    const { children } = props;
    return <div className={'min-h-screen flex flex-col'}>
        <UIHeader>
            <Profile />
        </UIHeader>
        <main className={'flex grow flex-col'}>
            {children}
        </main>
    </div>
}