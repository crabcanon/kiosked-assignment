import template from './popup.tpl.html!text';
import PopupCtrl from './popup.controller';

function popupWindow() {
  return {
  	restrict: "E",
  	scope: {
      show: '='
  	},
    replace: true,
    transclude: true,
  	template: template,
  	bindToController: true,
    controllerAs: 'vm',
    controller: PopupCtrl,
  	link: function(scope, element, attrs) {
      let ctrl = scope.vm;
      ctrl.hideModal = () => { ctrl.show = !ctrl.show; }
  	}
  };
}

popupWindow.$inject = [];

export default popupWindow;