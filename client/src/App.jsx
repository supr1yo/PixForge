import { useRef, useState } from 'react'

export default function App() {
  const inputRef = useRef(null)
  const [fileName, setFileName] = useState(null)

  const handleUpload = async (e) => {
    e.preventDefault()
    const file = inputRef.current.files[0]

    const form = new FormData()
    form.append('image', file)

    const res = await fetch('http://localhost:3000/image', {
      method: 'POST',
      body: form
    })

    const json = await res.json()
    setFileName(json.fileName)
  }

  return (
    <>
      <form onSubmit={handleUpload}>
        <input type="file" ref={inputRef} />
        <button type="submit">Upload</button>
      </form>

      {fileName && (
        <img
          src={`http://localhost:3000/file/${fileName}`}
          style={{ width: 200, height: 'auto' }}
        />
      )}
    </>
  )
}
