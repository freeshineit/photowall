import React from 'react';
import Router from 'react-router';

class Index extends React.Component{

    componentDidMount(){
        fetch('/index')
            .then(function(res){
                console.log(res);
            })
    }

    render(){
        return (
            <div></div>
        );
    }

}


export default Index;
