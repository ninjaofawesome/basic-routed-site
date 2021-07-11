import Card from '../../components/Card';
import Image from '../../components/Image';

const AboutPage = () => {
  const image = 'http://placekitten.com/200/300';
  return (
	<Card>
		<Image 
		background={image}
		height='200px'
		width='200px'
		/>
		<h2>Hello About Page</h2>
	</Card>
  );
}

export default AboutPage;