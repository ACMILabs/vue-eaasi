/*!
 * vue-eaasi v1.0.0
 * (c) Simon Loffler
 * Released under the MIT License.
 */
'use strict';

var vue = require('vue');

var script = {
  name: 'EaasiGameEmulator',
  inheritAttrs: false,
  props: {
    environmentId: {
      type: String,
      required: true
    },
    eaasClass: {
      type: String,
      required: false
    },
    eaasLoadingClass: {
      type: String,
      required: false
    },
    eaasLoadingText: {
      type: String,
      required: false,
      "default": 'Loading game emulator...'
    }
  },
  computed: {
    eaasService: function eaasService() {
      return process.env.eaasService;
    }
  },
  head: function head() {
    return {
      script: [{
        src: process.env.eaasScriptUrl,
        body: true,
        async: false,
        defer: true,
        type: 'module'
      }]
    };
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_eaas_environment = vue.resolveComponent("eaas-environment");

  var _component_client_only = vue.resolveComponent("client-only");

  return vue.openBlock(), vue.createBlock(_component_client_only, null, {
    "default": vue.withCtx(function () {
      return [vue.createVNode(_component_eaas_environment, {
        id: "eaas",
        "eaas-service": $options.eaasService,
        "environment-id": $props.environmentId,
        autoplay: "true",
        "class": vue.normalizeClass($props.eaasClass)
      }, {
        "default": vue.withCtx(function () {
          return [vue.createElementVNode("h4", {
            "class": vue.normalizeClass($props.eaasLoadingClass)
          }, vue.toDisplayString($props.eaasLoadingText), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["eaas-service", "environment-id", "class"])];
    }),
    _: 1
    /* STABLE */

  });
}

script.render = render;

var index = {
  install: function install(Vue, options) {
    Vue.component("eaasi-game-emulator", script);
  }
};

module.exports = index;
