import React, {Component} from 'react';
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class ClassStart extends Component {
    db = firebase.firestore();
    constructor(props) {
        super(props);
        this.lectureId = props.match.params.id;
        this.classId = props.match.params.classId;

        this.state = {
            lectures: {}
        };
        this.ref = this.db.collection('Classes').doc(this.classId);
        this.lectureRef = this.ref.collection('Lectures').doc(this.lectureId);
        this.loadLecture();
    }

    loadLecture() {
           this.lectureRef.get().then((lecture)=>{
            var lectureData = lecture.data();
               this.setState({lectures: lectureData});
           })
    }

    render() {
        return (
            <div>
                <AppBar title={'View Lecture'}/>
                <Card>
                    <CardText>{this.state.lectures.titleChap}</CardText>
                    <CardText>{this.state.lectures.descriptionSub}</CardText>
                    <CardText>{this.state.lectures.videoUrl}</CardText>
                </Card>
            </div>
        )
    }
}


export default ClassStart;