import React, {Component} from 'react';
import App from "../../App";
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import TimePicker from 'material-ui/TimePicker';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            createClass: {
                title: '',
                teacherID: '',
                subject: '',
                classStartTime: {},
                classEndTime: {},
                creatdAt: '',
                description: ''
            }
        }
    }

    // handleChange = (event, index, value) => this.setState({value});
    createClass() {
        var db = firebase.firestore();
        var obj = this.state.createClass;
         this.id = localStorage.getItem('Id');
         obj.teacherID = this.id;
        db.collection('Classes').doc(this.id).set(obj);
        console.log(this.state.createClass);
    }

    textChange(p, e, value) {
        var createClass = this.state.createClass;
        createClass[p] = value;
        this.setState({createClass: createClass});

    }

    selectChange(p, event, index, value) {
        console.log(p, event, index, value);
        var createClass = this.state.createClass;
        createClass[p] = value;
        this.setState({createClass: createClass});
    }

    timeChange(p, e, value) {
        console.log(p, e, value);
        var createClass = this.state.createClass;
        createClass[p] = value;
        createClass.creatdAt = Date.now(value);
        this.setState({createClass: createClass});

    }

    // textChange(p, e) {
    //     this.id = localStorage.getItem('Id');
    //     var createClass = this.state.createClass;
    //     createClass.teacherID = this.id;
    //     createClass.creatdAt = Date.now();
    //     createClass[p] = e.target.value;
    //     this.setState({createClass: createClass});
    //     console.log(this.state.createClass);
    // }


    render() {
        return (
            <div>
                <AppBar title='Create Class'/>
                <TextField
                    hintText="Title"
                    floatingLabelText="Title"
                    type="text"
                    value={this.state.createClass.title}
                    onChange={this.textChange.bind(this, 'title')}/>
                <TimePicker hintText="Class Start Time"
                            value={this.state.createClass.classStartTime}
                            onChange={this.timeChange.bind(this, 'classStartTime')}/>
                <TimePicker hintText="Class End Time"
                            value={this.state.createClass.classEndTime}
                            onChange={this.timeChange.bind(this, 'classEndTime')}/>
                <DropDownMenu value={this.state.createClass.subject} onChange={this.selectChange.bind(this, 'subject')}>
                    <MenuItem value="Chemistry" primaryText="Chemistry"/>
                    <MenuItem value="Biology" primaryText="Biology"/>
                    <MenuItem value="Physics" primaryText="Physics"/>
                    <MenuItem value="Mathematics" primaryText="Mathematics"/>
                    <MenuItem value="English" primaryText="English"/>
                </DropDownMenu><br/>
                <TextField
                    hintText="Type a more description of class.."
                    floatingLabelText="Description of class"
                    type="text"
                    multiLine={true}
                    rows={2}
                    value={this.state.createClass.description}
                    onChange={this.textChange.bind(this, 'description')}/><br/>
                <RaisedButton label='CreateClass' primary={true} onClick={this.createClass.bind(this)}/>
            </div>
        )
    }
}

export default Class;