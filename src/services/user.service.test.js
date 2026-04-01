const { createUser } = require('./user.service');
const User = require('./user.model');

// 1. Module Mocking: Intercept the Mongoose User model
jest.mock('./user.model', () => {
  return {
    // 2. Method Mocking: Replace User.create() with a Jest mock function
    create: jest.fn()
  };
});

describe('User Service - createUser', () => {
  afterEach(() => {
    // Clear mock history between tests
    jest.clearAllMocks();
  });

  it('should create a new user and return the user object', async () => {
    // Arrange: Set up the test data and mock return value
    const mockUserData = { name: 'Jane Doe', email: 'jane@example.com' };
    const mockReturnedUser = { _id: '60c72b2f9b1e8a001c8e4b3a', ...mockUserData };
    
    User.create.mockResolvedValue(mockReturnedUser);

    // Act: 3. Service Invocation
    const result = await createUser(mockUserData);

    // Assert: 4. Verification and Assertions
    // Assert the value returned matches the mocked data
    expect(result).toEqual(mockReturnedUser);
    
    // Assert User.create() was invoked with the expected arguments
    expect(User.create).toHaveBeenCalledTimes(1);
    expect(User.create).toHaveBeenCalledWith(mockUserData);
  });
});