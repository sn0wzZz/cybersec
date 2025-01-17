import AnimateBlur from '@/components/animate-blur'
import Container from '@/components/container'
import ContentBox from '@/components/content-box'
import malwarebytes from '../../../public/services/articles/malwarebytes.png'
import pc from '../../../public/services/articles/pc.png'
import clickbait from '../../../public/services/articles/clickbait.png'
import Image from 'next/image'
import AnimateSlideUp from '@/components/animate-slide-up'
import CheckIcon from '@/components/icons/check'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SecurityIcon from '@/components/icons/security'
import { Globe, PenIcon } from 'lucide-react'
import PcCodeIcon from '@/components/icons/pc-code'
import NetworkInteligenceIcon from '@/components/icons/network-inteligence'
import ShieldLockIcon from '@/components/icons/shield-lock'

import CloudIcon from '@/components/icons/cloud'
import PcIcon from '@/components/icons/pc'
import ContactEditIcon from '@/components/icons/contact-edit'
import AsteriskIcon from '@/components/icons/asterisk'
import PasteSearchIcon from '@/components/icons/paste-search'
import FactCheckIcon from '@/components/icons/fact-check'
import PersonCheckIcon from '@/components/icons/person-check'
import BackHandIcon from '@/components/icons/back-hand'

const cards = [
  {
    title: 'Information',
    icon: <CheckIcon className='w-6 h-6' />,
    description: 'About Malwarebytes EP',
  },
  {
    title: 'Advantages',
    icon: <CheckIcon className='w-6 h-6' />,
    description: 'and capabilities',
  },
  {
    title: 'information',
    icon: <CheckIcon className='w-6 h-6' />,
    description: 'about Malwarebytes EPR',
  },
  {
    title: 'Malwarebytes EP (R)',
    icon: <CheckIcon className='w-6 h-6' />,
    description: 'vs normal antivirus software',
  },
  {
    title: 'Why companies',
    icon: <CheckIcon className='w-6 h-6' />,
    description: 'need EP (R)',
  },
  {
    title: 'Benefit and ROI',
    icon: <CheckIcon className='w-6 h-6' />,
    description: 'for your organization',
  },
]

