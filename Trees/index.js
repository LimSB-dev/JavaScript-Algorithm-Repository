class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      else current = current.right;
    }
    return false;
  }

  inOrderTraverse(callback) {
    function traverse(node) {
      if (node) {
        traverse(node.left);
        callback(node.value);
        traverse(node.right);
      }
    }
    traverse(this.root);
  }

  preOrderTraverse(callback) {
    function traverse(node) {
      if (node) {
        callback(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    }
    traverse(this.root);
  }

  postOrderTraverse(callback) {
    function traverse(node) {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        callback(node.value);
      }
    }
    traverse(this.root);
  }
}
