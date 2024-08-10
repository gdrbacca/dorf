import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

import { Button } from './button'
import { Select } from './select'

interface PaginationProps {
  page: number
  pages: number
  items: number
  perPage: number
}

export function Pagination({ page, pages, perPage, items }: PaginationProps) {
  const [, setSearchParams] = useSearchParams()

  function firstPage() {
    setSearchParams((params) => {
      params.set('page', '1')

      return params
    })
  }

  function lastPage() {
    setSearchParams((params) => {
      params.set('page', String(pages))

      return params
    })
  }

  function nextPage() {
    if (page + 1 > pages) return

    setSearchParams((params) => {
      params.set('page', String(page + 1))

      return params
    })
  }

  function previousPage() {
    if (page - 1 <= 0) return

    setSearchParams((params) => {
      params.set('page', String(page - 1))

      return params
    })
  }

  function selectPerPage(value: string) {
    setSearchParams((params) => {
      params.set('perPage', value)

      return params
    })
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        {perPage > items ? (
          <p>{items} itens</p>
        ) : (
          <p>
            {perPage} de {items} itens
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-28">
        <div className="flex items-center gap-2">
          Items por página
          <Select
            defaultValue={perPage}
            onChange={(e) => selectPerPage(e.currentTarget.value)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </Select>
        </div>
        <div>
          Página {page} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={firstPage} disabled={page - 1 <= 0}>
            <ChevronsLeft className="size-5" />
          </Button>
          <Button onClick={previousPage} disabled={page - 1 <= 0}>
            <ChevronLeft className="size-5" />
          </Button>
          <Button onClick={nextPage} disabled={page + 1 > pages}>
            <ChevronRight className="size-5" />
          </Button>
          <Button onClick={lastPage} disabled={page + 1 > pages}>
            <ChevronsRight className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
