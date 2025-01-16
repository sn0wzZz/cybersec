import SiemSoftware from './content/siem-software'

export interface Resource {
  slug: string
  title: string
  content: () => JSX.Element
  description: string
}

export const resources: Resource[] = [
  {
    slug: 'passive-sequrity/siem-software',
    title: 'Siem Software',
    description: 'Learn about Siem Software',
    content: SiemSoftware,
  },
]

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug)
}

export function getAllResourceSlugs(): string[] {
  return resources.map((resource) => resource.slug)
}
