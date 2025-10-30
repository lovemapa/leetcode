function graphColoring(V, edges, m) {
  // Step 1: Build adjacency list
  const graph = Array.from({ length: V }, () => []);
  console.log(graph);
  
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
 
  console.log(graph);
  
  // Step 2: Initialize color array (0 = uncolored)
  const color = new Array(V).fill(0);
 
  // Step 3: Helper function to check if we can color a node with color c
  function isSafe(node, c) {
    for (const adj of graph[node]) {
        console.log(graph[node]);
        
      if (color[adj] === c) return false;
    }
    return true;
  }
 
  // Step 4: Backtracking function
  function solve(node) {
    if (node === V) return true; // all vertices are colored
 
    for (let c = 1; c <= m; c++) {
      if (isSafe(node, c)) {
        color[node] = c;
        if (solve(node + 1)) return true;
        color[node] = 0; // backtrack
      }
    }
    return false;
  }
 
  return solve(0);
}
 
// Example usage:
const V = 4;
const edges = [[0, 1], [1, 3], [2, 3], [3, 0], [0, 2]];
const m = 3;
 
console.log(graphColoring(V, edges, m)); // true