import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

type UserSubmitForm={
    "firstName":string;
};
const Forms=()=>{
    const ValidationSchema=Yup.object().shape({
        firstName:Yup.string().required("firstName can't be left blank").min(3,"minimum 3 characters are required").max(6,"maximum 6 characters are allowed")
    });
    const {register,
           reset,
           handleSubmit,
           formState:{errors}}=useForm<UserSubmitForm>({
        resolver:yupResolver(ValidationSchema)
    })
    const onSubmit=()=>{

    };
    return(
        <>
            <div className="form-register">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type={"text"}
                               {...register("firstName")}
                               className={`form-control ${errors.firstName?.message?'is-invalid':""}`}></input>
                        <span>{errors.firstName?.message}</span>
                    </div>


                    <div className="form-group">
                        <button type="submit" className="btn btn-success mx-5">Register</button>
                        <button type="reset" className="btn btn-danger mx-5"
                                onClick={()=>reset()}>Reset</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Forms;