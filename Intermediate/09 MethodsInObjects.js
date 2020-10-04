var user = {
    Name: "Ashish",
    isGoogleLogin: true,
    role: "Admin",
    loginCount: 25,
    courseList: [],
    getCourseCount: function() {
        return `${this.Name} is enrolled in ${this.courseList.length} courses`;
    },
    buyCourse: function(courseName) {
        this.courseList.push(courseName);
    },
    info: function() {
        return `${this.Name} is ${this.role} has total login count ${this.loginCount}
        and enrolled in ${this.courseList.length} course.`;
    },
    enrollCourseName: function() {
        this.courseList.forEach(element => {
            console.log(`${user.Name} is enrolled in ${element}`);
        });
    }
};

//console.log(user);
user.buyCourse("JavaScript");
user.buyCourse("React");
console.log(user.getCourseCount());
console.log(user.info());
console.log(user.enrollCourseName());