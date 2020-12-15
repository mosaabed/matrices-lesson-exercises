/* Write your code below */
class Matrix{
    constructor(rows , cols){
        this.rows = rows 
        this.cols = cols
        this.matrix = this.generateMatrix(rows , cols)
    }

    generateMatrix(rows , cols){
        let matrix = []
        let temp = []
        for (let i =0 ; i< rows ; i++){
            temp = []
            for (let j =0 ; j< cols ; j++){
                temp.push(i*cols+j+1)
            }
            matrix.push(temp)
        }
        return matrix
    }

    findCoordinate(value){
        for (let i =0 ; i< this.rows ; i++){
            for (let j =0 ; j< this.cols ; j++){
                if (this.matrix[i][j] == value){
                    return {x: i , y :j}
                }
            }
           
        }
    }

}



//You can paste the code from the lesson below to test your solution

// let m = new Matrix(3, 4)
// console.log(m)
// m.print()
// //prints
// /*
// 1       2       3       4
// 5       6       7       8
// 9       10      11      12
// */

// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}



/* Do not remove the exports below */




module.exports = Matrix