import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const ColorForm = ({ setColors, colors }) => {

    const navigate = useNavigate();

    const INITIAL_STATE = {
        color: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const color = formData.color

        // prevent changing to invalid color
        if (!CSS.supports('color', color)) {
            alert(`${color} is invalid`);
            return
        }

        setColors([...colors, color])
        setFormData(INITIAL_STATE)
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color-input">New Color</label>
            <input
                id='color-input'
                type='text'
                name='color'
                placeholder="Enter Color Here"
                onChange={handleChange}
            />
            <button>Add color</button>

        </form>
    )
}

export default ColorForm;