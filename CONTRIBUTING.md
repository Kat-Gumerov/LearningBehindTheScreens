# Contribution Guidelines

Thank you for contributing to our project! To ensure a smooth and collaborative process, please follow the guidelines below.

## Branching Strategy

- **Main Branch (`master` or `main`):**
  - This branch contains production-ready code.
  - Do not commit directly to this branch; all changes should be merged via pull requests.

- **Develop Branch:**
  - Use this branch as an integration branch for features and fixes.
  - All completed features should be merged here first, then eventually into `master` for a release.

- **Feature Branches:**
  - Create a new branch for each feature or bug fix.
  - **Naming Convention:** Use the format `feature/<feature-name>` or `bugfix/<short-description>`.
  - Example: `feature/dual-screen-layout` or `bugfix/code-highlighting-delay`.
  - Branch off from `develop` (or your current integration branch).

## Commit Guidelines

- Write clear and descriptive commit messages.
- Each commit should represent a logical unit of work.
- Reference any related issues by number in your commit messages (e.g., "Fixes #12").

## Pull Request (PR) Process

1. **Create a PR:**  
   - Once your feature is complete, open a pull request from your feature branch into the `develop` branch.
2. **Review:**  
   - Your PR should be reviewed by at least one other team member before merging.
   - Include a description of what the PR does, why the changes are needed, and how to test them.
3. **Merge:**  
   - Only merge the PR once it has been approved and all tests pass.
   - If conflicts arise, resolve them in your feature branch and update the PR.

## Merge Procedures

- **Squash and Merge:**  
  - When merging, consider using the "Squash and merge" strategy to combine your commits into one clean commit on the `develop` branch.
- **Rebasing:**  
  - Alternatively, rebase your feature branch onto the latest `develop` to keep a clean history before opening a PR.

## Additional Notes

- Ensure your code follows the project's style guidelines.
- Update documentation or tests as needed with your changes.
- If you're unsure about any process, please ask for clarification on our team’s communication channel.

---

Happy coding, and thanks for your contributions!
