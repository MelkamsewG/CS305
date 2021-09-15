"use strict"

function TreeNode(value) {
    this.value = value;
    this.descendants = [];
}
// create nodes with value
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

// associate root with its descendants
abe.descendants.push(homer);
homer.descendants.push(bart, lisa, maggie);
console.log(abe.value);
console.log(homer.value);

function contains(tree, name) {
    console.log("contains", tree, name);
    let match = false;
    if (tree.value === name)
        return true;
    if (Array.isArray(tree)) {
        tree.forEach(function(item) {
            console.log("Inside forEach", item, value, name);
            if (item.value === name) {
                console.log("item match")
                match = true;
            } else if (item.descendents.length > 0) {
                console.log("Inside item descendants", item, value, name);
                match = containsRecursion(item.descendents, name);
            }
        });

    } else if (tree.descendents.length > 0) {
        match = containsRecursion(tree.descendents, name);
    }
    return match;
}
//console.log("contains", containsRecursion(abe, "Lisa"));