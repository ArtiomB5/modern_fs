import { Inter } from 'next/font/google'
import { UIButton, UIButtonVariants, UIHeader, UILogo, UISpinner, UITextField } from '@/5_shared/ui';
import { UISelectField } from '@/5_shared/ui/ui-select-field';
import { UILink } from '@/5_shared/ui/ui-link';
import { ToggleBlockingButton } from '@/3_features/toggle-blocking';

const inter = Inter({ subsets: ['latin'] })

export const Home = () => {
  return (
    <div
      className={`${inter.className}`}
    >
      <div className={'grid grid-cols-[200px_1fr]'}>
        <aside className={'px-5 pt-10'}>
          <ToggleBlockingButton />
        </aside>
      </div>
    </div>
  )
}
