# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2026-01-25

### Changed
- **RegisterPage**: Updated to use built-in authentication integration
- **RegisterPage**: Simplified props interface to match LoginPage pattern
- **RegisterPage**: Removed redundant props (header, background, maxWidth, etc.)
- **Types**: Moved RegisterPageProps to shared types file for consistency

### Fixed
- Fixed FormField/FormSelect TypeScript errors
- Improved error handling in registration flow

## [1.0.0] - 2026-01-09

### Added
- Initial public release
- Complete React authentication solution
- Zero-configuration Supabase integration
- Auth hooks: `useAuth`, `useIsAuthenticated`, `useHasRole`
- Auth pages: `LoginPage`, `RegisterPage`, `PasswordResetPage`
- Route protection: `AuthRoute`, `RouteGuard`, `AccessGuard`
- TypeScript support with comprehensive type definitions
- Social login integration support
- Automatic session management and token refresh
- Material-UI based responsive UI components

### Changed
- Updated license to PolyForm Shield License 1.0.0
- Published to npm as public package

[Unreleased]: https://github.com/qwickapps/auth-client/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/qwickapps/auth-client/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/qwickapps/auth-client/releases/tag/v1.0.0
