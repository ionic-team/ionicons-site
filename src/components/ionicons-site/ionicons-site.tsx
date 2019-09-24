import { Component, Listen, State, h } from '@stencil/core';
import '@stencil/router';

interface IconData {
  name: string;
  icons: string[];
  tags: string[];
}

interface AppData {
  version: string | undefined;
  icons: IconData[];
}

@Component({
  tag: 'ionicons-site',
  styleUrl: 'ionicons-site.scss'
})
export class IoniconsSite {

  @State() data: AppData = {
    version: undefined,
    icons: []
  };
  @State() query = '';
  @State() isHeaderSearchVisible = false;

  @Listen('scroll', { target: 'window' })
  handleScroll() {
    requestAnimationFrame(this.checkScroll.bind(this));
  }

  @Listen('hasSearched')
  searchHandler(event: CustomEvent) {
    this.query = event.detail;
  }

  @Listen('toggleHeaderSearch')
  toggleHandler(event: CustomEvent) {
    this.isHeaderSearchVisible = (event.detail === 'show') ? true : false;
  }

  componentWillLoad() {
    return this.loadData();
  }

  async loadData() {
    const res = await fetch('/ionicons.json');
    const json = await res.json();

    this.data = json;

    let dat = [];
    json.icons.forEach((icon) => {
      if (!icon.name.includes('-outline') && !icon.name.includes('-sharp') && !dat.find((o) => o.name === icon.name)) {
        dat.push({
          name: icon.name,
          icons: [icon.name],
          tags: icon.tags
        });
      }
    });

    insertVariants('-outline');
    insertVariants('-sharp');
    function insertVariants(variantSuffix) {
      json.icons.forEach((icon) => {
        if (icon.name.includes('logo-')) return;
        if (icon.name.includes(variantSuffix)) {
          const baseName = icon.name.replace(variantSuffix, '');
          const datIndex = dat.findIndex((icon => icon.name === baseName));
          if (datIndex < 0) return;
          dat[datIndex].icons.push(icon.name)
        }
      });
    }

    this.data.icons = dat;


  }

  checkScroll() {
    // show/hide header searchbar
    const headerSearchEl = document.querySelector('header .search-input');
    const bodySearchEl = document.querySelector('icon-list .search-input');

    if (!bodySearchEl || !headerSearchEl) {
      return;
    }

    const headerInput = headerSearchEl.querySelector('input')!;
    const bodyInput = bodySearchEl.querySelector('input')!;

    if (bodySearchEl.getBoundingClientRect().top < (bodySearchEl.scrollHeight / 2)) {
      if (this.isHeaderSearchVisible) return;
      this.isHeaderSearchVisible = true;
      if (bodyInput === document.activeElement) headerInput.focus();
    } else {
      if (!this.isHeaderSearchVisible) return;
      this.isHeaderSearchVisible = false;
      if (headerInput === document.activeElement) bodyInput.focus();
    }
  }

  render() {
    return [
      <header-bar
        version={this.data.version}
        query={this.query}
        isSearchVisible={this.isHeaderSearchVisible}></header-bar>,

      <stencil-router>
        <stencil-router-scroll-top>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/"
              component="landing-page"
              exact={true}
              componentProps={{ 'query': this.query, 'data': this.data }}>

            </stencil-route>
            <stencil-route url="/usage"
              component="usage-page"
              componentProps={{ 'data': this.data }}>

            </stencil-route>
            <stencil-route component="notfound-page"></stencil-route>
          </stencil-route-switch>
        </stencil-router-scroll-top>
      </stencil-router>
    ];
  }
}
