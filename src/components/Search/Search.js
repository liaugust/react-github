import React, { useContext, useState } from 'react'

import { AlertContext } from "../../context/alert/alertContext";
import { GithubContext } from "../../context/github/githubContext";

export const Search = () => {
  const [value, setValue] = useState('')
  const alert  = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') return

    if (value.trim()) {
      github.search(value.trim())
      alert.hide()
    } else {
      alert.show('Введите данные пользователя!')
      github.clearUsers()
    }
  }

  return (
    <div className='formGroup'>
      <input
        value={value}
        type='text'
        className='form-control mb-4'
        placeholder='Введите ник пользователя...'
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}