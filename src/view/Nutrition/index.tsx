import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import './index.less';

const Dashboard = () => {
    const [a, setA] = useState(4);
    const arr = [{
        bg: '#ff3a6c',
        t: '腿部'
    }, {
        bg: '#fccfc2',
        t: '营养健康'
    }, {
        bg: '#5bda92',
        t: '零食'
    }, {
        bg: '#c9bbfb',
        t: '每日饮水'
    }]
    return (
        <div className='dashboard-root-wwww'>
            <div className='titleWrap'>
                <div className='title1'>你好！轻盈S12138</div>
                <div className='title1' style={{ marginTop: 10 }}>这是你今天的任务</div>
            </div>
            <div className='CartT11'>
                <div className='w'>周  1</div>
                <div className='ww'>
                    {['日', '一', '二', '三', '四', '五', '六'].map((item, index) => {
                        return <div key={index} className={index === a ? 'active' : ""} onClick={() => {
                            setA(index)
                        }}>{item}</div>
                    })}
                </div>
                <div className='cars'>
                    {arr.map(item => {
                        return <div className='card' style={{
                            backgroundColor: item.bg
                        }}>
                            <div className='yuan'></div>
                            <div className='text'>{item.t}</div>
                        </div>
                    })}
                </div>
                <div className='smcard'>+</div>
            </div>
        </div>
    );
};

export default observer(Dashboard);
