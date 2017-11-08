import { observable, computed, action } from "mobx";

class PopupStore {
    id = 1;
    @observable popups = {};
    @observable list = [];
    active = null;
    @observable plugins = {};

    @action
    getId()
    {
        return 'id_' + (this.id++);
    }

    @action
    getActivePopup()
    {
        return this.popups[this.active];
    }

    @action
    getDataPopup(id)
    {
      return this.popups[id];
    }

    @action
    clearQueue() {
        this.queue = [];
    }

    @action
    queue(id) {
        if (!Object.prototype.hasOwnProperty.call(this.popups, id)) {
            return false;
        }

        /** Add popup to queue */
        this.list.push(id);

        return id;
    }

    @action
    register(data) {
        const id = this.getId();

        this.popups[id] = Object.assign({}, data);

        return id;
    }

    @action
    create(data, bringToFront) {
        /** Register popup */
        const id = this.register(data);

        /** Queue popup */
        if (bringToFront === true) {
            const currentlyActive = this.active;

            this.active = null;
            this.queue(id);
            this.queue(currentlyActive);
            Store.dispatch();
        } else {
            this.queue(id);
        }

        return id;
    }

    @action
    registerPlugin(name, callback) {
        this.plugins[name] = callback.bind(this);
    }
}

export default window.store = new PopupStore()