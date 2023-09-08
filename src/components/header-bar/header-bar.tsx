import { Component, Element, Event, EventEmitter, Listen, Prop, State, h } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'header-bar',
  styleUrl: 'header-bar.scss'
})
export class HeaderBar {
  @Element() el!: Element;

  @Event() toggleHeaderSearch!: EventEmitter;

  @State() isSticky = false;
  @State() isMobileMenuShown?: boolean;

  @Prop() query = '';
  @Prop() version?: string;
  @Prop() isSearchVisible = false;

  @Listen('scroll', { target: 'window' })
  handleScroll() {
    requestAnimationFrame(this.checkScroll.bind(this));
  }

  @Listen('resize', { target: 'window' })
  handleResize() {
    requestAnimationFrame(() => {
      if (window.innerWidth > 768) {
        const menu = (this.el.querySelector('nav') as HTMLElement);
        menu.style.display = '';
        this.el.classList.remove('show-mobile-menu');
        document.body.classList.remove('no-scroll');
        this.isMobileMenuShown = false;
      }
    });
  }

  checkScroll() {
    const scrollTop = document.documentElement!.scrollTop || document.body.scrollTop;
    this.isSticky = (scrollTop > 30);
  }

  showNav() {
    if (this.isMobileMenuShown) return;
    this.isMobileMenuShown = true;

    const menu = (this.el.querySelector('nav') as HTMLElement);

    menu.style.display = 'flex';
    setTimeout(() => {
      menu.classList.add('show-mobile-menu');
      document.body.classList.add('no-scroll');
    }, 1);
  }

  hideNav() {
    if (!this.isMobileMenuShown) return;
    this.isMobileMenuShown = false;

    const menu = (this.el.querySelector('nav') as HTMLElement);

    menu.classList.remove('show-mobile-menu');
    setTimeout(() => {
      menu.style.display = 'none';
      document.body.classList.remove('no-scroll');
    }, 300);
  }

