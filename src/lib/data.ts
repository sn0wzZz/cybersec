import DataBreachInvestigation from './content/consulting-service/data-breach-investigation'
import InformationSecurityPolicies from './content/consulting-service/information-security-policies'
import SecurityAwarenessTraining from './content/consulting-service/security-awareness-training'
import SOCAsAService from './content/consulting-service/soc-as-a-service'
import DnsFilteringGateway from './content/passive-secutity/dns-filtering-gateway'

import EmailSecurityGetaway from './content/passive-secutity/email-security-getaway'
import EndpointProtection from './content/passive-secutity/endpoint-ptrotection'
import SiemSoftware from './content/passive-secutity/siem-software'
import PenetrationTests from './content/proactive-security/penetration-tests'
import RiskAssessment from './content/proactive-security/risk-assessment'
import VulnerabilityAssessment from './content/proactive-security/vulnerability-assessment'

export interface Resource {
  slug: string
  title: string
  content: () => JSX.Element
  description: string
}

export const resources: Resource[] = [
  {
    slug: 'passive-security/endpoint-protection',
    title: 'Endpoint Protection',
    description: 'Learn about Endpoint Protection',
    content: EndpointProtection,
  },
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
    slug: 'passive-security/email-security-getaway',
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
  {
    slug: 'proactive-security/risk-assessment',
    title: 'Risk Assessment',
    description: 'Learn about Risk Assessment',
    content: RiskAssessment,
  },
  {
    slug: 'consulting-services/soc-as-a-service',
    title: 'SOC as a service',
    description: 'Learn about SOC as a service',
    content: SOCAsAService,
  },

  {
    slug: 'consulting-services/security-awareness-training',
    title: 'Security Awareness Training',
    description: 'Learn about Security Awareness Training',
    content: SecurityAwarenessTraining,
  },
  {
    slug: 'consulting-services/information-security-policies',
    title: 'Information Security Policies',
    description: 'Learn about Information',
    content: InformationSecurityPolicies,
  },
  {
    slug: 'consulting-services/data-breach-investigation',
    title: 'Data Breach Investigation',
    description: 'Learn about Data Breach Investigation',
    content: DataBreachInvestigation,
  },
]

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug)
}

export function getAllResourceSlugs(): string[] {
  return resources.map((resource) => resource.slug)
}
