import EventBus from "../../../util/EventBus";
import controlVisibilityModel from "../ControlVisibleModel";


/**
 * Handles toggling visibility of map controls.
 */
export default class ControlToggleAction {

    constructor() {
        EventBus.addListener("toggle-range-control-event", this.rangeToggle, this);
        EventBus.addListener("toggle-render-control-event", this.renderToggle, this);
        EventBus.addListener("hide-all-control-event", this.hideAll, this);
    }

    rangeToggle() {
        controlVisibilityModel.toggleRangeControlVisible();
        controlVisibilityModel.fireChangeEvent();
    };

    renderToggle() {
        controlVisibilityModel.toggleRenderControlVisible();
        controlVisibilityModel.fireChangeEvent();
    };

    hideAll() {
        controlVisibilityModel.setRangeControlVisible(false);
        controlVisibilityModel.setRenderControlVisible(false);
        controlVisibilityModel.fireChangeEvent();
    };

}