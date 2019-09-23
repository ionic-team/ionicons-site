

module.exports = {

  filterUrl(url) {
    const pathname = url.pathname;
    if (pathname.startsWith('/cheatsheet.html')) {
      return false;
    }
    if (pathname.startsWith('/v1')) {
      return false;
    }
    if (pathname.startsWith('/v2')) {
      return false;
    }
    if (pathname.startsWith('/v4')) {
      return false;
    }
    return true;
  }

};
