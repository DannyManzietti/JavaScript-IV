class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject, didWell) {
        if (didWell) {
            return `${student.name} did a great job on the ${subject} assignment! ` + this.adjustGrade(student, true);
        } else {
            return `${student.name} needs some more practice with ${subject}. ` + this.adjustGrade(student, false);
        }
        
    }
    adjustGrade(student, increaseGrade) {
        if (increaseGrade) {
            student.grade += Math.round(Math.random() * 5)+ 1;
            if (student.grade >= 100) {
                return `${student.name}'s grade has been increased to ${student.grade}` + student.graduate();
            } else {
                return `${student.name}'s grade has been increased to ${student.grade}`;
            }
        } else {
            student.grade -= Math.round(Math.random() * 5) + 1;
            return `${student.name}'s grade has been decreased to ${student.grade}`;
        }
        
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects() {
        return this.favSubjects.join(", ");
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        if (this.grade >= 70) {
            return `${this.name} has graduated!`;
        } else {
            return `Sorry, ${this.name} still has work to do before they can graduate.`;
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const danny = new Instructor({
    name: 'Danny',
    location: 'Syracuse',
    favLanguage: 'Java',
    specialty: 'HTML',
    catchPhrase: `Hey there`
  });

  
  const king = new Student({
    name: 'King',
    location: `Marcellus`,
    age: 9,
    previousbackground: 'a dog',
    className: 'woof 101',
    favSubjects: ['barking', 'rolling in mud', 'chasing rabbits'],
    grade: 80
  });
  
  
  
  
  
  const ernie = new ProjectManager({
    name: 'Ernie',
    location: 'Livingroom',
    age: 5,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    gradClassName: 'Scratching-Post 101',
    favInstructor: 'Danny'
  });




  console.log(danny.speak());
  console.log(ernie.speak());


  console.log(ernie.demo('BootStrap'));
  console.log(king.listsSubjects());
  console.log(king.PRAssignment('BootStrap'));
  console.log(king.sprintChallenge('JavaScript'));
  console.log(king.graduate());

  console.log(ernie.standUp('CS_12'));
  console.log(ernie.debugsCode(king, 'JavaScript'));