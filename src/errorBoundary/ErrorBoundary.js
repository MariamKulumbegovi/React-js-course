import React from "react";


export default class ErrorBoundary extends React.Component {

    state={
        error:null
    }

    componentDidCatch(error) {
        this.setState({
            error,
        })
    }

    render() {
        const {error}=this.state
        if(error){
            return(
                <div className="box">
                    <h1>Something went wrong...</h1>
                </div>
            )
        }
        return this.props.children
    }
}