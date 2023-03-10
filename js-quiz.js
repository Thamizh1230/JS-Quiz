
//1)Filter the students from the class 6th 'A' section from the below array of objects.
 myArr = [
    {
     studenName: "jack",
     studenClass: 6,
     studenSection: "a"
    },
    {
     studenName: "tom",
     studenClass: 6,
     studenSection: "a"
    },
{
     studenName: "ricky",
     studenClass: 6,
     studenSection: "b"
    },{
     studenName: "john",
     studenClass: 6,
     studenSection: "b"
    },{
     studenName: "jerry",
     studenClass: 6,
     studenSection: "a"
    },{
     studenName: "henry",
     studenClass: 6,
     studenSection: "b"
    },{
     studenName: "stephen",
     studenClass: 6,
     studenSection: "a"
    }
]

let createarr = [];
create.forEach(function(items){
   if(items.studenSection == "a"){
    createarr.push(a.studenName);
   }
})
console.log(createarr);

// let myarraystu = stu => stu.filter((obj)=>obj.studenSection == 'a').map((stu)=> stu.studenName)
// console.log(myarraystu(myArr))


// 2)sort an array of JavaScript objects.

let library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   },
   {
       title: 'Adventures of Tom Sawyer',
       author: 'Mark Twain',
       libraryID: 1345
   },
   {
       title: 'Adventures of Sherlock Holmes',
       author: 'Sir Arthur Conan Doyle',
       libraryID: 2245
   }

]


library.sort((item1, item2)=>item1.libraryID-item2.libraryID);
library.forEach((data)=>{
    console.log(`${data.title} ${data.author} ${data.libraryID}`);
});




//4)Write a code to replace the value 6 in the following object with 606

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606
  
console.log(obj);