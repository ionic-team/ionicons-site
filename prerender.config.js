

module.exports = {

  filterUrl(url) {
    if (url.pathname.startsWith('/cheatsheet.html')) {
      return false;
    }
    return true;
  }

};
