import { Inter } from 'next/font/google'
import { authControllerGetSessionInfo } from '@/5_shared/api/generated'
import { useQuery } from "react-query";
import { UIButton, UIButtonVariants, UIHeader, UILogo, UIPageSpinner, UISpinner, UITextField } from '@/5_shared/ui';
import { UISelectField } from '@/5_shared/ui/ui-select-field';
import { UILink } from '@/5_shared/ui/ui-link';

const inter = Inter({ subsets: ['latin'] })

export const Home = () => {
  const { isLoading, isError, data, error } = useQuery('session', authControllerGetSessionInfo);
  return (
    <main
      className={`${inter.className}`}
    >
      <UIHeader><div>{`Data: ${JSON.stringify(data)}`}</div></UIHeader>
      {(isLoading) && <div>loading</div>}
      {isError && <div>{`Error: ${error.message}`}</div>}
      
      <UIButton variant={UIButtonVariants.Primary}>Hey</UIButton>
      <UIButton variant={UIButtonVariants.Secondary}>Hey</UIButton>
      <UIButton variant={UIButtonVariants.Outlined}>Sign Out</UIButton>
      <UIButton variant={UIButtonVariants.Primary} disabled={true}>Hey</UIButton>
      <UITextField />
      <UITextField error={'Input Error'} />
      <UITextField label={'Input label without error'} />
      <UITextField error={'Input Error'} label={'Input label with error'} />
      <UITextField inputProps={{
        placeholder: "input placeholder without error and label"
      }} />
      <UITextField
        error={'Input Error'}
        inputProps={{
          placeholder: "input placeholder with error and without label"
        }} />
      <UITextField
        error={'Input Error'}
        label={'Input label'}
        inputProps={{
          placeholder: "input placeholder with error and label"
        }} />
      <UISelectField
        selectProps={{
          placeholder: "select placeholder with error and label"
        }}
        selectOptions={[{ value: "value 0", label: "label 0" }]}
      />
      <UILink href={'google.com'}>
        Google
      </UILink>
      <UISpinner className={'w-32 h-32 border-red-600'}/>
      {/* <UIPageSpinner /> */}
      <UILogo />
    </main>
  )
}
