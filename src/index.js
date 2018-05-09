// 载入 nodejs ku
import _ from 'lodash';

// 载入 css
import './assets/css/container.css';

// 载入 图片
import logo from './assets/imgs/logo.png';

// 载入 xml
import xmlData from './assets/datas/data.xml';

function component() {
    let el = document.createElement('div');

    el.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    el.classList.add('container');

    let elLogo = new Image();
    elLogo.src = logo;

    el.appendChild(elLogo);

    console.log(xmlData);

    return el;
}

document.body.appendChild(component());