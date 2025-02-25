// General types
export interface IBaseCMSObject {
  id: string
  createdAt: string
  updatedAt: string
  folio?: string
  publishedAt?: string
  deletedAt?: string
}

//////////////////////////////////////////////////

export interface BlockResponse {
  success: boolean
  data: {
    data: Block[]
    meta: {
      page: number
      pageSize: number
      total: number
    }
  }
  error: null | string
}

export interface PerkResponse {
  success: boolean
  data: {
    data: Perk[]
    meta: {
      page: number
      pageSize: number
      total: number
    }
  }
  error: null | string
}

// Elements

export interface Block {
  id: string
  title: string
  description: string
  subDescription1: string
  subDescription2: string
  image: string
  linkHref: string
  linkLabel: string
  name: string
  identifier: string
  folio: number
}

export interface Perk {
  id: string
  tag: string
  title: string
  linkHref: string
  linkLabel: string
  identifier: string
  order: number
  folio: number
}

// Data

export interface BlockData {
  success: boolean
  data: Block | undefined
  meta: {
    page: number
    pageSize: number
    total: number
  }
  error: null | string
}
export interface BlocksData {
  success: boolean
  data: Block[] | undefined
  meta: {
    page: number
    pageSize: number
    total: number
  }
  error: null | string
}

export interface PerkData {
  success: boolean
  data: Perk[] | undefined
  meta: {
    page: number
    pageSize: number
    total: number
  }
  error: null | string
}
