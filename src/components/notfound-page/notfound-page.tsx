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
          <h1>Oops! We can't find the page you're looking for.</h1>
          <p>Take me back to the <stencil-route-link url="/ionicons" exact={true} class="block">Icons</stencil-route-link>.</p>
        </ResponsiveContainer>

        <footer-bar></footer-bar>
      </main>
    );
  }
}
