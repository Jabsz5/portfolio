export function getProjectDescription(language: string): string {
  switch (language) {
    case "es":
      return "Este fue mi proyecto para la competencia de primavera de 2025. Creamos un arma montable que puede apuntar automáticamente y que también es capaz de utilizar un control remoto de videojuegos. Usamos Arduino para controlar los servomotores y enviar las entradas del control al Raspberry Pi. Creamos un modelo de inteligencia artificial que se entrenó con los rostros de nuestro grupo para la funcionalidad de autoapuntado.";
    case "ru":
      return "Я попытался использовать чуть-чуть переводчик потому-что учился русский язык в университете центральной флориде 3 семестры, так извините для любых английских вариант письменности ). Это мой проект для 2025-e весной. Мы построили оружие с использованием искусственного интеллекта и зависимостью от контроллера. Использовали ардуино, расбэри паи, и OpenCV. Это все что я пишу на русском. Трудность есть когда не же умеешь знать половину характеров на русском клавиатуре. Если ты понимаешь, напишите-мне! Всегда найду разговор!.";
    case "en": 
      return "This was my project entry for KnightHacks 2025 Spring Contest. It is an automated turret that can track and follow people using computer vision. It is also able to be manually controlled with a game controller. The project uses a Raspberry Pi as the main computer, along with a camera module and servos for movement. The computer vision is done using OpenCV and a pre-trained model for person detection. The Arduino is used for reading inputs from a game controller."
    default:
      return "Error if we somehow get here";
  }
}
