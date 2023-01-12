import { useControls } from 'leva';
import { getStorageItem, setStorageItem } from '../../utils';

const DevConfig = () => {
  // implement redux to store
  const host = getStorageItem('host');
  const levaConfig = useControls({
    host: {
      value: host || 'https://breathecode-test.herokuapp.com',
      options: {
        breathecode: 'https://breathecode.herokuapp.com',
        'breathecode-test': 'https://breathecode-test.herokuapp.com',
        'breathecode-payments': 'https://breathecode-payments.herokuapp.com',
      },
    },
  });

  setStorageItem('host', levaConfig.host);

  // console.log('levaConfig:::', levaConfig);
  return <></>;
};

export default DevConfig;
