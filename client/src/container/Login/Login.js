import React,{useState} from 'react'
import './Login.css'
import TitlePager from "./../../components/TitlePager/TitlePager";
import LoginForm from "./../../components/LoginForm/LoginForm";
import { useSelector,useDispatch } from 'react-redux';
import {fetchUserSign,fetchUserLogin} from './../../store/actions/actionsUser'

const Login = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    //--------login state
    const [loginEmail,setLoginEmail] = useState('')
    const [loginPass,setLoginPass] = useState('')
    const [loginPassAgain,setLoginPassAgain] = useState('')
    //-------sign state
    const [signName,setSignName] = useState('')
    const [signEmail,setSignEmail] = useState('')
    const [signPass,setSignPass] = useState('')
    const [signPassAgain,setSignPassAgain] = useState('')
    //-------local error l-login s- sign
    const [localErrL,setLocalErrL] = useState(false)
    const [localErrTextL,setLocalErrTextL] = useState('')
    const [localErrS,setLocalErrS] = useState(false)
    const [localErrTextS,setLocalErrTextS] = useState('')
    //------login submit
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const loginSubmit = () =>{
        if(!re.test(String(loginEmail).toLowerCase())){
            setLocalErrL(true)
            setLocalErrTextL('Your Email Fail')
        }else if(loginPass != loginPassAgain){
            setLocalErrL(true)
            setLocalErrTextL('Your password do not similar')
        }else if(loginEmail == '' || loginPass == '' || loginPassAgain ==''){
            setLocalErrL(true)
            setLocalErrTextL('enter All fields')
        }else{
            dispatch(fetchUserLogin(loginEmail,loginPass))
        }
    }
    const signSubmit = () =>{
        if(!re.test(String(signEmail).toLowerCase())){
            setLocalErrS(true)
            setLocalErrTextS('Your Email Fail')
        }else if(signName == '' || signPass == '' || signPassAgain== ''|| signEmail == ''){
            setLocalErrS(true)
            setLocalErrTextS('enter All fields')
        }else if(signPass != signPassAgain){
            setLocalErrS(true)
            setLocalErrTextS('Your password do not similar')
        }else{
            dispatch(fetchUserSign(signEmail,signPass,signName))
        }
    }

    return (
        <>
            <TitlePager title='Sign UP / Sign IN'/>
            <LoginForm
                user={user}

                loginEmail={loginEmail}
                setLoginEmail={(e)=>setLoginEmail(e.target.value)}
                loginPass={loginPass}
                setLoginPass={(e)=>setLoginPass(e.target.value)}
                loginPassAgain={loginPassAgain}
                setLoginPassAgain={(e)=>setLoginPassAgain(e.target.value)}

                signName={signName}
                setSignName={(e)=>setSignName(e.target.value)}
                signEmail={signEmail}
                setSignEmail={(e)=>setSignEmail(e.target.value)}
                signPass={signPass}
                setSignPass={(e)=>setSignPass(e.target.value)}
                signPassAgain={signPassAgain}
                setSignPassAgain={(e)=>setSignPassAgain(e.target.value)}
                localErrL={localErrL}
                localErrTextL={localErrTextL}
                localErrS={localErrS}
                localErrTextS={localErrTextS}
            
                loginSubmit={loginSubmit}
                signSubmit={signSubmit}
            /> 
        </>
    )
}

Login.whyDidYouRender = true
export default React.memo(Login)