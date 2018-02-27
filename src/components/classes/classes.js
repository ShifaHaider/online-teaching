import React, {Component} from 'react';
import firebase from 'firebase'
import firestore from 'firebase/firestore'

import {Table, TableHeader,TableBody, TableRowColumn, TableHeaderColumn, TableRow} from 'material-ui/Table';

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
class Classes extends Component{
    db = firebase.firestore();
    id = localStorage.getItem('Id');
    classesRef = this.db.collection('Classes');
    constructor(props){
        super(props);
        this.state={
            classes:[]
        };
        this.classes();
    }

    classes(){
        var classesData =[];
        this.classesRef.get().then((classes)=>{
            classes.forEach((classData)=>{
             classesData.push(classData.data()) ;
                this.setState({classes: classesData});
            })
            // var classData= classes.data();

            console.log(this.state.classes);

        })
    }
    render(){
        return(
            <Table selectable={false}>
                <TableBody>
                    <TableRow>
                        <TableRowColumn>sdfs</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>

                </TableBody>
            </Table>

        )
    }
}
export default Classes;