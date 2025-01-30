import { useContext } from 'react'
import { Context } from '../contexts/HotsProvider'

const useHots = () => {
  const { hots } = useContext(Context)
  return hots
}

export default useHots
