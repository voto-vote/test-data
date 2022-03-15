export class Propagatable {
    keys: PropagatableItem[]
    constructor(arr: [PropagatableItem]) {
        this.keys = arr
    }
}

export class PropagatableItem {
    isRandom: Boolean
    key: string
    value: any
    constructor(randomize: Boolean, k: string, v?: any) {
        this.isRandom = randomize;
        this.key = k
        this.value = v
    }
    IsRandom() {
        return this.isRandom
    }
}