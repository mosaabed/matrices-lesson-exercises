/* Write your code below */
const matrix = require('./Matrix.js');
console.log(matrix)
class EmployeeMatrix extends matrix{
    
    loadData(data){
        this.matrix =[]
        for(let obj of data){
            this.matrix.push(Object.values(obj))
        }
        this.rows = this.matrix.length
        this.cols = this.matrix[0].length
    }
}



//You can paste the code from the lesson below to test your solution


let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

// let m = new EmployeeMatrix()
// console.log(m)
// m.loadData(data)
// console.log(m)



/* Do not remove the exports below */
module.exports = EmployeeMatrix