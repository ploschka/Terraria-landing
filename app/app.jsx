const ReactDOM = require("react-dom/client");
const React = require("react");
const ChangingImage = require("Components/ChangingImage.jsx");
const CoolForm = require("Components/CoolForm.jsx");
import "Styles/main.scss";

const imglist = [
    require("Images/1.png"),
    require("Images/2.png"),
    require("Images/3.png"),
    require("Images/4.png"),
    require("Images/5.png"),
    require("Images/6.png"),
    require("Images/7.png"),
].map(e => e.slice(0));
const terrariaImg = require("Images/terraria.png").slice(0);

ReactDOM.createRoot(document.getElementById("app"))
    .render(
        <>
            <h1>Играйте в <img src={terrariaImg} id="terraria" /></h1>
            <div className="desc">
                <div className="text-container">
                    <p>Копайте, сражайтесь, исследуйте, стройте! Нет ничего невозможного в этой насыщенной событиями приключенческой игре. Весь мир — ваше полотно, а вся земля — ваши краски!</p>
                    <p>Хватайте инструменты и вперед! Создавайте оружие, чтобы сражаться с различными врагами в разных биомах. Копайте глубже, чтобы найти драгоценности, деньги и кучу других полезных вещей. Собирайте ресурсы, чтобы создать всё, что вам нужно, и сделать мир таким, каким вы хотите его видеть. Постройте свой дом, крепость или даже замок! Люди переедут к вам жить и может быть даже продадут вам вещи, которые помогут вам в ваших путешествиях.</p>
                    <p>Кроме этого вас ожидает еще множество разных задач и испытаний. Готовы начать?</p>
                    <p>Основные особенности:</p>
                    <ul>
                        <li>Свободный игровой процесс</li>
                        <li>Случайно создаваемый мир</li>
                        <li>Бесплатные обновления</li>
                    </ul>
                </div>
                <div className="img-container">
                    <ChangingImage imglist={imglist} delay={5000} duration={1000} />
                </div>
            </div>
            <iframe id="widget" src="https://store.steampowered.com/widget/105600/8183/" frameborder="0" width="800" height="190"></iframe>
            <div id="cool-form">
                Поделитесь этой страницей с друзьями
                <CoolForm placeholder="Введите email..." />
            </div>
        </>
    );
