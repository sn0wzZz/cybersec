import { BlockResponse, BlockData } from '../types'
import qs from 'query-string'
import { serializeParams } from '../utils'

interface FetchBlocksParams {
  page?: number
  pageSize?: number
  formatOptions?: {
    richText?: 'html' | 'markdown'
  }
  filters?: Record<string, unknown>
}

export async function fetchBlock(params?: FetchBlocksParams): Promise<BlockData> {
  const baseUrl = `${process.env.TRIGANI_URL}api/v1/${process.env.WORKSPACE}/cms/spaces/${process.env.SPACE}/types/blocks/rows`

  const queryParams = {
    page: params?.page || 1,
    pageSize: params?.pageSize || 10,
  }

  let url = qs.stringifyUrl({
    url: baseUrl,
    query: queryParams,
  })

  const formatOptions = {
    richText: 'html',
    ...params?.formatOptions,
  }

  const serializedFormatOptions = serializeParams(
    formatOptions,
    'formatOptions'
  )
  url += `&${serializedFormatOptions}`

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

  const data: BlockResponse = await response.json()

  return {
    success: data.success,
    data: data.data.data.at(0),
    meta: data.data.meta,
    error: data.error,
  }
}
