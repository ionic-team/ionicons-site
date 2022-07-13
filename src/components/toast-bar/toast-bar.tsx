import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';
import { saveAs } from 'file-saver';

@Component({
  tag: 'toast-bar',
  styleUrl: 'toast-bar.scss'
})
export class ToastBar {
  @Element() el!: Element;

  @Prop() selectedIcon?: {
    name: string,
    icons: string[],
    tags: string[]
  };
  @Prop() selectedIconType?: string;
  @Prop() typeSuffix?: string;
  @Prop() version?: string;

  @State() showCopiedConfirm?: number;
  @State() isSVGDownloading = false;
  @State() hadIconOnce = false;
  @State() touchStartY?: number;
  @State() touchEndY?: number;

  @Event() clearToast: EventEmitter;
  @Event() toggleHeaderSearch: EventEmitter;

  handleCodeClick(attrName: any) {
    const codeElParent = this.el.querySelector('.toast-bar__section:first-child');
    const el = document.createElement('textarea');

    el.value = `<ion-icon name="${ attrName }"></ion-icon>`;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    if (this.showCopiedConfirm) {
      window.clearTimeout(this.showCopiedConfirm);
      this.showCopiedConfirm = 0;
    }
    codeElParent.classList.add('copied');
    this.showCopiedConfirm = window.setTimeout(() => {
      codeElParent.classList.remove('copied');
      this.showCopiedConfirm = 0;
    }, 1500);
  }

  componentDidLoad() {
    this.el.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
    this.el.addEventListener('touchend', this.handleTouchEnd.bind(this), false);
  }

  handleTouchStart(ev: any) {
    if (ev.target.classList.contains('toast-bar--inner')) {
      ev.preventDefault();
      this.touchStartY = ev.changedTouches[0].screenY;
    }
  }

  handleTouchEnd(ev: any) {
    if (ev.target.classList.contains('toast-bar--inner')) {
      ev.preventDefault();
      this.touchEndY = ev.changedTouches[0].screenY;
      if (this.touchEndY > this.touchStartY) { // swiped down
        this.clearToast.emit();
      }
    }
  }

  handleSVGDownload(ev: UIEvent, name) {
    ev.preventDefault();
    this.isSVGDownloading = true;
    fetch((ev.currentTarget as HTMLAnchorElement).href)
      .then(response => {
        if (response.ok) {
          return response.text()
        }
        this.isSVGDownloading = false;
        throw new Error('Unable to fetch icon.');
      })
      .then((svg) => {
        this.isSVGDownloading = false;
        const blob = new Blob([svg], {type: 'image/svg+xml'});
        saveAs(blob, name + '.svg');
      });
  }

  encodeSVG (data) {
    const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g;
    data = data.replace( /"/g, '\'' );
    data = data.replace( />\s{1,}</g, "><" );
    data = data.replace( /\s{2,}/g, " " );
    return data.replace( symbols, encodeURIComponent );
  }

  render() {
    let snippetLength;
    let iconAttrName;

    if (this.selectedIcon) {
      if (!this.hadIconOnce) this.hadIconOnce = true;

      const isLogoName = this.selectedIcon.name.includes('logo-');
      iconAttrName = isLogoName ? this.selectedIcon.name : this.selectedIcon.name + this.typeSuffix;

      snippetLength = (`<ion-icon name="${ iconAttrName }"></ion-icon>`.length * 8) + 32;
    }

    return (
      <div
        class={`toast-bar ${this.selectedIcon ? 'isVisible' : ''} ${!this.selectedIcon && this.hadIconOnce ? 'isHidden' : ''} ${!this.hadIconOnce ? 'preload' : ''}`}
        onClick={ev => ev.stopPropagation()}>

        <ResponsiveContainer>
          <div class="toast-bar--inner">
            {this.selectedIcon && <h4>{iconAttrName}</h4>}
            {this.selectedIcon &&
              <div class="toast-bar__details">

                <div class="toast-bar__section" style={{ maxWidth: snippetLength + 'px' }}>
                  <div class="toast-bar__section-header">
                    <div>
                      <h6>Web component code</h6>
                      <span class="confirmation"><i class="ion ion-md-checkmark"></i>Copied</span>
                    </div>
                    <stencil-route-link
                      url={`/ionicons/usage#${iconAttrName}`}
                      onClick={() => this.toggleHeaderSearch.emit('hide')}>
                      Usage
                      <i class="ion ion-ios-arrow-forward"></i>
                    </stencil-route-link>
                  </div>

                  <code>
                    <span class="hover-highlight" onClick={() => this.handleCodeClick(iconAttrName)}>
                      {'<'}<span class="yellow">ion-icon</span>&nbsp;<span class="orange">name</span>{'='}<span class="green">{`"${iconAttrName}"`}</span>{'>'}{'</'}<span class="yellow">ion-icon</span>{'>'}
                    </span>
                  </code>
                </div>

                <div class="toast-bar__section">
                  <div class="btn-group">
                    <div class="btn btn--gray btn--small btn--icon">
                      <svg>
                        <use xlinkHref={`#${iconAttrName}`}/>
                      </svg>
                    </div>

                    <a class="btn btn--gray btn--small download-link" href={`https://cdn.jsdelivr.net/npm/ionicons@${this.version}/dist/svg/${iconAttrName}.svg`} onClick={(ev) => this.handleSVGDownload(ev, iconAttrName)}>
                      { this.isSVGDownloading
                        ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="loading-animation">
                            <path d="M11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11" stroke="url(#paint0_angular)"/>
                            <defs>
                              <radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7 7) rotate(90) scale(4)">
                                <stop stop-color="#96ABDC" stop-opacity="0"/>
                                <stop offset="0.75" stop-color="#96ABDC"/>
                              </radialGradient>
                            </defs>
                          </svg>

                        : <svg width="9px" height="11px" viewBox="0 0 9 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <rect fill="#586980" x="0" y="9" width="9" height="2" rx="1"></rect>
                                <path d="M5,6.26776695 L7.26776695,4 L7.97487373,4.70710678 L4.70710678,7.97487373 L4.48743687,7.75520382 L4.26776695,7.97487373 L1,4.70710678 L1.70710678,4 L4,6.29289322 L4,0 L5,0 L5,6.26776695 Z" id="arrow" fill="#96abdc"></path>
                              </g>
                          </svg>
                      }
                      SVG
                    </a>
                  </div>
                </div>
              </div>
            }
          </div>
        </ResponsiveContainer>

      </div>
    );
  }
}
