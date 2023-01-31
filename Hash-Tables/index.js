let hashTable = {};

// key-value 쌍 추가
hashTable["first_name"] = "John";
hashTable["last_name"] = "Doe";

// value 검색
console.log(hashTable["first_name"]); // "John"

// key 존재 여부 확인
console.log("first_name" in hashTable); // true
