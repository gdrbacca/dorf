export function Header() {
  return (
    <div className="inset-0 flex h-40 justify-between bg-zinc-950 pl-2 pr-4 md:pl-44 md:pr-40">
      <div className="h-full w-72 overflow-hidden rounded-3xl">
        <div className="flex h-full w-72 items-center justify-center bg-fundoGradePisar bg-cover object-fill shadow-[inset_10px_15px_40px_4px_rgba(0,0,0,0.4)]">
          <a href="">
            <img
              src="/logoTitulo-1.png"
              alt="logoDorf"
              className="w-56 rounded-2xl p-1"
            />
          </a>
        </div>
      </div>

      <div className="flex w-auto items-center text-zinc-200">
        <ul className="flex h-full align-bottom">
          <a href="/">
            <li className="text-md flex h-full items-end pb-8 pl-6 pr-6 underline-offset-8 hover:bg-black/90 hover:text-lg hover:text-yellow-400 hover:underline">
              Home
            </li>
          </a>
          <a href="#">
            <li className="text-md flex h-full items-end pb-8 pl-6 pr-6 hover:bg-black hover:text-lg hover:text-yellow-400 hover:underline">
              menu 2
            </li>
          </a>
          <a href="#">
            <li className="text-md flex h-full items-end pb-8 pl-6 pr-6 hover:bg-black hover:text-lg hover:text-yellow-400 hover:underline">
              menu 3
            </li>
          </a>
          <a href="/login">
            <li className="text-md flex h-full items-end pb-8 pl-6 pr-6 hover:bg-black hover:text-lg hover:text-yellow-400 hover:underline">
              Login
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}
