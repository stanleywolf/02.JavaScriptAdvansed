function personAndTeacher() {

    class Person {
        constructor(name, email) {
            this.name = name
            this.email = email
        }
    }

    class Teacher extends Person {
        constructor(name, age, subject) {
            super(name, age)
            this.subject = subject
        }
    }
    return{Person,Teacher}
}