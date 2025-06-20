const submitBtn = document.getElementById("submitBtn") 


submitBtn.addEventListener("click", function () {
    let userAge = document.getElementById("age").value
    const userName = document.getElementById("name").value
    const message = document.getElementById("message")
    userAge = parseInt(userAge) 
    
    if (isNaN(userAge)) {
        message.textContent = "Ingrese un valor correcto porfavor"
    }    
    else if (userAge > 18) {
        message.textContent = ` 🌟 ${userName}"Tienes la edad perfecta para construir tus sueños. No te detengas, cada paso que das hoy es una inversión en el futuro que deseas. Cree en ti, porque lo mejor aún está por venir." 💪`
    }
    else {
        message.textContent = ` 🌱 ${userName}"Eres joven, y eso es tu superpoder. Cada día es una nueva oportunidad para descubrir lo que amas, aprender algo nuevo y dar pequeños pasos hacia un gran futuro. ¡Nunca dejes de soñar!" ✨`
    }
})