import { Component, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'icon-search',
  styleUrl: 'icon-search.scss'
})
export class IconSearch {
  searchRef: HTMLInputElement;

  @Prop() query = '';
  @Prop() size = 'small';
  @Prop() autofocus = 'none';

  @State() showClearCtrl = false;

  @Event() hasSearched!: EventEmitter;

  @Watch('query')
  watchQuery() {
    this.showClearCtrl = (this.query.length > 0) ? true : false;
  }

  componentDidLoad() {
    this.searchRef && this.searchRef.focus();
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
          autofocus={this.autofocus === 'autofocus' ? 'autofocus' : ''}/>

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
