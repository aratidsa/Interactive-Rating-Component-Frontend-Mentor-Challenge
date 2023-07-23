/* Declarations */

const rating1 = document.querySelector('.rating1')
const rating2 = document.querySelector('.rating2')
const rating3 = document.querySelector('.rating3')
const rating4 = document.querySelector('.rating4')
const rating5 = document.querySelector('.rating5')

const submitBtn = document.querySelector('.submitBtn')
const result= document.getElementById('result')

const thankyouPage = document.querySelector('.thank-you-page')
const ratingSection = document.querySelector('.rating-section')

/* listen to click event on the button */

rating1.addEventListener('click',function()
{
  result.innerHTML=rating1.id     
})
rating2.addEventListener('click',function()
{
    result.innerHTML=rating2.id     
})
rating3.addEventListener('click',function()
{
    result.innerHTML=rating3.id      
})
rating4.addEventListener('click',function()
{
    result.innerHTML=rating4.id      
})
rating5.addEventListener('click',function()
{
    result.innerHTML=rating5.id     
})

submitBtn.addEventListener('click',function()
{   /* display the thank you page */
    thankyouPage.style.display = 'block'
    ratingSection.style.display = 'none'
})