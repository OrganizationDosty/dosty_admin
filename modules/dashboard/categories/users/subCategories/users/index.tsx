import React, {FC, useEffect, useState} from 'react';
import {Image, Spin, Table} from "antd";
import {ColumnsType} from "antd/es/table";

import {GetUsers} from "modules/dashboard/categories/users/api/users.api";
import {CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";

interface DataType {
    key: string;
    name: string;
    KA?: string;
    EN?: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "ID",
        dataIndex: "_id",
        key: "id",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Name",
        dataIndex: "firstName",
        key: "name",
        render: (text, user) => (
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '15px' }}>
                {/* @ts-ignore */}
                <Image src={user?.avatar ?? 'https://tasteofasia.com.au/uploads/2/products/obap-roasted-seasoned-seaweed-5g8.jpg'} width={30} height={30} style={{ borderRadius: '50%', marginRight: '10px' }} />
                {/* @ts-ignore */}
                <span>{text} {user?.lastName}</span>
            </div>
                ),
    },
    {
        title: "Phone Number",
        dataIndex: "phone",
        key: "phoneNumber",
        render: (text) => <span>{text.number}</span>
    },
    {
        title: "Status",
        dataIndex: "accountStatus",
        key: "status",
        render: (text) => (
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '5px' }}>
                {
                    text === 'ACTIVE' ?
                        <CheckCircleOutlined style={{ color: 'green' }} /> :
                        text === 'PENDING' ? <ClockCircleOutlined style={{ color: 'orange' }} /> : <CloseCircleOutlined style={{ color: 'red' }} />
                }
                <span style={{ marginLeft: '5px' }}>{text}</span>
            </div>
        )
    },
];

const Users: FC= (): JSX.Element => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        GetUsers().then((res) => setUsers(res.data ?? []))
    }, []);

    return (
        <>
        {
            users?.length > 0 ?
                <Table columns={columns} dataSource={users}
                       // scroll={{ x: '300px', y: '100%' }}
                       // style={{ maxHeight: '300px' }}
                       // scroll={{ y: true }}
                       // bodyStyle={{ maxHeight: '300px', overflow: 'auto'}}
                       tableLayout='fixed'
                       style={{ width: '100%'}}
                       scroll={{ x: true }}

                />
                :
                <Spin />
        }
        </>
    )
};

export default Users;
