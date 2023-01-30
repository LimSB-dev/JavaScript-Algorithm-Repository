# Graphs

Graph는 노드와 간선으로 구성된 자료구조로, 노드 사이의 관계나 경로를 나타낼 때 유용하게 사용됩니다. 주요 구성 요소는 노드(node), 간선(edge), 인접 노드(adjacent node)이며, 그래프의 타입으로는 방향 그래프(directed graph), 무방향 그래프(undirected graph), 가중치 그래프(weighted graph)가 있습니다. Graph는 많은 알고리즘 문제에서 사용되는 자료구조로, 경로 찾기, 최단 경로 구하기, 사이클 탐색 등의 문제를 풀기 위해 사용됩니다.

Graph는 2가지 타입으로 나뉘는데

1. directed graph (digraph) : 노드에서 다른 노드로 향하는 간선의 방향이 존재하는 그래프

2. undirected graph : 노드에서 다른 노드로 향하는 간선의 방향이 존재하지 않는 그래프

Graph는 각 노드의 정보와 각 간선의 정보를 가지고 있습니다.
자바스크립트에서 Graph를 표현하는 방법으로는 배열, 오브젝트, Map 등을 사용할 수 있습니다.

Graph의 탐색 알고리즘으로는 BFS(Breadth-First Search), DFS(Depth-First Search)가 있습니다.
