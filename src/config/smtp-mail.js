import C from './config'
import emailjs from 'emailjs-com';

export const Mail=(val)=>{
    const serviceID=C.serviceID
    const templateID=C.templateID
    const publicKey=C.publicKey
  
    return emailjs.sendForm(serviceID, templateID, val, publicKey)
  }
  
