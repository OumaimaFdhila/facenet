"use client";
import {Modal,ModalContent,ModalHeader,ModalBody,Button, Select, SelectItem, Input} from "@nextui-org/react";
import {  SetStateAction, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { CiImageOn } from "react-icons/ci";
import { User } from "@/types/types";
  
export default function AddModal({isOpen ,onOpenChange,setUsers}:{isOpen : boolean,onOpenChange : ()=>void,setUsers :React.Dispatch<SetStateAction<User[]>>}) {

    const [newUser , setNewUser] = useState<{first_name: string; last_name: string; image: string | null , role : string , phone_number : string , email : string}>({
        first_name: "",
        last_name: "",
        image: null,
        role : "",
        phone_number : "",
        email : "",
    });
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(false);

    // const addUser = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
      
    //     if (!newUser.first_name || !newUser.last_name || !newUser.image || !newUser.role || !newUser.phone_number || !newUser.email) {
    //       toast.error("All fields are required!");
    //       setError(true);
    //       return;
    //     }
    //     if(newUser.phone_number.length!==8){
    //         toast.error("Invalid phone number!");
    //         setError(true)
    //         return
    //     }

    //     console.log("newUser",newUser)
    //     setError(false)
    //     setLoading(true);
    //     try {
    //       const response : any = await AddUser(newUser); 
    //       console.log(response);
    //       if (response?.status === "success") {
    //         toast.success("User added successfully!");
    //         console.log(response.data[0].id)
    //         setUsers(prev => [...prev , {...newUser,id : response.data[0].id , image : undefined }]);
    //         setNewUser({ first_name: "", last_name: "", image: null , phone_number : "", email : "" , role :"" }); 
    //         onOpenChange();
    //         setLoading(false);
    //       } else {
    //         toast.warning("Unexpected response from server.");
    //         setLoading(false);
    //         onOpenChange();
    //       }
    //     } catch (error: any) {
    //       console.error("Error adding user:", error);
    //       toast.error("Error adding user. Please try again.");
    //       setLoading(false);
    //       onOpenChange();
    //     }
    // };
    


    
  
    return (
        <>
            <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange} className="dark">
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 font-semibold text-vert_citron">Add user</ModalHeader>
                        <ModalBody>
                            <div className="pb-5">
                                <form className="mt-4 space-y-4">
                                    <Input
                                    variant="bordered"
                                    type="text"
                                    size="lg"
                                    errorMessage={error && !newUser.first_name ? "First name is required!" : ""}
                                    isInvalid={error && !newUser.first_name}
                                    placeholder="First name"
                                    value={newUser.first_name}
                                    onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
                                    className=""
                                    />
                                    <Input
                                    variant="bordered"
                                    type="text"
                                    errorMessage={error && !newUser.last_name ? "Last name is required!" : ""}
                                    isInvalid={error && !newUser.last_name}
                                    size="lg"
                                    placeholder="Last name"
                                    value={newUser.last_name}
                                    onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })}
                                    className=""
                                    />
                                    <Input
                                    variant="bordered"
                                    type="email"
                                    errorMessage={error && !newUser.email ? "Email is required!" : ""}
                                    isInvalid={error && !newUser.email}
                                    size="lg"
                                    placeholder="Email"
                                    value={newUser.email}
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, email: e.target.value })
                                    }
                                    className=""
                                    />
                                    <Input
                                    variant="bordered"
                                    size="lg"
                                    errorMessage={error && (!newUser.phone_number || newUser.phone_number.length !== 8) ? "Valid phone number is required!" : ""}
                                    isInvalid={error && !newUser.phone_number}
                                    placeholder="Phone number"
                                    value={newUser.phone_number}
                                    onChange={(e) => setNewUser({ ...newUser, phone_number: e.target.value })}
                                    className=""
                                    />
                                    <Select variant="bordered"  label="Select Role" isInvalid={error && !newUser.role} errorMessage={error && !newUser.role} value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
                                        <SelectItem key={"user"}>User</SelectItem>
                                        <SelectItem key={"admin"}>Admin</SelectItem>
                                    </Select>
                                    {
                                    newUser.image ? <div className="flex justify-center items-center p-4 border rounded-md">
                                        <Image src={newUser.image} alt="image" width={100} height={100}/>
                                    </div> : null
                                    }
                                    <label className="w-full p-4 flex justify-center items-center shadow-sm rounded-xl hover:border-vert_citron transition-all duration-200 cursor-pointer border-2 hover:text-vert_citron mb-4 text-white">
                                    <CiImageOn size={34} className="" />
                                    <span className="ml-2  ">Add Image</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e)=>{
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onload = () => {
                                            setNewUser({ ...newUser, image: reader.result as string });
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                        }}
                                    />
                                    </label>
                                    <Button
                                    isDisabled={loading}
                                    isLoading={loading}
                                    type="submit"
                                    className="w-full text-vert_citron  py-2 rounded-xl "
                                    >
                                    Add User
                                    </Button>
                                </form>
                            </div>
                        </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    );
}