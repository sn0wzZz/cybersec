import DnsFilteringGateway from './content/passive-secutity/dns-filtering-gateway'
import EmailSecurityGetaway from './content/passive-secutity/email-security-getaway'
import SiemSoftware from './content/passive-secutity/siem-software'
import PenetrationTests from './content/proactive-security/penetration-tests'
import VulnerabilityAssessment from './content/proactive-security/vulnerability-assessment'

export interface Resource {
  slug: string
  title: string
  content: () => JSX.Element
  description: string
}

export const resources: Resource[] = [
  {
    slug: 'passive-security/dns-filtering-gateway',
    title: 'Dns Filtering Gateway',
    description: 'Learn about Dns Filtering Gateway',
    content: DnsFilteringGateway,
  },
  {
    slug: 'passive-security/siem-software',
    title: 'Siem Software',
    description: 'Learn about Siem Software',
    content: SiemSoftware,
  },
  {
    slug: 'passive-security/email-sequrity-gateway',
    title: 'Email Sequrity Gateway',
    description: 'Learn about Email Sequrity Gateway',
    content: EmailSecurityGetaway,
  },
  {
    slug: 'proactive-security/penetration-tests',
    title: 'Penetration Tests',
    description: 'Learn about Penetration Tests',
    content: PenetrationTests,
  },
  {
    slug: 'proactive-security/vulnerability-assessment',
    title: 'Vulnerability Assessment',
    description: 'Learn about Vulnerability Assessment',
    content: VulnerabilityAssessment,
  },
]

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug)
}

export function getAllResourceSlugs(): string[] {
  return resources.map((resource) => resource.slug)
}
