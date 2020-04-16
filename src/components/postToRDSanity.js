import sanityClient from '@sanity/client'
import {basename} from 'path'
import {createReadStream} from 'fs'

const client = sanityClient({
  projectId: '1xfm2h8z',
  dataset: 'production',
  token: 'myToken'
})

const filePath = '../rescources/What is Recovery Dharma.pdf'

client.assets
  .upload('image', createReadStream(filePath), {
    filename: basename(filePath)
  })
  .then(imageAsset => {
    // Here you can decide what to do with the returned asset document. 
    // If you want to set a specific asset field you can to the following:
    return client
      .patch('some-document-id')
      .set({
        theImageField: {
          _type: 'image',
          asset: {
            _type: "reference",
            _ref: imageAsset._id
          }
        }
      })
      .commit()
  })
  .then(() => {
    console.log("Done!");
  })