import React from "react";
import './index.less'


interface props {
    count?:string | number
}

class Home extends React.Component<props>  {

    constructor(props:props){
        super(props);
        this.state={
            count:props.count
        }
    }

    public componentDidMount(){

    }
    
    public change = ()=>{

    }

    render (){
        return (
            <>
            <div className="one_p" >123321</div>
            </>
        )
    }
}

export default Home