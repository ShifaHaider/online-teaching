import React, {Component} from 'react';
import firebase from 'firebase'
import firestore from 'firebase/firestore'

import {Table, TableHeader, TableBody, TableRowColumn, TableHeaderColumn, TableRow} from 'material-ui/Table';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

class Classes extends Component {
    db = firebase.firestore();
    id = localStorage.getItem('Id');
    classesRef = this.db.collection('Classes');

    constructor(props) {
        super(props);
        this.state = {
            classes: []
        };
        this.classes();
    }

    classes() {
        var classesData = [];
        this.classesRef.get().then((classes) => {
            classes.forEach((classData) => {
                var obj = classData.data();
                obj.id = classData.id;
                classesData.push(obj);
                this.setState({classes: classesData});
            });
            console.log(this.state.classes);
        })
    }

    classData(d){
        console.log(d);
        this.props.history.push('/view-class/'+ d.id);
    }

    render() {
        return (
            <Table selectable={false}>
                <TableBody>{this.state.classes.map((data) => {
                    return (
                        <TableRow key={data.id}>
                            { console.log(data)}
                            <TableRowColumn><button onClick={this.classData.bind(this,data)}>ViewClass</button></TableRowColumn>
                            <TableRowColumn>{data.subject}</TableRowColumn>
                            <TableRowColumn>{new Date(data.classStartTime).toTimeString()}</TableRowColumn>
                            <TableRowColumn>{new Date(data.classEndTime).toTimeString()}</TableRowColumn>
                            <TableRowColumn>{data.description}</TableRowColumn>
                            <TableRowColumn>{data.creatdAt}</TableRowColumn>
                            <TableRowColumn>{data.teacherID}</TableRowColumn>

                        </TableRow>

                    )
                })
                }
                </TableBody>
            </Table>
        )
    }
}

export default Classes;