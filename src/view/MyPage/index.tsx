import React from 'react';
import { observer } from 'mobx-react-lite';
import './index.less';
import { Avatar, Button, List, ProgressBar } from 'antd-mobile';

const Dashboard = () => {
    // eslint-disable-next-line react/prop-types
    const ProgressBar = ({ title, percentage, gradientColors }) => {
        return (
            <div className="progress-container">
                <div className="progress-title">{title}</div>
                <div className="progress-bar" style={{
                    background: `linear-gradient(to right, ${gradientColors.join(', ')})`
                }}>
                    <div
                        className="progress"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
                <div className="progress-percentage">{percentage}%</div>
            </div>
        );
    };

    return (
        <div className='dashboard-root'>
            <div className='header'>
                <Avatar style={{ width: "90px", borderRadius: '50%', height: '90px' }} src={'https://q7.itc.cn/q_70/images03/20240702/efecc6ef160443eab2c096a442ecc0e2.jpeg'} />
                <div style={{ fontSize: '24px', color: "#111", fontWeight: 500, marginTop: 10 }}>轻盈</div>
                <div style={{ fontSize: '20px', color: "#ccc", marginTop: 5 }}>S12138</div>
            </div>
            <div className='contenmt'>
                <div className="ttile">
                    <div> 进步</div>
                </div>
                <div className="ttile11">
                    <div> 锻炼</div>
                </div>
                <div className='present'></div>
                <div className="ttile11">
                    <div> 学习</div>
                </div>
                <div className='present11'></div>
                <div className='ttt' style={{ marginTop: '20px' }}>
                    <List header=''>
                        <List.Item extra={<div style={{ color: '#1464f6' }}>90cm</div>} onClick={() => { }}>
                            测量
                        </List.Item>
                        <List.Item extra={<div style={{ color: '#1464f6' }}>90cm</div>} onClick={() => { }}>
                            胸部
                        </List.Item>
                        <List.Item extra={<div style={{ color: '#1464f6' }}>90cm</div>} onClick={() => { }}>
                            腰部
                        </List.Item>
                        <List.Item extra={<div style={{ color: '#1464f6' }}>90cm</div>} onClick={() => { }}>
                            臀部
                        </List.Item>
                        <List.Item extra={<div style={{ color: '#1464f6' }}>90cm</div>} onClick={() => { }}>
                            体重
                        </List.Item>
                    </List>
                </div>
                <Button block color='primary' style={{
                    borderRadius: '24px',
                    background: '#2e3238',
                    color: '#fff',
                    marginTop: '20px'
                }} size='large'>
                    测量
                </Button>

            </div>
        </div>
    );
};

export default observer(Dashboard);
