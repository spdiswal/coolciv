export type Game = {
	readonly computeNextTurn: (currentState: GameState) => GameState
}

export type GameState = {
	readonly currentPlayer: Player
	readonly currentYear: Year
}

export type Player = "blue" | "red"
export type Year = number

export function composeAlphaCivGame(): Game {
	const yearsToAdvancePerRound = 100

	return {
		computeNextTurn: (currentState) => {
			switch (currentState.currentPlayer) {
				case "red":
					return {
						currentYear: currentState.currentYear,
						currentPlayer: "blue",
					}
				case "blue":
					return {
						currentYear: currentState.currentYear + yearsToAdvancePerRound,
						currentPlayer: "red",
					}
			}
		},
	}
}

export function createInitialGameState(): GameState {
	return {
		currentPlayer: "red",
		currentYear: -4000,
	}
}
