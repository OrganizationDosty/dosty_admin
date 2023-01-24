import React, {FC} from 'react';
import {Menu, Layout, MenuProps} from "antd";

const { Header} = Layout;

const headerMenuItems: MenuProps["items"] = [
    {
        key: 'dostyPet',
        label: 'Dosty Pet'
    },
]

interface Props {
    platform: string
}

const HeaderComponent: FC<Props> = ({ platform }): JSX.Element => (
        <Header className="header">
            <Menu
                theme={"dark"}
                mode="horizontal"
                defaultSelectedKeys={[platform]}
                items={headerMenuItems}
            />
        </Header>
    )

export default HeaderComponent;
