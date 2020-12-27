## Semantic Versioning:

##### Semantic versioning is a set of rules that dictate how version numbers are assigned and incremented. The image below describes what each number means:

![WhatsApp Image 2020-12-14 at 02 56 08](https://res.cloudinary.com/practicaldev/image/fetch/s--vTo7vOzT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/mfyaefad6784i9z4ll2c.png)

So if:

* The first number from the right is incremented (patch). It means that there is a new hotfix/bugfix on this package.

* The middle number is incremented (minor). It means that there is a new feature.

* The last number from the left is incremented (major). It means that there is a breaking change.

It is important to highlight that it should be safe to update the package if there are any patch/minor changes (backward compatibility). If you find any major change, you have to double-check the package's release notes before upgrading its version.

## How does it work?

### Commit message format

**semantic-release** uses the commit messages to determine the type of changes in the codebase. Following formalized conventions for commit messages, **semantic-release** automatically determines the next [semantic version](https://semver.org) number, generates a changelog and publishes the release.

By default **semantic-release** uses [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). The commit message format can be changed with the [`preset` or `config` options](docs/usage/configuration.md#options) of the [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer#options) and [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator#options) plugins.

Here is an example of the release type that will be done based on a commit messages:

| Commit message                                                                                                                                                                                   | Release type               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release              |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | Minor Feature Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | Major Breaking Release |
