function validateForm(event) {
    'use strict';
    event.preventDefault();
    const form = document.getElementById('create-page');
    if (!form.checkValidity()) {
        //form is not valid
        event.stopPropagation();
        form.classList.add('was-validated');
        return false;
    }
    return submitForm();
}

function submitForm(){
    console.log("Get form content")
    const nameField = document.getElementById('name');
    const nameValue = nameField.value;
    console.log("nameValue: >>", nameValue);
    axios
    .post('/pages/', {name: nameValue})
    .then(response=>{
        if(response.status==200){
            alert(`Page ${nameValue} created succesfully`);
           window.location.href = '/';
        } else{
            alert('Something wrong on the server')
        }
    })
    .catch((err) => {
        console.log('err :>> ', err);
        alert('Error Ocurred');
    });
    clearForm();
    return true;
}

function clearForm() {
    /**
     * get name field and reset its value
     */
    const nameField = document.getElementById("name");
    nameField.value = "";
    /**
     * remove was validated by the form
     */

    const form = document.getElementById('create-page');
    form.classList.remove('was-validated');
}