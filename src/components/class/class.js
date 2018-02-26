import React, {Component} from 'react';
import App from "../../App";
import TimePicker from 'material-ui/TimePicker';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


class Class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            createClass: {
                title: '',
                teacherID: '',
                subject: '',
                startTime: '',
                creatdAt: ''
            }
        }
    }

    handleChange = (event, index, value) => this.setState({value});

    createClass() {
        var id = localStorage.getItem('Id');
        
    }

    render() {
        return (
            <div>
                <AppBar title='Create Class'/>
                <TextField
                    hintText="Title"
                    floatingLabelText="Title"
                    type="text"/>
                <TimePicker hintText="Start Time"/>
                <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={1} primaryText="Chemistry"/>
                    <MenuItem value={2} primaryText="Biology"/>
                    <MenuItem value={3} primaryText="Physics"/>
                    <MenuItem value={4} primaryText="Mathematics"/>
                    <MenuItem value={5} primaryText="English"/>
                </DropDownMenu>
            </div>
        )
    }
}

export default Class;