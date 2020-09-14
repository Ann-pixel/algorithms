//jshint esversion:6
//O(nlogn) not the best way. better use a heap.
class PriorityQueue{ //a priority queue to keep track of next node to visit based on shortest path.
  constructor(){
    this.values =[];
  }
  enqueue(val, priority){
    this.values.push({val, priority});
    this.sort(); //everytime we insert anything. it sorts automatically
  }
  dequeue(){
    return this.values.shift(); //once sorted, this returns the shortest path/node.
  }
  sort(){
    this.values.sort((a, b) => a.priority - b.priority);  //sort everytime we add a new node+path.
  }
}




class WeightedGraph{  //creating the actual graph to be traversed
  constructor(){
    this.adjacencyList ={}; //object of arrays of objects - to accomodate for neighboring nodes and weights.
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[];
  }
  addEdge(vertex1, vertex2, weight){
    this.adjacencyList[vertex1].push({node: vertex2, weight}); //just writing 'weight' works like weight: weight.
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }
  dijkstra(start, finish){
    const nodes = new PriorityQueue();
    const distances ={};
    const previous ={};
    let smallest;
    let path=[];
  //build up initial state
    for(let vertex in this.adjacencyList){
      if(vertex===start){
        distances[vertex]=0;
        nodes.enqueue(vertex, 0);
      } else{
        distances[vertex] =Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex]= null;
    }

  //as long as there is something to visit
    while(nodes.values.length){
      smallest= nodes.dequeue().val; //only dequeue returns the whole node.

      if(smallest === finish){
        //we are done
        //build a path to return at end
        while(previous[smallest]){
          path.push(smallest);
          smallest=previous[smallest];
        }
        break;
      }
      if(smallest || distances[smallest] !== Infinity){
        for(let neighbor in this.adjacencyList[smallest]){ //neighbor here, is a number - indices of all items in the array of adjacencyList["A"(or any node)]. it is an array of neighbors of the node.
         //get the neighbors
          let nextNode= this.adjacencyList[smallest][neighbor]; //nextnode is the actual node/neighboring node at the index "neighbor"
            //calculate new distance to neighboring node
            let candidate = distances[smallest] + nextNode.weight; //adding previous distances to new edge
            let nextNeighbor= nextNode.node;
            if(candidate < distances[nextNeighbor]){ //comparing new calculated distance to the older distance.

              distances[nextNeighbor] =candidate; //updating new smallest distances
              previous[nextNeighbor] =smallest; //updating new previous(shortest path). how we got to next neighbor
              nodes.enqueue(nextNeighbor, candidate)  //enqueue in priority queue with new priority
            }

        }
      }
    }
    return path.concat(smallest).reverse();
  }
}






let graph= new WeightedGraph();


//making the weighted graph.
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

graph.dijkstra("A", "E");
//returns (5) ["A", "C", "D", "F", "E"]

//BETTER PRIORITY QUEUE---
// class PriorityQueue {
//     constructor(){
//         this.values = [];
//     }
//     enqueue(val, priority){
//         let newNode = new Node(val, priority);
//         this.values.push(newNode);
//         this.bubbleUp();
//     }
//     bubbleUp(){
//         let idx = this.values.length - 1;
//         const element = this.values[idx];
//         while(idx > 0){
//             let parentIdx = Math.floor((idx - 1)/2);
//             let parent = this.values[parentIdx];
//             if(element.priority >= parent.priority) break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }
//     dequeue(){
//         const min = this.values[0];
//         const end = this.values.pop();
//         if(this.values.length > 0){
//             this.values[0] = end;
//             this.sinkDown();
//         }
//         return min;
//     }
//     sinkDown(){
//         let idx = 0;
//         const length = this.values.length;
//         const element = this.values[0];
//         while(true){
//             let leftChildIdx = 2 * idx + 1;
//             let rightChildIdx = 2 * idx + 2;
//             let leftChild,rightChild;
//             let swap = null;

//             if(leftChildIdx < length){
//                 leftChild = this.values[leftChildIdx];
//                 if(leftChild.priority < element.priority) {
//                     swap = leftChildIdx;
//                 }
//             }
//             if(rightChildIdx < length){
//                 rightChild = this.values[rightChildIdx];
//                 if(
//                     (swap === null && rightChild.priority < element.priority) ||
//                     (swap !== null && rightChild.priority < leftChild.priority)
//                 ) {
//                    swap = rightChildIdx;
//                 }
//             }
//             if(swap === null) break;
//             this.values[idx] = this.values[swap];
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }
// }

// class Node {
//     constructor(val, priority){
//         this.val = val;
//         this.priority = priority;
//     }
// }
