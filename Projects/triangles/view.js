const controller = require('./controller')

const view = () => {

	// Variables
	let symbol = controller.symbol
	let size = controller.size
	let numberOfTrianglesletree = controller.numberOfTrianglesletree
	let treeOffsetFromLeft = controller.treeOffsetFromLeft

	// Prints
	console.log("---Task 1 - Simple Triangles---")
	/*	.
	 *	..
	 *	...
	 */
	for (let i = 0; i < size + 1; i++) {
		for (let j = 0; j < i; j++) {
			process.stdout.write(symbol)
		}
		console.log()
	}
	console.log()

	/*	...
	 * 	..
	 * 	.
	 */
	for (let i = 0; i < size; i++) {
		for (let j = i; j < size; j++) {
			process.stdout.write(symbol)
		}
		console.log()
	}
	console.log()

	/*	...
	 * 	 ..
	 * 	  .
	 */
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < i; j++) {
			process.stdout.write(" ")
		}
		for (let k = i; k < size; k++) {
			process.stdout.write(symbol)
		}
		console.log()
	}

	/*	  .
	 * 	 ..
	 *	...
	 */
	for (let i = 0; i < size + 1; i++) {
		for (let j = i; j < size; j++) {
			process.stdout.write(" ")
		}
		for (let k = 0; k < i; k++) {
			process.stdout.write(symbol)
		}
		console.log()
	}
	console.log()

	// Complex triangles.
	console.log("---Task 2 - Complex Triangles---")
	/*	.
	 * 	..
	 * 	...
	 * 	..
	 * 	.
	 */
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < i; j++) {
			process.stdout.write(symbol)
		}
		console.log()
	}
	for (let i = 0; i < size; i++) {
		for (let j = i; j < size; j++) {
			process.stdout.write(symbol)
		}
		console.log()
	}
	console.log()

	/*	.
	 * 	..
	 * 	...
	 * 	 ..
	 * 	  .
	 */
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < i; j++) {
			process.stdout.write(symbol)
		}
		console.log()
	}
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < i; j++) {
			process.stdout.write(" ")
		}
		for (let k = i; k < size; k++) {
			process.stdout.write(symbol)
		}
		console.log()
	}
	console.log()

	/*	  .
	 * 	 ..
	 * 	...
	 * 	 ..
	 * 	  .
	 */
	for (let i = 0; i < size; i++) {
		for (let j = i; j < size; j++) {
			process.stdout.write(" ")
		}
		for (let k = 0; k < i; k++) {
			process.stdout.write(symbol)
		}
		console.log()
	}
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < i; j++) {
			process.stdout.write(" ")
		}
		for (let k = i; k < size; k++) {
			process.stdout.write(symbol)
		}
		console.log()
	}
	console.log()

	/*	  .
	 * 	 ..
	 * 	...
	 * 	..
	 * 	.
	 */
	for (let i = 0; i < size; i++) {
		for (let j = i; j < size; j++) {
			process.stdout.write(" ")
		}
		for (let k = 0; k < i; k++) {
			process.stdout.write(symbol)
		}
		console.log()
	}
	for (let i = 0; i < size; i++) {
		for (let j = i; j < size; j++) {
			process.stdout.write(symbol)
		}
		console.log()
	}
	console.log()
	
	// Tree with triangles.
	console.log("---Task 3 - Tree With Triangles--- \n")
	/*	  .
	 * 	 ...
	 * 	  .
	 *	 ...
	 *	.....
	 *	  .
	 *	 ...
	 *	.....
	 * .......
	 */
	for (let m = 0; m < numberOfTrianglesletree; m++) {
		for (let i = 1; i < size + m; i++) {
			for (let j = i; j < size + numberOfTrianglesletree + (treeOffsetFromLeft - 2); j++) {
				process.stdout.write(" ")
			}
			for (let k = 0; k < 2; k++) {
				for (let l = k; l < i; l++) {
					process.stdout.write(symbol)
				}
			}
			console.log()
		}
	}

}

module.exports = view