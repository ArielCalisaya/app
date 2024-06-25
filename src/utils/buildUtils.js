let prismicData = null;

async function getPrismicData() {
  if (prismicData) return prismicData;

  const response = await fetch(process.env.PRISMIC_API);
  const data = await response.json();

  prismicData = {
    ...data,
    prismicRef: data.refs[0].ref,
  };
  return prismicData;
}

module.exports = { getPrismicData };
