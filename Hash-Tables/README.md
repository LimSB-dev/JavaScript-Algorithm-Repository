# HAsh Tables

Hash Table 은 Key-Value 쌍을 관리하는 자료구조입니다. Key는 유일해야 하고, Value는 Key에 대응하는 값입니다. Hash Table은 Key를 통해 O(1)의 시간 복잡도로 Value를 검색할 수 있게 합니다.

Hash Function을 이용하여 Key에 대한 Index를 계산할 수도 있습니다. 예를 들어, 문자열 Key의 경우 모든 문자의 ASCII 코드 합을 배열의 크기로 나눈 나머지를 Index로 사용할 수 있습니다.

하지만, Hash Function에 대한 적절한 선택이 중요합니다. Collision(충돌)이 발생할 경우, 대처 방안(Chaining 또는 Open Addressing)이 필요합니다.
