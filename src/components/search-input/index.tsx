import { DEBOUNCE_DELAY } from '~/constants/debounce'
import { FormContainer, InputElement } from './styles'

interface SearchInputProps {
  placeholder: string
  onSearch: (value: string) => void
  optionsListComponent?: React.ReactNode
}

let debounceTimer: ReturnType<typeof setTimeout> | null = null

export const SearchInput = ({ placeholder, onSearch }: SearchInputProps): JSX.Element => {
  const clearDebounceTimer = () => debounceTimer && clearTimeout(debounceTimer)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    clearDebounceTimer()
    const inputElement = e.currentTarget[0] as HTMLInputElement
    onSearch(inputElement.value.trim())
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearDebounceTimer()
    debounceTimer = setTimeout(() => {
      onSearch(e.target.value)
    }, DEBOUNCE_DELAY)
  }

  return (
    <FormContainer role='search' onSubmit={onSubmit}>
      <InputElement
        onChange={handleOnChange}
        placeholder={placeholder}
        type='text'
        aria-label={placeholder}
      />
    </FormContainer>
  )
}
