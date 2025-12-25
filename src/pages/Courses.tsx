import CoursesList from "../components/Course/CoursesList"
import CartIcon from "../components/ui/CartIcon";
import Title from "../components/ui/Title"
import { useState } from "react";

const Courses = () => {
  const [totalCourse, setTotalCourse] = useState(JSON.parse(localStorage.getItem('cart')!)?.length);
  const totalCourseHandler = (total: number) => {
    setTotalCourse(total)
  }
  return (
    <div className="px-10 sm:px-20 py-40 mx-auto">
      <Title>Courses</Title>
      <CartIcon totalCourse={totalCourse} />
      <CoursesList totalCourseHandler={totalCourseHandler} />
    </div>
  )
}

export default Courses