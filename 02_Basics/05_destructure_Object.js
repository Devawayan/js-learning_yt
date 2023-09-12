//In this wee Destructure an object to get best out of it.

const learning={
    course:'Javascript',
    price:'790',
    courseInstructor:'Dev'
}

//const keyword then {the value needs to be extracted}=from where the value needs to be extracted.
const {courseInstructor: teacher} = learning

console.log(teacher);

//Json format and builder of Json format
{
    //In json we generally use {} without any name and boh the value and the description or name is treated in string format.
}