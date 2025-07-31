import { getUserLocale } from '@/services/locale'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  const supportedLocales = ['vi', 'en']
  let locale = (await getUserLocale()) || 'vi'

  if (!supportedLocales.includes(locale)) {
    locale = 'vi'
  }

  return {
    locale,
    messages: (await import(`../src/messages/${locale}.json`)).default,
  }
})
