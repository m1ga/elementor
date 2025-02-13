import elementorModules from '../modules/modules';
import Document from './document';
import StretchElement from './tools/stretch-element';
import BaseHandler from './handlers/base';
import SwiperBase from './handlers/base-swiper';
import NestedTabs from 'elementor/modules/nested-tabs/assets/js/frontend/handlers/nested-tabs';

elementorModules.frontend = {
	Document,
	tools: {
		StretchElement,
	},
	handlers: {
		Base: BaseHandler,
		SwiperBase,
		NestedTabs,
	},
};
