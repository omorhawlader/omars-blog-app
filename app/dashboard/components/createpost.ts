"use server"
import {
    getKindeServerSession,
  } from "@kinde-oss/kinde-auth-nextjs/server";
export default async function createpost(){
    const { getUser } =  getKindeServerSession();
    const user = await getUser();
    if(!user) return;
    
    const res =   await fetch(`${process.env.DATABASE_CONNECTION_URL!}/blogs`,{
        method:"POST",
        headers:{
            "Content-type": "application/json",
        },
        body:JSON.stringify({author:user?.given_name})
    })
    if(res.ok){
        console.log("new posted crated")
    }else{
        return false
    }
}