import {  useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import IconBtn from "../Common/IconBtn"
import { buyCourse } from "../../services/operations/studentFeaturesApi"


export default function RenderTotalAmount() {

  const { totalPrice, cartItems } = useSelector((state) => state.cart)
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleBuyCourse = () => {
    const courses = cartItems.map((course) => course._id)
    buyCourse(token, courses, user, navigate, dispatch)
  }

  return (

    <div className="min-w-[280px] rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="mb-1 text-sm font-medium text-richblack-300">Total:</p>
      <p className="mb-6 text-3xl font-medium text-yellow-100">₹ {totalPrice} </p>
      <IconBtn text="Buy Now" onclick={handleBuyCourse}   customClasses="w-full justify-center"  />
      
    </div>
  
)}