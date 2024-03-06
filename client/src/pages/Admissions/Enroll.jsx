import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParentsQueryMutation } from "../../../Redux/UserAuth";
import { ToastContainer, toast } from "react-toastify";


const Enroll = () => {

  const [form,setForm]=useState({
    parentname:"",
    message:"",
    email:"",
    phone:"",

  })

  const [parentsquery,{error,isError,isLoading}]=useParentsQueryMutation()
 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await parentsquery(form).unwrap();
      toast.success(data.message);
       
          setForm({name:"",
          email:"",
          message:""})
       
    } catch (error) {
      toast.error(error.message);
    }
  };

  console.log(error)


 
useEffect(()=>{
if(isError){
  toast.error(error.data.err)
}
},[error,isError])



  return (
   <>
    <div className="p-4 lg:grid grid-cols-2 tracking-wide bg-secondary pt-12">
      <div className=" text-white space-y-6 p-4 ">
        <motion.h5
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl lg:text-4xl">
          Communicate With Us
        </motion.h5>
        <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
         className="capitalize text-xl md:text-2xl">How to enroll</motion.h2>
        <motion.p
         initial={{ opacity: 0, y: -100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 2 }}
         viewport={{ once: true }}>
          Welcome to the enrollment gateway of Mysore International School—a
          place where educational journeys begin. We are thrilled to embark on
          this exciting adventure with you. Please complete the enrollment form
          below to initiate the enrollment process for your child.
        </motion.p>
        <motion.p
         initial={{ opacity: 0, y: -100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 2 }}
         viewport={{ once: true }}>
          If you have any questions or need assistance during the enrollment
          process, our friendly admissions team is here to help. Feel free to
          reach out to us.
        </motion.p>
      </div>
      <div className="text-textSecondary bg-white p-4 space-y-6 rounded-md">
        <h2 className="uppercase text-center font-semibold p-4 text-2xl">
          enrollment form
        </h2>
        <form
          action=""
          className="grid grid-cols-2 border lg:border-secondary border-none p-4 rounded-md tracking-wide"
          onSubmit={handleSubmit}
        >
          <div className="col-span-full lg:col-span-1 flex flex-col lg:items-center justify-center gap-6 lg:p-3">
            <input
            onChange={handleChange}
            name="parentname"
              type="text"
              placeholder="Parent's Name"
              className="p-2 outline-none rounded-sm w-full border border-slate-400 focus:outline-textSecondary focus:border-none"
            />
            <input
            onChange={handleChange}
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="p-2 outline-none rounded-sm w-full border border-slate-400 focus:outline-textSecondary focus:border-none"
            />
            <input
            onChange={handleChange}
              type="email"
              placeholder="Email"
              name="email"
              className="p-2 outline-none rounded-sm w-full border border-slate-400 focus:outline-textSecondary focus:border-none"
            />
          </div>
          <div className="col-span-full lg:col-span-1  mt-10 lg:m-0 lg:p-3">
            <textarea
            onChange={handleChange}
              className="w-full p-2 rounded-sm outline-none border border-slate-400 focus:outline-textSecondary focus:border-none"
              placeholder="Message"

              name="message"
              id=""
              rows="6"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="col-span-full lg:ml-2 mt-2">
            <button className="bg-ctcPrimary text-ctcSecondary w-full py-2 rounded-sm font-semibold tracking-wider hover:bg-ctcPrimary hover:text-ctcSecondary hover:border hover:scale-95 transition-all duration-200 ">
              {isLoading?"Submitting":"Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
    <ToastContainer/>
   </>
  );
};

export default Enroll;
