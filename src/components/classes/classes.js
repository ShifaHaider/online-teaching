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
    ref = this.db.collection('Classes').doc(this.id);
    constructor(props){
        super(props);
        this.state={
            classes:[]
        };
        this.classes();
    }

    classes(){
        this.ref.get().then((classes)=>{
            var classData= classes.data();
            this.setState({classes: classData});
            console.log(this.state.classes);
        })
    }
    render(){
        return(
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow selected={true}>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow selected={true}>
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                    </TableRow>
                    <TableRow selected={true}>
                        <TableRowColumn>3</TableRowColumn>
                        <TableRowColumn>Stephanie Sanders</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow selected={true}>
                        <TableRowColumn>4</TableRowColumn>
                        <TableRowColumn>Steve Brown</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }
}
export default Classes;