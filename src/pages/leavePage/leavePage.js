import './leavePage.css'
import { Button, Space, DatePicker, Table, Select,Pagination, Flex } from 'antd';
import { SearchOutlined,ExportOutlined } from '@ant-design/icons';
import PageTitle from '../../components/Title_Page/TitlePage';
const { RangePicker } = DatePicker;


const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};


// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
const LeavePage = () => {
  
  
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
    },

    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      // sorter: {
      //   compare: (a, b) => a.chinese - b.chinese,
      //   multiple: 3,
      // },
    },
    {
      title: 'Math Score',
      dataIndex: 'math',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'English Score',
      dataIndex: 'english',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ];
  const data = [
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '2',
      no:2,
      name: 'Jim Green',
      department: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      no:3,
      name: 'Joe Black',
      department: 98,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      no:4,
      name: 'Jim Red',
      department: 88,
      math: 99,
      english: 89,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },

    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },
    {
      key: '1',
      no:1,
      name: 'John Brown',
      department: 98,
      math: 60,
      english: 70,
    },

  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
   

  return (
    <>
      <PageTitle
         PageTitle='Leave'
      
      />

      <Space  >
        
        <Select
        style={{
          width: 180,
          height: 30,

        }}
        Select
        showSearch
        placeholder="Leave Type"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={[
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
          {
            value: 'tom',
            label: 'Tom',
          },
        ]}
      />
      <Select
        style={{
          width: 180,
          height: 30,

        }}
        Select
        showSearch
        placeholder="Status"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={[
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
          {
            value: 'tom',
            label: 'Tom',
          },
        ]}
      />
        
        <RangePicker />
        <Select
        style={{
          width: 180,
          height: 30,

        }}
        Select
        showSearch
        placeholder="Department"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={[
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
          {
            value: 'tom',
            label: 'Tom',
          },
        ]}
      />
        <Button icon={<SearchOutlined />} type='primary' >Search</Button>

        <div>
          
          <Button icon={<ExportOutlined />} type='primary' >Export xlsx</Button>
        </div>
      </Space>

      <Table style={{marginTop:10}} dataSource={data} columns={columns} />;
    </>
  )

}
const App = () => <Pagination defaultCurrent={6} total={500} />;
export default LeavePage;