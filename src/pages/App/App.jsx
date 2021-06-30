import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Image from '../../components/Image';

import { AppWrapper } from './styled';

const App = () => {
  return (
    <>
    <Header/>
    <AppWrapper>
      <Wrapper>
        <Card  vertical={false}>
          <Image />
          <h2>Hello world</h2>
        </Card>
        <Card>
          <Image />
          <h2>Hello world</h2>
        </Card>
      </Wrapper>
    </AppWrapper>
    </>
  );
}

export default App;
