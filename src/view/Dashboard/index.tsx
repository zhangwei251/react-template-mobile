import React from 'react';
import {observer} from 'mobx-react-lite';
import './index.less';
import RingChart from './RingPie';
import {CapsuleTabs, List, Space, Swiper} from 'antd-mobile';
const list = [
    {
        title: '蛋白质',
        value: 123,
        subText: '每356'
    },
    {
        title: '碳水化合物',
        value: 71,
        subText: '每152'
    },
    {
        title: '脂肪',
        value: 72,
        subText: '每96'
    }
];
const Dashboard = () => {
    const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];
    const items = colors.map((index) => (
        <Swiper.Item key={index}>
            <div className='contentSwiper'></div>
        </Swiper.Item>
    ));

    return (
        <div className='dashboard-root-wwww'>
            <div className='titleWrap'>
                <div className='title1'>你好！轻盈S12138</div>
                <div className='title2'>你今天瘦了0.6KG！加油</div>
            </div>
            <div className='CartT'>
                <RingChart />
                <div className='CartText'>
                    <span className='value'>1220</span>
                    <span>每1915kcal</span>
                </div>
            </div>
            <div className='CardList '>
                {list.map((item, idex) => {
                    return (
                        <div className='card' key={idex}>
                            <div className='title'>
                                {' '}
                                <span className='radio'></span> {item.title}
                            </div>
                            <div className='value'>{item.value}</div>
                            <div className='subText'>{item.subText}</div>
                        </div>
                    );
                })}
            </div>
            <div className='today'>
                <div className='title'>今日食谱</div>
                <CapsuleTabs>
                    <CapsuleTabs.Tab title='早饭' key='fruits'>
                        <Space direction='vertical' block>
                            <Swiper stuckAtBoundary={false} slideSize={90} defaultIndex={0} indicator={false}>
                                {items}
                            </Swiper>
                        </Space>
                    </CapsuleTabs.Tab>
                    <CapsuleTabs.Tab title='午饭' key='vegetables'>
                        <Space direction='vertical' block>
                            <Swiper stuckAtBoundary={false} slideSize={90} defaultIndex={0} indicator={false}>
                                {items}
                            </Swiper>
                        </Space>
                    </CapsuleTabs.Tab>
                    <CapsuleTabs.Tab title='甜点' key='tiandian'>
                        <Space direction='vertical' block>
                            <Swiper stuckAtBoundary={false} slideSize={90} defaultIndex={0} indicator={false}>
                                {items}
                            </Swiper>
                        </Space>
                    </CapsuleTabs.Tab>
                    <CapsuleTabs.Tab title='晚饭' key='wanfan'>
                        <Space direction='vertical' block>
                            <Swiper stuckAtBoundary={false} slideSize={90} defaultIndex={0} indicator={false}>
                                {items}
                            </Swiper>
                        </Space>
                    </CapsuleTabs.Tab>
                </CapsuleTabs>
            </div>
            <div className='today'>
                <div className='title'>膳食构造</div>
                <div className='todyList'>
                    <List header=''>
                        <List.Item onClick={() => {}}>
                            <div className='CardListContent'>
                                <div className='t'>早饭</div>
                                <div className='c'>500-530kcal</div>
                            </div>
                        </List.Item>
                        <List.Item onClick={() => {}}>
                            <div className='CardListContent'>
                                <div className='t'>甜品</div>
                                <div className='c'>500-530kcal</div>
                            </div>
                        </List.Item>
                        <List.Item onClick={() => {}}>
                            <div className='CardListContent'>
                                <div className='t'>午饭</div>
                                <div className='c'>500-530kcal</div>
                            </div>
                        </List.Item>
                        <List.Item onClick={() => {}}>
                            <div className='CardListContent'>
                                <div className='t'>甜品</div>
                                <div className='c'>500-530kcal</div>
                            </div>
                        </List.Item>
                    </List>
                </div>
            </div>
        </div>
    );
};

export default observer(Dashboard);
