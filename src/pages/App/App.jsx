import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Image from '../../components/Image';

import { AppWrapper } from './styled';

const App = () => {
  const image = 'http://placekitten.com/200/300';
  return (
    <>
    <Header/>
    <AppWrapper>
      <Wrapper>
        <Card  vertical={false}>
          <Image 
            background={image}
            height='200px'
            width='200px'
           />
          <h2>Hello world</h2>
        </Card>
        <Card>
            <Image 
            background={image}
            height='200px'
            width='200px'
           />
          <h2>Hello world</h2>
        </Card>
      </Wrapper>
    </AppWrapper>
    </>
  );
}

export default App;