  render() {
    return (
      <header class={`${this.isSearchVisible ? 'visible-search' : ''} ${this.isSticky ? 'overlay' : ''}`}>
        <ResponsiveContainer>
          <div class="logo">
            <stencil-route-link url="/ionicons" exact={true}>
              <svg width="117" height="32" viewBox="0 0 117 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.2832 11.6686C43.3555 11.6686 44.1276 10.9177 44.1276 9.84502C44.1276 8.77233 43.3555 8 42.2832 8C41.2108 8 40.4387 8.77233 40.4387 9.84502C40.4387 10.9177 41.2108 11.6686 42.2832 11.6686ZM40.7604 23.7427H43.8059V12.5009H40.7604V23.7427Z" fill="#03060B" />
                <path d="M60.2522 12.5009H57.4427V23.7427H60.4882V17.3065C60.4882 15.8048 61.3031 14.8608 62.783 14.8608C64.1341 14.8608 64.6918 15.7619 64.6918 17.0705V23.7427H67.7372V16.7273C67.7372 14.0456 66.3003 12.2435 63.598 12.2435C61.9251 12.2435 60.767 12.9085 60.2522 13.8739V12.5009Z" fill="#03060B" />
                <path d="M70.2976 11.6687C71.37 11.6687 72.142 10.9178 72.142 9.84512C72.142 8.77244 71.37 8.0001 70.2976 8.0001C69.2253 8.0001 68.4532 8.77244 68.4532 9.84512C68.4532 10.9178 69.2253 11.6687 70.2976 11.6687ZM68.7749 23.7427H71.8204V12.5009H68.7749V23.7427Z" fill="#03060B" />
                <path d="M72.7047 18.1218C72.7047 21.4686 75.0854 24.0001 78.3453 24.0001C81.8412 24.0001 83.4926 21.5329 83.707 19.6235H80.5758C80.3399 20.589 79.4391 21.2969 78.3239 21.2969C76.6939 21.2969 75.7502 20.0097 75.7502 18.1218C75.7502 16.2339 76.6939 14.9466 78.3239 14.9466C79.4391 14.9466 80.3399 15.6546 80.5758 16.62H83.707C83.4926 14.7106 81.8412 12.2435 78.3453 12.2435C75.0854 12.2435 72.7047 14.775 72.7047 18.1218Z" fill="#03060B" />
                <path d="M99.268 12.5009H96.4585V23.7427H99.5039V17.3065C99.5039 15.8048 100.319 14.8608 101.799 14.8608C103.15 14.8608 103.708 15.7619 103.708 17.0705V23.7427H106.753V16.7273C106.753 14.0456 105.316 12.2435 102.614 12.2435C100.941 12.2435 99.7827 12.9085 99.268 13.8739V12.5009Z" fill="#03060B" />
                <path d="M112.177 24.0001C115.223 24.0001 116.939 22.4125 116.939 20.3959C116.939 15.7833 110.719 17.6712 110.719 15.7833C110.719 15.1612 111.277 14.6892 112.263 14.6892C113.357 14.6892 113.893 15.3328 113.958 16.0408H116.896C116.81 14.3888 115.652 12.2435 112.285 12.2435C109.518 12.2435 107.781 13.9168 107.781 15.955C107.781 20.4173 114.022 18.6367 114.022 20.5246C114.022 21.1468 113.421 21.5544 112.263 21.5544C110.998 21.5544 110.44 20.8464 110.397 20.0955H107.309C107.459 22.198 108.66 24.0001 112.177 24.0001Z" fill="#03060B" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M50.6194 21.1354C52.2808 21.1354 53.6277 19.7885 53.6277 18.1271C53.6277 16.4656 52.2808 15.1188 50.6194 15.1188C48.958 15.1188 47.6111 16.4656 47.6111 18.1271C47.6111 19.7885 48.958 21.1354 50.6194 21.1354ZM50.6194 24.0001C53.863 24.0001 56.4925 21.3707 56.4925 18.1271C56.4925 14.8835 53.863 12.254 50.6194 12.254C47.3758 12.254 44.7463 14.8835 44.7463 18.1271C44.7463 21.3707 47.3758 24.0001 50.6194 24.0001Z" fill="#03060B" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M89.8251 21.1354C91.4866 21.1354 92.8334 19.7885 92.8334 18.1271C92.8334 16.4656 91.4866 15.1188 89.8251 15.1188C88.1637 15.1188 86.8168 16.4656 86.8168 18.1271C86.8168 19.7885 88.1637 21.1354 89.8251 21.1354ZM89.8251 24.0001C93.0687 24.0001 95.6982 21.3707 95.6982 18.1271C95.6982 14.8835 93.0687 12.254 89.8251 12.254C86.5815 12.254 83.9521 14.8835 83.9521 18.1271C83.9521 21.3707 86.5815 24.0001 89.8251 24.0001Z" fill="#03060B" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 3.5C9.09644 3.5 3.5 9.09644 3.5 16C3.5 22.9036 9.09644 28.5 16 28.5C22.9036 28.5 28.5 22.9036 28.5 16C28.5 15.0785 28.4005 14.182 28.2123 13.32L31.1433 12.68C31.3771 13.7509 31.5 14.862 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5C19.793 0.5 23.2712 1.86431 25.9649 4.12727L24.0351 6.42427C21.8618 4.59841 19.0611 3.5 16 3.5Z" fill="#3880FF" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27 4.66664C25.7114 4.66664 24.6667 5.71131 24.6667 6.99998C24.6667 8.28864 25.7114 9.33331 27 9.33331C28.2887 9.33331 29.3334 8.28864 29.3334 6.99998C29.3334 5.71131 28.2887 4.66664 27 4.66664ZM24 7.49998C24 3.63398 23.134 5 27 5C30.866 5 34 3.13398 34 6.99998C34 10.866 30.866 14 27 14C23.134 14 24 11.366 24 7.49998Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27 5.5C26.1716 5.5 25.5 6.17157 25.5 7C25.5 7.82843 26.1716 8.5 27 8.5C27.8284 8.5 28.5 7.82843 28.5 7C28.5 6.17157 27.8284 5.5 27 5.5ZM22.5 7C22.5 4.51472 24.5147 2.5 27 2.5C29.4853 2.5 31.5 4.51472 31.5 7C31.5 9.48528 29.4853 11.5 27 11.5C24.5147 11.5 22.5 9.48528 22.5 7Z" fill="#194BFD" />
                <circle cx="16" cy="16" r="6" stroke="#0CADFF" stroke-width="3" />
              </svg>
            </stencil-route-link>
            <span class="version">{this.version}</span>

          </div>

          <icon-search query={this.query} size="small"></icon-search>

          <nav>
            <stencil-route-link
              class="nav__item"
              url="/ionicons"
              exact={true}
              onClick={this.hideNav.bind(this)}>
              Icons
            </stencil-route-link>

            <stencil-route-link
              class="nav__item"
              url="/ionicons/usage"
              onClick={() => {
                this.toggleHeaderSearch.emit('hide');
                this.hideNav();
              }}>
              Usage
            </stencil-route-link>

            <a class="nav__item" href="https://github.com/ionic-team/ionicons" target="_blank">
              GitHub
              <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0,1)">
                  <rect id="bg" fill="#e3e8f1" x="0" y="2" width="9" height="9" rx="1.5"></rect>
                  <path d="M9.18198052,1 L6.5,1 L6.5,0 L11,0 L11,1 L11,4.5 L10,4.5 L10,1.59619408 L4.02512627,7.57106781 L3.31801948,6.86396103 L9.18198052,1 Z" id="arrow" fill="#A4AEC3"></path>
                </g>
              </svg>
            </a>
            <span class="close" onClick={this.hideNav.bind(this)}><i class="ion ion-md-close"></i></span>
          </nav>

          <a class="btn sm-hide download-link" href="/ionicons/ionicons.designerpack.zip" download={`ionicons-${this.version}.designerpack.zip`}>
            <svg width="9px" height="11px" viewBox="0 0 9 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g>
                <rect id="bg" fill="#BAC3D1" x="0" y="9" width="9" height="2" rx="1"></rect>
                <path d="M5,6.26776695 L7.26776695,4 L7.97487373,4.70710678 L4.70710678,7.97487373 L4.48743687,7.75520382 L4.26776695,7.97487373 L1,4.70710678 L1.70710678,4 L4,6.29289322 L4,0 L5,0 L5,6.26776695 Z" id="arrow" fill="#94A0B8"></path>
              </g>
            </svg>
            Designer pack
          </a>

          <span class="more" onClick={this.showNav.bind(this)}><i class="ion ion-md-more"></i></span>
        </ResponsiveContainer>

      </header>
    );
  }
}
