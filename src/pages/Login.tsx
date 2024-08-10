import { Input } from '../components/input'

export function Login() {
  return (
    <div className="grid h-screen w-full grid-cols-1 bg-black md:grid-cols-2">
      <div className="m-0 grid grid-rows-5 gap-2">
        <div className="row-span-2 mt-auto flex justify-center">
          <img
            className="col-span-1 md:ml-auto 2xl:w-1/2"
            src="/logoGrande.png"
            alt="Logo Dorf"
          />
        </div>
        <div className="row-span-3 flex h-full justify-center px-16 md:ml-auto">
          <p className="neon-text text-center">
            GIVE YOUR <br />
            BEST
          </p>
        </div>
      </div>

      <div className="mb-28 flex flex-col items-center justify-center md:items-start">
        <form className="w-full max-w-[420px] rounded-lg bg-gray-900 p-12 px-12">
          <h2 className="text-center text-4xl font-bold dark:text-white">
            LOGIN
          </h2>
          <div className="flex flex-col gap-2 py-2 text-gray-400">
            <label>E-mail</label>
            <Input className="mt-2 rounded-lg p-2" type="text" />
          </div>
          <div className="flex flex-col gap-2 py-2 text-gray-400">
            <label>Senha</label>
            <Input className="mt-2 rounded-lg p-2" type="password" />
          </div>
          <div className="flex justify-between py-2 text-gray-400">
            <p className="flex items-center">
              <input className="mr-2" id="lembrarCheck" type="checkbox" />
              <label htmlFor="lembrarCheck">Lembrar senha</label>
            </p>
            <a href="#">Esqueci minha senha</a>
          </div>
          <button className="my-5 w-full rounded-lg bg-indigo-700 py-2 font-semibold text-white shadow-lg shadow-indigo-700/50 hover:bg-indigo-600 hover:shadow-indigo-700/30">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  )
}
