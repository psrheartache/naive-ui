# Affix
When in affix mode, Anchor can recieve addition props as same as Affix.
```html
<div style="height: 200px;">
  <n-anchor affix :offset-top="24" :top="88" style="z-index: 1;">
    <n-anchor-link title="The Narrator" href="#the-narrator"/>
    <n-anchor-link title="The Narrator's Shadow" href="#the-narrator-s-shadow"/>
    <n-anchor-link title="The Gatekeeper" href="#the-gatekeeper"/>
    <n-anchor-link title="The Librarian" href="#the-librarian">
      <n-anchor-link title="The Colonel" href="#the-colonel"/>
      <n-anchor-link title="The Caretaker" href="#the-caretaker"/> 
    </n-anchor-link>
  </n-anchor>
</div>
```