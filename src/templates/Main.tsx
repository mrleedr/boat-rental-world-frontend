import type { ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { Navbars } from '@/components/Navbars';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full antialiased">
    {props.meta}

    <Navbars />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export { Main };
