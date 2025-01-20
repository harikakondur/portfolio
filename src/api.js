import { createClient } from "contentful"

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  environment: 'master', 
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

export default async function getEntries(){

    var response = await client.getEntries()
    // console.log(response.items)
    return response.items
  
}