import React from "react";
import "./index.less"
import AuthPc from "@/component/auth-pc";
import {useNavigate,useLocation} from "react-router-dom"


const Home:React.FC =()=>{
        const navigate = useNavigate();
        const location = useLocation();

        return (
            <>
            <AuthPc>
            </AuthPc>
            </>
        )
}
export default Home