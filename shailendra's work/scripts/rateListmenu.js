// import { json } from "body-parser"


let data=JSON.parse(localStorage.getItem("full_page"))
let value=data.price
data=data.room
// let main=document.querySelector("#main")

data.map(function(url){

    let main_div=document.createElement("div")

    let top_div=document.createElement("div")
    let bottom_div=document.createElement("div")

    let bottom_left_div=document.createElement("div")
    let bottom_right_div=document.createElement("div")

    let bottom_right_top=document.createElement("div")
    let bottom_right_bottom=document.createElement("div")
    let flexible1=document.createElement("div")
    let flexible2=document.createElement("div")
    let title=document.createElement("h1")
    let room_detail=document.createElement("p")
    let image=document.createElement("img")
    let rate1=document.createElement("h2")
    let rate2=document.createElement("h2")
    let rate_detail1=document.createElement("p")
    let rate_detail2=document.createElement("p")
    
    let price1=document.createElement("h1")
    let price2=document.createElement("h1")
    let select1=document.createElement("h3")
    let select2=document.createElement("h3")



    let max=Number(value)
    let min=(Number(value)-200)

   function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

  let ans= getRandomArbitrary(min,max)
ans=Math.floor(ans)

    image.src=url
    rate1.textContent=`Member Flexible Rate`
    rate2.textContent=`Flexible Rate`
    select1.textContent=`SELECT`
    select2.textContent=`SELECT`
    price1.textContent=`₹ ${ans-301}/INR `
    price2.textContent=`₹ ${ans}/INR`
    rate_detail1.textContent=`Rate Details`
    rate_detail2.textContent=`Rate Details`
    title.textContent=`City View, Guest Room`
    room_detail.textContent=`Room Details`
    flexible1.append(rate1,rate_detail1)
    flexible2.append(rate2,rate_detail2)
    bottom_right_top.append(flexible1,price1,select1)
    bottom_right_bottom.append(flexible2,price2,select2)
    bottom_right_div.append(bottom_right_top,bottom_right_bottom)
    bottom_left_div.append(image)

    bottom_div.append(bottom_left_div,bottom_right_div)
    top_div.append(title,room_detail)
    main_div.append(top_div,bottom_div)

main.append(main_div)





select1.addEventListener("click",function(){

  

    let checkout={

        Check_in_date:`${"Wednesday"} ${"january"} ${19} ${2022}`,
        Check_out_date:`${"Friday"} ${"january"} ${21} ${2022}`,
        Room_name:`City View, Guest Room`,
        Adult:`2`,
        Guest_per_room:`2`,
       room_image:url,
       Price:(ans-301)

    }

localStorage.setItem("checkout",JSON.stringify(checkout))

})
select2.addEventListener("click",function(){

  



    let checkout={

        Check_in_date:`${"Wednesday"} ${"january"} ${19} ${2022}`,
        Check_out_date:`${"Friday"} ${"january"} ${21} ${2022}`,
        Room_name:`City View, Guest Room`,
        Adult:`1`,
        Guest_per_room:`2`,
       room_image:url,
       Price:(ans)

    }

localStorage.setItem("checkout",JSON.stringify(checkout))

})








})