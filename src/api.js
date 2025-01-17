import { createClient } from "contentful"

const client = createClient({
  space: 'iyuf2h5g0xxl',
  environment: 'master', 
  accessToken: 'ebbTYDBZSdHDW1Rr0mtvX1ZG5hVI1aGhIbDtnj8dXZg'
})

export default async function getEntries(){

    var response = await client.getEntries()
    // console.log(response.items)
    return response.items
  
}