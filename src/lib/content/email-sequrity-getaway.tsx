import ContentBox from '@/components/content-box'
import AnimateBlur from '@/components/animate-blur'
import Image from 'next/image'
import titan from '../../../public/services/articles/titan.png'
import privacyLock from '../../../public/services/articles/privacy-lock.png'
import email from '../../../public/services/articles/email.png'
import emailGateway from '../../../public/services/articles/email-gateway.png'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const cards = [
  {
    title: 'Email Protection',
    description:
      "SpamTitan's advanced spam protection blocks spam, viruses, malware, ransomware, and links to malicious websites from your emails.",
  },
  {
    title: 'Proven Anti-Spam Solution',
    description:
      'An advanced and highly effective spam filtering solution with a 99% spam catch rate and a very low false positive rate.',
  },
  {
    title: 'Email Protection Made Easy',
    description:
      'Setup is simple, with immediate results. Our specialists manage setup, maintenance, and daily or weekly reporting for your convenience.',
  },
  {
    title: 'Protection Against Phishing',
    description:
      'Prevents whaling and phishing attacks with real-time scanning and global threat intelligence, using tens of thousands of rules.',
  },
  {
    title: 'White and Black Lists',
    description:
      'Easily manage domains and email lists with whitelist and blacklist functionality, advanced reporting, and recipient verification.',
  },
  {
    title: 'Double Antivirus Protection',
    description:
      'Provides double antivirus protection with two AV providers to scan attachments in real time and ensure employee safety.',
  },
  {
    title: 'Protection Against 0-Day Attacks',
    description:
      'Real-time threat intelligence integration ensures protection against the latest phishing campaigns and malware, updated hourly.',
  },
  {
    title: 'Scanning of Outgoing Mail',
    description:
      'Prevents IP blacklisting by scanning outgoing emails for spam and malware, blocking risky senders automatically.',
  },
  {
    title: 'Information Leak Prevention',
    description:
      'Powerful data leakage prevention rules safeguard against internal misuse. Triggers can be set for keywords, domains, or filters.',
  },
  {
    title: 'Quarantine',
    description:
      'Suspicious attachments are sandboxed for analysis, and problematic emails are quarantined for further review.',
  },
  {
    title: 'Customizable Policies',
    description:
      'Define unique blocklists, whitelists, and policies for users, domains, or groups, with multi-level customization options.',
  },
  {
    title: 'Automatic Reports',
    description:
      'Gain visibility with detailed quarantine reports. Reporting can be automated daily, weekly, or monthly to suit your needs.',
  },
  {
    title: 'Advanced Threat Protection',
    description:
      "SpamTitan's ATP protection uses Bayesian machine learning and rules to safeguard against evolving cyberattack techniques.",
  },
  {
    title: 'Protection from Risky Files',
    description:
      "Block specific attachments, such as ZIP files, with detailed controls based on your organization's policies.",
  },
  {
    title: 'Customized RBL',
    description:
      'Includes the top six blacklists for real-time threat blocking and allows for adding custom RBLs for enhanced security.',
  },
  {
    title: 'REST API',
    description:
      'Integrates seamlessly with other security products like SIEM, SOAR, and custom threat intelligence systems through a powerful API.',
  },
  {
    title: 'Sender Verification',
    description:
      'Ensures email security compliance with DNS, SPF, DKIM, DMARC, and other security header checks on incoming emails.',
  },
  {
    title: 'Scalability',
    description:
      'Supports unlimited users and domains, with multi-level administration to scale as your business grows.',
  },
  {
    title: 'Recipient Verification',
    description:
      'Offers dynamic recipient verification (DRV), list-based LDAP, and Regex configurations, set up through DNS changes.',
  },
  {
    title: 'Easy Quarantine Management',
    description:
      'Manage quarantined emails with simple controls for blocking, allowing, or whitelisting emails as required.',
  },
  {
    title: 'Multitenant GUI',
    description:
      'Supports multi-company projects, allowing independent protection for subsidiaries within a holding company.',
  },
  {
    title: 'Multiple Authentication Options',
    description:
      'Control authentication methods per domain, supporting normal passwords, LDAP, SQL, POP3, or IMAP.',
  },
  {
    title: 'Fully Managed Solution',
    description:
      'With SpamTitan fully managed by us, IT teams can focus on strategic priorities while we handle email security.',
  },
  {
    title: 'Affordable Monthly Billing',
    description:
      'SpamTitan is cost-effective and easy to use, with monthly payment options for better license management.',
  },
]

