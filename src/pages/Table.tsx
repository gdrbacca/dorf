import * as Dialog from '@radix-ui/react-dialog'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { Edit, Filter, Loader2, Plus, X } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Button } from '../components/button'
import { Pagination } from '../components/pagination'
import { api } from '../lib/axios'
import { AddAtleta } from './addAtleta'
import { EditAtleta } from './editAtleta'

interface Atletas {
  id: string
  name: string
  genero: string
  points: number
  reps23_1: number
  posicao23_1: number
  reps23_2A: number
  posicao23_2A: number
  kg23_2B: number
  posicao23_2B: number
  rx: boolean
}

interface AtletasResponse {
  first: number
  prev: number | null
  next: number
  last: number
  pages: number
  items: number
  data: Atletas[]
}

export function MainTable() {
  const [openAdd, setOpenAdd] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const urlFilter = searchParams.get('filter') ?? ''
  const perPage = searchParams.get('perPage') ?? 10 // _limit
  const [filter, setFilter] = useState(urlFilter)
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1

  const {
    data: atletasResponse,
    isLoading,
    isFetching,
  } = useQuery<AtletasResponse>({
    queryKey: ['get-atletas', page, urlFilter, perPage],
    queryFn: async () => {
      /* const response = await fetch(
        `http://localhost:3333/atletas?_page=${page}&_per_page=${perPage}&name=${urlFilter}`,
      ) */
      // await new Promise((resolve) => setTimeout(resolve, 6000))
      return await api.get(`/atletas?_page=${page}&_limit=${perPage}`)
      // const data = response.json()
      // return data
    },

    placeholderData: keepPreviousData,
  })

  // console.log(atletasResponse)

  let filteredAtletas
  if (atletasResponse && atletasResponse?.data)
    filteredAtletas = atletasResponse?.data.filter((atleta) => {
      return atleta.name.toLowerCase().includes(filter.toLowerCase())
    })

  function handleOpenAddDialog() {
    setOpenAdd((open) => {
      return !open
    })
  }

  function handleFilter(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const filterName = event.target.value
    setFilter(filterName)
  }

  return (
    <div className="h-full space-y-2 text-zinc-200">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex w-72 items-center justify-between gap-2 rounded-md bg-zinc-800 p-2">
            <input
              onChange={handleFilter}
              type="text"
              placeholder="Pesquisar atleta..."
              name="filterName"
              className="flex-1 bg-transparent outline-none"
            />

            <Filter className="size-5" />
          </div>

          <Dialog.Root open={openAdd} onOpenChange={setOpenAdd}>
            <Dialog.Trigger asChild>
              <Button variant="secondary">
                Adicionar
                <Plus className="size-5" />
              </Button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/70" />
              <Dialog.Content className="fixed left-1/2 top-1/2 z-10 min-w-[320px] -translate-x-2/4 -translate-y-2/4 space-y-4 rounded-md border border-zinc-800 bg-zinc-900 p-6 pb-4 shadow-shape">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="text-xl font-bold text-zinc-200">
                      Cadastrar atleta
                    </Dialog.Title>
                    <Dialog.Close>
                      <X className="left-auto size-5 text-zinc-300" />
                    </Dialog.Close>
                  </div>
                  <Dialog.Description className="text-sm text-zinc-500">
                    Cadastre um novo atleta para a competição.
                  </Dialog.Description>
                </div>
                <AddAtleta setOpen={handleOpenAddDialog} />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        <table className="mt-6 w-full border-b border-b-yellow-400">
          <thead className="overflow-hidden border-b border-b-yellow-400 bg-zinc-800 text-center uppercase text-zinc-400">
            <tr>
              <th className="rounded-tl-md p-4">Nome</th>
              <th>Gênero</th>
              <th>Pontos</th>
              <th>reps23_1</th>
              <th>posicao23_1</th>
              <th>reps23_2A</th>
              <th>posicao23_2A</th>
              <th>kg23_2B</th>
              <th>posicao23_2B</th>
              <th className="rounded-tr-md">rx</th>
            </tr>
          </thead>
          <tbody className="border-b text-center text-sm text-zinc-400">
            {filteredAtletas?.map((atletas) => {
              return (
                <tr
                  key={atletas.id}
                  className="border-b border-zinc-700 last:border-b-yellow-400 hover:bg-zinc-700"
                >
                  <td className="flex items-center justify-center gap-2 p-2">
                    {atletas.name}
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button>
                          <Edit className="size-4 text-orange-700" />
                        </button>
                      </Dialog.Trigger>

                      <EditAtleta
                        id={atletas.id}
                        nome={atletas.name}
                        pontos={atletas.points}
                        genero={atletas.genero}
                        reps23_1={atletas.reps23_1}
                        reps23_2a={atletas.reps23_2A}
                        posicao23_1={atletas.posicao23_1}
                        posicao23_2a={atletas.posicao23_2A}
                        posicao23_2b={atletas.posicao23_2B}
                        kg23_2b={atletas.kg23_2B}
                        rx={atletas.rx}
                      />
                    </Dialog.Root>
                  </td>
                  <td>{atletas.genero}</td>
                  <td>{atletas.points}</td>
                  <td>{atletas.reps23_1}</td>
                  <td>{atletas.posicao23_1}</td>
                  <td>{atletas.reps23_2A}</td>
                  <td>{atletas.posicao23_2A}</td>
                  <td>{atletas.kg23_2B}</td>
                  <td>{atletas.posicao23_2B}</td>
                  <td className="pr-2">{atletas.rx ? 'Sim' : 'Não'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {isFetching && isLoading && (
          <Loader2 className="flex size-8 w-full animate-spin justify-center text-zinc-400" />
        )}
      </div>

      {atletasResponse && (
        <Pagination
          page={page}
          pages={atletasResponse?.pages}
          perPage={Number(perPage)}
          items={atletasResponse?.items}
        />
      )}
    </div>
  )
}
