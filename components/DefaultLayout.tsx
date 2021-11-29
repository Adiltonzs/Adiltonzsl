import Head from 'next/head'

import { SidebarNav } from 'components/SidebarNav'
import { Header } from 'components/Header'
import { SmallFooter } from 'components/SmallFooter'
import { ScrollButton } from 'components/ScrollButton'
import { SupportSection } from 'components/SupportSection'
import { DeprecationBanner } from 'components/DeprecationBanner'
import { useMainContext } from 'components/context/MainContext'
import { useTranslation } from './hooks/useTranslation'
import { useVersion } from './hooks/useVersion'

type Props = { children?: React.ReactNode }
export const DefaultLayout = (props: Props) => {
  const { builtAssets, expose, page, error } = useMainContext()
  const { currentVersion } = useVersion()
  const { t } = useTranslation('errors')
  return (
    <div className="d-lg-flex">
      <Head>
        {error === '404' ? (
          <title>{t('oops')}</title>
        ) : currentVersion !== 'homepage' && page.fullTitle ? (
          <title>{page.fullTitle}</title>
        ) : null}

        <link rel="stylesheet" href={builtAssets.main.css} />
        <script id="expose" type="application/json" dangerouslySetInnerHTML={{ __html: expose }} />
        <script src={builtAssets.main.js} />

        {/* For Google and Bots */}
        {page.introPlainText && <meta name="description" content={page.introPlainText} />}

        {page.topics.length > 0 && <meta name="keywords" content={page.topics.join(',')} />}

        {page.hidden && <meta name="robots" content="noindex" />}

        {page.languageVariants.map((languageVariant) => {
          return (
            <link
              rel="alternate"
              hrefLang={languageVariant.hreflang}
              href={`https://docs.github.com${languageVariant.href}`}
            />
          )
        })}
      </Head>
      <SidebarNav />

      <main className="width-full">
        <Header />
        <DeprecationBanner />

        {props.children}

        <SupportSection />
        <SmallFooter />
        <ScrollButton />
      </main>
    </div>
  )
}
