// Test setup for @qwickapps/auth-client
// Add any global test configuration here

// Mock React Router for tests
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));