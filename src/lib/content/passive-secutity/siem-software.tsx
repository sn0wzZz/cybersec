'use client'
import AnimateBlur from '@/components/animate-blur'
import Container from '@/components/container'
import ContentBox from '@/components/content-box'
import CTA from '@/components/cta'
import SecurityIcon from '@/components/icons/security'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe } from 'lucide-react'
import Image from 'next/image'
import features from '../../../../public/services/articles/features.png'
import rapid from '../../../../public/services/articles/rapid.png'
import schema from '../../../../public/services/articles/schema.png'
import siem from '../../../../public/services/articles/siem.png'
import wazuh from '../../../../public/services/articles/wazuh.png'
import webSequrity from '../../../../public/services/articles/web-sequrity.png'

const cards = [
  {
    title: 'Cyber incident detection',
    icon: <SecurityIcon className='w-6 h-6' />,
    description:
      'A SIEM system detects incidents that might otherwise go unnoticed. This technology analyzes log file entries to detect indicators of malicious activity. Additionally, because it collects events from all sources on the network, the system can reconstruct the timeline of an attack to help determine its nature and impact. The platform communicates recommendations to security controls – for example, directing a firewall to block malicious content.',
  },
  {
    title: 'Improved efficiency',
    icon: <Globe className='w-6 h-6' />,
    description:
      'SIEM tools can greatly improve your efficiency when it comes to understanding and processing events in your IT environment. With SIEM, you can view security log data from many different hosts on your network from a single interface. This speeds up the incident handling process in several ways. First, the ability to easily see log data from the hosts in your environment allows your IT team to quickly identify an attack path. Second, centralized data allows you to easily identify the hosts that have been affected by an attack.',
  },
  {
    title: 'Compliance with requirements',
    icon: <SecurityIcon className='w-6 h-6' />,
    description:
      'Companies use SIEM to meet compliance requirements by generating reports that address all logged security events among these sources. Without a SIEM, an organization must manually extract log data and compile the reports.',
  },
  {
    title: 'Incident Management',
    icon: <Globe className='w-6 h-6' />,
    description:
      'SIEM improves incident management by enabling the security team to identify the attack path across the network, identifying compromised hosts and providing automated mechanisms to stop ongoing attacks.',
  },
  {
    title: 'Security analysis',
    icon: <SecurityIcon className='w-6 h-6' />,
    description:
      'A SIEM is used to collect, aggregate, index, and analyze security data, helping organizations detect unauthorized access, threats, and behavioral anomalies. As cyber threats become more sophisticated, real-time monitoring and security analytics are required to quickly detect and remediate threats. Therefore, our lightweight agent provides the necessary monitoring and response capabilities, while our server component provides security intelligence and performs data analysis.',
  },
  {
    title: 'Unauthorized access detection',
    icon: <Globe className='w-6 h-6' />,
    description:
      "Agents scan monitored systems looking for malware, rootkits, and suspicious anomalies. They can detect hidden files, masked processes or unregistered network adapters, as well as inconsistencies in system call responses to the OS. In addition to the agent's capabilities, the server component uses a signature-based approach to detect unauthorized access, using its regular expression engine to analyze the collected log data and look for indicators of compromise.",
  },
  {
    title: 'Log analysis',
    icon: <SecurityIcon className='w-6 h-6' />,
    description:
      'Agents can read operating system and application log files and securely forward them to a central manager for rule-based analysis and consistent storage. Logs help keep you informed of application or system errors, misconfigurations, attempted and/or successful malicious activities, policy violations, and various other security issues.',
  },
  {
    title: 'File integrity monitoring',
    icon: <Globe className='w-6 h-6' />,
    description:
      'SIEM monitors the file system by identifying changes in the content, permissions, ownership, and attributes of the files you need to monitor. In addition, it identifies users and applications used to create or modify files. File integrity monitoring capabilities can be used in conjunction with threat intelligence to identify threats or compromised hosts. In addition, several regulatory compliance standards, such as PCI DSS, require it.',
  },
  {
    title: 'Vulnerability detection',
    icon: <SecurityIcon className='w-6 h-6' />,
    description:
      'SIEM agents pull software inventory data and send this information to the server, where it is linked to continuously updated CVE (Common Vulnerabilities and Exposure) databases to identify well-known vulnerable software. Automated vulnerability assessment helps you find weak points in your critical assets and take corrective action before attackers use them to sabotage your business or steal confidential data.',
  },
  {
    title: 'Configuration evaluation',
    icon: <Globe className='w-6 h-6' />,
    description:
      'SIEM monitors system and configuration settings on hosts to ensure they are compliant with your security policies, standards and/or security guidelines. Agents perform periodic scans to detect applications that are known to be vulnerable, unpatched, or insecurely configured. In addition, configuration checks can be customized by tailoring them to properly match your organization. Alerts include recommendations for better configuration and external references.',
  },
  {
    title: 'Cloud security',
    icon: <SecurityIcon className='w-6 h-6' />,
    description:
      'SIEM helps monitor cloud infrastructure at the API level by using integration modules that are able to pull security data from well-known cloud providers, such as Amazon AWS, Azure or Google Cloud. In addition, it provides rules to evaluate the configuration of your cloud environment, easily detecting weaknesses. In addition, SIEM lightweight and multi-platform agents are commonly used to monitor cloud environments at the instance level.',
  },
  {
    title: 'Container security',
    icon: <Globe className='w-6 h-6' />,
    description:
      'Wazuh provides security visibility into your Docker hosts and containers by monitoring their behavior and detecting threats, vulnerabilities and anomalies. The Wazuh agent has built-in integration with the Docker API, allowing users to monitor images, disks, network settings, and running containers. Wazuh continuously collects and analyzes detailed runtime information. For example, warning about containers running in privileged mode, vulnerable applications, shells, etc',
  },
]

