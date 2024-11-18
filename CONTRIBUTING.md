# Contributing to the Repository  

We welcome contributions to our project! To ensure consistency and maintain high-quality code, please follow the guidelines below when contributing.  

---

## General Guidelines  

1. **Target Branch**:  
   - All contributions should be made to the `~DEFAULT_BRANCH` via pull-requests.  

2. **Pull Requests**:  
   - Contributions must be submitted via pull requests (PRs).  
   - Direct commits to the default branch are not allowed.  

3. **Commit Messages**:  
   - Use [Conventional Commits](https://www.conventionalcommits.org/) for all commit messages.  
   - The commit message must follow this pattern:  
     ```
     <type>(<scope>)!: <description>
     ```
     - **Allowed Types**:  
       - `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`.  
     - **Optional Scope**:  
       - Specify the scope of the change in parentheses, e.g., `feat(parser):`.  
     - **Breaking Changes**:  
       - Add `!` after the scope to indicate breaking changes.  

   - Examples of valid commit messages:  
     - `feat(ui): add support for dark mode`  
     - `fix(auth): resolve token expiration bug`  
     - `refactor(api)!: update endpoint URLs`  

---

## Pull Request Rules  

1. **Approvals**:  
   - At least **2 approving reviews** are required before merging.  

2. **Dismiss Stale Reviews**:  
   - Any changes pushed after a review will dismiss the review, requiring re-approval.  

3. **Require Last Push Approval**:  
   - The final changes must be approved before the PR can be merged.  

4. **Code Owner Reviews**:  
   - Code owner review is not mandatory but encouraged when applicable.  

5. **Resolve Review Threads**:  
   - Resolving all review threads is recommended but not strictly enforced.  

---

## Prohibited Actions  

1. **Branch Deletion**:  
   - The deletion of the default branch is not allowed.  

2. **Non-Fast-Forward Commits**:  
   - Non-fast-forward commits are disallowed to preserve branch history.  

---

## Bypass Rules  

Certain actors may bypass the rules:  

- **Organization Admins**:  
  - Can bypass all rules at all times.  

---

## How to Contribute  

1. **Create a Branch**:  
   - Use a descriptive branch name, e.g., `feature/add-user-auth`.  

2. **Commit Your Changes**:  
   - Write clean, conventional commit messages.  

3. **Push and Open a Pull Request**:  
   - Push your branch to the fork and open a PR to the `~DEFAULT_BRANCH`.  

4. **Request Reviews**:  
   - Tag relevant reviewers and wait for approvals.  

---

Thank you for following these guidelines and contributing to the project! Your efforts help us maintain a clean, scalable, and efficient codebase.  
