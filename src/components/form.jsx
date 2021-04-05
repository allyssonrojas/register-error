import React from "react"
import {useForm} from "react-hook-form"


const FormBbva = () =>{

    const {register, handleSubmit} = useForm()



    const onSubmitForm = (data) =>{
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>

            <input 
            type="text" 
            placeholder="name" 
            
            {...register('name')}/>
            <input 
            type="number" 
            placeholder="age" 
            
            {...register('age')}/>
            <button>SEND</button>
        </form>
    )
}

export default FormBbva;