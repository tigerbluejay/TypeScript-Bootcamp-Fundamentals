var createCourse = function (title, subtitle, lessonsCount, callback) {
    console.log("Creating course with Title: ".concat(title, ", Subtitle: ").concat(subtitle, ", Lessons Count: ").concat(lessonsCount));
    var course = { title: title, subtitle: subtitle, lessonsCount: lessonsCount };
    callback(course); // the callback which is of type OnCourseCreated, should accept at a minimum 1 argument of
    // type course and return void.
    return course;
};
