import type { GameState, Player, Year } from "./game"
import { composeAlphaCivGame, createInitialGameState } from "./game"

describe("an AlphaCiv game", () => {
	describe("world age", () => {
		it("begins in 4000 BCE", () => {
			// GIVEN an initial game state.
			const gameState = createInitialGameState()

			// THEN the current year is 4000 BCE initially.
			const expectedYear: Year = -4000
			expect(gameState.currentYear).toBe(expectedYear)
		})

		it("the world age is 3900 BCE after Blue completes their first turn", () => {
			// GIVEN
			const game = composeAlphaCivGame()
			const currentState: GameState = aGameState({
				currentPlayer: "blue",
				currentYear: -4000,
			})

			// WHEN
			const newState = game.computeNextTurn(currentState)

			// THEN
			const expectedYear: Year = -3900
			expect(newState.currentYear).toBe(expectedYear)
		})

		it("the world age is 3800 BCE after turn 2", () => {
			// GIVEN
			const game = composeAlphaCivGame()
			const currentState: GameState = aGameState({
				currentPlayer: "blue",
				currentYear: -3900,
			})

			// WHEN
			const newState = game.computeNextTurn(currentState)

			// THEN
			const expectedYear: Year = -3800
			expect(newState.currentYear).toBe(expectedYear)
		})
	})

	describe("players", () => {
		it("begins with Red player in turn", () => {
			// GIVEN an initial game state.
			const gameState = createInitialGameState()

			// THEN the current player is 'red'.
			const expectedPlayer: Player = "red"
			expect(gameState.currentPlayer).toBe(expectedPlayer)
		})

		it("puts Blue player in turn after Red completes their turn", () => {
			const game = composeAlphaCivGame()
			// expect(game.state.currentPlayer).toBe("red")

			// WHEN
			const newState = game.computeNextTurn({
				currentPlayer: "red",
				currentYear: -4000,
			})

			// THEN
			expect(newState.currentPlayer).toBe("blue")
		})

		it("puts Red player in turn after Blue completes their turn", () => {
			// GIVEN
			const game = composeAlphaCivGame()
			const currentState: GameState = aGameState({
				currentPlayer: "blue",
			})

			// WHEN
			const newState = game.computeNextTurn(currentState)

			// THEN
			expect(newState.currentPlayer).toBe("red")
		})
	})
})

function aGameState(overrides: Partial<GameState>): GameState {
	const defaultState: GameState = {
		currentPlayer: "red",
		currentYear: -4000,
	}

	return { ...defaultState, ...overrides }
}
