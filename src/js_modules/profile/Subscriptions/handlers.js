import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import PropTypes from 'prop-types';
import useStyle from '../../../common/hooks/useStyle';

const profileHandlers = ({ translations }) => {
  const { t } = useTranslation('profile');
  const [cancelModalIsOpen, setCancelModalIsOpen] = useState(false);
  const [upgradeModalIsOpen, setUpgradeModalIsOpen] = useState(false);
  const { reverseFontColor, fontColor, lightColor } = useStyle();

  const subscriptionTR = translations?.subscription;

  const statusLabel = {
    free_trial: subscriptionTR?.status?.free_trial || t('subscription.status.free_trial'),
    fully_paid: subscriptionTR?.status?.fully_paid || t('subscription.status.fully_paid'),
    active: subscriptionTR?.status?.active || t('subscription.status.active'),
    expired: subscriptionTR?.status?.expired || t('subscription.status.expired'),
    payment_issue: subscriptionTR?.status?.payment_issue || t('subscription.status.payment_issue'),
    cancelled: subscriptionTR?.status?.cancelled || t('subscription.status.cancelled'),
    completed: subscriptionTR?.status?.completed || t('subscription.status.completed'),
  };
  const statusStyles = {
    free_trial: {
      color: fontColor,
      border: '1px solid',
      borderColor: lightColor,
    },
    fully_paid: {
      color: 'green.400',
      background: 'green.light',
    },
    active: {
      color: 'green.400',
      background: 'green.light',
    },
    expired: {
      color: fontColor,
      background: 'transparent',
      border: '1px solid',
    },
    payment_issue: {
      color: 'danger',
      background: 'red.light',
    },
    cancelled: {
      color: reverseFontColor,
      background: 'gray.default',
    },
    completed: {
      color: 'blue.default',
      border: '1px solid',
      borderColor: 'blue.default',
    },
  };

  const onOpenCancelSubscription = () => setCancelModalIsOpen(true);
  const onCloseCancelSubscription = () => setCancelModalIsOpen(false);

  const onOpenUpgrade = () => setUpgradeModalIsOpen(true);
  const onCloseUpgrade = () => setUpgradeModalIsOpen(false);

  return {
    statusStyles,
    statusLabel,
    cancelModalIsOpen,
    upgradeModalIsOpen,
    getLocaleDate: (date) => {
      const newDate = new Date(date);
      return newDate.toLocaleDateString();
    },
    durationFormated: (format) => {
      const duration = format?.duration;
      const days = duration?.days;
      const hours = duration?.hours;
      const daysLabel = translations?.days || t('days');
      const dayLabel = translations?.day || t('day');
      const monthsLabel = translations?.months || t('months');
      const monthLabel = translations?.month || t('month');
      const andLabel = translations?.and || t('and');
      const hoursLabel = translations?.hours || t('hours');

      if (format.status === 'expired') return translations?.expired || t('expired');
      if (duration?.months > 0) return `${duration?.months} ${duration?.months <= 1 ? monthLabel : monthsLabel}`;
      if (days === 0 && hours > 0) return `${hours}h ${andLabel} ${duration?.minutes}min`;
      if (days > 7) return `${days} ${daysLabel}`;
      if (days <= 7 && hours < 0) return `${days} ${days > 1 ? daysLabel : dayLabel} ${duration?.hours > 0 ? `${andLabel} ${duration?.hours} ${hoursLabel}` : ''}`;
      return format?.formated;
    },
    subscriptionHandler: (status) => {
      // ACTIVE, FREE_TRIAL, FULLY_PAID, CANCELLED, PAYMENT_ISSUE
      if (status === 'ACTIVE' || status === 'FULLY_PAID') {
        return {
          text: subscriptionTR?.cancel || t('subscription.cancel'),
          style: {
            variant: 'link',
          },

          open: onOpenCancelSubscription,
          close: onCloseCancelSubscription,
        };
      }
      if (status === 'FREE_TRIAL') {
        return {
          text: subscriptionTR?.cancel || t('subscription.upgrade'),
          style: {
            variant: 'outline',
            color: 'blue.default',
            borderColor: 'currentColor',
            fontWeight: 700,
          },

          open: onOpenUpgrade,
          close: onCloseUpgrade,
        };
      }

      if (status === 'CANCELLED') {
        return {
          text: subscriptionTR?.['reactivate-subscription'] || t('subscription.reactivate-subscription'),
          style: {
            variant: 'default',
            color: 'white',
            fontWeight: 700,
          },

          open: onOpenUpgrade,
          close: onCloseUpgrade,
        };
      }

      // PAYMENT_ISSUE
      return {
        text: subscriptionTR?.upgrade || t('subscription.upgrade'),
        style: {
          variant: 'outline',
          color: 'blue.default',
          borderColor: 'currentColor',
          fontWeight: 700,
        },
        open: onOpenUpgrade,
        close: onCloseUpgrade,
      };
    },
    payUnitString: (payUnit) => {
      if (payUnit === 'MONTH') return translations?.monthly || t('monthly');
      if (payUnit === 'HALF') return translations?.['half-year'] || t('half-year');
      if (payUnit === 'QUARTER') return translations?.quaterly || t('quarterly');
      if (payUnit === 'YEAR') return translations?.yearly || t('yearly');
      return payUnit;
    },
  };
};

profileHandlers.propTypes = {
  translations: PropTypes.objectOf(PropTypes.any),
};

profileHandlers.defaultProps = {
  translations: {},
};

export default profileHandlers;