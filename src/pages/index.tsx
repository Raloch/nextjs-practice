import Image from 'next/image'
import A from 'public/images/a.jpeg'

export default function App() {
  return (
    <div>
      <p>we just do some test.</p>
      <Image src={A} />
    </div>
  )
}
