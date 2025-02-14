import ContentBox from '../content-box'
import { Button } from '../ui/button'

export default function CTA() {
  return (
    <div className='flex flex-col items-start md:items-center md:flex-row my-32 gap-8'>
      <ContentBox caption='Stable security' title='Start right now'>
        <p>
          Contact us today to learn more about how our Vulnerability Assessment
          can safeguard your organization’s digital assets and ensure robust
          security and compliance. Our team is ready to assist you in creating a
          secure and resilient IT environment.
        </p>
      </ContentBox>

      <Button size={'lg'}>Contact us</Button>
    </div>
  )
}
