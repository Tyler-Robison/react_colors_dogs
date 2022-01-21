import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Color = ({ colors }) => {

    const navigate = useNavigate();
    const { color } = useParams()

    // re-direct to color select if color isn't valid
    useEffect(() => {
        if (!colors.includes(color)) navigate('/')
    }, [])

    // console.log('color', color)
    // console.log('colors', colors)

    return (
        <div data-testid={`${color}-div`}  style={{ backgroundColor: `${color}`, height: '80vh', width: '100vh' }}>

        </div>
    )
}

export default Color;