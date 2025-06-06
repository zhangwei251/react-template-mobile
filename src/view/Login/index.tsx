// src/view/Login.tsx
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';
import {Button, Input, Modal} from 'antd-mobile';
const Login = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const handleSubmit = () => {
        if (!userEmail || !userPass) {
            Modal.alert({
                content: '请随便填写邮箱&密码',
                onConfirm: () => {
                    console.log('Confirmed');
                }
            });
            return;
        }
        navigate('/Dashbord'); // 登录后跳转到dashboard
    };

    return (
        <div className='register-container'>
            <div className='content1'>
                <Input
                    style={{
                        background: '#FFF'
                    }}
                    placeholder='    邮箱'
                    value={userEmail}
                    onChange={(e) => {
                        setUserEmail(e);
                        console.log('.....e', e);
                    }}
                />
                <Input
                    type='password'
                    style={{
                        background: '#FFF',
                        marginTop: '20px'
                    }}
                    placeholder='    密码'
                    value={userPass}
                    onChange={(e) => {
                        setUserPass(e);
                    }}
                />
                <Button
                    block
                    color='primary'
                    size='large'
                    onClick={handleSubmit}
                    style={{
                        marginTop: '40px',
                        borderRadius: '14px',
                        background: '#748566',
                        color: '#fff'
                    }}
                >
                    登录
                </Button>
            </div>
        </div>
    );
};

export default Login;
