import React,{useState} from 'react'
import TitlePager from '../../components/TitlePager/TitlePager'
import './ContactUs.css'
import API from './../../API/API'
import ContactUsForm from './../../components/ContactUsForm/ContactUsForm'

const ContactUs = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [title,setTitle] = useState('')
    const [text,setText] = useState('')
    const [err,setErr] = useState('')
    const [success,setSuccess] = useState('')
    const [loading,setLoading] = useState(false)

    const sendEmail = () => {
        if(name === '' || title === '' || email === '' || text === '' ){
            setErr('Please enter all information')
            return 
        }
        setLoading(true)
        setErr('')
        setSuccess('')
        API.post('/user/sendText',{options:{
            name,
            title,
            email,
            text
        }}).then((data)=>{
            if(data.data.success){
                setLoading(false)
                setSuccess('Success')
            }else{
                setLoading(false)
                setErr(data.data.comment)
            }
        })
    }


    return (
        <>
            <TitlePager title='Contact US'/>
            <ContactUsForm
                name={name}
                email={email}
                title={title}
                text={text}
                success={success}
                err={err}
                sendEmail={sendEmail}
                setName={(e)=>setName(e.target.value)}
                setEmail={(e)=>setEmail(e.target.value)}
                setTitle={(e)=>setTitle(e.target.value)}
                setText={(e)=>setText(e.target.value)}
            />
        </>
    )
}

ContactUs.whyDidYouRender = true
export default React.memo(ContactUs)