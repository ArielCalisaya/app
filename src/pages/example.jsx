import { Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import KPI from '../common/components/KPI';
import { H1 } from '../common/styledComponents/Head';

export const getStaticProps = () => ({
  props: {
    seo: {
      unlisted: true,
    },
  },
});

export default function Example() {
  const { t } = useTranslation(['common', 'counter']);
  const [randomRumber, setRandomRumber] = useState('0');
  const [randomValue, setRandomValue] = useState(0.0001);
  const [randomRumber2, setRandomRumber2] = useState('0');
  const [randomValue2, setRandomValue2] = useState(0.0001);
  useEffect(() => {
    setTimeout(() => {
      const randomOperator = Math.random() < 0.5 ? '-' : '+';
      setRandomRumber(`${randomOperator}${(Math.random() * 10).toFixed(1)}`);
      setRandomValue((Math.random() * 0.2).toFixed(4));
    }, 3500);
    setTimeout(() => {
      const randomOperator = Math.random() < 0.5 ? '-' : '+';
      setRandomRumber2(`${randomOperator}${(Math.random() * 10).toFixed(1)}`);
      setRandomValue2((Math.random() * 0.2).toFixed(4));
    }, 4500);
  }, [randomRumber]);

  return (
    <main className={styles.main}>
      <H1 type="h1" className={styles.title}>
        {t('common:heading')}
      </H1>

      <Box display="grid" mt="40px" width="100%" padding={{ base: '0 4vw', md: '0 8vw' }} gridTemplateColumns="repeat(auto-fill, minmax(15rem, 1fr))" gridGap="10px">
        <KPI label="COIN/USDT" icon="chronometer" value={randomValue} variation={randomRumber} changeWithColor />
        <KPI label="student rating" icon="smile" value={8.5} max={10} />
        <KPI label="Total monthly income" unit="$" value={2000} variation="+3.7" />
        <KPI label="Mentor late arrivals" icon="running" variation="2" value={2} max={10} />
        <KPI label="COINDOWN/USDT" icon="chronometer" value={randomValue2} variation={randomRumber2} />
        <KPI label="Overtime" icon="chronometer" value={3} max={10} variation="-4" />
        <KPI label="The student didn't arrive" icon="ghost" value={0} max={10} variation="0" />
      </Box>

    </main>
  );
}
