import { Home } from '@/components/screens/Home';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={<Meta title="Boat Rental World" description="Boat Rental World" />}
    >
      <Home />
    </Main>
  );
};

export default Index;
