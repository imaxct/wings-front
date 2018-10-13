import React, {Component} from 'react';
import LoadingButton from "./LoadingButton";
import {DetailsList, DetailsListLayoutMode, Modal, SelectionMode} from "office-ui-fabric-react";
import Http from "../../../Http";
import Toast from "../../../Toast";

class SelectionList extends Component {
    state = {
        loading: false,
        courseList: [],
    };

    _columns = [
        {
            key: 'id',
            name: '编号',
            fieldName: 'id',
            minWidth: 30,
            maxWidth: 30,
            onRender: (item) => {
                return <span>{item.id}</span>;
            }
        },
        {
            key: 'courseName',
            name: '课程名',
            fieldName: 'courseName',
            minWidth: 60,
            maxWidth: 300,
            isResizable: true,
            onRender: (item) => {
                return <span>{item.courseName}</span>;
            }
        },
        {
            key: 'courseTime',
            name: '上课时间',
            fieldName: 'courseTime',
            minWidth: 60,
            maxWidth: 300,
            isResizable: true,
            onRender: (item) => {
                return <span>{item.courseTime}</span>;
            }
        },
        {
            key: 'courseLocation',
            name: '上课地点',
            fieldName: 'courseLocation',
            minWidth: 60,
            maxWidth: 300,
            isResizable: true,
            onRender: (item) => {
                return <span>{item.courseLocation}</span>;
            }
        },
        {
            key: 'courseDesc',
            name: '课程描述',
            fieldName: 'courseDesc',
            maxWidth: 100,
            isResizable: true,
            onRender: (item) => {
                return <span>{item.desc}</span>;
            }
        },
        {
            key: 'action',
            name: '操作',
            fieldName: 'courseId',
            maxWidth: 15,
            isResizable: true,
            onRender: (item) => {
                return <LoadingButton onClick={() => this._onDeleteCourse(item.courseId)}>退选</LoadingButton>;
            }
        }
    ];

    componentDidMount() {
        this._loadData();
    }

    render() {
        return (
            <div>
                <DetailsList
                    selectionMode={SelectionMode.none}
                    columns={this._columns}
                    items={this.state.courseList}
                    layoutMode={DetailsListLayoutMode.justified}
                    compact={false}
                />

            </div>
        );
    }


    _loadData = () => {
        Http.get('/Student/selected')
            .then(res => {
                if (res.ok) {
                    this.setState({courseList: res.data});
                } else {
                    Toast.error(res.msg);
                }
            });
    };

    _updateLoading = loading => {
        this.setState({loading});
    };

    _onDeleteCourse = courseId => {
        this._updateLoading(true);
        Http.delete('/Student/deselect?courseId=' + courseId)
            .then(res => {
                this._updateLoading(false);
                if (res.ok) {
                    this.setState({courseList: this.state.courseList.filter(t => t.courseId !== courseId)});
                    Toast.info('退选成功')
                } else {
                    Toast.error(res.msg);
                }
            });
    };
}

export default SelectionList;