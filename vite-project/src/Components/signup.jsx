import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://backend-2lty.onrender.com/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.name,
                    email: formData.email,
                    password: formData.password
                })
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            navigate('/login');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Signup</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <input type="text" name="name" placeholder="Enter your username" onChange={handleInputChange} />
                <input type="email" name="email" placeholder="Enter your email" onChange={handleInputChange} />
                <input type="password" name="password" placeholder="Enter your password" onChange={handleInputChange} />
                <button type="submit">{loading ? 'Signing up...' : 'Signup'}</button>
            </form>
        </div>
    );
}

export default Signup;