const cards2 = [
  {
    title: 'Comprehensive protection and speed',
    icon: <SecurityIcon className='w-[18px] h-[18px]' />,
    description:
      'Many endpoint security solutions flood endpoints with ever-growing databases of malware signatures, and this leads to poor performance due to heavy scanning algorithms. In contrast, Malwarebytes uses a single, low-demand agent that quickly identifies and blocks the execution of malicious code without affecting device performance.',
  },
  {
    title: 'Sophisticated web protection',
    icon: <Globe className='w-[18px] h-[18px]' />,
    description:
      "The Web Protection module proactively prevents users from accessing malicious sites, malicious ads, scam networks, and suspicious URLs, as well as downloading potentially unwanted programs and those that would lead to potentially unwanted modifications. You can also add additional blacklisted or whitelisted domains, depending on your organization's policies.",
  },
  {
    title: 'Compliance with requirements',
    icon: <PcCodeIcon className='w-[18px] h-[18px]' />,
    description:
      "Instead of training for malware, Malwarebytes' Machine Learning model is trained to recognize good software - properly signed code from known vendors. The result is a predictive malware inference that becomes faster to determine and more accurate over time.",
  },
  {
    title: 'The fastest threat intelligence on the market',
    icon: <NetworkInteligenceIcon className='w-[18px] h-[18px]' />,
    description:
      'Take advantage of malware detection and remediation information collected from millions of enterprise and private end devices. Even new, unidentified malware is usually eliminated before it can affect your endpoints because its runtime behavior is actively monitored.',
  },
  {
    title: 'Behavior-based blocking',
    icon: <ShieldLockIcon className='w-[18px] h-[18px]' />,
    description:
      'Malwarebytes secures your devices by blocking public exploits, stopping unauthorized code execution, and interrupting communication with proven malicious malware servers to dramatically reduce the risk of your organization being compromised.',
  },
  {
    title: 'Unauthorized access detection',
    icon: <PcIcon className='w-[18px] h-[18px]' />,
    description:
      'Malwarebytes performs constant behavior-based analysis, provides near-real-time identification of behavior that is clearly malicious, and automatically blocks the threat, providing the most proactive and intelligent protection on the market today.',
  },
  {
    title: 'All Cloud management',
    icon: <CloudIcon className='w-[18px] h-[18px]' />,
    description:
      'A full suite of endpoint protection functionality and automation capabilities, managed by the Malwarebytes Nebula cloud platform and accessible from an intuitive user interface, make fighting malware a matter of clicks, not writing codes, scripts and workarounds.',
  },
  {
    title: 'Prevention of 0day attacks',
    icon: <PenIcon className='w-[18px] h-[18px]' />,
    description:
      "Malwarebytes applies the analysis of so-called payloads that do not appear in the unified signature database and tries to find anomalies to identify and block malware that tries to exploit hidden vulnerabilities in your organization's operating systems and applications.",
  },
  {
    title: 'Tracks infection, successfully quarantines',
    icon: <ContactEditIcon className='w-[18px] h-[18px]' />,
    description:
      'Malwarebytes Linking Engine tracks every installation, modification, and process instantiation—including executables in memory that other anti-malware packages miss—taking a complete inventory of the threat, enabling complete remediation. Separately, the customer and security professionals have a complete history of every single change and action in the form of an intuitive interface.',
  },
  {
    title: 'Configuration evaluation',
    icon: <AsteriskIcon className='w-[18px] h-[18px]' />,
    description:
      'Our solution provides extensive threat analysis along with an assessment of their potential impact. Your IT team can save time and effectively communicate potential impacts and risks to executive management.',
  },
]

const cards3 = [
  {
    title: 'Incident detection',
    icon: <PasteSearchIcon className='w-[18px] h-[18px]' />,
    description:
      'EP/EDR software solutions detect incidents that might otherwise go unnoticed. This technology proactively analyzes everything that happens on the computer to detect indicators of malicious activity. Additionally, because it collects events from all sources on the network, the system can reconstruct the timeline of an attack to help determine its nature and impact. The platform communicates recommendations to security controls – for example, changing settings or computer configuration.',
  },
  {
    title: 'Improved efficiency',
    icon: <FactCheckIcon className='w-[18px] h-[18px]' />,
    description:
      'SIEM tools can greatly improve your efficiency when it comes to understanding and processing events in your IT environment. With SIEM, you can view security log data from many different hosts on your network from a single interface. This speeds up the incident handling process in several ways. First, the ability to easily see log data from the hosts in your environment allows your IT team to quickly identify an attack path. Second, centralized data allows you to easily identify the hosts that have been affected by an attack.',
  },
  {
    title: 'Better efficiency of the IT department',
    icon: <PersonCheckIcon className='w-[18px] h-[18px]' />,
    description:
      'EP/EDR tools can greatly improve your efficiency when it comes to understanding and handling events in your IT environment. You can view security log data from many different hosts on your system from a single interface. This speeds up the incident handling process in several ways. First, the ability to easily see log data (logs) from the hosts in your environment. This allows your IT team to quickly identify and respond if necessary to the problem. Second, centralized data allows you to easily identify hosts that have been affected by an attack or security incident.',
  },
  {
    title: 'One solution to several problems',
    icon: <BackHandIcon className='w-[18px] h-[18px]' />,
    description:
      'Companies typically use multiple different security solutions at the same time. This is due to the fact that each security solution has its flaws and shortcomings, and accordingly, with a newly identified risk, the company simply implements new software. Malwarebytes offers a cyber security solution that deals with the problems of dangerous emails, malicious domains, outdated software that allows the computer/system to be compromised, targeted attacks with popular vulnerabilities, as well as traditional Adware/Spyware problems that usually fly under the radar of most security software due to their innocuous nature.',
  },
]

