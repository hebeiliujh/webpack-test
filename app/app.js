import './css/common.css'

import Layer from './components/layer/layer.js'

const App = function () {
	const appDom = document.getElementById('app');
	const layerDom = new Layer();
	appDom.innerHTML = layerDom.tpl({
		name: 'john',
		arr: ['apple', 'xiaomi', 'oppo']
	});
}

new App();