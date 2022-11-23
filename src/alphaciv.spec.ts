import { composeAlphaCivGame } from "./game"

// TODO: The world age remains 4000 BCE after Red completes their first turn.
// TODO: After turn 2, the world age is 3800 BCE.
// TODO: ..................................................

describe("an AlphaCiv game", () => {
	describe("world age", () => {
		it("begins in 4000 BCE", () => {
			// GIVEN an AlphaCiv game.
			const game = composeAlphaCivGame()
			
			// THEN the current year is 4000 BCE initially.
			const expectedYear = "4000 BCE"
			expect(game.currentYear).toBe(expectedYear)
		})
		
		it("the world age is 3900 BCE after Blue completes their first turn", () => {
			// GIVEN
			const game = composeAlphaCivGame()
			
			// WHEN
			game.endTurn()
			game.endTurn()
			
			// THEN
			expect(game.currentYear).toBe("3900 BCE")
		})
		
		it("the world age is 3800 BCE after turn 2", () => {
			// GIVEN
			const game = composeAlphaCivGame()
			
			// WHEN
			game.endTurn()
			game.endTurn()
			
			// THEN
			expect(game.currentYear).toBe("3800 BCE")
		})
	})

	describe("players", () => {
		it("begins with Red player in turn", () => {
			// GIVEN
			const game = composeAlphaCivGame()
			
			// THEN
			expect(game.currentPlayer).toBe("Red")
		})
		
		it("puts Blue player in turn after Red completes their turn", () => {
			const game = composeAlphaCivGame()
			expect(game.currentPlayer).toBe("Red")
			
			// WHEN
			game.endTurn()
			
			// THEN
			expect(game.currentPlayer).toBe("Blue")
		})
		
		it("puts Red player in turn after Blue completes their turn", () => {
			// GIVEN
			const game = composeAlphaCivGame()
			game.endTurn()
			
			expect(game.currentPlayer).toBe("Blue")
			
			// WHEN
			game.endTurn()
			
			// THEN
			expect(game.currentPlayer).toBe("Red")
		})
	})
})
