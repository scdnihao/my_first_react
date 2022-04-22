import React from "react";

class Auth extends React.Component {
    constructor(props:any){
        super(props)
    }
    
    render(){
        console.log(this.props)
        const {children} = this.props
        return (
            <>
                {
                    children
                }
            </>
        )
    }
}

export default Auth