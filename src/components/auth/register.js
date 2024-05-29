
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profession, setProfession] = useState('');
    const [errors, setErrors] = useState({});
    const navigate=useNavigate()

    const professions = ["Developer", "Doctor", "Manager", "Other"];

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        return password.length >= 6;  // Example: Minimum length of 6 characters
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!validateEmail(email)) {
            validationErrors.email = 'Invalid email format';
        }
        if (!validatePassword(password)) {
            validationErrors.password = 'Password must be at least 6 characters long';
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        const user = { name, password, email, phone, profession };
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user));
        alert('User registered successfully!');
        navigate("/")
    };

    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center">Sign Up</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                                 {errors.password && <div className="text-danger">{errors.password}</div>}
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                                {errors.email && <div className="text-danger">{errors.email}</div>}
                            </div>
                            <div className="form-group">
                                <label>Phone:</label>
                                <input 
                                    type="tel" 
                                    className="form-control" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Profession:</label>
                                <select 
                                    className="form-control" 
                                    value={profession} 
                                    onChange={(e) => setProfession(e.target.value)} 
                                    required
                                >
                                    <option value="">Select a profession</option>
                                    {professions.map((prof, index) => (
                                        <option key={index} value={prof}>{prof}</option>
                                    ))}
                                </select>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        </form>
                        <h6>Already have an account ? <Link to="/">Sign In</Link></h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default RegisterPage;
