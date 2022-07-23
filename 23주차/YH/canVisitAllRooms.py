class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = set([0])
        queue = [0]
        
        for i in queue:
            for j in rooms[i] :
                if j in visited : continue
                visited.add(j)
                queue.append(j)
                
        return len(visited) == len(rooms)