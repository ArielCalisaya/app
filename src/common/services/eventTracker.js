import TagManager from 'react-gtm-module';
import {
  cleanObject,
  // location
} from '../../utils';

const trackEvent = (data = {}) => {
  const cleanedData = cleanObject(data);

  TagManager.dataLayer(cleanedData);
};

const eventTracker = {
  login: (data) => trackEvent({
    event: 'login',
    // method: data?.method, // Github, Google, etc.
    // user_id: data?.user_id,
    dataLayer: {
      method: data?.method, // Github, Google, etc.
      user_id: data?.user_id,
    },
    dataLayerName: 'login',
  }),

  checking: (data) => trackEvent({
    event: 'begin_checkout',
    dataLayer: {
      currency: data?.currency,
      value: data?.value,
      items: data?.items,
    },
    dataLayerName: 'PageDataLayer',
  }),
};

export default eventTracker;
