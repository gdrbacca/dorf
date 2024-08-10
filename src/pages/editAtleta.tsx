import * as Dialog from '@radix-ui/react-dialog'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Loader2, X } from 'lucide-react'
import { FormEvent, useState } from 'react'

import { Button } from '../components/button'
import { Input } from '../components/input'
import { api } from '../lib/axios'

interface EditAtletaProps {
  id: string
  nome: string
  genero: string
  pontos: number
  reps23_1: number
  posicao23_1: number
  reps23_2a: number
  posicao23_2a: number
  kg23_2b: number
  posicao23_2b: number
  rx: boolean
  // setOpen: () => void
}

export function EditAtleta(props: EditAtletaProps) {
  const [gender, setGender] = useState(props.genero)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const queryClient = useQueryClient()

  function handleRadioEvent(event: FormEvent<HTMLInputElement>) {
    const { value } = event.currentTarget

    setGender(value)
  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (props: EditAtletaProps) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(props)

      /* await fetch('http://localhost:3333/atletas/' + props.id, {
        method: 'PUT',
        body: JSON.stringify({
          id: props.id,
          name: props.nome,
          genero: props.genero,
          points: props.pontos,
          reps23_1: props.reps23_1,
          posicao23_1: props.posicao23_1,
          reps23_2A: props.reps23_2a,
          posicao23_2A: props.posicao23_2a,
          kg23_2B: props.kg23_2b,
          posicao23_2B: props.posicao23_2b,
          rx: props.rx,
        }),
      }) */

      await api.put('/atletas/' + props.id, {
        // method: 'PUT',

        id: props.id,
        name: props.nome,
        genero: props.genero,
        points: props.pontos,
        reps23_1: props.reps23_1,
        posicao23_1: props.posicao23_1,
        reps23_2A: props.reps23_2a,
        posicao23_2A: props.posicao23_2a,
        kg23_2B: props.kg23_2b,
        posicao23_2B: props.posicao23_2b,
        rx: props.rx,
      })
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ['get-atletas'],
      })

      setSaved(true)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      window.document.location.reload()
    },
  })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = Object.fromEntries(new FormData(event.currentTarget))
    setSaving(true)
    await mutateAsync({
      id: props.id,
      nome: String(data.name),
      pontos: Number(data.pontos),
      genero:
        String(data.radio1) === 'M' ? String(data.radio1) : String(data.radio2),
      reps23_1: Number(data.reps23_1),
      posicao23_1: Number(data.posicao23_1),
      reps23_2a: Number(data.reps23_2a),
      posicao23_2a: Number(data.posicao23_2a),
      kg23_2b: Number(data.kg23_2b),
      posicao23_2b: Number(data.posicao23_2b),
      rx: String(data.rx) === 'on',
    })
    setSaving(false)
    // console.log(data)
  }
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/70" />
      <Dialog.Content className="fixed left-1/2 top-1/2 min-w-[340px] -translate-x-1/2 -translate-y-1/2 space-y-4 rounded-md border border-zinc-800 bg-zinc-900 p-6 pb-4 shadow-shape">
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-xl font-bold text-zinc-200">
            Editar atleta
          </Dialog.Title>
          <Dialog.Close>
            <X className="left-auto size-5 text-zinc-300" />
          </Dialog.Close>
        </div>
        <Dialog.Description className="flex flex-col gap-2 text-sm text-zinc-500">
          Editando o atleta {props.nome} {props.id}.
          {saved && (
            <span className="text-lg font-bold text-green-600">
              Atleta editado com sucesso!
            </span>
          )}
        </Dialog.Description>

        <div className="w-full rounded-md bg-black p-4 text-zinc-200">
          <fieldset disabled={saving} className="group">
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="text"
                defaultValue={props.nome}
                name="name"
                placeholder="Nome..."
                isize="full1"
              />
              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="radioMasc"
                    name="radio1"
                    value="M"
                    checked={gender === 'M'}
                    className="size-4"
                    onChange={handleRadioEvent}
                  />
                  <label htmlFor="radioMasc">Masculino</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="radioFem"
                    name="radio2"
                    value="F"
                    checked={gender === 'F'}
                    className="size-4"
                    onChange={handleRadioEvent}
                  />
                  <label htmlFor="radioFem">Feminino</label>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="pontos" className="w-28">
                  Pontos:{' '}
                </label>
                <Input
                  type="number"
                  defaultValue={props.pontos}
                  id="pontos"
                  name="pontos"
                  placeholder="Pontos..."
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="reps23_1" className="w-28">
                  Resp23_1:{' '}
                </label>
                <Input
                  type="number"
                  defaultValue={props.reps23_1}
                  id="reps23_1"
                  name="reps23_1"
                  placeholder="Reps23_1..."
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="posicao23_1" className="w-28">
                  Posicao23_1:{' '}
                </label>
                <Input
                  type="number"
                  defaultValue={props.posicao23_1}
                  id="posicao23_1"
                  name="posicao23_1"
                  placeholder="Posicao23_1..."
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="reps23_2a" className="w-28">
                  Reps23_2a:{' '}
                </label>
                <Input
                  type="number"
                  defaultValue={props.reps23_2a}
                  id="reps23_2a"
                  name="reps23_2a"
                  placeholder="Reps23_2a..."
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="posicao23_2a" className="w-28">
                  Posicao23_2a:{' '}
                </label>
                <Input
                  type="number"
                  defaultValue={props.posicao23_2a}
                  id="posicao23_2a"
                  name="posicao23_2a"
                  placeholder="Posicao23_2a..."
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="kg23_2b" className="w-28">
                  Kg23_2b:{' '}
                </label>
                <Input
                  type="number"
                  defaultValue={props.kg23_2b}
                  id="kg23_2b"
                  name="kg23_2b"
                  placeholder="Kg23_2b..."
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="posicao23_2b" className="w-28">
                  Posicao23_2b:{' '}
                </label>
                <Input
                  type="number"
                  defaultValue={props.posicao23_2b}
                  id="posicao23_2b"
                  name="posicao23_2b"
                  placeholder="Posicao23_2b..."
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="rx" className="w-28">
                  Rx:{' '}
                </label>
                <input
                  type="checkbox"
                  className="size-4"
                  defaultChecked={props.rx}
                  id="rx"
                  name="rx"
                />
              </div>
              <div className="flex items-center justify-end gap-2">
                <Button type="submit" variant="secondary" disabled={isPending}>
                  <span className="group-disabled:opacity-0">Salvar</span>
                  <Loader2 className="absolute size-5 animate-spin opacity-0 group-disabled:opacity-100" />
                </Button>
                <Dialog.Close asChild>
                  <Button type="button" variant="cancel">
                    Cancelar
                  </Button>
                </Dialog.Close>
              </div>
            </form>
          </fieldset>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
