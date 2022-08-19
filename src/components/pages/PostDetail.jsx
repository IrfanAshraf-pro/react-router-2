import React from 'react'
import {useParams} from 'react-router-dom'
const PostDetail = () => {
  const param = useParams()
  console.log(param);
  return (
    <div>
      Post Detail Page 
      <h1><strong>{param.category}</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ex, ratione architecto aliquid tempore, iure perspiciatis repellat natus recusandae odio voluptatum excepturi, ea omnis ut soluta voluptate? Mollitia, quae sed.
      Repellendus, aperiam? Obcaecati amet, nisi labore magnam mollitia reiciendis nulla vitae sunt at repellendus modi itaque voluptate voluptas sint suscipit consequatur? Suscipit ea eaque quis sed qui nisi repellat maxime.</h1>

    </div>
  )
}

export default PostDetail
