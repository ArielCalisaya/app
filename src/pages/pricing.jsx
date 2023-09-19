import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import getT from 'next-translate/getT';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import GridContainer from '../common/components/GridContainer';
import Heading from '../common/components/Heading';
import useStyle from '../common/hooks/useStyle';
import bc from '../common/services/breathecode';
import { getSuggestedPlan, getTranslations } from '../common/handlers/subscriptions';
import useAuth from '../common/hooks/useAuth';
import axiosInstance from '../axios';
import PricingCard from '../common/components/PricingCard';

export async function getServerSideProps({ query, locale }) {
  const t = await getT(locale, ['common', 'signup']);
  const translations = getTranslations(t);
  axiosInstance.defaults.headers.common['Accept-Language'] = locale;

  const { plan } = query;
  const planFormated = plan && encodeURIComponent(plan);
  const suggestedPlan = planFormated ? await getSuggestedPlan(planFormated, translations) : {};

  if (Object.values(suggestedPlan).length === 0 || suggestedPlan?.status_code >= 400) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      seo: {
        title: `${t('upgrade')} ${t('word-connector.to')} ${suggestedPlan?.title}` || '',
      },
      data: suggestedPlan,
    },
  };
}

const switchTypes = {
  monthly: 'monthly',
  yearly: 'yearly',
};
function PricingPage({ data }) {
  const { t } = useTranslation('signup');
  const [activeType, setActiveType] = useState('monthly');
  const { isAuthenticated } = useAuth();
  const [relatedSubscription, setRelatedSubscription] = useState({});
  const { hexColor } = useStyle();

  const basicPlan = data?.plans?.original_plan;
  const suggestedPlan = data?.plans?.suggested_plan;

  const allFeaturedPlans = [
    ...basicPlan?.plans || [],
    ...suggestedPlan?.plans || [],
  ];

  const monthlyPlans = allFeaturedPlans?.length > 0 ? allFeaturedPlans.filter((p) => p?.period !== 'YEAR') : [];
  const yearlyPlans = allFeaturedPlans?.length > 0 ? allFeaturedPlans.filter((p) => p?.period === 'YEAR') : [];

  const switcherInfo = [
    {
      type: 'monthly',
      name: t('info.monthly'),
      exists: monthlyPlans.length > 0,
    },
    {
      type: 'yearly',
      name: t('info.yearly'),
      exists: yearlyPlans.length > 0,
    },
  ];

  const existentOptions = switcherInfo.filter((l) => l.exists);

  useEffect(() => {
    if (isAuthenticated) {
      bc.payment({
        status: 'ACTIVE,FREE_TRIAL,FULLY_PAID,CANCELLED,PAYMENT_ISSUE',
      }).subscriptions()
        .then((resp) => {
          const subscriptions = resp?.data?.subscriptions || [];
          const planFinancings = resp?.data?.plan_financings || [];
          const allSubscriptions = [...subscriptions, ...planFinancings];
          const findPurchasedPlan = allSubscriptions?.length > 0 && allSubscriptions.find(
            (userPlan) => allFeaturedPlans.some(
              (featuredPlan) => userPlan?.plans[0]?.slug === featuredPlan?.plan_slug
                && userPlan?.invoices?.[0]?.amount === featuredPlan?.price,
            ),
          );
          setRelatedSubscription(findPurchasedPlan);
        });
    }
  }, [isAuthenticated]);

  return (
    <Box>
      <GridContainer
        maxWidth="1280px"
        position="relative"
        margin="0 auto"
        gridColumn="1 / span 10"
        mt="4rem"
        padding="0 10px"
      >
        <Box display="flex" flexDirection="column" alignItems="center" gridGap="32px" gridColumn="2 / span 8">
          <Heading as="h1" textAlign="center">
            {t('our_plans')}
          </Heading>
          {existentOptions.length > 0 && (
            <Box display="flex" border={`1px solid ${hexColor.blueDefault}`} borderRadius="4px">
              {existentOptions.map((info) => (
                <Box
                  key={info.type}
                  padding="8px 16px"
                  textTransform="uppercase"
                  fontWeight={900}
                  background={activeType === info.type ? 'blue.default' : ''}
                  color={activeType === info.type ? 'white' : 'blue.default'}
                  cursor={activeType === info.type ? 'default' : 'pointer'}
                  onClick={() => setActiveType(info.type)}
                >
                  {info.name}
                </Box>
              ))}
            </Box>
          )}

          <Box width="100%" overflowX="auto">
            <Flex width={{ base: 'max-content', md: 'auto' }} justifyContent="center" gridGap="24px" margin="0 auto">
              {monthlyPlans?.length > 0 && monthlyPlans.map((plan) => (
                <PricingCard
                  key={plan?.plan_id}
                  item={plan}
                  relatedSubscription={relatedSubscription}
                  width={{ base: '300px', md: '100%' }}
                  display={activeType === switchTypes.monthly ? 'flex' : 'none'}
                />
              ))}

              {yearlyPlans?.length > 0 && yearlyPlans.map((plan) => (
                <PricingCard
                  key={plan?.plan_id}
                  item={plan}
                  relatedSubscription={relatedSubscription}
                  width={{ base: '300px', md: '100%' }}
                  display={activeType === switchTypes.yearly ? 'flex' : 'none'}
                />
              ))}
            </Flex>
          </Box>
        </Box>
      </GridContainer>
    </Box>
  );
}

PricingPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};

export default PricingPage;