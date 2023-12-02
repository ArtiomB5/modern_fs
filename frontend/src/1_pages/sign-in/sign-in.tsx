import { SignInForm } from "@/3_features/auth";
import { FormPageLayout } from "@/5_shared/ui";

export const SignInPage = () => {
    return <FormPageLayout title={'Sign In'}>
        <SignInForm />
    </FormPageLayout>
}