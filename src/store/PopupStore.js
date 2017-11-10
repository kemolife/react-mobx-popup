import { observable, computed, action } from "mobx";

class PopupStore {
    @observable id = 1;
    @observable popups = {};
    @observable list = [];
    @observable active = null;
    @observable plugins = {};

    @computed get ids()
    {
        return 'id_' + (this.id++);
    }

    @computed get ActivePopup()
    {
        return this.popups[this.active];
    }

    @action getDataPopup(id)
    {
      return this.popups[id];
    }

    @action clearQueue() {
        this.queue.replace([]);
    }

    @action queue(id) {
        if (!Object.prototype.hasOwnProperty.call(this.popups, id)) {
            return false;
        }

        /** Add popup to queue */
        this.list.push(id);

        return id;
    }

    @action register(data) {
        const id = this.ids;

        this.popups[id] = Object.assign({}, data);

        return id;
    }

    @action create(data, bringToFront) {
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

    @action registerPlugin(name, callback) {
        this.plugins[name] = callback.bind(this);
    }
}

export default window.store = new PopupStore()