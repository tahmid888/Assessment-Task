import express from "express";
import { adminControllers } from "./courseController.js";

const router = express.Router();
// Routes
router.post("/course", adminControllers.createCourse);
router.get("/courses", adminControllers.getAllCourses);
router.get("/course/:id", adminControllers.getCourseById);
router.patch("/course/id", adminControllers.updateCourse);
router.delete("/course/:id", adminControllers.deleteCourse);

// exporting the routes
export const adminRoutes = router;