export default function SiemSoftware() {
  return (
    <Container global>
      <ContentBox
        caption={'Take full control of your logs and events'}
        title={'Security information and event management (SIEM)'}
      >
        <p>
          Security information and event management (SIEM) is a combined
          security solution containing software products and services that
          enable real-time monitoring of various rule-based cybersecurity log
          files and logs targeting data from multiple different IT systems and
          integrated into incidents that can be correlated and processed. <br />{' '}
          <br /> The SIEM solutions we can offer are some of the most popular
          and have proven success in detecting and preventing attacks. <br />{' '}
          <br /> This type of solution also helps prevent malicious actions by
          company employees, as the administrator has complete information about
          what actions and operations they are performing.
        </p>
        <AnimateBlur className='flex flex-col md:flex-row justify-center mt-[60px] mb-[50px] items-center'>
          <Image src={wazuh} alt='Rapid' />
          <Image src={rapid} alt='Rapid' className='max-h-[90px]' />
        </AnimateBlur>
      </ContentBox>

      <ContentBox
        title='Benefits and added value'
        caption='Why do you need SIEM software?'
        image={webSequrity}
      >
        <p>
          The reason an organization needs a SIEM solution to monitor systems
          and report suspicious activity is because the amount of data generated
          by a medium-sized organization today is too large to handle manually.
          Log file and log management is at the core of SIEM functionality, as
          the more diverse types of log files from different sources feed the
          SIEM system, the more it generates reports that can be easily
          understood and managed. This capability allows the SIEM to correlate
          relevant events by cross-referencing log files from different sources
          against correlation rules. <br /> <br /> Most companies own many
          servers or cloud services and typically cannot handle either
          monitoring or security at scale. By using SIEM, your company can
          provide security and monitoring more easily. Our software will allow
          you to generate reports in seconds for hundreds or even thousands of
          servers. <br /> <br /> Last but not least, the ability to notify
          against specific events or a group of recorded actions remains an
          invariable part of the benefits for every single IT team. Being able
          to be notified through a variety of communication channels is also a
          good approach, especially if you have a ticketing system or system to
          manage notifications from different systems.
        </p>
      </ContentBox>

      <div>
        <ContentBox
          title='Architecture and operations'
          caption='Why do you need SIEM software?'
        >
          <p>
            The central instance in a cloud infrastructure is responsible for
            analyzing the data received by the agents, processing events through
            decoders and rules, and using threat intelligence to look for
            well-known IOCs (indicators of compromise). A single instance can
            analyze data from hundreds or thousands of agents and scale
            horizontally when set up in cluster mode. The server is also used to
            manage the agents, configuring and updating them remotely as needed.
            In addition, the server can send commands to the agents, for example
            to trigger a response when a threat is detected.When the data is not
            received through a software agent, but for example through Syslog -
            then network devices or other cloud services simply need to be
            directed to your instance. This makes it quite seamless to deliver
            the logs from network devices to the SIEM instance.
          </p>
        </ContentBox>
        <AnimateBlur>
          <Image src={siem} alt='SIEM' className=' max-w-[860] mx-auto w-full' />
        </AnimateBlur>
      </div>

      <ContentBox
        title='Architecture and operations'
        caption='Why do you need SIEM software?'
        images={[features, schema]}
      >
        <ul>
          <li>Host-based Threat Detection System (HIDS)</li>
          <li>Compliance and security management</li>
          <li>Monitoring and security for AWS and GCP</li>
          <li>Custom rule set and rule customization</li>
          <li>Monitoring for proprietary or proprietary software</li>
          <li>Security configuration monitoring of workstations and servers</li>
          <li>Software agents for Linux, Windows and MacOS (Win XP+)</li>
          <li>
            Complete list of information about monitored endpoints (Software,
            Hardware, etc.)
          </li>
          <li>Policies for verifying specific requirements</li>
          <li>Vulnerability management</li>
        </ul>
      </ContentBox>

      <ContentBox
        title='Architecture and operations'
        caption='Why do you need SIEM software?'
      >
        <ul>
          <li>
            The agent is compatible with many operating systems: Linux, Windows,
            Mac, Solaris, AIX and HP-UX.
          </li>
          <li>
            We have a unified security monitoring platform that analyzes
            security events in real time.
          </li>
          <li>
            Built module to manage and comply with PCI, HIPAA, GDPR, NIST, GPG13
            policies.
          </li>
          <li>Custom rule set and rule customization</li>
          <li>
            Infrastructure monitoring: Clouds and cloud services: AWS, Azure,
            Google.
          </li>
          <li>Monitoring virtual containers: Docker, Kubernetes.</li>
          <li>Possibility of virtual and physical (on-prem) instance</li>
          <li>
            It has the ability to scale, thanks to the structure of our cluster
            infrastructure (1 + 3 + ?).
          </li>
          <li>
            Ability to integrate with threat intelligence feeds from the
            Internet and third parties.
          </li>
          <li>
            Notification by email, REST API, Telegram, Slack, Teams and more.
          </li>
          <li>
            Extremely easy to create fully customized interfaces and dashboards.
          </li>
        </ul>
      </ContentBox>

      <ContentBox
        title='Added value for your company'
        caption='Applications and benefits for you'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {cards.map((card, i) => (
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
  )
}
