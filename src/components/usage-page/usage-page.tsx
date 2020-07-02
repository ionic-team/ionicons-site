import { Component, Prop, State, h } from '@stencil/core';
import { QueueApi } from '@stencil/core/internal';
import { MatchResults } from '@stencil/router';
import content from './content';
import { ResponsiveContainer } from '@ionic-internal/sites-shared';


@Component({
  tag: 'usage-page',
  styleUrl: 'usage-page.scss'
})
export class UsagePage {
  @Prop({ context: 'queue' }) queue!: QueueApi;

  @State() exampleName = 'heart';
  @State() exampleSuffix = '';

  @Prop() match?: MatchResults;
  @Prop() data: any;

  componentWillLoad() {
    if (!window.location.hash) return;

    let iconNames: string[] = [];
    this.data.icons.map((o) => {
      iconNames = iconNames.concat(o.icons);
    });

    let hash = window.location.hash.replace('#', '');
    if (hash.includes('logo-')) {
      this.exampleName = hash;
      return;
    }

    if (iconNames.includes(hash)) {

      ['-outline', '-sharp'].forEach((suffix) => {
        if (hash.includes(suffix)) {
          hash = hash.replace(suffix, '');
          this.exampleSuffix = suffix;
        }
      })

      this.exampleName = hash;
    }
  }

  componentDidLoad() {
    // this.queue.read(function() {
    //   console.log('offset ', document.getElementById('basic-usage').offsetTop)
    // });

    if (window.location.hash) {
      setTimeout(() => {
        const offset = document.getElementById('basic-usage').offsetTop - 100;
        window.scrollTo({ left: 0, top: offset, behavior: 'smooth' });
      }, 50);
    }
  }

  render() {
   return (
     <main>
       <div class="wrapper">
         <ResponsiveContainer>
           <div class="content">
             { content(this.data.version, this.exampleName, this.exampleSuffix) }
           </div>
         </ResponsiveContainer>
       </div>

       <footer-bar></footer-bar>
     </main>
   );
  }
}
