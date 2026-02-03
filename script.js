// let obj={
//     name:"Devendra",
//     address:"Gurgaon",
//     age:23
// }
// let obj2={
//     name:"Devendra",
//     address:"Gurgaon",
//     age:23
// }
// obj.age=50
// console.log(obj)

// const para=document.querySelector(".para")
// para.innerText="this is updated one"
// console.info(document)

// console.log("Helllo Studentss!")

// let obj={
//     type:"Wooden",
//     color:"Brown",
//     length:"7ft"
// }

// let obj2={
//     type:"iron",
//     color:"Brown",
//     length:"7ft"
// }

// obj.type="Plastic"
// console.log(obj)

// console.log(document)

// const para=document.querySelector(".para")
// para.innerText="This is a new paragraph"
// para.style.color="green"
// console.log(para)

// console.log(document)


// const para=document.getElementById("para")
// para.innerText="This is a new paragraph"
// para.style.color="green"
// console.log(para)

// const para2=document.getElementsByClassName("para")  //return HTMLCollection
// para2[0].innerText="This is a new paragraph"
// para2[1].style.color="green"
// console.log(para2)

// const para=document.querySelectorAll(".para")  //return NodeList
// para[0].textContent="This is a new paragraph"
// para[1].style.color="green"
// console.log(para)

// let arr=[23,54,46,232,564,23]

// // const newArr=arr.map((ele)=>ele)  //it returns a new array
// arr.forEach((ele)=>console.log(ele))  //it does not returns a new array


// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a Heading</h1>"
// console.log(container)

// function message(event)
// {
//     console.log(event.key)
//     // alert("You have clicked the button")
// }

// const btn=document.querySelector("button")
// btn.classList.add("btn")
// btn.classList.remove("btn")
// btn.addEventListener('click',message)
// btn.addEventListener('keydown',message)
// btn.addEventListener('keyup',message)
// btn.removeEventListener('click',message)

// const form=document.querySelector("form")
// form.addEventListener('submit',function(event){
//     event.preventDefault()
//     console.log("Form Submitted")
// })

// const container=document.querySelector('.container')
// const outer=document.querySelector('.outer')
// const button=document.querySelector('button')


// container.addEventListener('click',()=>{console.log("Div")},true)
// outer.addEventListener('click',()=>{console.log("Outer Div")},true)
// button.addEventListener('click',()=>{console.log("Button")},true)


// console.log("New Code")
// debugger
// console.log(b)
// // console.log(a)

// let a=23534
// var b=5674

// console.log(a)
// console.log(b)
// function print(){
//     var c=345
//     console.log(c)
//     console.log("Inside fn")
// }

// print()


// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     console.trace()
// }
// first()

// function infinite(){
//     infinite()
// }
// infinite()

// console.log(a)
// console.log(b)
// // console.log(c)

// var a=345
// let b=5674

// console.log(a)
// console.log(b)

// let total=40

// function calculate(){
//     console.log(total)
//     let total=100
// }
// calculate()



// console.log("First Line")
// setTimeout(()=>{console.log("after 2 sec")},2000)
// console.log("Second Line")


// setTimeout(()=>{
//     alert("Line after 2 Sec")
// },2*1000)


// const timerID=setInterval(()=>{console.log("setInterval")},1000)

// const timeoutID=setTimeout(()=>{clearInterval(timerID)},10000)
// clearTimeout(timeoutID)


// let num=1;

// const id=setInterval(()=>{
//     if(num===10)clearInterval(id)
//     console.log(num)
//     num+=1
// },1000)


// console.log("before timeout")
// setTimeout(() => {
//     console.log("Settimeout")
// }, 0);
// console.log("After timeout")

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")
// btn.addEventListener('click',()=>{
//     if(name.value===""){
//         alert("Enter the name!!")
//         return;
//     }
//     const li=document.createElement('li')
//     const dlt=document.createElement('button')
//     dlt.innerText="Delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     li.appendChild(dlt)
//     list.appendChild(li)
    
//     name.value=""
// })
