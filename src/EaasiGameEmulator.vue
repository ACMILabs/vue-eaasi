<template>
  <client-only>
    <eaas-environment
      id="eaas"
      :eaas-service="eaasService"
      :environment-id="environmentId"
      autoplay="true"
      :class="eaasClass"
    >
      <h4
        :class="eaasLoadingClass"
      >
        {{ eaasLoadingText }}
      </h4>
    </eaas-environment>
  </client-only>
</template>

<script>
export default {
  name: 'EaasiGameEmulator',
  inheritAttrs: false,
  props: {
    environmentId: {
      type: String,
      required: true,
    },
    eaasClass: {
      type: String,
      required: false,
    },
    eaasLoadingClass: {
      type: String,
      required: false,
    },
    eaasLoadingText: {
      type: String,
      required: false,
      default: 'Loading game emulator...',
    },
  },
  computed: {
    eaasService() {
      return process.env.eaasService;
    },
  },
  head() {
    return {
      script: [
        {
          src: process.env.eaasScriptUrl,
          body: true,
          async: false,
          defer: true,
          type: 'module',
        },
      ],
    };
  },
};
</script>
