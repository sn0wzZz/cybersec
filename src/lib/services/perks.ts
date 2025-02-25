import { PerkResponse, PerkData } from '../types'
import qs from 'query-string'
import { serializeParams } from '../utils'

interface FetchPerksParams {
  page?: number
  pageSize?: number
  filters?: Record<string, unknown>
}

export async function fetchPerks(params?: FetchPerksParams): Promise<PerkData> {
  const baseUrl = `${process.env.TRIGANI_URL}api/v1/${process.env.WORKSPACE}/cms/spaces/${process.env.SPACE}/types/perks/rows`

  const queryParams = {
    page: params?.page || 1,
    pageSize: params?.pageSize || 10,
  }

  let url = qs.stringifyUrl({
    url: baseUrl,
    query: queryParams,
  })

  if (params?.filters) {
    const serializedFilters = serializeParams(params.filters, 'filter')
    url += `&${serializedFilters}`
  }

  console.log('💥url', url)

  const response = await fetch(url, {
    headers: {
      Authorization: process.env.API_KEY || '',
    },
    next: { revalidate: 0 },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch blocks: ${response.statusText}`)
  }

  const data: PerkResponse = await response.json()

  return {
    success: data.success,
    data: data.data.data,
    meta: data.data.meta,
    error: data.error,
  }
}
