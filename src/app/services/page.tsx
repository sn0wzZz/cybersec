'use client'
import AnimateBlur from '@/components/animate-blur'
import Container from '@/components/container'
import ContentBox from '@/components/content-box'
import PcCodeIcon from '@/components/icons/pc-code'
import ShieldLockIcon from '@/components/icons/shield-lock'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe, MessageSquare } from 'lucide-react'

import ConversionIcon from '@/components/icons/conversion'
import DevBoardIcon from '@/components/icons/dev-board'
import DevicesIcon from '@/components/icons/devices'
import EmailsIcon from '@/components/icons/emails'
import LabProfileIcon from '@/components/icons/lab-profile'
import MoneyBagIcon from '@/components/icons/money-bag'
import PasswordIcon from '@/components/icons/password'


const cards = [
  {
    title: 'Penetration Tests',
    icon: <PcCodeIcon className='w-6 h-6 ' />,
    description:
      'Penetration tests simulate real scenarios of malicious attacks against web applications and systems, as well as internal and public network infrastructure.',
  },
  {
    title: 'Endpoint Protection',
    icon: <DevicesIcon className='w-6 h-6' />,
    description:
      'A cloud-based system that provides complete security with comprehensive visibility of computers and servers, as well as flawless protection against multiple threats.',
  },
  {
    title: 'Vulnerability Assessment',
    icon: <DevBoardIcon className='w-6 h-6' />,
    description:
      'The service provides automated testing for all available public vulnerabilities, both in web applications and systems, IT services and network devices.       ',
  },
  {
    title: 'Web Application Firewall',
    icon: <Globe className='w-6 h-6' />,
    description:
      'WAF protects your web applications by filtering, monitoring and blocking malicious HTTP/S traffic. It does this by adhering to a set of rules that help determine what traffic is malicious and what traffic is safe.',
  },
  {
    title: 'SIEM Software',
    icon: <ShieldLockIcon className='w-6 h-6' />,
    description:
      'A SIEM is a security solution that enables real-time monitoring of various cybersecurity logs sent by multiple different IT systems, computers, and servers that can be correlated and processed in real-time.',
  },
  {
    title: 'Security Email Gateway',
    icon: <EmailsIcon className='w-6 h-6' />,
    description:
      'Cloud-based service that allows complete filtering of incoming and outgoing traffic from your email server. Guaranteed blocking of all spam, malicious and dangerous emails. It can also act as a DLP solution.',
  },
  {
    title: 'DNS Filtering Gateway',
    icon: <PasswordIcon className='w-6 h-6' />,
    description:
      'The service allows comprehensive filtering of DNS traffic according to predefined rules and configuration. Ability to monitor and trace DNS history, as well as create multiple policies and groups.',
  },
]

const cards2 = [
  {
    title: 'Security Awareness Training',
    icon: <PcCodeIcon className='w-6 h-6' />,
    description:
      'The purpose of such cyber security training is mainly to improve the digital culture of your employees as well as to make them understand what are the dangers in the digital world that they need to defend against.',
  },
  {
    title: 'Data Breach Investigation',
    icon: <ConversionIcon className='w-6 h-6' />,
    description:
      'The service offers a comprehensive approach to security incident investigation. If so, our team can help your business by identifying the source of unauthorized access and providing the best approach to risk management.',
  },
  {
    title: 'Vulnerability Assessment',
    icon: <DevBoardIcon className='w-6 h-6' />,
    description:
      'The service provides automated testing for all available public vulnerabilities, both in web applications and systems, IT services and network devices.       ',
  },
  {
    title: 'CISO as a Service',
    icon: <MessageSquare className='w-6 h-6' />,
    description:
      'A CISOaaS service involves outsourcing security management responsibilities to an external provider. By hiring a vCISO to remotely manage its security, a company automatically gains access to staff and resources that it normally does not and cannot have.',
  },
  {
    title: 'Information Security Policies',
    icon: <LabProfileIcon className='w-6 h-6' />,
    description:
      "Security should be a concern for every employee in an organization, not just IT professionals and top managers. One effective way to educate employees about the importance of security is through cybersecurity policies that explain each employee's responsibilities for protecting IT systems and data.",
  },
  {
    title: 'Security Email Gateway',
    icon: <EmailsIcon className='w-6 h-6' />,
    description:
      'Cloud-based service that allows complete filtering of incoming and outgoing traffic from your email server. Guaranteed blocking of all spam, malicious and dangerous emails. It can also act as a DLP solution.',
  },
  {
    title: 'Ransomware Incidents',
    icon: <MoneyBagIcon className='w-6 h-6' />,
    description:
      'The service offers complete help and support in case of a ransomware attack against your organization. Our specialists will try to recover as much information as possible, and additionally can be a communication point with the threat actors. All forensic and remediation activities are included.',
  },
]

export default function Page() {
  return (
    <>
      <Container
        outer='pt-[200px] bg-gradient-to-b from-[hsla(235,100%,98%,1)] from-5% to-background to-95%  dark:from-background dark:to-background '
        className=' flex flex-col gap-24'
      >
        <ContentBox
          caption='Cybersecurity services'
          title='Managed Cybersecurity Services'
          button={{
            fn: () => {
              console.log('click')
            },
          }}
        />

        <AnimateBlur>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {cards.map((card, i) => (
              <Card key={i} icon={card.icon}>
                <CardHeader className='gap-6'>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimateBlur>
      </Container>

      <Container
        outer='mt-[100px] py-[100px] bg-muted '
        className=' flex flex-col gap-24'
      >
        <ContentBox
          caption='Consulting services for your business'
          title='Trusted Expertise From Our Experts'
          button={{
            fn: () => {
              console.log('click')
            },
          }}
        />

        <AnimateBlur>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {cards2.map((card, i) => (
              <Card key={i} icon={card.icon}>
                <CardHeader className='gap-6'>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimateBlur>
      </Container>
    </>
  )
}
