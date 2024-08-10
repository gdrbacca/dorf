import * as Dialog from '@radix-ui/react-dialog'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import { FormEvent, useState } from 'react'

import { Button } from '../components/button'
import { api } from '../lib/axios'

interface CreateAthleteSchema {
  name: string
  genero: string
}

interface AddAtletaProps {
  setOpen: () => void
}

export function AddAtleta({ setOpen }: AddAtletaProps) {
  const [saving, setSaving] = useState(false)
  const queryClient = useQueryClient()
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({ name, genero }: CreateAthleteSchema) => {
      // delay 2s
      await new Promise((resolve) => setTimeout(resolve, 2000))

      /* await fetch('http://localhost:3333/atletas', {
        method: 'POST',
        body: JSON.stringify({
          name,
          genero,
          points: 0,
          reps23_1: 0,
          posicao23_1: 0,
          reps23_2A: 0,
          posicao23_2A: 0,
          kg23_2B: 0,
          posicao23_2B: 0,
          rx: false,
        }),
      }) */

      await api.post('/atletas', {
        // method: 'POST',
        name,
        genero,
        points: 0,
        reps23_1: 0,
        posicao23_1: 0,
        reps23_2A: 0,
        posicao23_2A: 0,
        kg23_2B: 0,
        posicao23_2B: 0,
        rx: false,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-atletas'],
      })

      setOpen()
    },
  })

  const [gender, setGender] = useState('M')

  async function handleAddAtleta(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const name = String(data.get('name')) ?? ''

    setSaving(true)
    await mutateAsync({ name, genero: gender })

    console.log({ name, gender })
  }

  function handleRadioEvent(event: FormEvent<HTMLInputElement>) {
    const { value } = event.currentTarget

    setGender(value)
  }

  return (
    <div className="h-48 w-full rounded-md bg-zinc-950 p-4 text-zinc-200">
      <fieldset disabled={saving} className="group">
        <form onSubmit={handleAddAtleta} className="space-y-10">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nome..."
              name="name"
              className="h-10 w-full rounded-md bg-zinc-800 px-2 outline-none"
              required
            />
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <input
                  checked={gender === 'M'}
                  id="radioMasc"
                  type="radio"
                  name="defaultRadio"
                  className="h-4 w-4"
                  value="M"
                  onChange={handleRadioEvent}
                />
                <label htmlFor="radioMasc">Masculino</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  checked={gender === 'F'}
                  id="radioFem"
                  type="radio"
                  name="defaultRadio2"
                  className="h-4 w-4"
                  value="F"
                  onChange={handleRadioEvent}
                />
                <label htmlFor="radioFem">Feminino</label>
              </div>
            </div>
          </div>

          <div className="inset-x-0 bottom-0 flex items-center justify-end space-x-4">
            <Button type="submit" variant="secondary" disabled={isPending}>
              <span className="group-disabled:opacity-0">Adicionar</span>
              <Loader className="absolute size-5 animate-spin opacity-0 group-disabled:opacity-100" />
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
  )
}
