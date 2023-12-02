import { SignOutButton } from "@/3_features/auth";
import { useSessionQuery } from "@/4_entities/session/queries";

export const Profile = () => {
    const { data } = useSessionQuery();

    if (!data) {
        return null
    }

    return <div
        className={'flex gap-2 items-center'}
    >
        {data?.email}
        <SignOutButton />
    </div>
}