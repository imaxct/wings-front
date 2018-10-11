import React, {Component} from 'react';
import {DetailsList, DetailsListLayoutMode} from "office-ui-fabric-react";

class CourseList extends Component {
    _columns = [
        {
            key: 'id',
            name: 'id',
            fieldName: 'id',
            onRender: (item) => {
                return <span>{item.id}</span>;
            }
        },
        {
            key: 'courseName',
            name: 'courseName',
            fieldName: 'courseName',
            onRender: (item) => {
                return <span>{item.courseName}</span>
            }
        },
        {
            key: 'courseTime',
            name: 'courseTime',
            fieldName: 'courseTime',
            onRender: (item) => {
                return <span>{item.courseTime}</span>
            }
        },
        {
            key: '',
            name: '',
            fieldName: '',
            onRender: (item) => {

            }
        },
        {
            key: '',
            name: '',
            fieldName: '',
            onRender: (item) => {

            }
        },
        {
            key: '',
            name: '',
            fieldName: '',
            onRender: (item) => {

            }
        },
        {
            key: '',
            name: '',
            fieldName: '',
            onRender: (item) => {

            }
        },
    ];

    render() {
        return (
            <DetailsList
                columns={this._columns}
                items={[]}
                layoutMode={DetailsListLayoutMode.justified}
                compact={false}
            />
        );
    }
}

export default CourseList;