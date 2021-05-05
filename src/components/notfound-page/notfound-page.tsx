import { Component, h } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'notfound-page',
  styleUrl: 'notfound-page.scss'
})
export class NotFoundPage {

  render() {
    return (
      <main>
        <ResponsiveContainer>
          <h1>Woops! We can't find the page your looking for.</h1>
          <p>Head on back to the <stencil-route-link url="/" class="block">Icons page</stencil-route-link>.</p>
        </ResponsiveContainer>

        <footer-bar></footer-bar>
      </main>
    );
  }
}
