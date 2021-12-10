<template>
  <div>
    <h1>Consent modal demo</h1>
    <h2>Navigation</h2>
    <ul>
      <li>
        <strong>Root Vue app https://consent-modal-demo.github.io</strong>
      </li>
      <li>
        Preact subapp
        <a href="/some-path">https://consent-modal-demo.github.io/some-path</a>
      </li>
    </ul>
    <h2>Consent state</h2>
    <dl>
      <dt>Consent?</dt>
      <dd>{{ consent }}</dd>
      <dt>Showing modal?</dt>
      <dd>{{ String(showingModal) }}</dd>
    </dl>
    <button @click="reset()">Reset consent</button>
  </div>
</template>

<script>
import ConsentModal from '@consent-modal-demo/consent-modal';

export default {
  data() {
    return {
      consent: undefined,
      showingModal: false,
      reset() {
        window.localStorage.removeItem('consent');
        window.location.reload();
      }
    };
  },
  created() {
    ConsentModal((consent, showingModal) => {
      this.consent = consent;
      this.showingModal = showingModal;
    });
  }
};
</script>
