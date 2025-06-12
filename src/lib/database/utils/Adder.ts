export class AdderError extends Error {
  public readonly amount: number;

  public constructor(message: string, amount: number) {
    super(message);
    this.amount = amount;
  }
}

export class Adder<T> extends Array<{ id: T; end: number }> {
  public maximum: number;
  public duration: number;
  public autoRemove: boolean;

  public constructor(maximum: number, duration: number, autoRemove = false) {
    super();
    this.maximum = maximum;
    this.duration = duration;
    this.autoRemove = autoRemove;
  }

  public add(id: T, times = 1) {
    this.sweep();
    const amount = this.count(id) + times;
    for (let i = 0; i < times; i++) {
      this.push({ id, end: Date.now() + this.duration });
    }

    if (amount >= this.maximum) {
      if (this.autoRemove) this.remove(id);
      throw new AdderError('Limit reached', amount);
    }

    return amount;
  }

  public remove(id: T) {
    let deleted = 0;
    let i = 0;
    let entry: { id: T; end: number };

    while (i < this.length) {
      entry = this[i];
      if (entry.id === id) {
        this.splice(i, 1);
        deleted++;
      } else {
        i++;
      }
    }
    return deleted;
  }

  public count(id: T) {
    return this.reduce((count, entry) => (entry.id === id ? count + 1 : count), 0);
  }

  public sweep() {
    const now = Date.now();
    let i = 0;
    while (i < this.length && this[i].end <= now) i++;
    if (i !== 0) this.splice(0, i);
    return i;
  }
}
