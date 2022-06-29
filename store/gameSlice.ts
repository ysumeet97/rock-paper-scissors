import { SetState, GetState } from 'zustand';
import { StoreState } from './useStore';

export interface GameState {
    playerName: string;
    totalGames: number;
    currentGame: number;
    playerScore: number;
    computerScore: number;
    playerSelection: string;
    botSelection: string;
    playAgainVisible: boolean;
    winner: string;

    setPlayerName: (value: string) => void;
    setCurrentGame: (value: number) => void;
    setPlayerScore: (value: number) => void;
    setComputerScore: (value: number) => void;
    setPlayerSelection: (value: string) => void;
    setBotSelection: (value: string) => void;
    setPlayAgainVisible: (value: boolean) => void;
    setWinner: (value: string) => void;
    resetData: () => void;
}

const playerName: string = '';
const totalGames: number = 10;
const currentGame: number = 0;
const playerScore: number = 0;
const computerScore: number = 0;
const playerSelection: string = 'all';
const botSelection: string = '';
const playAgainVisible: boolean = false;
const winner: string = '';

const gameSlice = (set: SetState<StoreState>, _get: GetState<StoreState>) => ({
    playerName: playerName,
    totalGames: totalGames,
    currentGame: currentGame,
    playerScore: playerScore,
    computerScore: computerScore,
    playerSelection: playerSelection,
    botSelection: botSelection,
    playAgainVisible: playAgainVisible,
    winner: winner,

    setPlayerName: (value: string) => {
        set(() => ({ playerName: value }));
    },

    setCurrentGame: (value: number) => {
        set(() => ({ currentGame: value }));
    },

    setPlayerScore: (value: number) => {
        set(() => ({ playerScore: value }));
    },

    setComputerScore: (value: number) => {
        set(() => ({ computerScore: value }));
    },

    setPlayerSelection: (value: string) => {
        set(() => ({ playerSelection: value }));
    },

    setBotSelection: (value: string) => {
        set(() => ({ botSelection: value }));
    },

    setPlayAgainVisible: (value: boolean) => {
        set(() => ({ playAgainVisible: value }));
    },

    setWinner: (value: string) => {
        set(() => ({ winner: value }));
    },

    resetData: () => {
        set(() => ({
            playerName: '',
            totalGames: 10,
            currentGame: 0,
            playerScore: 0,
            computerScore: 0,
            playerSelection: 'all',
            botSelection: '',
            playAgainVisible: false,
        }));
    },
});

export default gameSlice;
