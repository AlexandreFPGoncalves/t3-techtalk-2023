import {
  create,
  type StateCreator,
  type StoreMutatorIdentifier,
} from "zustand";
import { devtools } from "zustand/middleware";

export class StoreHelper {
  static createStore = <
    T,
    Mos extends [StoreMutatorIdentifier, unknown][] = [],
  >(
    innerStore: StateCreator<T, [["zustand/devtools", never]], Mos>,
    storeName: string,
  ) =>
    create<T>()(
      devtools((set, get, api) => innerStore(set, get, api), {
        enabled: true,
        name: storeName,
      }),
    );
}
