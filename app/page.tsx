import Link from "next/link"

export default function Home() {
  return (
    <div className={"flex items-center justify-center p-20"}>
      <ul>
        <li>
          <Link href={"/ttmm"}>
            <p>TTMM</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}
