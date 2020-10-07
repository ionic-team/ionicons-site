import { h } from "@stencil/core";
import hljs from "highlight.js";

export default function (version: string, name = "heart", suffix = "") {
  let advancedUsageName = name;
  if (name.includes("logo-")) {
    advancedUsageName = "heart";
  }

  return (
    <div>
      <h1>Usage</h1>
      <p class="lead">
        Ionicons is a completely open-source icon set with 1,200+ icons crafted
        for web, iOS, Android, and desktop apps. Ionicons was made for{" "}
        <a href="https://ionicframework.com/">Ionic Framework</a>, a
        cross-platform hybrid and Progressive Web App framework.
      </p>

      <h2>Using the Web Component</h2>
      <p>
        The Ionicons Web Component is an easy and performant way to use Ionicons
        in your app. The component will dynamically load an SVG for each icon,
        so your app is only requesting the icons that you need.
      </p>

      <p>
        Also note that only visible icons are loaded, and icons which are "below
        the fold" and hidden from the user's view do not make fetch requests for
        the svg resource.
      </p>

      <h3>Installation</h3>
      <p>
        If you're using Ionic Framework, Ionicons is packaged by default, so no
        installation is necessary. Want to use Ionicons without Ionic Framework?
        Place the following <code>{`<script>`}</code> near the end of your page,
        right before the closing <code>{`</body>`}</code> tag, to enable them.
      </p>

      {highlight(
        `<script src="https://unpkg.com/ionicons@${version}/dist/ionicons.js"></script>`
      )}

      <h3 id="basic-usage">Basic usage</h3>
      <p>
        To use a built-in icon from the Ionicons package, populate the{" "}
        <code>name</code> attribute on the <code>ion-icon</code> component:
      </p>
      {highlight(`<ion-icon name="${name + suffix}"></ion-icon>`)}

      <h3 id="basic-usage">Custom icons</h3>
      <p>
        To use a custom SVG, provide its url in the <code>src</code> attribute
        to request the external SVG file. The <code>src</code> attribute works
        the same as <code>&lt;img src="..."&gt;</code> in that the url must be
        accessible from the webpage that's making a request for the image.
        Additionally, the external file can only be a valid <code>svg</code> and
        does not allow scripts or events within the <code>svg</code> element.
      </p>
      {highlight(`<ion-icon src="/path/to/external/file.svg"></ion-icon>`)}

      <h2>Variants</h2>
      <p>
        Each app icon in Ionicons has a <code>filled</code>,{" "}
        <code>outline</code> and <code>sharp</code> variant. These different
        variants are provided to make your app feel native to a variety of
        platforms. The filled variant uses the default name without a suffix.
        Note: Logo icons do not have outline or sharp variants.
      </p>
      {highlight(
        `<ion-icon name="${advancedUsageName}"></ion-icon> <!--filled-->
<ion-icon name="${advancedUsageName}-outline"></ion-icon> <!--outline-->
<ion-icon name="${advancedUsageName}-sharp"></ion-icon> <!--sharp-->`
      )}

      <h3>Platform specificity</h3>
      <p>
        When using icons in Ionic Framework you can specify different icons per
        platform. Use the <code>md</code> and <code>ios</code> attributes and
        provide the platform specific icon/variant name.
      </p>
      {highlight(
        `<ion-icon ios="${advancedUsageName}-outline" md="${advancedUsageName}-sharp"></ion-icon>`
      )}

      <h2>Size</h2>
      <p>
        To specify the icon size, you can use the <code>size</code> attribute
        for our pre-defined font sizes.
      </p>
      {highlight(
        `<ion-icon size="small"></ion-icon>
<ion-icon size="large"></ion-icon>`
      )}
      <p>
        Or you can set a specific size by applying the <code>font-size</code>{" "}
        CSS property on the <code>ion-icon</code> component. It's recommended to
        use pixel sizes that are a multiple of 8 (8, 16, 32, 64, etc.)
      </p>
      {highlight(
        `ion-icon {
  font-size: 64px;
}`
      )}

      <h2>Color</h2>
      <p>
        Specify the icon color by applying the <code>color</code> CSS property
        on the <code>ion-icon</code> component.
      </p>
      {highlight(
        `ion-icon {
  color: blue;
}`
      )}

      <h2>Stroke weight</h2>
      <p>
        When using an <code>outline</code> icon variant it is possible to adjust
        the stroke weight, for improved visual balance relative to the icon's
        size or relative to the weight of adjacent text. You can set a specific
        size by applying the <code>--ionicon-stroke-weight</code> CSS custom
        property to the <code>ion-icon</code> component. The default value is{" "}
        <code>32px</code>
      </p>
      {highlight(`<ion-icon name="${advancedUsageName}-outline"></ion-icon>`)}
      {highlight(
        `ion-icon {
  --ionicon-stroke-width: 16px;
}`
      )}

      <h2>Migrating from v4</h2>
      <p>
        See the{" "}
        <a href="https://github.com/ionic-team/ionicons/releases/tag/5.0.0">
          5.0 release notes
        </a>{" "}
        for a list of icon deletions/renames. You can find an archived version
        of the v4 site <a href="/v4/">here</a>.
      </p>
    </div>
  );
}

function highlight(text: string) {
  return (
    <div class="styled-code">
      <pre innerHTML={hljs.highlightAuto(text).value}></pre>
    </div>
  );
}
