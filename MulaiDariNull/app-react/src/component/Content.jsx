import React, { useState } from 'react'

function Content(props) {
  const [Tahun, setTahun] = useState(0)
  if (props.isiContent) {
    const newIsiContent = "Isi content baru"
    return (
      <div>
        {`${newIsiContent} ${Tahun}`}
        <div>
          <button onClick={() => setTahun(2024)}>Jancuk</button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Content
