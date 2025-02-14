import Container from '@/components/container'
import ContentBox from '@/components/content-box'
import phone from '../../../../public/services/articles/phone.png'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AnimateBlur from '@/components/animate-blur'
import SecurityIcon from '@/components/icons/security'
import PenIcon from '@/components/icons/pen'
import PcCodeIcon from '@/components/icons/pc-code'
import NetworkInteligenceIcon from '@/components/icons/network-inteligence'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CTA from '@/components/cta'

const approach = [
  {
    value: 'onboarding-and-assessment',
    label: 'Onboarding ans Assessment',
    description: (
      <ul>
        <li>Initial security assessment and gap analysis.</li>
        <li>Customization of services to fit your specific needs.</li>
        <li>
          Deployment of necessary tools and integration with your existing systems.
        </li>
      </ul>
    ),
  },
  {
    value: 'continuous-monitoring',
    label: 'Continuous Monitoring',
    description: (
      <ul>
        <li>Real-time monitoring of your IT environment.</li>
        <li>Immediate threat detection and alerting.</li>
      </ul>
    ),
  },
  {
    value: 'incident-management',
    label: 'Incident Management',
    description: (
      <ul>
        <li>Swift response to security incidents.</li>
        <li>Detailed investigation and root cause analysis.</li>
        <li>Implementation of corrective actions.</li>
      </ul>
    ),
  },
  {
    value: 'reporting-and-improvement',
    label: 'Reporting and Improvement',
    description: (
      <ul>
        <li>Regular reports on security posture and incidents.</li>
        <li>Continuous improvement through feedback and updates.</li>
        <li>Strategic recommendations for enhanced security.</li>
      </ul>
    ),
  },
]

const benefits = [
  {
    title: 'Proactive Security Posture',
    icon: <SecurityIcon className='w-[18px] h-[18px]' />,
    description:
      'Stay ahead of potential threats with continuous monitoring and proactive threat intelligence.',
  },
  {
    title: 'Cost-Effective',
    icon: <PenIcon className='w-[18px] h-[18px]' />,
    description:
      'Reduce the costs associated with building and maintaining an in-house SOC.',
  },
  {
    title: 'Expertise',
    icon: <PcCodeIcon className='w-[18px] h-[18px]' />,
    description:
      'Gain access to a team of experienced security analysts and experts.',
  },
  {
    title: 'Peace of mind',
    icon: <NetworkInteligenceIcon className='w-[18px] h-[18px]' />,
    description:
      'Focus on your core business activities while we handle your security needs.',
  },
]


