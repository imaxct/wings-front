import React, {Component} from 'react';
import {Dropdown, Label, TextField} from "office-ui-fabric-react";

const NAMES = {
    studentName: '姓名',
    sex: '性别',
    idNo: '身份证',
    studentNo: '学号',
    academy: '学院',
    grade: '年级',
    major: '专业',
    className: '班级',
    campus: '校区',
    phone: '手机',
    email: '邮箱',
    qq: 'QQ'
};

class PersonalInfo extends Component {

    state = {
        info: {},
        campus: null
    };

    rows = [];

    componentDidMount() {
        const info = this.props.info;
        const keys = Object.keys(NAMES);
        for (let key of keys) {
            const exists = info[key] !== undefined && info[key] !== null;
            if (!exists) {
                // deep clone
                const obj = JSON.parse(JSON.stringify(this.state.info));
                obj[key] = '';
                this.setState({info: obj});
            }
            this.rows.push(
                exists ?
                    <Label key={key} required={true}>
                        {NAMES[key]}: {info[key]}
                    </Label>
                    :
                    key === 'campus' ?
                        <Dropdown
                            key={key}
                            name={key}
                            label={NAMES[key]}
                            selected={this.state.campus ? this.state.campus : undefined}
                            onChanged={this._dropDownChanged}
                            options={[
                                {key: '1', text: '中心校区'},
                                {key: '2', text: '兴隆山校区'},
                                {key: '3', text: '洪家楼校区'},
                                {key: '4', text: '软件园校区'},
                                {key: '5', text: '千佛山校区'},
                                {key: '6', text: '趵突泉校区'},
                                {key: '7', text: '青岛校区'},
                                {key: '8', text: '威海校区'}
                            ]}
                        />
                        :
                        <TextField
                            key={key}
                            label={NAMES[key]}
                            readOnly={exists}
                            value={this.state.info[key]}
                            required={true}
                            name={key}
                            onChange={this.props.updateInfo}
                        />);
        }
    }

    _dropDownChanged = (item) => {
        this.props.updateInfo({target: {name: 'campus', value: item.text}});
        this.setState({campus: item.key});
    };


    render() {
        return (
            <div style={{marginTop: '1rem'}}>
                {this.rows}
            </div>
        );
    }
}

export default PersonalInfo;