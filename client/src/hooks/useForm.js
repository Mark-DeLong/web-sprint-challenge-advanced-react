import { useState } from 'react'
//
export default function useForm(initialValue) {
  //Hook
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [values, setValues] = useState(initialValue)
  //Change handler
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }////
  //Submit handler
  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccessMessage(true)
  }

  return [values, showSuccessMessage, handleChanges, handleSubmit]
}