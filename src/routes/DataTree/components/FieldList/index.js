import React from 'react';
import {Menu, Input} from 'antd';
import Styles from './index.less';

const {Item: MenuItem, SubMenu} = Menu;

export default class FieldList extends React.Component {
    renderMenuItem = fields => {
        return fields.map((fieldItem, index) => {
            const {fieldname, fieldchinesename} = fieldItem;
            const displayName = fieldchinesename + ' (' + fieldname + ')';
            return <MenuItem>
                {displayName}
            </MenuItem>;
        });
    };
    renderSubMenu = schema => {
        return schema.map(item => {
            const {groupName,fields} = item;
            if (!!groupName) {
                return <SubMenu
                    key={groupName}
                    title={groupName}>
                    {this.renderMenuItem(fields)}
                </SubMenu>;
            }
            return this.renderMenuItem(fields);
        });
    };
    render() {
        const schema = this.props.schema;
        return (
            <div className={Styles.popoverContent}>
                <div className={Styles.listPopover}>
                    <Menu
                        mode="inline"
                        defaultOpenKeys={[]}
                        selectedKeys={[]}
                        onClick={this.onClick}
                        inlineIndent={18}
                    >
                        {this.renderSubMenu(schema)}
                    </Menu>
                </div>
            </div>
        );
    }
}