'use strict';

const AnimalShelter = require('./fifo-animal-shelter.js');

describe('AnimalShelter Class', () => {
  const testShelter = new AnimalShelter;

  it('Is an instance of the AnimalShelter class', () => {
    expect(testShelter).toBeInstanceOf(AnimalShelter);
  });

  describe('Enqueue method', () => {
    it('can add a cat', () => {
      testShelter.enqueue('cat');
      expect(testShelter.catQueue.peek().type).toBe('cat');
    });

    it('can add a dog', () => {
      testShelter.enqueue('dog');
      expect(testShelter.dogQueue.peek().type).toBe('dog');
    });

    it('cannot add a different animal', () => {
      expect(testShelter.enqueue('snake')).toBe('must enter a dog or a cat');
    });

    it('cannot be called with no parameter', () => {
      expect(testShelter.enqueue()).toBe('must enter a dog or a cat');
    });
  });

  describe('Dequeue method', () => {
    it('requesting a dog returns a dog', () => {
      expect(testShelter.dequeue('dog').type).toBe('dog');
    });

    it('requesting a cat returns a cat', () => {
      expect(testShelter.dequeue('cat').type).toBe('cat');
    });

    it('if the requested type of animal isn\'t present, it returns null', () => {
      expect(testShelter.dequeue('dog')).toBeNull();
      expect(testShelter.dequeue('cat')).toBeNull();      
    });

    it('no preference returns the animal that has been in the queue the longest', () => {
      testShelter.enqueue('cat');
      testShelter.enqueue('cat');
      testShelter.enqueue('dog');
      testShelter.enqueue('dog');
      testShelter.enqueue('cat');
      testShelter.enqueue('dog');

      testShelter.dequeue('cat');
      testShelter.dequeue('dog');
      testShelter.dequeue('dog');


      expect(testShelter.dequeue().type).toBe('cat');
      expect(testShelter.dequeue().type).toBe('cat');
    });

    it('requesting an animal other than a cat or dog returns null', () => {
      expect(testShelter.dequeue('snake')).toBeNull();
    });
  });

});