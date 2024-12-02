import { getSessionStorage, saveSessionStorage } from '..'; 

describe('SessionStorage utility functions', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  test('should save data to sessionStorage and retrieve it', () => {
    const testKey = 'testKey';
      const testValue = { name: 'martin', age: 30 };
      saveSessionStorage(testKey, testValue);
      
      const retrievedData = getSessionStorage(testKey);
      expect(retrievedData).toEqual(testValue);
      
      
  });

  test('should return null if the key does not exist in sessionStorage', () => {
    const nonExistentKey = 'clear';

    const retrievedData = getSessionStorage(nonExistentKey);
  
    expect(retrievedData).toBeNull();
  });

});
