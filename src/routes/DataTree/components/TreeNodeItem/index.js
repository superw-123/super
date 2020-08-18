/**
 * @file: data tree
 * @author: wangjiana
 * @Date: 2019-06-10 17:42:26
 * @Last Modified by: wangjiana
 * @Last Modified time: 2020-08-18 16:33:56
 */
import React, {Fragment} from 'react';
import {Popover} from 'antd';
import FieldList from '../FieldList';

const schema = [{
    "groupName": "",
    "sort": "100",
    "fields": [{
        "fieldname": "test1",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "test1",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "test2",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "test2",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "test3",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "test3",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "test4",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "test4",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "test5",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "test5",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "test6",
        "fieldtype": "Number",
        "showtype": "",
        "fieldchinesename": "test6",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "original_query",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "aaa",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "city2",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "city3",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "ip",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "city",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "country",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "city",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "province",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "city",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "city",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "city",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "page_no",
        "fieldtype": "Number",
        "showtype": "",
        "fieldchinesename": "1",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "action_name",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "2",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "source_group",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "4",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "search_type",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "os_version",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "current_product_name",
        "fieldtype": "Number",
        "showtype": "",
        "fieldchinesename": "os_version",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "atom_sessionid",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "os_version",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "session_id",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "os_version",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "browser",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "os_version",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "phone_brand",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "os_version",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "phone_type",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "os_version",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "os_version",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "os_version",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "browser_version",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "fgdsg",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "browser_type",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "gdsfgs",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "dsdf",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "dsd'",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "mobile_format",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "dkd",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "mobile_platform",
        "fieldtype": "String",
        "showtype": "",
        "fieldchinesename": "fjsj",
        "fielddesc": "",
        "fieldorder": 0
    }, {
        "fieldname": "page_disp_num",
        "fieldtype": "Number",
        "showtype": "",
        "fieldchinesename": "4433",
        "fielddesc": "",
        "fieldorder": 0
    }],
    "key": 0
}];
export default class TreeNodeItem extends React.Component {
    state = {
        id: ''
    };
    onSelect = item => {
        this.setState({
            id: '5'
        })
    };
    render() {
        const item = this.props.item;
        return (
            <span onClick={() => this.onSelect(item)}>
                <Popover content={<FieldList schema={schema} />}
                    title={'测试'}
                    placement="rightTop"
                    trigger="click"
                    visible={this.state.id === '5' ? true : false}
                >
                    <span>
                        {item.title}
                    </span>
                </Popover>
            </span>
        );
    }
}