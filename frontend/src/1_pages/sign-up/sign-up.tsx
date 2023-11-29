import { SignUpForm } from "@/3_features/auth";
import { FormPageLayout } from "@/5_shared/ui";

export const SignUpPage = () => {
    return <FormPageLayout title={'Sign Up'}>
        <SignUpForm />
    </FormPageLayout>
}