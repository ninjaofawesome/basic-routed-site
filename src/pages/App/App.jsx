import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Image from '../../components/Image';

const App = () => {
  return (
    <>
    <Header/>
    <Wrapper>
      <Card>
        <Image />
        <h2>Hello world</h2>
      </Card>
    </Wrapper>
    </>
  );
}

export default App;
