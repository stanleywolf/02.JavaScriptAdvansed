function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email
        }
        toString(){
            let className = this.constructor.name
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor(name, age, subject) {
            super(name, age);
            this.subject = subject
        }
        toString(){
            let parentToString = super.toString().slice(0, -1);
            return parentToString + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person{
        constructor(name, age, course) {
            super(name, age);
            this.course = course
        }
        toString(){
            let parentToString = super.toString().slice(0, -1);
            return parentToString + `, course: ${this.course})`;
        }
    }
    return {
        Person,
        Teacher,
        Student
    }
}

let result = toStringExtension();
let Person = result.Person;
let Teacher = result.Teacher;
let Student = result.Student;


let p = new Person('go','gp');
console.log(p.toString());
let t = new Teacher('go','gp','gp');
console.log(t.toString());
let s = new Student('go','gp','gp');
console.log(s.toString());