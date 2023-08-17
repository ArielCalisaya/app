import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import { H1 } from '../common/styledComponents/Head';
import modifyEnv from '../../modifyEnv';

export const getStaticProps = () => ({
  props: {
    previewMode: true,
    seo: {
      unlisted: true,
    },
  },
});

export default function Thmbnail() {
  const [asset, setAsset] = useState(null);
  const BREATHECODE_HOST = modifyEnv({ queryString: 'host', env: process.env.BREATHECODE_HOST });
  const router = useRouter();
  const { slug } = router.query;

  const getAsset = async () => {
    const response = await fetch(`${BREATHECODE_HOST}/v1/registry/asset/${slug}`);
    const result = await response.json();

    setAsset(result);
  };

  useEffect(() => {
    if (slug !== undefined) {
      getAsset();
    }
  }, [slug]);

  const randomImgNumber = Math.floor(Math.random() * 5) + 1;

  const Div = styled.div`
    background: url("/static/images/thumbnail/random-bg${randomImgNumber}.webp");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(randomImgNumber === 2 || randomImgNumber === 3) ? 'white' : 'black'};
  `;

  if (!asset) return null;

  return (
    <Div>
      <H1 type="h1" className={styles.title}>
        {asset.title}
      </H1>
    </Div>
  );
}
