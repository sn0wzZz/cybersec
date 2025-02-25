import {ApiClient, CMSSpaceClient} from '@faslin_kosta/trigani-api-client'

const client = new ApiClient({
  domain: process.env.TRIGANI_URL!,
  key: process.env.API_KEY!,
  version: 1,
  workspace: process.env.WORKSPACE!,
  timeout: 10000, // not required
})

export const cybersec = new CMSSpaceClient(client, 'cybersec')
