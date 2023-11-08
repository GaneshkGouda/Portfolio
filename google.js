let form= document.querySelector("form")
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    document.querySelector("#sub").value ="sending..";
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbza6Uw9gLx_bQFi69Mb-Lm4BS1KfRcAkY02i-5MMW5UQIrdxr--iLjnf1WSmpLfQlOf/exec',{
        method:"POST",
        body:data
    })
    .then(res=>res.text())
    .then(data=>{
        document.querySelector('#msg').innerHTML="Thank you for getting in touch!, I will contact you soon";
        document.querySelector("#sub").value =" message sent";

    })
})