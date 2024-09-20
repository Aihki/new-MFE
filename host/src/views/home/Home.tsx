import { MediaContextType } from '@sharedTypes/DBTypes';
import Front from 'front_and_sidebar/Front';
import { useMediaContext } from 'mediastore/contextHooks';

const Home = () => {
  const { mediaItems } = useMediaContext() as MediaContextType;
  return <div>{mediaItems && <Front mediaItems={mediaItems} />}</div>;
};

export default Home;
