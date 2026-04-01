#Blogify API
**Mocked Components:** The Mongoose `User` model module and its `create()` method were intercepted and replaced with a `jest.fn()`.
**Advantage of Mocks:** Using mocks allows the test to run instantly and deterministically in total isolation without needing a live MongoDB connection or environment setup.
**Behavior Verified:** The test successfully verifies that the service passes the correct payload to the database layer and returns the expected result.