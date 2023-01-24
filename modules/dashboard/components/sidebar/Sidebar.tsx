import React, {FC} from 'react';
import {Layout, Menu, MenuProps} from "antd";
import {UserOutlined} from "@ant-design/icons";

const { Sider } = Layout;

const items: MenuProps["items"] = [
    {
        icon: React.createElement(UserOutlined),
        key: 'users',
        label: 'Users',
        children: [
            {
                icon: React.createElement(UserOutlined),
                key: 'users',
                label: 'Users'
            }
        ]
    },
]

interface Props {
    section: string
    subSection: string
}

const Sidebar: FC<Props> = ({ section, subSection }) => (
            <Sider width={200}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[section ?? 'users']}
                    defaultOpenKeys={[subSection ?? "users"]}
                    style={{ height: "100%", borderRight: 0 }}
                    items={items}
                />
            </Sider>
    )

export default Sidebar;
