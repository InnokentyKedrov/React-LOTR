type Store = { [key: string]: string };

class LocalStorageMock {
  store: Store;
  length: number;

  constructor() {
    this.store = {} as Store;
    this.length = 0;
  }

  key(n: number): string | null {
    if (n >= Object.keys(this.store).length) {
      return null;
    }

    return Object.keys(this.store)[n];
  }

  getItem(key: string): string | null {
    if (!Object.keys(this.store).includes(key)) {
      return null;
    }

    return this.store[key];
  }

  setItem(key: string, value: string): void {
    this.store[key] = value.toString();
    this.length = Object.keys(this.store).length;
  }

  removeItem(key: string): void {
    delete this.store[key];
    this.length = Object.keys(this.store).length;
  }

  clear(): void {
    this.store = {} as Store;
    this.length = 0;
  }
}

const getLocalStorageMock = () => {
  return new LocalStorageMock();
};

export const mock = {
  mockLocalStorage: getLocalStorageMock(),
};
