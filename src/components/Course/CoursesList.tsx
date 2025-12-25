import { useEffect, useState } from "react"
import ReactPaginate from 'react-paginate';
import CourseCard from "./CourseCard"
import type { ICourse } from "../../types/course"
import { toast } from "react-toastify";
const CoursesList = ({ totalCourseHandler }: { totalCourseHandler: (total: number) => void }) => {
    const [courses, setCourses] = useState<ICourse[] | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data.json')
                const data = await res.json()
                setCourses(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <PaginatedItems totalCourseHandler={totalCourseHandler} itemsPerPage={6} items={courses!} />
    )
}

export default CoursesList




function Items({ currentItems, totalCourseHandler }: { currentItems: ICourse[], totalCourseHandler: (total: number) => void }) {
    const cart: ICourse[] = JSON.parse(localStorage.getItem('cart')!) || []
    const user = JSON.parse(localStorage.getItem('user')!)
    const addToCartHandler = (id: number) => {
        if (!user?.isLoggedIn) {
            toast.error('You Should Login First!')
            return;
        }
        const course = currentItems.find(item => item.id === id)
        if (!course) return
        const courseItemInCart = cart.find((item) => item.id === course.id)
        if (courseItemInCart) {
            toast.error('The course is aleardy in your cart')
        } else {
            cart.push(course)
            localStorage.setItem('cart', JSON.stringify(cart))
            totalCourseHandler(cart.length)
            toast.success('The course Added successfully to your cart')
        }
    }
    return (
        <div className="flex flex-wrap gap-4 justify-center mt-20">
            {currentItems &&
                currentItems?.map((course) => <CourseCard key={course.id} id={course.id}
                    title={course.title} price={course.price} onClick={() => addToCartHandler(course.id)}
                    description={course.shortDescription} level={course.level} />)}
        </div>
    );
}

function PaginatedItems({
    itemsPerPage,
    items,
    totalCourseHandler,
}: {
    itemsPerPage: number;
    items: ICourse[];
    totalCourseHandler: (total: number) => void;
}) {
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items?.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const selectedPage = event.selected;
        setCurrentPage(selectedPage);
        setItemOffset(selectedPage * itemsPerPage);
    };

    return (
        <div className="flex flex-col">
            <Items
                currentItems={currentItems}
                totalCourseHandler={totalCourseHandler}
            />

            <ReactPaginate
                className="flex gap-3 mt-10 justify-center items-center font-bold cursor-pointer"

                onPageChange={handlePageClick}
                pageCount={pageCount}

                pageRangeDisplayed={3}
                marginPagesDisplayed={0}

                previousLabel={currentPage === 0 ? null : "«"}
                nextLabel={currentPage === pageCount - 1 ? null : "»"}

                pageClassName="px-3 py-1 rounded bg-gray-200 text-purple-700"
                activeClassName="!bg-linear-to-r from-blue-700 to-purple-700 text-white"

                previousClassName="px-3 py-1 rounded bg-gray-200 text-purple-700"
                nextClassName="px-3 py-1 rounded bg-gray-200 text-purple-700"

                disabledClassName="opacity-0 pointer-events-none"

                renderOnZeroPageCount={null}
            />
        </div>
    );
}