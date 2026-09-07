export type Language = "es" | "ru" | "en";

type Translations = Record<Language, string>;

export function getProjectDescription(language: Language, descriptions: Translations): string {
  return descriptions[language];
}

export const artemisDescriptions: Translations = {
  es: "Este fue mi proyecto para la competencia de primavera de 2025. Creamos un arma montable que puede apuntar automáticamente y que también es capaz de utilizar un control remoto de videojuegos. Usamos Arduino para controlar los servomotores y enviar las entradas del control al Raspberry Pi. Creamos un modelo de inteligencia artificial que se entrenó con los rostros de nuestro grupo para la funcionalidad de autoapuntado.",

  ru: "Я попытался использовать чуть-чуть переводчик потому-что учился русский язык в университете центральной флориде 3 семестры, так извините для любых английских вариант письменности ). Это мой проект для 2025-e весной. Мы построили оружие с использованием искусственного интеллекта и зависимостью от контроллера. Использовали ардуино, расбэри паи, и OpenCV. Это все что я пишу на русском. Трудность есть когда не же умеешь знать половину характеров на русском клавиатуре. Если ты понимаешь, напишите-мне! Всегда найду разговор!.",

  en: "This was my project entry for KnightHacks 2025 Spring Contest. It is an automated turret that can track and follow people using computer vision. It is also able to be manually controlled with a game controller. The project uses a Raspberry Pi as the main computer, along with a camera module and servos for movement. The computer vision is done using OpenCV and a pre-trained model for person detection. The Arduino is used for reading inputs from a game controller."
};

export const coffeeCupDescriptions: Translations = {
  en: "This is the senior design project I am currently working on: a smart coffee cup. The goal is to provide a safer, more reliable, and more convenient way to keep coffee at a desired temperature while minimizing the risk of overheating or leaving an empty cup on the heating plate. Through the integration of multiple sensors, an ESP32 microcontroller, and a mobile application, the smart coffee warmer base provides a practical solution for both home and office environments. It also demonstrates the application of embedded systems, PCB design, and real-time software in a consumer product.",

  es: "Este es el proyecto de diseño final en el que estoy trabajando actualmente: una taza de café inteligente. El objetivo es proporcionar una manera más segura, confiable y conveniente de mantener el café a la temperatura deseada, minimizando al mismo tiempo el riesgo de sobrecalentamiento o de dejar una taza vacía sobre la base calefactora. Mediante la integración de varios sensores, un microcontrolador ESP32 y una aplicación móvil, la base calentadora inteligente ofrece una solución práctica tanto para el hogar como para la oficina. También demuestra la aplicación de sistemas embebidos, diseño de placas de circuito impreso y software en tiempo real en un producto de consumo.",

  ru: "Это мой выпускной инженерный проект, над которым я сейчас работаю: умная кофейная чашка. Цель проекта — создать более безопасный, надёжный и удобный способ поддерживать желаемую температуру кофе, одновременно снижая риск перегрева или работы нагревательной подставки с пустой чашкой. Благодаря интеграции нескольких датчиков, микроконтроллера ESP32 и мобильного приложения умная подставка для подогрева кофе предлагает практичное решение как для дома, так и для офиса. Проект также демонстрирует применение в потребительском устройстве встраиваемых систем, проектирования печатных плат и программного обеспечения реального времени."
};