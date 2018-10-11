import React, {Component} from 'react';
import {DetailsList, DetailsListLayoutMode, SelectionMode} from "office-ui-fabric-react";
import LoadingButton from "./LoadingButton";
import Http from '../../../Http';
import Toast from "../../../Toast";

class CourseList extends Component {
    state = {
        loading: false,
        courseList: []
    };

    _columns = [
        {
            key: 'id',
            name: 'id',
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
            key: 'available',
            name: '课余量',
            fieldName: 'available',
            minWidth: 50,
            maxWidth: 50,
            onRender: (item) => {
                let key = 'availableNum';
                if ('NOT_POOR' === this.props.info.poorLevel) {
                    key = 'notPoorNum';
                }
                return <span>{item[key] > 0 ? '有' : '无'}</span>;
            }
        },
        {
            key: 'gradeLimit',
            name: '开课年级',
            fieldName: 'gradeLimit',
            maxWidth: 100,
            isResizable: true,
            onRender: (item) => {
                return <span>{item.gradeLimit}</span>;
            }
        },
        {
            key: 'deadline',
            name: '截止时间',
            fieldName: 'deadline',
            minWidth: 200,
            maxWidth: 200,
            isResizable: true,
            onRender: (item) => {
                const d = new Date(item.deadline);
                return <span>{`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`}</span>;
            }
        },
        {
            key: 'courseDesc',
            name: '课程描述',
            fieldName: 'courseDesc',
            maxWidth: 100,
            isResizable: true,
            onRender: (item) => {
                return <span>desc</span>;
            }
        },
        {
            key: 'action',
            name: '操作',
            fieldName: 'gmtCreate',
            maxWidth: 15,
            isResizable: true,
            onRender: (item) => {
                return <LoadingButton onClick={() => this._onChooseCourse(item.id)}>Choose</LoadingButton>;
            }
        }
    ];

    _updateLoading = (loading) => {
        this.setState({loading});
    };

    _onChooseCourse = (courseId) => {
        this._updateLoading(true);
        Http.put('/Student/select?courseId=' + courseId)
            .then(res => {
                this._updateLoading(false);
                if (res.ok) {
                    Toast.info('选课成功');
                    this._loadDate();
                } else {
                    Toast.error(res.msg);
                }
            });
    };

    _loadDate = () => {
        Http.get('/Student/listCourse')
            .then(res => {
                if (res.ok) {
                    this.setState({courseList: res.data});
                }
            });
    };

    componentDidMount() {
        this._loadDate();
    }


    render() {
        return (
            <DetailsList
                selectionMode={SelectionMode.none}
                columns={this._columns}
                items={this.state.courseList}
                layoutMode={DetailsListLayoutMode.justified}
                compact={false}
            />
        );
    }
}

export default CourseList;