export default function Page() {
  return (
    <Container
      outer='pt-[200px] bg-section-gradient '
      className=' flex flex-col gap-24'
    >
      <ContentBox
        caption=' An innovative solution to protect your devices'
        title='Malwarebytes Endpoint Protection'
      >
        <p>
          For cybercriminals, the primary target remains enterprise networks,
          where data, users and enterprise systems come together to generate and
          implement business processes. To protect your enterprise endpoints and
          prevent unauthorized parties from using them as entry points into your
          infrastructure, your IT security team should review ways to enhance
          your existing security. Implementing the full lifecycle of endpoint
          protection, from automatically blocking a common threat to quickly and
          appropriately responding to complex incidents, requires preventative
          technologies complemented by advanced defense capabilities. <br />{' '}
          <br />
          Malwarebytes Endpoint Protection provides affordable security with
          massive visibility across all enterprise network endpoints together,
          with superior protection enabling the automation of routine tasks to
          detect, prioritize, investigate and neutralize sophisticated threats
          and APT-like attacks.
          <br /> <br /> CYBERSEC is an official partner of Malwarebytes and as
          such we can provide our customers with access to the Nebula® and
          Oneview® platforms as part of the service. Whether you use Endpoint
          Protection or Endpoint Protection and Response for your endpoints,
          we&apos;ll provide you with monitoring and support, as well as a 24/7
          emergency hotline.
        </p>
        <AnimateBlur>
          <Image
            src={malwarebytes}
            alt='malwarebytes'
            className='mx-auto mt-12'
          />
        </AnimateBlur>
      </ContentBox>

      <AnimateSlideUp>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-24 mb-8'>
          {cards.map((card, i) => (
            <Card key={i}>
              <CardHeader className='gap-6' icon={card.icon}>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimateSlideUp>

      <ContentBox
        caption='Additional information about the service'
        title='Malwarebytes Endpoint Protection'
        image={clickbait}
      >
        Malwarebytes (EP) for Windows and Mac can easily replace or complement
        other endpoint security solutions, including Microsoft Defender. The
        software is known for being a seamless, simple and cost-effective
        deployment solution through a single endpoint agent and offers robust
        integrations and compatibility. <br />- Non-disruptive, deployment
        within minutes (even on AD networks)
        <br />- One endpoint agent, for all Malwarebytes services, simple
        integration
        <br />- An intuitive cloud management console that is also used by our
        SOC. <br />
        <br /> Enter the world of Malwarebytes Endpoint Protection, a complete
        malware protection and removal solution with predictive threat
        detection, proactive threat blocking, and integrated end-to-end
        protection. Powered by Malwarebytes&apos;s cloud technologies, Endpoint
        Protection software provides flexible management and speed of their PC
        and server protection software for organizations of all sizes. <br />
        <br />
        With Malwarebytes cloud management software, you can easily scale to
        meet future requirements. Our cyber intelligence expertise provides you
        with a solution powered by threat intelligence from millions of
        endpoints, both business and consumer. Malwarebytes Nebula and
        OneView&apos;s REST API makes it easy to integrate with SIEM, SOAR,
        ITSM, etc. for further automation and compatibility.
      </ContentBox>

      <ContentBox
        caption='Advantages of our solution'
        title='Advantages and opportunities'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {cards2.map((card, i) => (
            <Card key={i} icon={card.icon}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentBox>

      <ContentBox
        caption='Antivirus software solution... and more'
        title='Malwarebytes Endpoint Protection and Response'
      >
        Malwarebytes EDR includes integrated endpoint protection and automated
        adaptive detection techniques that learn at every stage of the threat
        detection process. Unlike more reactive signature-based solutions that
        allow malware to run before it actually starts working, Malwarebytes
        Endpoint Protection EDR detects and blocks threats before devices are
        infected. Malwarebytes EDR proactively and accurately detects and
        prevents both malicious code and suspicious behavior. <br /> <br /> The
        software uses unique Machine Learning technology to detect not only
        known threats, but also to find unknown ones. Malwarebytes EDR boasts
        higher accuracy and lower false-positives than the normal product
        designed for smaller organizations, which is why they have one of the
        lowest false-positive rates in the industry. Granular isolation
        capabilities prevent lateral movement in an active attack, allowing you
        to quarantine and completely isolate individual machines, subnets, or
        groups and continue active remediation and investigation activities.{' '}
        <br />- Detects 0day threats with very few false positives. <br />-
        Granular isolation for Windows processes, networks, and desktops. <br />
        - Removes executables, artifacts, and changes to settings and
        registries. <br /> <br />
        For Windows platforms, Malwarebytes EDR includes a unique 72-hour
        ransomware recovery technology that can turn back the clock and quickly
        return your business and its documents to a previous state. If an attack
        affects user files, Malwarebytes can easily roll back those changes to
        restore files that were encrypted, deleted, or modified in a ransomware
        attack.
      </ContentBox>

      <ContentBox
        caption='Advantages and disadvantages'
        title='EDR vs traditional antivirus software'
      >
        On the one hand, you have out-of-the-box antivirus software designed for
        the user who wants to protect multiple personal devices on their home
        network at home. An antivirus program stops computer viruses, but it can
        also stop modern threats such as some ransomware, adware, and Trojan
        malware. <br /> <br /> On the other hand, you have EDR for the business
        user protecting hundreds, potentially thousands of end devices
        simultaneously. The devices can be personal employee devices (BYOD) as
        well as workstations that are governed by the company&apos;s corporate
        policies. <br /> <br /> When it comes to threat analysis, the typical
        user just wants to know that their devices are protected. Counting and
        reporting does not extend much beyond how many threats and what types of
        threats were blocked in a given period of time. This is not enough for a
        business user. Security administrators need to know &quot;What happened
        to my endpoints before and what is happening to my endpoints now?&quot;
        Traditional antivirus software is not good at answering these questions,
        but this is where EDR excels. At any given time, EDR has a view on the
        daily functions of the endpoint. When something outside of normal
        computer operations and functions occurs, administrators are alerted,
        presented with the full range of incident information, and given a
        number of options for action. <br /> <br />
        <strong>
          Some capabilities that Malwarebytes EDR offers that are different from
          traditional antivirus software
        </strong>
        <br />
        - Isolate the computer from the network
        <br />- Isolate the user from the computer
        <br />- Shutdown, isolation and control over active processes
        <br />- Update installed software, operating system, software agent of
        Malwarebytes
        <br />- Possibility of full tracking of each process, what and how it
        performed over time, including sub-processes, impacts on other
        processes, etc.
        <br />- Ability to recover files affected by Ransomware in 72 hours
        <br />- Ability to create detailed exceptions for files that are
        misdiagnosed as virus/malicious. (IP, MD5 hash, SHA1 hash, wildcard
        name, folder, full path exclusions)
        <br />- Ability to apply detailed policies for different software
        settings on protected computers
        <br />- Ability to apply automatic notification for different events,
        criticality, categories, etc.
        <br />- Option to add additional threats you wish to be blocked
      </ContentBox>

      <ContentBox
        caption='Investing in your cyber defense is always preferable to potential losses'
        title='Benefits and return on investment'
      >
        <p>
          The biggest threat at the moment are so-called ransomware attacks. In
          a really huge part of the business, it happens that even with the help
          of 1 compromised computer, malicious individuals access information
          and data for the entire company. What follows after that is usually
          stealing (downloading) the compromised data and infecting key company
          assets with Ransomware for extortion purposes.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8'>
          {cards3.map((card, i) => (
            <Card key={i} icon={card.icon}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <AnimateBlur>
          <Image src={pc} alt='pc' className='mx-auto mt-12 max-w-[800px] w-full' />
        </AnimateBlur>
      </ContentBox>
    </Container>
  )
}
