import { Component, Element, Event, EventEmitter, Prop, State, Watch, h, Build } from '@stencil/core';

@Component({
  tag: 'icon-search',
  styleUrl: 'icon-search.scss'
})
export class IconSearch {
  searchRef: HTMLInputElement;

  @Prop() query = '';
  @Prop() size = 'small';
  @Prop() autoFocus: 'none' | 'autofocus' | 'if-visible' = 'none';
  @Element() el: HTMLElement;

  @State() showClearCtrl = false;

  @Event() hasSearched!: EventEmitter;

  @Watch('query')
  watchQuery() {
    this.showClearCtrl = (this.query.length > 0) ? true : false;
  }

  componentDidLoad() {
    if (Build.isBrowser) {
      const rect = this.el.getBoundingClientRect();
      const visible = rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      if ( 
        (this.autoFocus === 'if-visible' && visible) ||
        this.autoFocus === 'autofocus'
      ) {
        requestAnimationFrame(() => this.searchRef && this.searchRef.focus());
      }

    }
  }

  handleKeyUp = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      this.handleClear();
      return;
    }
  }

  handleInput = (e: KeyboardEvent) => {
    const value = (e.target as HTMLInputElement).value;
    this.hasSearched.emit(value);
  }

  handleClear() {
    this.hasSearched.emit('');
  }

  componentWillLoad() {
    this.watchQuery();
  }

  render() {
    return (
      <div class={`search-input search-input--${this.size}`}>
        <i class="search-input__icon">
          <svg><use xlinkHref={`#search-outline`}/></svg>
        </i>

        <input
          ref={e => this.searchRef = e}
          type="text"
          placeholder="Search icons..."
          value={this.query}
          onKeyUp={this.handleKeyUp}
          onInput={this.handleInput}
          autofocus={this.autoFocus === 'autofocus' ? 'autofocus' : ''}/>

        <i class={{
            'search-input__clear': true,
            'search-input__clear--active': this.showClearCtrl,
          }}
          onClick={this.handleClear.bind(this)}>
          <svg><use xlinkHref={`#close-outline`}/></svg>
        </i>
      </div>
    );
  }
}
