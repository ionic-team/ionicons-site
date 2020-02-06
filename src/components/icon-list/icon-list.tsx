import { Component, Element, Listen, Prop, State, h } from '@stencil/core';


@Component({
  tag: 'icon-list',
  styleUrl: 'icon-list.scss'
})
export class LandingPage {
  @Element() el!: Element;

  @State() selectedIcon = '';
  @State() selectedIconType = 'outline';
  @State() isHeaderSearchVisible = false;

  @Prop() query = '';
  @Prop() data: any;

  @Listen('keyup', { target: 'body' })
  escListener(ev: KeyboardEvent) {
    if (ev.code === 'Escape' && this.selectedIcon.length) this.selectedIcon = '';
  }

  @Listen('click', { target: 'body' })
  handleBodyClicked() {
    if (this.selectedIcon.length) this.selectedIcon = '';
  }

  @Listen('clearToast')
  handleClearToast() {
    this.selectedIcon = '';
  }

  @Listen('scroll', { target: 'window' })
  handleScroll() {
    requestAnimationFrame(this.checkScroll.bind(this));
  }

  checkScroll() {
    const headerBars = this.el.querySelectorAll('.icon-list__header-bar');

    for (let i = 0; i < headerBars.length; i++) {
      const bar = headerBars[i];
      if (bar.getBoundingClientRect().top < 67) {
        bar.classList.add('sticky');
      } else {
        bar.classList.remove('sticky');
      }
    }
  }

  filterIcons() {
    const search = this.query.trim().toLowerCase();
    const results = {
      icon: [],
      logo: []
    };

    this.data.icons.forEach((iconData: any) => {
      if (search === '' || iconData.tags.some((t: any) => t.indexOf(search) > -1)) {

        const iconType = iconData.name.substr(0, iconData.name.indexOf('-'));

        switch (iconType) {
          case 'logo':
            results['logo'].push({name: iconData.name});
            break;
          default:
            results['icon'].push({name: iconData.name});
            return;
        }
      }
    });

    return results;
  }

  handleIconMouseEnter(ev: any) {
    ev.target.classList.remove('mouseOff');
    ev.target.classList.add('mouseOver');
  }

  handleIconMouseLeave(ev: any) {
    ev.target.classList.remove('mouseOver');
    ev.target.classList.add('mouseOff');
  }

  handleIconClick(ev: MouseEvent, name: string) {
    ev.stopPropagation();
    this.selectedIcon = name;
  }

  handleToggleClick(ev: MouseEvent, type: string) {
    ev.stopPropagation();
    this.selectedIconType = type;
  }

  render() {
    const results = this.filterIcons();
    const selectedIcon = this.data.icons.find(o => o.name === this.selectedIcon);

    let typeSuffix;
    switch (this.selectedIconType) {
      case 'outline':
        typeSuffix = '-outline';
        break;
      case 'sharp':
        typeSuffix = '-sharp';
        break;
      default:
        typeSuffix = '';
    }

    if (!results.icon.length && !results.logo.length && this.isHeaderSearchVisible) document.documentElement!.scrollTop = 0;

    return (
      <div class="icon-list">

        <div class="icon-list__search container--small">
          <icon-search query={this.query} size="large" autofocus="autofocus"></icon-search>
        </div>

          {results.icon.length ?
            <div class="icon-list__wrapper">
              <div class="icon-list__header-bar">
                <div class="container--small">
                  <h4>App icons</h4>
                  <ul class="toggle">
                    <li
                      class={`toggle__item ${(this.selectedIconType === 'outline') ? 'active' : ''}`}
                      onClick={ev => this.handleToggleClick(ev, 'outline')}>
                        Outline
                    </li>
                    <li
                      class={`toggle__item ${(this.selectedIconType === 'filled') ? 'active' : ''}`}
                      onClick={ev => this.handleToggleClick(ev, 'filled')}>
                        Filled
                    </li>
                    <li
                      class={`toggle__item ${(this.selectedIconType === 'sharp') ? 'active' : ''}`}
                      onClick={ev => this.handleToggleClick(ev, 'sharp')}>
                        Sharp
                    </li>
                  </ul>
                </div>
              </div>
              <div class="container--small">
                <div class="icon-results">
                  {results.icon.map(icon => (
                    <span
                      class={`icon-results__cell ${(this.selectedIcon === icon.name) ? 'active' : ''}`}
                      onClick={(ev) => this.handleIconClick(ev, icon.name)}
                      onMouseEnter={(ev) => this.handleIconMouseEnter(ev)}
                      onMouseLeave={(ev) => this.handleIconMouseLeave(ev)}>
                        <svg>
                          <use xlinkHref={`#${icon.name + typeSuffix}`}/>
                        </svg>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          : ''}

        {results.logo.length ?
          <div class="icon-list__wrapper">

            <div class="icon-list__header-bar">
              <div class="container--small">
                <h4>Logos</h4>
              </div>
            </div>

            <div class="container--small">
              <div class="icon-results">
                {results.logo.map(icon => (
                  <span
                    class={`icon-results__cell ${(this.selectedIcon === icon.name) ? 'active' : ''}`}
                    onClick={(ev) => this.handleIconClick(ev, icon.name)}
                    onMouseEnter={(ev) => this.handleIconMouseEnter(ev)}
                    onMouseLeave={(ev) => this.handleIconMouseLeave(ev)}>
                      <svg>
                        <use xlinkHref={`#${icon.name}`}/>
                      </svg>
                  </span>
                ))}
              </div>
            </div>
          </div>
        : ''}

        {(!results.icon.length && !results.logo.length) ?
          <div class="icon-results--empty container--small">
            <h2>No results for "{this.query}"</h2>
            <p>Not finding an icon that you want? <a href="https://github.com/ionic-team/ionicons/issues">File an issue</a> and suggest a new icon.</p>
          </div>
        : ''}

        <toast-bar
          selectedIcon={selectedIcon}
          selectedIconType={this.selectedIconType}
          typeSuffix={typeSuffix}
          version={this.data.version}>
        </toast-bar>

      </div>
    );
  }
}
