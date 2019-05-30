'use strict';

const Queue = require('../../../data-structures/stacksAndQueues/queue.js');

class AnimalShelter {

  constructor() {
    this.catQueue = new Queue;
    this.dogQueue = new Queue;
    this.count = 1;
  }

  enqueue(animal) {
    if(!animal) return 'must enter a dog or a cat';
    animal = animal.toLowerCase();
    const newAnimal = {type: animal, queueNumber: this.count};
    if(animal === 'cat') {
      this.catQueue.enqueue(newAnimal);
      this.count++;
    }
    else if(animal === 'dog') {
      this.dogQueue.enqueue(newAnimal);
      this.count++;
    } else return 'must enter a dog or a cat';
  }

  dequeue(preference) {
    let animalToReturn;
    if(!preference) {
      if(this.catQueue.peek().queueNumber < this.dogQueue.peek().queueNumber){
        animalToReturn = this.catQueue.dequeue();
      } else animalToReturn = this.dogQueue.dequeue();
    }
    else if (preference.toLowerCase() === 'cat') animalToReturn = this.catQueue.dequeue();
    else if (preference.toLowerCase() === 'dog') animalToReturn = this.dogQueue.dequeue();
    else animalToReturn = null;

    return animalToReturn;
  }

}

module.exports = AnimalShelter;