export default function SOCAsAService() {
  return (
    <>
      <Container>
        <ContentBox
          caption='external cyber security experts'
          title='Security Operations Center as a service'
          image={phone}
        >
          <p>
            Building their own SOC (Security Operations Centre) requires
            organizations to make significant investments in security software,
            hardware and other infrastructure. It requires hiring experts,
            building 24/7 monitoring and response. The concept of outsourcing
            this type of activity provides external cybersecurity experts who
            monitor events, devices, cloud environments and the corporate
            network for already known and evolving advanced threats. Such
            services are becoming increasingly popular among businesses and
            organizations as part of regulatory compliance. By trusting a
            partner that provides these types of services, organizations reduce
            capital expenditures and receive a solution designed for their
            needs. SOC as a service saves businesses time and money by offering
            off-the-shelf centers and relying on the expertise of professionals.
            Implementing the service does not require the commitment of internal
            company resources and can easily scale to meet the needs of
            organizations.
          </p>
        </ContentBox>
      </Container>

      <AnimateBlur>
        <Container
          outer='bg-primary dark:bg-muted'
          className='text-primary-foreground dark:text-primary py-12 my-12 md:py-24 flex items-center flex-col md:flex-row gap-12 md:gap-8   '
        >
          <p>
            Our SOC as a Service (Security Operations Center as a Service)
            provides comprehensive, 24/7 security monitoring, threat detection,
            and incident response.
            <br />
            <br />
            Leveraging cutting-edge technologies and a team of experienced
            security professionals, we protect your organization’s digital
            assets, ensuring continuous security and compliance.
          </p>

          <Button variant={'secondary'} className='text-primary hover:from-border  hover:border hover:text-primary hover:to-border hover:dark:from-input hover:dark:to-input dark:text-muted border dark:border from-white to-white' size={'lg'}>Contact us</Button>
        </Container>
      </AnimateBlur>

      <Container>
        <ContentBox
          caption='Cyber Incident Risk Assessment'
          title='Why carry out a risk assessment?'
        >
          <p>
            There are a number of reasons why you might want to conduct a cyber
            risk assessment, and several reasons why you absolutely should.
          </p>
          <br />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h3>24/7 Monitoring and Detection</h3>
              <br />
              <ul>
                <li>Round-the-clock surveillance of your IT infrastructure.</li>
                <li>
                  Advanced threat detection using AI and machine learning
                  algorithms.
                </li>
                <li>Real-time alerts and notifications.</li>
              </ul>
            </div>
            <div>
              <h3>Scalable Solutions</h3>
              <br />
              <ul>
                <li>
                  Flexible plans to meet the needs of small businesses to large
                  enterprises.
                </li>
                <li>
                  Customizable service tiers to match your security
                  requirements.
                </li>
                <li>
                  Easy scalability to adapt to your growing security demands.
                </li>
              </ul>
            </div>
            <div>
              <h3>Incident Response</h3>
              <br />
              <ul>
                <li>Rapid incident response and remediation.</li>
                <li>Detailed incident analysis and reporting.</li>
                <li>
                  Collaboration with your internal IT team for seamless
                  recovery.
                </li>
              </ul>
            </div>
            <div>
              <h3>Managed SIEM (Security Information and Event Management)</h3>
              <br />
              <ul>
                <li>Centralized log management and analysis.</li>
                <li>
                  Correlation of events from various sources for comprehensive
                  visibility.
                </li>
                <li>Automated response to detected threats.</li>
              </ul>
            </div>
            <div>
              <h3>Threat Intelligence</h3>
              <br />
              <ul>
                <li>Integration of global threat intelligence feeds.</li>
                <li>
                  Continuous updates on the latest threats and vulnerabilities.
                </li>
                <li>Proactive threat hunting and mitigation strategies.</li>
              </ul>
            </div>
            <div>
              <h3>Endpoint Protection</h3>
              <br />
              <ul>
                <li>Advanced endpoint detection and response (EDR).</li>
                <li>
                  Protection against malware, ransomware, and other endpoint
                  threats.
                </li>
                <li>Continuous monitoring and automatic remediation.</li>
              </ul>
            </div>
            <div>
              <h3>Compliance and Reporting</h3>
              <br />
              <ul>
                <li>
                  Ensures compliance with industry standards (e.g., GDPR, HIPAA,
                  PCI-DSS).
                </li>
                <li>Regular compliance audits and assessments.</li>
                <li>
                  Comprehensive reporting for audits and regulatory
                  requirements.
                </li>
              </ul>
            </div>
            <div>
              <h3>Network Security</h3>
              <br />
              <ul>
                <li>Intrusion detection and prevention systems (IDS/IPS).</li>
                <li>Network traffic analysis and anomaly detection.</li>
                <li>Secure VPN and firewall management.</li>
              </ul>
            </div>
            <div>
              <h3>User Training and Awareness</h3>
              <br />
              <ul>
                <li>Security awareness training programs for your staff.</li>
                <li>Phishing simulations and training exercises.</li>
                <li>Regular updates on best practices and emerging threats.</li>
              </ul>
            </div>
            <div>
              <h3>Vulnerability Management</h3>
              <br />
              <ul>
                <li>Regular vulnerability scanning and assessments.</li>
                <li>Prioritization and remediation guidance.</li>
                <li>Continuous risk assessment and management.</li>
              </ul>
            </div>
          </div>
        </ContentBox>
      </Container>
      <AnimateBlur>
        <Container
          outer='bg-primary dark:bg-muted '
          className='text-primary-foreground py-12 md:py-24  [&&_li]:list-disc [&_li]:ml-4 my-16 min-h-[600px] '
        >
          <h4 className='text-white display-xs md:display-medium mb-8'>
            Our approach
          </h4>
          <Tabs defaultValue='onboarding-and-assessment'>
            <TabsList className='bg-transparent  rounded-none   w-full xl:w-auto '>
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full xl:w-auto  '>
                {approach.map((scan) => (
                  <TabsTrigger
                    noBullet
                    key={scan.value}
                    value={scan.value}
                    className='text-primary h-[62px] md:py-[16px] md:px-[24px] rounded-[24px] title-medium flex-shrink-0 '
                  >
                    {scan.label}
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>

            {approach.map((scan) => (
              <TabsContent
                key={scan.value}
                value={scan.value}
                className='text-wrap'
              >
                {scan.description}
              </TabsContent>
            ))}
          </Tabs>
        </Container>
      </AnimateBlur>

      <Container>
        <ContentBox
          caption='Benefits of our solution'
          title='Benefits and opportunities'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8'>
            {benefits.map((card, i) => (
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
        <CTA />
      </Container>
    </>
  )
}
