import React from 'react';
import {Tree} from 'antd';
import TreeNodeItem from './components/TreeNodeItem';
const {DirectoryTree} = Tree;
const treeData = [{
    "id": "",
    "pid": "",
    "title": "测试表",
    "level": "",
    "children": [{
        "id": "0",
        "displayName": "tmp_asdasdadas_20200619154656",
        "content": "tmp_asdasdadas_20200619154656",
        "title": "tmp_asdasdadas_20200619154656",
        "databaseName": "test_tmp",
        "titleCN": "tmp_asdasdadas_20200619154656",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-0"
    }, {
        "id": "1",
        "displayName": "tmp_as d_20200619153332",
        "content": "tmp_as d_20200619153332",
        "title": "tmp_as d_20200619153332",
        "databaseName": "test_tmp",
        "titleCN": "tmp_as d_20200619153332",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-1"
    }, {
        "id": "2",
        "displayName": "tmp_adsf_20200619152756",
        "content": "tmp_adsf_20200619152756",
        "title": "tmp_adsf_20200619152756",
        "databaseName": "test_tmp",
        "titleCN": "tmp_adsf_20200619152756",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-2"
    }, {
        "id": "3",
        "displayName": "tmp_fasdfas_20200619152543",
        "content": "tmp_fasdfas_20200619152543",
        "title": "tmp_fasdfas_20200619152543",
        "databaseName": "test_tmp",
        "titleCN": "tmp_fasdfas_20200619152543",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-3"
    }, {
        "id": "4",
        "displayName": "tmp_aaa_20200618140907",
        "content": "tmp_aaa_20200618140907",
        "title": "tmp_aaa_20200618140907",
        "databaseName": "test_tmp",
        "titleCN": "tmp_aaa_20200618140907",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-4"
    }, {
        "id": "5",
        "displayName": "tmp_hah_20200618140709",
        "content": "tmp_hah_20200618140709",
        "title": "点我点我点我",
        "databaseName": "test_tmp",
        "titleCN": "tmp_hah_20200618140709",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-5"
    }, {
        "id": "6",
        "displayName": "tmp_test1_20200618120809",
        "content": "tmp_test1_20200618120809",
        "title": "tmp_test1_20200618120809",
        "databaseName": "test_tmp",
        "titleCN": "tmp_test1_20200618120809",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-6"
    }, {
        "id": "7",
        "displayName": "tmp_ppp_20200618120318",
        "content": "tmp_ppp_20200618120318",
        "title": "tmp_ppp_20200618120318",
        "databaseName": "test_tmp",
        "titleCN": "tmp_ppp_20200618120318",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-7"
    }, {
        "id": "8",
        "displayName": "tmp_test0618-2_20200618115812",
        "content": "tmp_test0618-2_20200618115812",
        "title": "tmp_test0618-2_20200618115812",
        "type": "udw",
        "databaseName": "test_tmp",
        "titleCN": "tmp_test0618-2_20200618115812",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-8"
    }, {
        "id": "9",
        "displayName": "tmp_test0618_20200618115345",
        "content": "tmp_test0618_20200618115345",
        "title": "tmp_test0618_20200618115345",
        "databaseName": "test_tmp",
        "titleCN": "tmp_test0618_20200618115345",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-9"
    }, {
        "id": "10",
        "displayName": "tmp_aa_20200618114756",
        "content": "tmp_aa_20200618114756",
        "title": "tmp_aa_20200618114756",
        "databaseName": "test_tmp",
        "titleCN": "tmp_aa_20200618114756",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-10"
    }, {
        "id": "11",
        "displayName": "tmp_a_20200612165918",
        "content": "tmp_a_20200612165918",
        "title": "tmp_a_20200612165918",
        "databaseName": "test_tmp",
        "titleCN": "tmp_a_20200612165918",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-11"
    }, {
        "id": "12",
        "displayName": "tmp_www_20200611194411",
        "content": "tmp_www_20200611194411",
        "title": "tmp_www_20200611194411",
        "databaseName": "test_tmp",
        "titleCN": "tmp_www_20200611194411",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-12"
    }, {
        "id": "13",
        "displayName": "tmp_aabsdfsa_20200611193801",
        "content": "tmp_aabsdfsa_20200611193801",
        "title": "tmp_aabsdfsa_20200611193801",
        "databaseName": "test_tmp",
        "titleCN": "tmp_aabsdfsa_20200611193801",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-13"
    }, {
        "id": "14",
        "displayName": "tmp_aaaa_20200611181612",
        "content": "tmp_aaaa_20200611181612",
        "title": "tmp_aaaa_20200611181612",
        "databaseName": "test_tmp",
        "titleCN": "tmp_aaaa_20200611181612",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-14"
    }, {
        "id": "15",
        "displayName": "tmp_test0603_20200603104451",
        "content": "tmp_test0603_20200603104451",
        "title": "tmp_test0603_20200603104451",
        "databaseName": "test_tmp",
        "titleCN": "tmp_test0603_20200603104451",
        "children": [],
        "pid": "",
        "is_table": true,
        "tree_id": "0-14-15"
    }],
    "tree_id": "0-14"
}];

export default class DataTree extends React.Component {
    onCustomLabel = item => {
        return (
            <TreeNodeItem item={item}/>
        );
    };
    renderTreeNodes = data => (
        data.map(item => {
            const {title, tree_id, children} = item;
            if (children && !item.hasOwnProperty('is_table')) {
                return {title: title, key: tree_id, children: this.renderTreeNodes(children)};
            } else {
                return {title: this.onCustomLabel(item), key: item.tree_id};
            }
        })
    );
    render() {
        return (
            <div style={{width: '30%'}}>
                <DirectoryTree
                    showIcon={false}
                    expandedKeys={['0-14']}
                    autoExpandParent={true}
                    height={200}
                    treeData={this.renderTreeNodes(treeData)}
                />
            </div>
        );
    }
}