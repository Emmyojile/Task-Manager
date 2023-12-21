"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/navigation";


const EditTask = () => {
  const router = useRouter();
    const editTask = async () => {
        const res = await fetch(`http://localhost:3000/api/Tasks/${id}`, {
          method: "PUT",
        });
        if (res.ok) {
          router.refresh();
        }
      };
  return (
    <FontAwesomeIcon
    icon={faPenToSquare}
    onClick={editTask}
    className='cursor-pointer'
    />
  )
}

export default EditTask