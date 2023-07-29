import { useNavigate } from 'react-router-dom'

const useNavigator = () => {
    const navigator = useNavigate()
    return { navigator }
}

export default useNavigator