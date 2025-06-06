// src/view/Register.tsx
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';

const Register = () => {
    const [username] = useState('');
    const [password] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 这里添加实际的注册逻辑
        console.log('Registering with:', username, password);

        navigate('/login'); // 注册后跳转到登录页面
    };

    return (
        <div className='register-container'>
            <div className='content'>
                <div className='rg' onClick={handleSubmit}></div>
                <div className='o'>
                    <div className='q'></div>
                    <div className='v'></div>
                </div>
            </div>
        </div>
    );
};

export default Register;