export default function EmailSequrityGetaway() {
  return (
    <>
      <ContentBox
        caption='Innovative security for your email server'
        title='Email Security Gateway (ESG)'
        image={privacyLock}
      >
        <p>
          The email server represents one of the most critical systems of
          today’s companies, driving productivity, efficiency and cost savings.
          Unfortunately, along with its many benefits are significant threats
          that have the capacity to compromise your IT infrastructure and
          inflict serious legal and financial consequences on you and your
          business. <br /> <br /> The simple act of opening an email or clicking
          a link can compromise a workstation, and in addition to posing a huge
          risk to your company’s internal network, it can also have devastating
          consequences for your customers and partners. <br /> <br /> Email
          server security systems (SEG) is software used to monitor emails that
          are sent and received. SEG software is designed to prevent spam emails
          and deliver good emails without a problem. Messages that are
          unsolicited, including spam, phishing attacks, malware, or fraudulent
          content are automatically blocked, preventing them from reaching your
          company’s employees. br <br /> <br /> Another layer of protection the
          system provides is the monitoring and blocking of proven malicious
          domains, IP addresses and senders.
        </p>

        <AnimateBlur>
          <Image src={titan} alt='titan' className='mt-6 max-w-[276px]' />
        </AnimateBlur>
      </ContentBox>
      <ContentBox
        caption='Uncompromising email protection'
        title='TitanHQ SpamTitan'
        image={email}
      >
        <p>
          SpamTitan Gateway is software that can block any spam, while providing
          system administrators with extensive tools to control mail flow and
          protect against spam and malware. SpamTitan protects your business
          from threats by managing email traffic and regulating the emails
          employees receive, blocking spam emails, viruses, phishing attempts,
          malware and ransomware. <br /> <br /> SpamTitan is an email security
          solution that protects your business, your employees and your
          customers. The solution is easy to set up and manage and provides,
          among its many features, 99% spam detection, virus and malware
          blocking, authentication control, outbound scanning, as well as robust
          reporting and reporting structures. The solution ensures spam
          detection through multi-level spam analysis including; real-time
          blacklists (RBLs), lists of domains and links found in spam emails
          (SURBLs), sender policy frameworks and Bayesian analysis. This, along
          with a low error rate, gives you peace of mind knowing that your users
          never miss a real email and at the same time they are protected from
          spam emails, phishing and malicious attachments.
        </p>
      </ContentBox>

      <ContentBox
        caption='Benefits and added value for your company'
        title='Benefits and opportunities'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
          {cards.map((card, i) => (
            <Card key={i} className='p-[42px]'>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent >
                <p>{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentBox>

      <ContentBox
        caption='Extremely easy to deploy and manage'
        title='How does the system work?'
        className=''
      >{''}
      </ContentBox>
        <AnimateBlur>
          <Image
            src={emailGateway}
            alt='Email Gateway'
            className='mx-auto max-w-[740px] w-full'
          />
        </AnimateBlur>

      <ContentBox title='SEG implementation process'>
        <ul>
          <li>You tell us the number of licenses you want us to provide.</li>
          <li>
            We send you an official offer with technical and financial
            parameters.
          </li>
          <li>We sign an NDA and contract for 1 year.</li>
          <li>
            You give us access to your DNS configuration for your domain(s) or
            simply add 1 MX and 2 TXT records to your domain&apos;s DNS.
          </li>
          <li>
            We apply the necessary configurations and policies based on your
            preferences.
          </li>
          <li>
            We provide you with access to your own dashboard within the system,
            as well as 24/7 access to our online help desk and emergency
            hotline.
          </li>
          <li>You tell us the number of licenses you want us to provide.</li>
          <li>
            We send you an official offer with technical and financial
            parameters.
          </li>
          <li>We sign an NDA and contract for 1 year.</li>
          <li>
            You give us access to your DNS configuration for your domain(s) or
            simply add 1 MX and 2 TXT records to your domain&apos;s DNS.
          </li>
          <li>
            We apply the necessary configurations and policies based on your
            preferences.
          </li>
          <li>
            We provide you with access to your own dashboard within the system,
            as well as 24/7 access to our online help desk and emergency
            hotline.
          </li>
        </ul>
      </ContentBox>
    </>
  )
}
