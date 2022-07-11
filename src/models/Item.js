export class Item {
    constructor (text) {
        const date = new Date();

        this.id = Date.now();
        this.text = text;
        this.createdAt =Date.now();
    }

    displayCreatedAt() {
        return new Date(this.createdAt).toLocaleString();
    }
}