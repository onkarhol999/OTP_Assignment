// 1. generateOTP()
// 2. sendOTPOverEmail()
// 3. sendOTPOverMobile()
// 4. validateEmaiID()
// 5. validateMobile()

function generateOTP(){
    let otp ="";
        for(let i=0;i<6;i++){
            otp+= Math.floor(Math.random()*10);
        }
        return otp;
  }
  function sendOTPOverEmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: generateOTP(), 
    };
    const serviceID = "service_dofkyxl";
    const templateID = "template_r8ilsbk";
  
    emailjs.send(serviceID, templateID, params)
    .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = params.message; 
        console.log(res);
        alert("Your message sent successfully!!");
    })
    .catch(err => console.log(err));
}
