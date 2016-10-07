import {runVanilla} from './vanilla';
import {runReact} from './react';


if (module.hot) {
  module.hot.accept();
  let runFn = document.location.search === '?vanilla' ? runVanilla : runReact;
  runFn();
}
