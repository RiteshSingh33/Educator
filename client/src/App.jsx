import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/student/Home";
import CourseList from "./pages/student/CourseList.jsx";
import CourseDetails from "./pages/student/CourseDetails";
import MyEnrollments from "./pages/student/MyEnrollments";
import Player from "./pages/student/Player";
import Loading from "./components/student/Loading";
import Dashboard from "./pages/educator/Dashboard";
import Educator from "./pages/educator/Educator";
import AddCourse from "./pages/educator/AddCourse.jsx";
import MyCourses from "./pages/educator/MyCourses.jsx";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";
import Navbar from "./components/student/Navbar.jsx";
import "quill/dist/quill.snow.css"
import { ToastContainer } from 'react-toastify';

const App = () => {
	const isEducatorRoute = useMatch("/educator/*");

	return (
		<div>
			<ToastContainer/>
			{!isEducatorRoute && <Navbar />}
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/course-list"
					element={<CourseList />}
				/>
				<Route
					path="/course-list/:input?"
					element={<CourseList />}
				/>
				<Route
					path="/course"
					element={<CourseDetails />}
				/>
				<Route
					path="/course/:id"
					element={<CourseDetails />}
				/>
				<Route
					path="/my-enrollments"
					element={<MyEnrollments />}
				/>
				<Route
					path="/player/:courseId"
					element={<Player />}
				/>
				<Route
					path="/loading/:path"
					element={<Loading />}
				/>

				<Route
					path="/educator"
					element={<Educator />}>
					<Route
						path="/educator"
						element={<Dashboard />}
					/>
					<Route
						path="add-course"
						element={<AddCourse />}
					/>
					<Route
						path="my-courses"
						element={<MyCourses />}
					/>
					<Route
						path="student-enroll"
						element={<StudentsEnrolled />}
					/>
				</Route>
				<Route
					path="*"
					element={<div>404 Not Found</div>}
				/>
			</Routes>
		</div>
	);
};

export default App;
