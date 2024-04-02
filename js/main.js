const btnForm = document.querySelector("#btnContact");
const btnCotizar = document.querySelector("#btnCotizar");

if(btnForm){
    btnForm.addEventListener("click",sendForm);
}
btnCotizar.addEventListener("click",sendCotizacion);


function sendForm(){
    const name = document.querySelector("#txtName").value;
    const email = document.querySelector("#txtEmail").value;
    const phone = document.querySelector("#txtPhone").value;
    const message = document.querySelector("#txtMessage").value;
    const valid = testemail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(name != "" && email != "" && phone != "" && message != ""){
        if(phone.length == 10 && !isNaN(phone)){
            if(valid.test(email)){
                $.ajax({
                    url:"Controllers/sendInfo.php",
					method: "POST",
					data: {name: name, email: email, phone: phone, message: message},
					success: function(msg){
                        if(msg == "1"){
                            document.querySelector("#txtName").value ="";
                            document.querySelector("#txtEmail").value= "";
                            document.querySelector("#txtPhone").value = "";
                            document.querySelector("#txtMessage").value = "";
                            $("#modalThanks").modal("open");
                            const inputs = document.querySelectorAll(".myInput");
                            const labels = document.querySelectorAll("label");
                            inputs.forEach((item) =>{
                                item.classList.remove("valid");
                            });
                            labels.forEach((item) =>{
                                item.classList.remove("active");
                            });
                        } else{
                            console.log(msg);
                            Materialize.toast("Por el momento nuestro servicio no esta disponible. Intente contactarnos por nuestro Whatsaap o email", 3000,"rounded");
                        }
                    }	
                });
            } else{
                const txtEmail = document.querySelector("#txtEmail");
                txtEmail.classList.add("wrong");
                txtEmail.focus();
                Materialize.toast("Su email tiene formato invalido",3000,"rounded");
            }
        }else{
            const txtPhone = document.querySelector("#txtTelefono");
            txtPhone.classList.add("wrong");
            txtPhone.focus();
            Materialize.toast("Teléfono invalidado",3000,"rounded");
        }
    } else{
        Materialize.toast("Ingrese todos los datos para continuar",3000,"rounded");
    }
}

function sendCotizacion(){
    const name = document.querySelector("#txtNameCot").value;
    const email = document.querySelector("#txtEmailCot").value;
    const phone = document.querySelector("#txtPhoneCot").value;
    const message = document.querySelector("#txtMesgeCot").value;
    const service = document.querySelector("#cbxServico").value;
    const valid = testemail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(name != "" && email != "" && phone != "" && message != "" && service != ""){
        if(phone.length == 10 && !isNaN(phone)){
            if(valid.test(email)){
                $.ajax({
                    url:"Controllers/sendCotizacion.php",
					method: "POST",
					data: {name: name, email: email, phone: phone,service: service, message: message},
					success: function(msg){
                        console.log(msg);
                        if(msg == "1"){
                            document.querySelector("#txtNameCot").value ="";
                            document.querySelector("#txtEmailCot").value= "";
                            document.querySelector("#txtPhoneCot").value = "";
                            document.querySelector("#txtMesgeCot").value = "";
                            document.querySelector("#cbxServico").value = 0;
                            $('#cotizacionside').sideNav('hide');
                            $("#modalThanks").modal("open");
                            const inputs = document.querySelectorAll(".myInput");
                            const labels = document.querySelectorAll("label");
                            inputs.forEach((item) =>{
                                item.classList.remove("valid");
                            });
                            labels.forEach((item) =>{
                                item.classList.remove("active");
                            });
                        } else{
                            console.log(msg);
                            Materialize.toast("Por el momento nuestro servicio no esta disponible. Intente contactarnos por nuestro Whatsaap o email", 3000,"rounded");
                        }
                    }
						
                });
            } else{
                const txtEmail = document.querySelector("#txtEmailCot");
                txtEmail.classList.add("wrong");
                txtEmail.focus();
                Materialize.toast("Su email tiene formato invalido",3000,"rounded");
            }
        } else{
            const txtPhone = document.querySelector("#txtPhoneCot");
            txtPhone.classList.add("wrong");
            txtPhone.focus();
            Materialize.toast("Teléfono invalidado",3000,"rounded");
        }
    }
    else{
        Materialize.toast("Ingrese todos los datos para continuar",3000,"rounded");
    }
}