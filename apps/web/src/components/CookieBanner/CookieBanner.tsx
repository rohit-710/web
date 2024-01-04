import { CookieBanner as CoinbaseCookieBanner } from '@coinbase/cookie-banner';
import { useCookie } from '@coinbase/cookie-manager';

import useTranslations from '../../utils/hooks/useTranslations';

export function CookieBanner() {
  const [cm_default_preference] = useCookie('cm_default_preference');
  const [cm_eu_preference] = useCookie('cm_eu_preference');

  console.log('COOKIE VALUE: ', cm_default_preference, cm_eu_preference);

  if (cm_default_preference || cm_eu_preference) return null;

  return (
    <CoinbaseCookieBanner
      link="https://www.coinbase.com/legal/cookie"
      useTranslations={useTranslations}
      companyName="Coinbase"
    />
  );
}
