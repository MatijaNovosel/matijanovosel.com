<template>
  <div class="privacy_page">
    <h1>Privacy Policy</h1>
    <p>Effective date: 2025-09-14</p>

    <p>
      This Privacy Policy describes how [Developer/Company Name] (“we”, “us”, or
      “our”) handles information in {{ appName }} (the “App”). We respect your
      privacy. Our App does not collect, store, or share personal data. The only
      information the App may access is your device’s location, and only if you
      choose to grant permission.
    </p>

    <h2>1) Scope</h2>
    <p>
      This policy applies to the App published by [Developer/Company Name] on
      Google Play. If you do not agree with this policy, please do not use the
      App.
    </p>

    <h2>2) Data We Do Not Collect</h2>
    <ul>
      <li>No account or profile information</li>
      <li>No contact information (name, email, phone, address)</li>
      <li>No identifiers (advertising ID, device ID) collected by us</li>
      <li>No usage analytics, diagnostics, or crash logs collected by us</li>
      <li>No cookies or tracking technologies</li>
      <li>No financial, health, or other sensitive personal information</li>
    </ul>

    <h2>3) Location Data (Optional)</h2>
    <p>
      The App may request access to your device location to enable
      location-based features. Granting this permission is optional.
    </p>
    <ul>
      <li>
        Purpose: To provide features that require your current location (e.g.,
        showing location-relevant content).
      </li>
      <li>
        Processing: Location is processed on your device only for the immediate
        feature.
      </li>
      <li>
        Storage/Sharing: We do not store, log, or transmit your location off
        your device.
      </li>
      <li>
        Control: You can grant or revoke location permission at any time in your
        device settings.
      </li>
      <li>
        Background access: The App does not use your location when permission is
        not granted. If your device offers options such as “Allow only while
        using the app,” we use location only under the scope you choose.
      </li>
    </ul>

    <h2>4) How We Use Information</h2>
    <p>
      Apart from optional on-device location processing described above, the App
      does not collect or use any personal information.
    </p>

    <h2>5) Data Sharing and Sale</h2>
    <ul>
      <li>We do not sell personal data.</li>
      <li>We do not share personal data.</li>
      <li>
        We do not transmit location or other personal data off your device.
      </li>
    </ul>
    <h2>6) Children’s Privacy</h2>
    <p>
      The App is not directed to children under 13 (or the minimum age in your
      jurisdiction). We do not knowingly collect personal information from
      children.
    </p>
    <h2>7) Data Retention</h2>
    <p>
      We do not retain personal data. Optional location information is used
      ephemerally on-device and is not stored by us.
    </p>
    <h2>8) Security</h2>
    <p>
      Because we do not collect or store personal data, risk is minimized.
      Nevertheless, we aim to design the App to process optional location data
      only on-device and only when necessary for functionality.
    </p>
    <h2>9) Your Rights</h2>
    <p>
      Depending on your location (e.g., EU/EEA, UK, California, Brazil), you may
      have rights such as access, deletion, or objection. Because we do not
      collect or store personal data, we generally have no data to act upon. You
      can still contact us using the details below, and we will assist where
      applicable.
    </p>
    <h2>10) Third-Party Services</h2>
    <p>
      The App itself does not transmit your data to third parties. Note that
      your device manufacturer, operating system, or app store (e.g., Google
      Play) may independently collect information under their own privacy
      policies.
    </p>
    <h2>11) Changes to This Policy</h2>
    <p>
      We may update this Privacy Policy from time to time. Changes will be
      posted within the App and/or on our website, with the “Effective date”
      updated above. Your continued use of the App after changes indicates your
      acceptance.
    </p>
    <h2>12) Contact Us</h2>
    <p>
      If you have questions or requests regarding this Privacy Policy, please
      contact us:
    </p>
    <ul>
      <li>Email: [mnovosel325@gmail.com]</li>
      <li>Developer/Company: Matija Novosel</li>
      <li>Address: Ledina 96, Preseka</li>
    </ul>
    <p>
      If you prefer not to provide location permission, you can continue to use
      parts of the App that do not require it.
    </p>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const appName = computed(() => {
  return route.query.name;
});
</script>

<style scoped>
.privacy_page {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.25rem;
  line-height: 1.6;
  color: white;
}

h1 {
  margin-bottom: 0.5rem;
  font-size: 1.875rem;
  font-weight: bold;
}

h2 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 2.25rem;
  font-weight: bold;
}

ul {
  padding-left: 1.25rem;
}

p,
li {
  font-size: 1.8rem;
}
</style>
