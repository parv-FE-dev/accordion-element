let instanceCount = 1092; //Some number. A constant, can not be random - randomness can cause issues with dom rehydration.
export default class UniqueIdGenerator {
  constructor(prefix) {
    this.instanceCount = instanceCount++;
    this.cnt = 0;
    this.prefix = prefix || "id_prefix";
  }

  newId() {
    return `${this.prefix}_${ this.instanceCount}_${this.cnt++}`;
  }
};