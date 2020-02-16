const path = require('path')

// String -> String

// @url examples:
// - https://registry.yarnpkg.com/acorn-es7-plugin/-/acorn-es7-plugin-1.1.7.tgz
// - https://registry.npmjs.org/acorn-es7-plugin/-/acorn-es7-plugin-1.1.7.tgz
// - git+https://github.com/srghma/node-shell-quote.git
// - git+https://1234user:1234pass@git.graphile.com/git/users/1234user/postgraphile-supporter.git
// - https://codeload.github.com/Gargron/emoji-mart/tar.gz/934f314fd8322276765066e8a2a6be5bac61b1cf

function urlToName(url) {
  let isCodeloadGitTarballUrl = url.startsWith('https://codeload.github.com/') && url.includes('/tar.gz/')
  if (url.startsWith('git+') || isCodeloadGitTarballUrl) {
    return path.basename(url)
  }

  return url
    .replace('https://registry.yarnpkg.com/', '') // prevents having long directory names
    .replace(/[@/:-]/g, '_') // replace @ and : and - characters with underscore
}

module.exports = urlToName
