import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import gameSlice, { GameState } from './gameSlice';

export type StoreState = GameState; // Add the Slice  interfaces to the Store State when new Slice is being created

const useStore = create<StoreState>(
    devtools(
        // used to visualize the data in redux devtools, should be removed in production environment
        persist(
            // used to persist the data
            (set, get) => ({
                ...gameSlice(set, get), // The new Slice will be given the set and get from the mainStore
            }),
            {
                name: 'rps-storage', // unique name
                getStorage: () => localStorage, // (optional) by default the 'localStorage' is used.
            }
        )
    )
);

export default useStore;
