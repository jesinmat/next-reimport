import { loadId } from "./database";

class Cache {
  data?: string = undefined;

  constructor() {
    console.log("Creating a cache");
  }

  async getId() {
    if (!this.data) {
      console.log("Loading data from database");
      const id = await loadId();
      this.data = id;
    }
    console.log("Returning data", this.data);
    return this.data;
  }

  setId(id: string) {
    this.data = id;
    console.log("Setting data to", id);
  }
}

const cache = new Cache();
export default cache;
