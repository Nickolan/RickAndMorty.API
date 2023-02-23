export function validate (userData) {
    const regexEmail = /\S+@\S+\.\S+/;
    const errors = {}
 
    if (!regexEmail.test(userData.username)) {
     errors.username = 'Complete correctamente';
     }
    else if (!userData.username) {
     errors.username = 'Por favor, complete este campo';
     }
    else if (userData.username.length > 35) {
     errors.username = 'Debe tener menos de 35 caracteres';
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
     errors.password = 'Debe tener entre 6 y 10 caracteres';
    }
    
 
    return errors;
 
 }