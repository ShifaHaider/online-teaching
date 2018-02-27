import React, {Component} from 'react';
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import App from "../../App";
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import AppBar from 'material-ui/AppBar';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Dashboard extends Component {
    db = firebase.firestore();
    id = localStorage.getItem('Id');
    ref = this.db.collection('Users').doc(this.id);
    constructor(props) {
        super(props);
        this.state = {
            userData: {}
        };
        this.resultForLogin();
    }

    resultForLogin() {
        console.log(this.id);
        this.ref.get().then((userData) => {
            console.log(userData.data());
            var data = userData.data();
            console.log(data);
            this.setState({userData: data})
        });
    }



    createClass(){
        this.props.history.push('/class');
    }
    render() {
        return (
            <div>
                <AppBar title={'Data of ' + this.state.userData.name}/>
                <List>
                    <ListItem
                        primaryText={this.state.userData.name}
                        leftIcon={<ActionGrade color={pinkA200}/>}/>
                    <ListItem
                        primaryText={this.state.userData.email}
                        leftIcon={<ActionGrade color={pinkA200}/>}/>
                    <ListItem
                        primaryText={this.state.userData.phone}
                        leftIcon={<ActionGrade color={pinkA200}/>}/>
                </List>
                <RaisedButton label='Create class' primary={true} onClick={this.createClass.bind(this)}/>
            </div>

        )

    }
}

export default Dashboard;