import { observable, computed, action } from "mobx";

class PopupStore {
    @observable id = 0;
    @observable popups = [];
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

    addPopups(data){
        const id = this.ids;
        this.popups.push(data);
    }

    @action register(data) {
        this.addPopups(data);
        return id;
    }

    @action show(data) {
        this.active = null;
        this.addPopups(data);
        this.active = this.ids;
        return this.popups;
    }

    @action closePopup() {
        return this.popups.pop();
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