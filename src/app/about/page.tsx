
import Certifications from '@/modules/about/certifications'
import HeroAbout from '@/modules/about/hero-about'
import OperationCenter from '@/modules/about/operation-center'
import Partners from '@/modules/about/partners'
import Vision from '@/modules/about/vision'

export default async function page() {
  return (
    <div>
      <HeroAbout />
      <Partners />
      <Vision />
      <Certifications />
      <OperationCenter />
    </div>
  )
}
