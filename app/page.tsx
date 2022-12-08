import Image from 'next/image'
import RootLayout from "./layout";

export default function Home() {
  return (
      <div className={"flex flex-col justify-center items-center h-[100vh]"}>
          <div className={"text-stone-300 text-2xl uppercase"}>Next.js 13 with tailwind starter</div>
      </div>
  )
}
