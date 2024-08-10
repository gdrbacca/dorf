export function Footer() {
  return (
    <footer className="h-[200px] w-full">
      <div className="h-1.5 w-full border-b-[1px] border-t-[1px] border-zinc-700 bg-extendedTexture bg-cover sm:bg-contain md:bg-cover"></div>

      <div className="flex h-full w-auto flex-col items-center justify-center bg-black bg-none bg-center bg-no-repeat md:bg-fundoGradeGrande">
        <div className="flex w-3/4 items-center justify-between text-zinc-200 xl:w-2/4">
          <div className="flex flex-col items-start space-y-1 md:items-center">
            <a href="" className="hover:text-zinc-400">
              Contato
            </a>
            <a href="" className="hover:text-zinc-400">
              Loja
            </a>
            <a href="" className="hover:text-zinc-400">
              Termos de uso
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="logobg.png"
              className="invisible size-44 md:visible"
              alt=""
            />
          </div>
          <div className="mt-8 flex h-full flex-col items-center gap-3 leading-tight md:mt-0 md:flex-row">
            <a href="#">
              <img src="/insta.svg" alt="Instagram" className="size-8" />
            </a>
            <a href="#">
              <img src="/face.svg" alt="Facebook" className="size-8" />
            </a>
            <a href="#">
              <img src="/x.svg" alt="X" className="size-8" />
            </a>
          </div>
        </div>
        <span className="bg-black bg-opacity-55 p-px text-sm text-zinc-300">
          Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}
