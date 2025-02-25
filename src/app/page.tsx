import { fetchBlock } from '@/lib/services/block'
import { fetchBlocks } from '@/lib/services/blocks'
import { cybersec } from '@/lib/services/client'
import { fetchPerks } from '@/lib/services/perks'
import Directive from '@/modules/index/directive'
import FAQ, { FAQProps } from '@/modules/index/faq'
import Hero from '@/modules/index/hero'
import Resources from '@/modules/index/resources'
import Services from '@/modules/index/services'
import Solutions from '@/modules/index/solutions'

export default async function Home() {
  const { data: hero } = await fetchBlock({
    filters: {
      identifier: {
        $eq: 'home.hero',
      },
    },
  })

  const { data: videoBlock } = await fetchBlock({
    filters: {
      identifier: {
        $eq: 'home.block-with-video',
      },
    },
  })

  const { data: services } = await fetchBlocks({
    filters: {
      identifier: {
        $eq: 'home.services',
      },
    },
  })

  const { data: perksPrimary } = await fetchPerks({
    filters: {
      identifier: {
        $eq: 'home.perks-primary',
      },
    },
  })

  // const { data: services } = await cybersec.getRows('blocks', {
  //   filter: {
  //     identifier: {
  //       $eq: 'home.services',
  //     },
  //   },

  // })

  const { data: faq } = await cybersec.getRows('faq')

    const { data: faqBlock } = await fetchBlock({
      filters: {
        identifier: {
          $eq: 'home.faq',
        },
      },
    })


  return (
    <div className=''>
      <Hero block={hero} />
      <Directive block={videoBlock} perks={perksPrimary} />
      <Solutions />
      <Services block={services} />
      <Resources />
      <FAQ block={faqBlock} faq={faq as unknown as FAQProps[]} />
    </div>
  )
}
