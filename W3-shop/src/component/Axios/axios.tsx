import axios from "axios";
import { SubmitHandler } from "react-hook-form";
import { Email } from "../../type/Interface";



export const getAllProduct = async () =>{
      try{
          const res= await axios.get("http://localhost:3000/products",{});
          return res.data;
      }catch(error){
        console.log(error)
      };
}

export const deleteProduct = async (productId: number|string) => {
  try {
    const res= await axios.delete(`http://localhost:3000/products/${productId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};






//hiển thị User
export const getAllSubmit = async ()=>{
  try{
    const res=await axios.get("http://localhost:3000/users",{})
    return res.data;
  }catch(error){
     alert(error); console.log(error)
  }
};
//Đăng ký
export const getRegister:SubmitHandler<Email> = async (data)=>{
  try{
    await axios.post("http://localhost:3000/users",data)
  }catch(error){
     alert(error); console.log(error)
  }
};
//Đăng nhập
export const getLogin:SubmitHandler<Email> = async (data)=>{
  try{
    const res = await axios.post("http://localhost:3000/users", data);
    localStorage.setItem('token',JSON.stringify(res.data.accessToken))
  }catch(error){
     alert(error); console.log(error)
  }
};
//delete
export const deleteUser = async (usersId: number|string) => {
  try {
    const res= await axios.delete(`http://localhost:3000/users/${usersId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
