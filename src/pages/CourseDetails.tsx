import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ICourse } from "../types/course";
import Title from "../components/ui/Title";

import { FaClock, FaCalendarAlt, FaUserTie, FaBook, FaGlobe, FaSignal, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import Info from "../components/ui/Info";
import Button from "../components/ui/Button";
import ReturnButton from "../components/ui/ReturnButton";
import NotFound from "./NotFound";
import { toast } from "react-toastify";
import type { ICart } from "../types/cart";

const CourseDetails = () => {
  const { id } = useParams();
  const cart = JSON.parse(localStorage.getItem('cart')!) || []
  const user = JSON.parse(localStorage.getItem('user')!)
  const [course, setCourse] = useState<ICourse | null>(null);
  const index = Number(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        const found = data.find((c: ICourse) => c.id === index);
        if (found) setCourse(found);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [index]);

  const addToCartHandler = () => {
    if (!user?.isLoggedIn) {
      toast.error('You Should Login First!')
      return;
    }
    if (!course) return
    const courseItemInCart = cart?.find((item: ICart) => item.id === course.id)
    if (courseItemInCart) {
      toast.error('The course is aleardy in your cart')
    } else {
      cart.push(course)
      localStorage.setItem('cart', JSON.stringify(cart))
      toast.success('The course Added successfully to your cart')
    }
  }
  if (!course) return <NotFound />;

  return (
    <div className="px-6 sm:px-20 py-40 max-w-7xl mx-auto">
      <Title>Course Details</Title>
      <div className="mt-16 bg-gray-100 rounded-xl p-8 md:p-12 shadow-lg">
        <h2 className="text-4xl font-bold bg-linear-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text">
          {course.title}
        </h2>
        <p className="text-gray-500 mt-2">{course.category}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-gray-700">
          <Info icon={<FaSignal />} label="Level" value={course.level} />
          <Info icon={<FaGlobe />} label="Language" value={course.language} />
          <Info icon={<FaClock />} label="Duration" value={course.duration} />
          <Info icon={<FaCalendarAlt />} label="Days" value={course.days.join(" - ")} />
          <Info icon={<FaClock />} label="Time" value={course.time} />
          <Info icon={<FaUserTie />} label="Instructor" value={course.instructor} />
          <Info icon={<FaBook />} label="Lessons" value={course.lessonsCount} />
          <div className="flex items-center gap-3">
            <FaDollarSign className="text-purple-700" />
            <span className="font-semibold">Price:</span>
            <span className="bg-linear-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text font-bold text-lg">
              ${course.price}
            </span>
          </div>
        </div>
        <div className="mt-10 space-y-4">
          <p className="text-gray-600">{course.shortDescription}</p>
          <p className="text-gray-800 leading-relaxed">
            {course.fullDescription}
          </p>
        </div>
        <div>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <ReturnButton />
            <Button
              onClick={addToCartHandler}
              style={{ padding: "4px 10px", borderRadius: "8px", gap: "8px", display: "flex", alignItems: 'center', justifyContent: "center" }}>
              <FaShoppingCart />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CourseDetails;
