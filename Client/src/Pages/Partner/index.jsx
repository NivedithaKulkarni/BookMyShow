import { Tabs } from 'antd';
import TheatreList from '../Partner/TheatreList';
//import TheatreList from './Partner/TheatreList';

const Partner = () => {
    // const onChange = (key) => {
    //     console.log(key);
    //   };
      const items = [
        {
          key: '1',
          label: 'Theatres',
          children: <TheatreList/>,
        }
        
        // {
        //   key: '3',
        //   label: 'Tab 3',
        //   children: 'Content of Tab Pane 3',
        // },
      ];

    return (
        <>
        <h1>Partner Page</h1>
            <Tabs defaultActiveKey="2" items={items} />
        </>
    )
}

export default Partner;