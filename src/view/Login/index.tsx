// src/view/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
import { Button, Input } from 'antd-mobile';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {

        navigate('/Dashbord'); // 登录后跳转到dashboard
    };

    return (
        <div className="register-container">
            <div className='content1'>
                <Input
                    style={{
                        background: '#FFF'
                    }}
                    placeholder='    邮箱'
                    value={''}
                    onChange={val => {
                    }}
                />
                <Input
                    style={{
                        background: '#FFF',
                        marginTop: '20px'
                    }}
                    placeholder='    密码'
                    value={''}
                    onChange={val => {
                    }}
                />
                <Button block color='primary' size='large' onClick={handleSubmit} style={{
                    marginTop: '40px',
                    borderRadius: "14px",
                    background: '#748566',
                    color: '#fff'
                }}>
                    登录
                </Button>
            </div>

        </div>
    );
};

export default Login;