let courses = [];

// Creating course API
const createCourse = (req, res) => {
  const newCourse = req.body;

  courses.push(newCourse);
  res
    .status(201)
    .json({ success: true, message: "The course has been added successfully" });
};

// Get all courses
const getAllCourses = (req, res) => {
  res.json({
    success: true,
    message: "All course are retrieved successfully",
  });
};

// Get course By its ID
const getCourseById = (req, res) => {
  const courseId = req.params.id;
  const course = courses.find((course) => course.id === courseId);

  if (!course) {
    return res
      .status(404)
      .json({ success: false, message: "Course not found" });
  }

  res.json({
    success: true,
    message: "All course are retrieved successfully",
  });
};
// Updating Course by ID
const updateCourse = (req, res) => {
  const courseId = req.params.id;
  const updatedCourse = req.body;

  const index = courses.findIndex((course) => course.id === courseId);

  // If there is no course left
  if (index === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Course not found" });
  }

  courses[index] = { ...courses[index], ...updatedCourse };

  res.json({
    success: true,
    message: "The course has been updated successfully",
  });
};
// Deleting the course
const deleteCourse = (req, res) => {
  const courseId = req.params.id;
  courses = courses.filter((course) => course.id !== courseId);

  res.json({
    success: true,
    message: "The course has been deleted successfully",
  });
};

export const adminControllers = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
