import contentful from 'contentful'
const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: '49az23542d71',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'F-_9T2oL-HWoArXkC8HQ1GIxIh54v0eRIb23Ma8WhyE',
  })

  export const getClient=()=>{
    //  client.getEntry('3UkzAAPhFouJTBJw7ynloL').then((entry)=>{
    //     console.log(entry.fields.postContent.content.content)
    //  })
//     client.getContentType('blogPost')
// .then((contentType) => console.log(contentType))
// .catch(console.error)

client.getEntries()
.then((response) => console.log(response.items[0]))
.catch(console.error)
  }