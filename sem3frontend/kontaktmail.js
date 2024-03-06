    var templateParams = {name: 'James',  notes: 'Check this out!',};
  
  emailjs.send('service_ru81k8q', 'template_vd4uzrj', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );


  function sendmail() {
    var params = {
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value
    }
    
  const serviceID = "service_ru81k8q";

  const templateID = "template_vd4uzrj"

  emailjs.send(serviceID,templateID,params)
  .then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Din besked blev sendt");
    }
  )
  .catch((err) => console.log(err));
  
  }

