import AnimateSlideUp from '@/components/animate-slide-up'
import ContentBox from '@/components/content-box'
import PcCodeIcon from '@/components/icons/pc-code'
import SecurityIcon from '@/components/icons/security'
import ShieldLockIcon from '@/components/icons/shield-lock'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import pcEye from '../../../../public/services/articles/pc-eye.png'
import code from '../../../../public/services/articles/code.png'
import clickbait from '../../../../public/services/articles/clickbait.png'
import server from '../../../../public/services/articles/server.png'
import Container from '@/components/container'

const cards = [
  {
    title: 'Web Application Penetration Test',
    icon: <SecurityIcon className='w-6 h-6' />,
  },
  {
    title: 'External Network Penetration Test',
    icon: <PcCodeIcon className='w-6 h-6' />,
  },
  {
    title: 'Internal Network Penetration Test',
    icon: <ShieldLockIcon className='w-6 h-6' />,
  },
]

export default function PenetrationTests() {
  return (
    <Container global>
      <ContentBox
        caption='// Proactive security testing'
        title='Penetration Tests'
      >
        <p>
          Our organization has many years of experience in conducting
          penetration testing. We divide this service into several types,
          depending on the scope of the tests as well as the attack vectors.
        </p>
      </ContentBox>
      <AnimateSlideUp className=''>
        <div className='grid grid-cols-1  lg:grid-cols-3 gap-6 md:mx-24 mb-8'>
          {cards.map((card, i) => (
            <Card key={i}>
              <CardHeader className='gap-6' icon={card.icon}>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </AnimateSlideUp>

      <ContentBox
        caption='Security tests of web applications and web services '
        title='Web Penetration Test'
        image={[pcEye, code]}
      >
        <p>
          This service is a combination of automated and manual testing (our
          policy is to prioritize the latter). The main purpose of conducting
          this type of service is the proactive detection of weaknesses in
          information security and vulnerabilities in an organization.
          <br /> <br />
          The way this service works is as follows:
        </p>
        <br />
        <ol>
          <li>
            Reconnaissance is conducted to identify services, technologies,
            including their versions, how they are configured and how they work.
          </li>
          <li>
            An initial automated scan for vulnerabilities is performed with a
            minimum of 2 popular scanners such as Acunetix and Netsparker.
          </li>
          <li>
            The results of an automatic scan, as well as the findings of our
            specialists, are verified and the collected information is used for
            subsequent actions aimed at obtaining access in one way or another.
          </li>
          <li>
            A comprehensive application security review is performed within the
            agreed scope, using our checklist of checks and vulnerability
            detection methods aligned with global standards and best practices.
          </li>
          <li>
            An attempt is made to escalate access using the vulnerabilities
            found.
          </li>
          <li>
            A final report is prepared, which includes detailed information on
            all vulnerabilities found, as well as recommendations for
            remediation, references, etc. The report also includes a section
            dedicated to people management, in which everything is described in
            detail with as little technical language and terminology as
            possible.
          </li>
          <li>
            After agreeing on a period for removal, the customer has the
            opportunity to receive a retest of the agreed scope within 6 months
            of the initial tests being carried out completely free of charge.
          </li>
          <li>A retest report is being prepared.</li>
        </ol>
        <br />
        <p>
          Our methodology for performing penetration tests is in line with
          leading ones, necessarily including the following phases: <br />{' '}
          <br /> <strong>Phase 1:</strong> Reconnaissance <br />
          <strong>Phase 2:</strong> Scan <br />
          <strong>Phase 3:</strong> Gaining Access <br />
          <strong>Phase 4:</strong> Escalation of Privileges
          <br /> <br />
          <strong>
            Types of web penetration tests, according to the level of access:
          </strong>
          <br /> <br />
          <strong>Black box test</strong> <br /> No prior knowledge of
          technology or the exact scope of a company is required. No access to
          the given application or system needs to be granted. The results are
          based on the initial access that our specialists had. <br />{' '}
          <strong>Gray box test</strong> <br />
          It is possible to grant partial client-side access to in-scope
          applications. Partial technology and infrastructure information is
          provided for the applications in scope. It is recommended to use this
          approach for business applications as well as applications that are
          only used by people with pre-granted access.
        </p>
      </ContentBox>

      <ContentBox
        caption='Security tests of web applications and web services '
        title='Web Penetration Test'
        image={[clickbait, server]}
      >
        <p>
          Network penetration tests examine the security of an organization’s
          internal and public networks, as well as related services. The service
          is recommended for companies that have a large range of public
          services and available public IPv4 addresses. Another type of company
          for which this service would be useful are those that have large
          internal networks with multiple services and important information.
          <br />
          <br />
          Both web penetration tests and network penetration tests have 2
          divisions. <br /> <br />
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <strong>// Internal network penetration test</strong> <br /> <br />
          With this service, our specialists get access to the company’s
          internal network via VPN or physically. Penetration attempts include a
          large set of checks for misconfiguration of your services,
          insufficient efforts to improve security, presence of publicly known
          vulnerabilities, and many other checks that are performed by
          specialists, not just vulnerability scanning software). <br /> <br />{' '}
          One of the goals of this service is for our specialists to find as
          many security gaps as possible in all your services and systems and to
          fix them in advance. Another aspect that most companies miss is that
          sometimes the employees themselves are the main security risk factor.
          We try to play out possible scenarios that could clearly show how
          so-called rogue employees can compromise the security of your company.{' '}
          <br /> <br /> The tests that our specialists conduct also focus on the
          risks of unauthorized individuals “spreading into your network” using
          employee credentials that have already been compromised or other
          vulnerabilities. <br /> <br />
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <strong>// External network penetration test</strong> <br /> <br />{' '}
          Most organizations have multiple public servers, services, and systems
          that are accessed by employees, customers, and partners alike. The
          public IT asset security testing service focuses on surveying the
          following:
        </p>
        <br />
        <ul>
          <li>Discovery of endpoints, domains, and subdomains</li>
          <li>
            Identify services, ports, technologies, versions, service providers
          </li>
          <li>Scan for ports and their configuration in the firewall</li>
          <li>Identify services and their versions and configuration</li>
          <li>
            Automated testing against all public and available vulnerabilities
          </li>
          <li>Manual vulnerability detection</li>
          <li>Verification of discovered vulnerabilities</li>
          <li>
            Exploitation of discovered vulnerabilities, through public or
            private exploits
          </li>
          <li>
            Using specific or proprietary scripts to exploit vulnerabilities or
            security flaws
          </li>
          <li>Escalating access through compromised initials or access keys</li>
        </ul>
        <br />
        <p>
          Both internal penetration testing and external penetration testing are
          performed using our checklist, which has been developed over years and
          is proven to produce good results. <br /> <br /> For any service that
          has a web interface, tests are performed that overlap with those of
          the web penetration test, given the fact that many services nowadays
          use a web environment that is designed for the user. <br /> <br />
          Similar to web penetration tests, a detailed report is issued upon
          completion that includes the following points:
        </p>
        <br />
        <ul>
          <li>
            Summary (a detailed description of the findings and conclusions,
            using as little technical language and terminology as possible)
          </li>
          <li>Information Gathering</li>
          <li>Risk Assessment</li>
          <li>Methodology</li>
          <li>Scope and objectives</li>
          <li>Checklist, depending on the type of service</li>
          <li>
            Every vulnerability found, with full description, references,
            screenshots, remediation instructions
          </li>
          <li>Positive characteristics and conclusions</li>
          <li>
            Recommendations (concluded in 3 categories, according to the
            findings during the test – short-term, medium-term, and long-term)
          </li>
        </ul>
      </ContentBox>
    </Container>
  )
}
