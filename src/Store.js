import {create} from "zustand"
const useStore =create((set)=>({
username:"",
handle:(e)=>set({username:e.target.value}),
islogin:false,
toggle:()=>set({islogin:true}),
password:"",
handled:(e)=>set({password:e.target.value})

}));
export default useStore;