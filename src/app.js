import './css/common.css';
import HeaderModule from './components/pages/header.js';
import BodyerModule from './components/pages/bodyer.js';
import FooterModule from './components/pages/footer.js';
const App = function(){
	let headerModuleDom = document.getElementById('headerModule');
	let headerModule = new HeaderModule();
	headerModuleDom.innerHTML = headerModule.headerTemplate;

	let bodyerModuleDom = document.getElementById('bodyerModule');
	let bodyerModule = new BodyerModule();
	bodyerModuleDom.innerHTML = bodyerModule.template;

	let footerModuleDom = document.getElementById('footerModule');
	let footerModule = new FooterModule();
	footerModuleDom.innerHTML = footerModule.template;
}
new App();