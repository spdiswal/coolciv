export type Game = {
	readonly currentPlayer: string
	readonly currentYear: string
	readonly endTurn: () => void
}

const playerRed = "Red"
const playerBlue = "Blue"

export function composeAlphaCivGame(): Game {
	let currentPlayer = playerRed
	let currentYear = "4000 BCE"
	
	return {
		get currentPlayer() {
			return currentPlayer
		},
		get currentYear() {
			return currentYear
		},
		endTurn: () => {
			if (currentPlayer === playerRed) {
				currentPlayer = playerBlue
			} else {
				currentPlayer = playerRed
			}
			
			currentYear = "3900 BCE"
		}
	}
}
